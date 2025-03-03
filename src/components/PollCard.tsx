
import { useState } from 'react';

interface PollProps {
  poll: {
    id: number;
    question: string;
    options: string[];
    votes: number[];
  };
  delay: number;
}

const PollCard = ({ poll, delay }: PollProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  
  const totalVotes = poll.votes.reduce((sum, votes) => sum + votes, 0);
  
  const handleVote = () => {
    if (selectedOption !== null && !hasVoted) {
      setHasVoted(true);
    }
  };
  
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-medium text-white mb-6">
        {poll.question}
      </h3>
      
      <div className="space-y-4 mb-6">
        {poll.options.map((option, index) => {
          const percentage = Math.round((poll.votes[index] / totalVotes) * 100);
          
          return (
            <div key={index} className="relative">
              <button
                onClick={() => !hasVoted && setSelectedOption(index)}
                className={`relative z-10 w-full p-3 rounded-lg text-left transition-all ${
                  hasVoted 
                    ? 'bg-transparent border border-white/10 cursor-default'
                    : selectedOption === index
                      ? 'bg-primary/20 border border-primary/30'
                      : 'bg-secondary hover:bg-secondary/80 border border-white/5'
                }`}
              >
                <span className="text-white">{option}</span>
                
                {hasVoted && (
                  <span className="absolute right-3 text-sm font-medium text-white/70">
                    {percentage}%
                  </span>
                )}
              </button>
              
              {hasVoted && (
                <div 
                  className="absolute top-0 left-0 h-full bg-primary/20 rounded-lg transition-all duration-1000"
                  style={{ width: `${percentage}%`, zIndex: 5 }}
                />
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-white/60">
          {hasVoted ? `${totalVotes} votes` : 'Select an option to vote'}
        </span>
        
        <button
          onClick={handleVote}
          disabled={selectedOption === null || hasVoted}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            selectedOption !== null && !hasVoted
              ? 'bg-primary hover:bg-primary/90 text-white'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          {hasVoted ? 'Voted' : 'Vote'}
        </button>
      </div>
    </div>
  );
};

export default PollCard;
