import React from 'react';

interface ComingSoonProps {
  feature: 'ai-support' | 'counselor';
  onBack: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ feature, onBack }) => {
  const getFeatureInfo = () => {
    if (feature === 'ai-support') {
      return {
        icon: '💬',
        title: 'AI Support Chat',
        description: 'Our AI-powered chat support will be available soon to provide you with instant help 24/7.',
        features: [
          'Instant responses to your concerns',
          'Available 24/7 without waiting',
          'Privacy-focused conversations',
          'Personalized support recommendations'
        ]
      };
    } else {
      return {
        icon: '📅',
        title: 'Counselor Scheduling',
        description: 'Book sessions with professional counselors who are ready to support your mental health journey.',
        features: [
          'Licensed professional counselors',
          'Flexible scheduling options',
          'Video or phone sessions',
          'Secure and confidential'
        ]
      };
    }
  };

  const info = getFeatureInfo();

  return (
    <div className="animate-[fadeIn_0.5s_ease-in] text-center">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg px-3 py-2"
        aria-label="Go back to recommendations"
      >
        <span className="text-xl">←</span>
        <span className="font-medium">Back</span>
      </button>

      {/* Icon */}
      <div className="text-8xl sm:text-9xl mb-6 animate-[bounce_2s_ease-in-out_infinite]" aria-hidden="true">
        {info.icon}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-4">
        {info.title}
      </h1>

      {/* Coming Soon Badge */}
      <div className="inline-block bg-primary/10 text-primary font-semibold text-sm sm:text-base px-6 py-2 rounded-full mb-8">
        Coming Soon
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
        {info.description}
      </p>

      {/* Features List */}
      <div className="bg-tertiary rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">✨</span>
          <span>What to Expect</span>
        </h2>
        <ul className="space-y-4 text-left">
          {info.features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 p-4 bg-secondary rounded-xl shadow-sm animate-[slideIn_0.5s_ease-out]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-primary text-xl mt-0.5">✓</span>
              <span className="text-base sm:text-lg text-gray-700 flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Notify Me Form */}
      <div className="bg-linear-to-r from-blue-50 to-purple-50 border-2 border-primary/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          Get Notified When We Launch
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Be the first to know when this feature becomes available
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            aria-label="Email address for notifications"
          />
          <button className="bg-primary text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/40 whitespace-nowrap">
            Notify Me
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 font-semibold text-base sm:text-lg rounded-xl px-8 sm:px-12 py-3 sm:py-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400/40"
        >
          Explore Other Options
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
