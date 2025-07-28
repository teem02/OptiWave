import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import { Video } from '../types';
import api from '../utils/api';
import './TrendingPage.css';

const TrendingPage: React.FC = () => {
  const [trendingVideos, setTrendingVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await api.get('/videos/trending');
        setTrendingVideos(response.data);
      } catch (error) {
        console.error('Error fetching trending videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingVideos();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading trending videos...</p>
      </div>
    );
  }

  return (
    <div className="trending-page">
      <div className="trending-header">
        <h1>🔥 Trending Videos</h1>
        <p>Most popular programming and tech education videos this week</p>
      </div>

      <div className="trending-content">
        {trendingVideos.length > 0 ? (
          <div className="video-grid">
            {trendingVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="no-trending">
            <h2>No trending videos yet</h2>
            <p>Check back later to see what's trending in the tech education community!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingPage;