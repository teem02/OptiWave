import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types';
import './VideoCard.css';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`} className="video-link">
        <div className="video-thumbnail">
          <video 
            src={`http://localhost:5000/uploads/${video.filename}`}
            className="thumbnail-video"
            muted
            preload="metadata"
          />
          <div className="video-duration">
            {/* We could add duration here if available */}
          </div>
        </div>
        
        <div className="video-info">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-uploader">by {video.uploader_name}</p>
          <div className="video-stats">
            <span className="views">{formatViews(video.views)} views</span>
            <span className="date">{formatDate(video.created_at)}</span>
          </div>
          <div className="video-category">
            <span className={`category-tag ${video.category}`}>
              {video.category.replace('-', ' ')}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;