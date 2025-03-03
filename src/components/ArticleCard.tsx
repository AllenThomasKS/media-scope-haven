
import { useState } from 'react';

interface ArticleProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
  };
  delay: number;
}

const ArticleCard = ({ article, delay }: ArticleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded-sm">
            {article.readTime}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-medium text-white mb-2">
          {article.title}
        </h3>
        
        <p className="text-white/70 text-sm">
          {article.excerpt}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full bg-secondary overflow-hidden flex items-center justify-center">
              <span className="text-xs font-medium">MS</span>
            </div>
            <span className="text-xs text-white/60 ml-2">MediaScope</span>
          </div>
          
          <button 
            className={`text-primary font-medium text-sm transition-all ${
              isHovered ? 'translate-x-1' : ''
            }`}
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
