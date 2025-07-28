import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Video } from '../types';
import api from '../utils/api';
import './VideoPage.css';

const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      if (!id) return;
      
      try {
        const response = await api.get(`/videos/${id}`);
        setVideo(response.data);
      } catch (err) {
        setError('Video not found or failed to load');
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading video...</p>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="error-container">
        <h2>Video Not Found</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <div className="video-page">
      <div className="video-container">
        <div className="video-player">
          <video
            src={`http://localhost:5000/uploads/${video.filename}`}
            controls
            className="main-video"
            poster={`http://localhost:5000/uploads/${video.filename}`}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-info">
          <h1 className="video-title">{video.title}</h1>
          
          <div className="video-meta">
            <div className="video-stats">
              <span className="views">{formatViews(video.views)} views</span>
              <span className="date">Uploaded on {formatDate(video.created_at)}</span>
            </div>
            
            <div className="video-category">
              <span className={`category-tag ${video.category}`}>
                {video.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          </div>

          <div className="uploader-info">
            <div className="uploader">
              <div className="uploader-avatar">
                {video.uploader_name.charAt(0).toUpperCase()}
              </div>
              <div className="uploader-details">
                <h3>{video.uploader_name}</h3>
                <p>Content Creator</p>
              </div>
            </div>
          </div>

          {video.description && (
            <div className="video-description">
              <h3>Description</h3>
              <p>{video.description}</p>
            </div>
          )}

          {video.tags && (
            <div className="video-tags">
              <h3>Tags</h3>
              <div className="tags-list">
                {video.tags.split(',').map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="video-actions">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/trending" className="trending-link">🔥 See Trending</Link>
      </div>
    </div>
  );
};

export default VideoPage;