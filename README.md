# OptiWave

**A focused video platform for learners and creators in tech & education.** 

OptiWave is a modern video sharing platform exclusively for programming, AI, coding tutorials, and educational tech content. Users can watch videos globally for free, while uploading is restricted to educational content creators only. No vlogs, no distractions — just pure learning.

## 🎯 Features

### Core Functionality
- ✅ **User Authentication**: Secure signup and login with email and password
- ✅ **Video Upload**: Upload educational videos with strict content guidelines
- ✅ **Video Streaming**: Watch videos with a modern HTML5 player
- ✅ **Search & Filter**: Find videos by topic, technology, or category
- ✅ **Content Organization**: Homepage with featured and trending videos
- ✅ **Responsive Design**: Modern, colorful UI that works on desktop and mobile
- ✅ **Global Access**: Watch content from anywhere in the world

### Content Restrictions
- 📚 **Educational Focus**: Only programming, AI, coding tutorials, and tech education allowed
- 🔒 **Quality Control**: Videos must be educational and informative
- 📁 **File Validation**: Support for MP4, MPEG, MOV, WebM, AVI formats
- 📏 **Size Limits**: Maximum 100MB file size per upload

### Available Categories
- Programming Languages
- AI & Machine Learning  
- Web Development
- Mobile Development
- Data Science
- Coding Tutorials
- Software Engineering
- Tech Education

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Axios** for API communication
- **Modern CSS** with gradients and responsive design

### Backend
- **Node.js** with Express framework
- **SQLite** database for data storage
- **JWT** authentication with bcrypt password hashing
- **Multer** for file upload handling

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/teem02/OptiWave.git
   cd OptiWave
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Server environment (server/.env already configured)
   cd ../server
   # The .env file is already set up with default values
   ```

4. **Start the application**
   ```bash
   # Option 1: Start both frontend and backend together
   cd ..
   npm run dev
   
   # Option 2: Start them separately
   # Terminal 1 - Backend
   cd server
   npm run dev
   
   # Terminal 2 - Frontend  
   cd client
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/api/health

## 📝 Usage

### For Viewers
1. Visit the homepage to browse featured and recent videos
2. Use the search bar to find specific topics
3. Browse by category using the filter options
4. Click on trending to see popular content

### For Content Creators
1. **Sign Up**: Create an account with email and password
2. **Login**: Access your account to start uploading
3. **Upload**: Click the "Upload" button in the navigation
4. **Content Guidelines**: Follow the educational content restrictions
5. **Fill Details**: Add title, description, category, and tags
6. **Publish**: Your video will be available immediately

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

#### Videos
- `GET /api/videos` - List all videos (with search/filter)
- `GET /api/videos/featured` - Get featured videos
- `GET /api/videos/trending` - Get trending videos
- `GET /api/videos/:id` - Get single video
- `POST /api/videos/upload` - Upload video (authenticated)
- `GET /api/videos/categories/list` - Get available categories

## 🎨 Design Philosophy

OptiWave features a modern, gradient-based design with:
- **Colorful UI**: Vibrant gradients and category-based color coding
- **Mobile-First**: Responsive design that works on all devices  
- **User-Friendly**: Intuitive navigation with clear visual hierarchy
- **Educational Focus**: Clean, distraction-free interface for learning

## 📱 Screenshots

**Homepage with colorful design and categories:**
![Homepage](https://github.com/user-attachments/assets/2e38dbd7-9e18-4bbf-80dc-995c099846d9)

**Clean login interface:**
![Login](https://github.com/user-attachments/assets/72f94534-b3f1-4a16-94aa-13e0376973f4)

**Upload page with content guidelines:**
![Upload](https://github.com/user-attachments/assets/2cc3ddb9-26c0-406c-b3ad-2de38cffa069)

## 🔧 Development

### Project Structure
```
OptiWave/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context (auth)
│   │   ├── utils/          # Utilities (API client)
│   │   └── types/          # TypeScript type definitions
│   └── public/
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── middleware/         # Express middleware
│   ├── database/           # Database setup and schema
│   └── uploads/            # Video file storage
└── package.json           # Root package.json for scripts
```

### Available Scripts
```bash
# Development
npm run dev          # Start both frontend and backend
npm run client       # Start frontend only
npm run server       # Start backend only

# Production
npm run build        # Build frontend for production
npm run install-deps # Install all dependencies
```

### Database Schema

The SQLite database includes:
- **users**: User accounts with authentication
- **videos**: Video metadata with uploader relationships

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License. See LICENSE file for details.

## 🌟 Join the Movement

OptiWave is more than just a video platform — it's a community dedicated to spreading real knowledge in tech and programming. Join us in creating a focused, high-quality learning environment for developers and tech enthusiasts worldwide.

**Ready to learn? Start exploring at [OptiWave](http://localhost:3000)**
