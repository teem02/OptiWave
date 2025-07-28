const express = require('express');
const multer = require('multer');
const path = require('path');
const { db } = require('../database/db');
const auth = require('../middleware/auth');

const router = express.Router();

// Allowed video categories for educational content
const ALLOWED_CATEGORIES = [
  'programming',
  'ai',
  'machine-learning',
  'web-development',
  'mobile-development',
  'data-science',
  'coding-tutorials',
  'software-engineering',
  'tech-education'
];

// Configure multer for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'video-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Check if file is a video
  const allowedMimeTypes = [
    'video/mp4',
    'video/mpeg',
    'video/quicktime',
    'video/webm',
    'video/x-msvideo'
  ];
  
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only video files are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB limit
  }
});

// Upload video (protected route)
router.post('/upload', auth, upload.single('video'), (req, res) => {
  try {
    const { title, description, category, tags } = req.body;
    const file = req.file;

    // Validate required fields
    if (!title || !category || !file) {
      return res.status(400).json({ message: 'Title, category, and video file are required' });
    }

    // Validate category
    if (!ALLOWED_CATEGORIES.includes(category)) {
      return res.status(400).json({ 
        message: 'Invalid category. Only programming and educational tech content is allowed.',
        allowedCategories: ALLOWED_CATEGORIES
      });
    }

    // Insert video record
    db.run(
      `INSERT INTO videos (title, description, filename, original_name, mimetype, size, category, tags, user_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description || '',
        file.filename,
        file.originalname,
        file.mimetype,
        file.size,
        category,
        tags || '',
        req.user.userId
      ],
      function(err) {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Error saving video' });
        }

        res.status(201).json({
          message: 'Video uploaded successfully',
          videoId: this.lastID,
          video: {
            id: this.lastID,
            title,
            description,
            filename: file.filename,
            category,
            tags
          }
        });
      }
    );
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Server error during upload' });
  }
});

// Get all videos with pagination
router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const category = req.query.category;
  const search = req.query.search;

  let query = `
    SELECT v.*, u.name as uploader_name 
    FROM videos v 
    JOIN users u ON v.user_id = u.id 
    WHERE 1=1
  `;
  let params = [];

  if (category) {
    query += ' AND v.category = ?';
    params.push(category);
  }

  if (search) {
    query += ' AND (v.title LIKE ? OR v.description LIKE ? OR v.tags LIKE ?)';
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  query += ' ORDER BY v.created_at DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);

  db.all(query, params, (err, videos) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching videos' });
    }

    res.json({
      videos,
      page,
      limit,
      total: videos.length
    });
  });
});

// Get featured videos
router.get('/featured', (req, res) => {
  db.all(
    `SELECT v.*, u.name as uploader_name 
     FROM videos v 
     JOIN users u ON v.user_id = u.id 
     WHERE v.featured = 1 
     ORDER BY v.views DESC, v.created_at DESC 
     LIMIT 10`,
    (err, videos) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching featured videos' });
      }
      res.json(videos);
    }
  );
});

// Get trending videos (most viewed in last 7 days)
router.get('/trending', (req, res) => {
  db.all(
    `SELECT v.*, u.name as uploader_name 
     FROM videos v 
     JOIN users u ON v.user_id = u.id 
     WHERE datetime(v.created_at) >= datetime('now', '-7 days')
     ORDER BY v.views DESC, v.created_at DESC 
     LIMIT 20`,
    (err, videos) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching trending videos' });
      }
      res.json(videos);
    }
  );
});

// Get single video by ID
router.get('/:id', (req, res) => {
  const videoId = req.params.id;

  // Increment view count
  db.run('UPDATE videos SET views = views + 1 WHERE id = ?', [videoId]);

  // Get video details
  db.get(
    `SELECT v.*, u.name as uploader_name 
     FROM videos v 
     JOIN users u ON v.user_id = u.id 
     WHERE v.id = ?`,
    [videoId],
    (err, video) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching video' });
      }

      if (!video) {
        return res.status(404).json({ message: 'Video not found' });
      }

      res.json(video);
    }
  );
});

// Get available categories
router.get('/categories/list', (req, res) => {
  res.json(ALLOWED_CATEGORIES);
});

module.exports = router;