
import { useState, useEffect, useRef } from 'react';
import { 
  Film, 
  Newspaper, 
  BookOpen, 
  MessageSquare, 
  Star, 
  ArrowRight, 
  ArrowLeft,
  TrendingUp,
  Globe, 
  BriefcaseBusiness,
  Users,
  ChevronRight
} from 'lucide-react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import ArticleCard from '../components/ArticleCard';
import PollCard from '../components/PollCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const entertainmentRef = useRef<HTMLDivElement>(null);
  
  // Animation effect on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Sample data
  const breakingNews = [
    "Breaking: New climate policy announced by global leaders",
    "Tech giant releases revolutionary AI assistant",
    "Olympic committee finalizes venues for 2030 games",
    "Major breakthrough in renewable energy storage",
    "Global market indices reach all-time high"
  ];
  
  const entertainmentNews = [
    {
      id: 1,
      title: "Award-winning director reveals next film project",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop",
      category: "Film",
      icon: Film
    },
    {
      id: 2,
      title: "Celebrity power couple announces charity foundation",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&auto=format&fit=crop",
      category: "Celebrity",
      icon: Star
    },
    {
      id: 3,
      title: "Streaming platform acquires rights to cult classic series",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop",
      category: "Television",
      icon: Film
    },
    {
      id: 4,
      title: "Music festival announces impressive lineup for next year",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=500&auto=format&fit=crop",
      category: "Music",
      icon: TrendingUp
    },
    {
      id: 5,
      title: "Behind the scenes of this season's most talked about show",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=500&auto=format&fit=crop",
      category: "Television",
      icon: Film
    }
  ];
  
  const newsUpdates = [
    {
      id: 1,
      title: "Historic peace agreement signed between rival nations",
      excerpt: "After decades of tension, leaders have finally reached a groundbreaking accord aimed at regional stability.",
      category: "Politics",
      time: "2 hours ago",
      icon: Globe
    },
    {
      id: 2,
      title: "Tech stocks soar as new regulation framework announced",
      excerpt: "Market analysts predict continued growth as regulatory clarity provides confidence to investors.",
      category: "Business",
      time: "4 hours ago",
      icon: BriefcaseBusiness
    },
    {
      id: 3,
      title: "Major scientific discovery could revolutionize medicine",
      excerpt: "Researchers have identified a novel approach that may lead to treatments for previously incurable conditions.",
      category: "Science",
      time: "6 hours ago",
      icon: BookOpen
    }
  ];
  
  const articles = [
    {
      id: 1,
      title: "The evolving landscape of artificial intelligence ethics",
      excerpt: "As AI becomes more integrated in our daily lives, ethical considerations take center stage.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Sustainable architecture: Building for the future",
      excerpt: "Exploring how innovative design can address environmental challenges through urban planning.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Digital privacy in the age of social media",
      excerpt: "Understanding the complex balance between connectivity and protecting personal information.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500&auto=format&fit=crop",
      readTime: "5 min read"
    }
  ];
  
  const polls = [
    {
      id: 1,
      question: "Which technology will have the biggest impact in the next decade?",
      options: ["Artificial Intelligence", "Renewable Energy", "Space Exploration", "Biotechnology"],
      votes: [42, 28, 15, 15]
    },
    {
      id: 2,
      question: "What media format do you prefer for daily news?",
      options: ["Video", "Articles", "Podcasts", "Social Media"],
      votes: [35, 30, 20, 15]
    }
  ];
  
  const scrollEntertainment = (direction: 'left' | 'right') => {
    if (entertainmentRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        entertainmentRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        entertainmentRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Banner and Breaking News */}
      <div className={`relative overflow-hidden transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop')] bg-cover opacity-10"></div>
          <div className="container px-6 mx-auto z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white mb-4">
                Your Window to the <span className="text-primary">World</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-6">
                Discover stories that matter, delivered with clarity and insight
              </p>
            </div>
          </div>
        </div>
        
        {/* Breaking News Ticker */}
        <div className="bg-primary/10 border-y border-white/10 py-3 overflow-hidden relative">
          <div className="flex items-center absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-primary/20 to-transparent px-6 md:px-10">
            <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mr-4">
              Breaking
            </div>
          </div>
          
          <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
            <div ref={tickerRef} className="whitespace-nowrap animate-ticker inline-block">
              {[...breakingNews, ...breakingNews].map((news, index) => (
                <span key={index} className="ticker-item font-medium text-white/90">
                  {news}
                </span>
              ))}
            </div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-primary/20 to-transparent px-6 md:px-10 flex items-center">
            <button 
              className="bg-primary/20 hover:bg-primary/30 text-white p-1.5 rounded-full transition-all" 
              onClick={() => tickerRef.current?.parentElement?.scrollTo({ left: 0, behavior: 'smooth' })}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <main className="container px-6 mx-auto py-12 md:py-16">
        {/* Entertainment Section */}
        <section className="mb-16 md:mb-24 animate-fade-in animate-delay-75">
          <div className="flex justify-between items-center mb-6">
            <h2 className="section-title flex items-center">
              <Film className="mr-2" size={24} /> 
              Entertainment
            </h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollEntertainment('left')} 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => scrollEntertainment('right')} 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div 
            ref={entertainmentRef} 
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
          >
            {entertainmentNews.map((item, index) => (
              <div 
                key={item.id} 
                className="min-w-[280px] md:min-w-[320px] glass-card rounded-xl overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="category-tag flex items-center">
                      <item.icon size={12} className="mr-1" />
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-white/60">Trending Now</span>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* News Updates Section */}
        <section className="mb-16 md:mb-24 animate-fade-in animate-delay-150">
          <h2 className="section-title flex items-center">
            <Newspaper className="mr-2" size={24} /> 
            News Updates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsUpdates.map((news, index) => (
              <NewsCard 
                key={news.id} 
                news={news} 
                delay={index * 100}
              />
            ))}
          </div>
        </section>
        
        {/* Informative & Educational Content */}
        <section className="mb-16 md:mb-24 animate-fade-in animate-delay-300">
          <h2 className="section-title flex items-center">
            <BookOpen className="mr-2" size={24} /> 
            Insights & Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                delay={index * 100}
              />
            ))}
          </div>
        </section>
        
        {/* Engagement Section */}
        <section className="animate-fade-in animate-delay-500">
          <h2 className="section-title flex items-center">
            <MessageSquare className="mr-2" size={24} /> 
            Community Engagement
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {polls.map((poll, index) => (
              <PollCard 
                key={poll.id} 
                poll={poll}
                delay={index * 100}
              />
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0f172a] py-12 border-t border-white/10">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-heading font-bold text-white">MediaScope</h2>
              <p className="text-sm text-white/60 mt-2">Your window to the world</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">About</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
            © {new Date().getFullYear()} MediaScope. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
