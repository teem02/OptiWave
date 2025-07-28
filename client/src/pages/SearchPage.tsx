import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { Video } from '../types';
import api from '../utils/api';
import './SearchPage.css';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  const initialQuery = searchParams.get('q') || '';

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await api.get('/videos/categories/list');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();

    // Set initial search query and perform search if there's a query parameter
    if (initialQuery) {
      setSearchQuery(initialQuery);
      performSearch(initialQuery, '');
    }
  }, [initialQuery]);

  const performSearch = async (query: string, category: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.append('search', query);
      if (category) params.append('category', category);
      
      const response = await api.get(`/videos?${params.toString()}`);
      setSearchResults(response.data.videos);
    } catch (error) {
      console.error('Error searching videos:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    performSearch(searchQuery, category);
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>🔍 Search Videos</h1>
        <p>Find programming, AI, and tech education videos</p>
      </div>

      <div className="search-content">
        <div className="search-controls">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>

          <div className="filter-section">
            <h3>Filter by Category</h3>
            <div className="category-filters">
              <button
                className={`category-filter ${selectedCategory === '' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('')}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="search-results">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Searching videos...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <h2>
                {searchQuery || selectedCategory 
                  ? `Search Results${searchQuery ? ` for "${searchQuery}"` : ''}${selectedCategory ? ` in ${selectedCategory.replace('-', ' ')}` : ''}`
                  : 'All Videos'
                } ({searchResults.length} found)
              </h2>
              <div className="video-grid">
                {searchResults.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          ) : (searchQuery || selectedCategory) ? (
            <div className="no-results">
              <h2>No results found</h2>
              <p>Try adjusting your search terms or category filter</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;