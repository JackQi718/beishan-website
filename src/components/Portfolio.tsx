import React, { useState } from 'react';
import PortfolioGrid from './portfolio/PortfolioGrid';
import VideoModal from './portfolio/VideoModal';
import CategoryFilter from './portfolio/CategoryFilter';
import { PortfolioItem } from '../types/portfolio';

const categories = ['全部', '商业广告', '短片', '特效设计'];

const portfolioItems = [
  {
    id: 1,
    title: '品牌形象片',
    category: '商业广告',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/video1.mp4',
  },
  {
    id: 2,
    title: '城市印象',
    category: '短片',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/video2.mp4',
  },
  {
    id: 3,
    title: '视觉特效展示',
    category: '特效设计',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/video3.mp4',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === '全部' || item.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">作品集</h2>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <PortfolioGrid items={filteredItems} onSelectVideo={setSelectedVideo} />
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </div>
    </section>
  );
};

export default Portfolio;