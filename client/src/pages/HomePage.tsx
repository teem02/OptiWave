import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import { Video } from '../types';
import api from '../utils/api';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const [featuredResponse, recentResponse] = await Promise.all([
          api.get('/videos/featured'),
          api.get('/videos?limit=12')
        ]);
        
        setFeaturedVideos(featuredResponse.data);
        setRecentVideos(recentResponse.data.videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading videos...</p>
      </div>
    );
  }

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">OptiWave</span>
          </h1>
          <p className="hero-subtitle">
            Your destination for programming, AI, and tech education videos.
            Learn from the best creators in the industry.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Educational Videos</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Programming Topics</span>
            </div>
            <div className="stat">
              <span className="stat-number">Global</span>
              <span className="stat-label">Access</span>
            </div>
          </div>
        </div>
      </div>

      {featuredVideos.length > 0 && (
        <section className="video-section">
          <h2 className="section-title">🌟 Featured Videos</h2>
          <div className="video-grid">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      )}

      <section className="video-section">
        <h2 className="section-title">📚 Recent Uploads</h2>
        <div className="video-grid">
          {recentVideos.length > 0 ? (
            recentVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          ) : (
            <div className="no-videos">
              <h3>No videos yet</h3>
              <p>Be the first to upload educational content!</p>
            </div>
          )}
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">📋 Available Categories</h2>
        <div className="categories-grid">
          <div className="category-item programming">
            <h3>Programming</h3>
            <p>Learn various programming languages and concepts</p>
          </div>
          <div className="category-item ai">
            <h3>AI & Machine Learning</h3>
            <p>Explore artificial intelligence and ML algorithms</p>
          </div>
          <div className="category-item web-dev">
            <h3>Web Development</h3>
            <p>Frontend and backend web development tutorials</p>
          </div>
          <div className="category-item mobile-dev">
            <h3>Mobile Development</h3>
            <p>iOS, Android, and cross-platform app development</p>
          </div>
          <div className="category-item data-science">
            <h3>Data Science</h3>
            <p>Data analysis, visualization, and statistical methods</p>
          </div>
          <div className="category-item software-eng">
            <h3>Software Engineering</h3>
            <p>Best practices, design patterns, and architecture</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;