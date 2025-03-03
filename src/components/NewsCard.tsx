
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface NewsProps {
  news: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    time: string;
    icon: LucideIcon;
  };
  delay: number;
}

const NewsCard = ({ news, delay }: NewsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="glass-card rounded-xl p-5 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex mb-3">
        <span className="category-tag flex items-center">
          <news.icon size={12} className="mr-1" />
          {news.category}
        </span>
        <span className="text-xs text-white/60 ml-auto">{news.time}</span>
      </div>
      
      <h3 className="text-xl font-medium text-white mb-3 transition-colors">
        {news.title}
      </h3>
      
      <p className="text-white/70 text-sm mb-4">
        {news.excerpt}
      </p>
      
      <button 
        className={`text-primary font-medium text-sm transition-all ${
          isHovered ? 'translate-x-1' : ''
        }`}
      >
        Read Full Story
      </button>
    </div>
  );
};

export default NewsCard;
