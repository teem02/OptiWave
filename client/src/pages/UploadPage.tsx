import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import './UploadPage.css';

const UploadPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: ''
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Fetch available categories
    const fetchCategories = async () => {
      try {
        const response = await api.get('/videos/categories/list');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!videoFile) {
      setError('Please select a video file');
      return;
    }

    if (!formData.title || !formData.category) {
      setError('Please fill in all required fields');
      return;
    }

    setUploading(true);

    try {
      const uploadData = new FormData();
      uploadData.append('video', videoFile);
      uploadData.append('title', formData.title);
      uploadData.append('description', formData.description);
      uploadData.append('category', formData.category);
      uploadData.append('tags', formData.tags);

      const response = await api.post('/videos/upload', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Video uploaded successfully!');
      
      // Reset form
      setFormData({ title: '', description: '', category: '', tags: '' });
      setVideoFile(null);
      
      // Redirect to video page after a short delay
      setTimeout(() => {
        navigate(`/video/${response.data.videoId}`);
      }, 2000);

    } catch (err: any) {
      setError(err.response?.data?.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="upload-container">
      <div className="upload-card">
        <div className="upload-header">
          <h1>Upload Educational Content</h1>
          <p>Share your programming, AI, or tech education videos with the community</p>
        </div>

        <div className="content-guidelines">
          <h3>📋 Content Guidelines</h3>
          <ul>
            <li>Only programming, AI, coding tutorials, and educational tech content allowed</li>
            <li>Videos should be educational and informative</li>
            <li>Maximum file size: 100MB</li>
            <li>Supported formats: MP4, MPEG, MOV, WebM, AVI</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="form-group">
            <label htmlFor="video">Video File *</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="video"
                accept="video/*"
                onChange={handleFileChange}
                required
                className="file-input"
              />
              <div className="file-input-display">
                {videoFile ? (
                  <div className="file-selected">
                    <span className="file-icon">🎥</span>
                    <span className="file-name">{videoFile.name}</span>
                    <span className="file-size">
                      ({(videoFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                ) : (
                  <div className="file-placeholder">
                    <span className="upload-icon">📁</span>
                    <span>Click to select video file</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter a descriptive title for your video"
              maxLength={100}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your video content, what viewers will learn, etc."
              rows={4}
              maxLength={500}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Enter tags separated by commas (e.g., react, javascript, tutorial)"
            />
          </div>

          <button type="submit" className="upload-button" disabled={uploading}>
            {uploading ? (
              <>
                <span className="loading-spinner"></span>
                Uploading...
              </>
            ) : (
              'Upload Video'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;