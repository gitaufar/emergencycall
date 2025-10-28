import React from 'react';

interface RecommendationCardProps {
  isVisible: boolean;
  onViewSuggestions: () => void;
  onShowComingSoon: (feature: 'ai-support' | 'counselor') => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ isVisible, onViewSuggestions, onShowComingSoon }) => {
  if (!isVisible) return null;

  const handleAISupport = () => {
    onShowComingSoon('ai-support');
  };

  const handleScheduleCounselor = () => {
    onShowComingSoon('counselor');
  };

  return (
    <div className="text-center animate-[fadeIn_0.5s_ease-in]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6 sm:mb-8 px-4 leading-relaxed">
        We're here to help 💙
      </h2>

      <button
        onClick={onViewSuggestions}
        className="w-full max-w-2xl mx-auto mb-6 p-6 sm:p-8 bg-linear-to-r from-blue-50 to-purple-50 border-2 border-primary rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/30 text-left group"
        aria-label="View personalized AI suggestions based on your mood"
      >
        <div className="flex items-center gap-4">
          <div className="text-4xl sm:text-5xl" aria-hidden="true">🤖</div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 group-hover:text-primary transition-colors">
              View AI Suggestions
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Get personalized recommendations based on how you're feeling
            </p>
          </div>
          <div className="text-2xl text-primary group-hover:translate-x-1 transition-transform">
            →
          </div>
        </div>
      </button>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">

        <button 
          onClick={handleAISupport}
          className="bg-secondary rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border-2 border-gray-200 text-center hover:-translate-y-2 hover:shadow-lg hover:border-primary focus:outline-none focus:ring-4 focus:ring-primary/30 focus:-translate-y-2 focus:border-primary"
          aria-label="Talk to AI Support - Get instant support from our AI assistant, available 24/7"
        >
          <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">💬</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
            Talk to AI Support
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Get instant support from our AI assistant, available 24/7
          </p>
          <span className="inline-block bg-primary text-secondary font-semibold text-sm sm:text-base rounded-lg px-5 sm:px-6 py-2 sm:py-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-primary/90">
            Start Chat
          </span>
        </button>

        <button 
          onClick={handleScheduleCounselor}
          className="bg-secondary rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border-2 border-gray-200 text-center hover:-translate-y-2 hover:shadow-lg hover:border-primary focus:outline-none focus:ring-4 focus:ring-primary/30 focus:-translate-y-2 focus:border-primary"
          aria-label="Schedule with Counselor - Book a session with a professional counselor"
        >
          <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">📅</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
            Schedule with Counselor
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Book a session with a professional counselor
          </p>
          <span className="inline-block bg-primary text-secondary font-semibold text-sm sm:text-base rounded-lg px-5 sm:px-6 py-2 sm:py-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-primary/90">
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
