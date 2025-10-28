import React from 'react';

interface AISuggestionsProps {
  mood: number;
  onBack: () => void;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ mood, onBack }) => {
  // AI Suggestions berdasarkan mood
  const getAISuggestions = (moodValue: number) => {
    const suggestions = {
      1: { // Very Sad
        emoji: '🫂',
        moodLabel: 'Very Sad',
        message: "I understand you're going through a difficult time. You're not alone, and it's brave of you to acknowledge how you feel.",
        activities: [
          '🎵 Listen to calming music or nature sounds',
          '📝 Write down your thoughts in a journal',
          '🚶‍♀️ Take a gentle walk, even just 5 minutes',
          '☕ Make yourself a warm, comforting drink'
        ],
        urgency: 'high',
        color: 'blue'
      },
      2: { // Sad
        emoji: '💙',
        moodLabel: 'Sad',
        message: "It's okay to feel sad. These feelings are temporary, and I'm here to support you through this.",
        activities: [
          '🎨 Try a creative activity like drawing or coloring',
          '📞 Call or text a friend you trust',
          '🧘‍♀️ Practice 5 minutes of deep breathing',
          '📺 Watch something that usually makes you smile'
        ],
        urgency: 'medium',
        color: 'purple'
      },
      3: { // Neutral
        emoji: '🌱',
        moodLabel: 'Neutral',
        message: "You're doing well maintaining balance. Let's keep that positive momentum going!",
        activities: [
          '💪 Try some light exercise or stretching',
          '📚 Read a chapter of an interesting book',
          '🌳 Spend some time in nature or fresh air',
          '🎯 Set one small, achievable goal for today'
        ],
        urgency: 'low',
        color: 'green'
      },
      4: { // Good
        emoji: '✨',
        moodLabel: 'Good',
        message: "I'm glad you're feeling good! This is a great time to build on that positive energy.",
        activities: [
          '🎉 Celebrate your wins, no matter how small',
          '💌 Share your positivity with someone you care about',
          '🧠 Learn something new that interests you',
          '🎵 Create a playlist of your favorite uplifting songs'
        ],
        urgency: 'low',
        color: 'green'
      },
      5: { // Very Happy
        emoji: '🌟',
        moodLabel: 'Very Happy',
        message: "That's wonderful! Your positive energy is inspiring. Keep spreading those good vibes!",
        activities: [
          '💃 Dance to your favorite music',
          '🤝 Help someone else or volunteer',
          '📸 Capture this moment in a photo or note',
          '🎊 Plan something fun to look forward to'
        ],
        urgency: 'low',
        color: 'green'
      }
    };

    return suggestions[moodValue as keyof typeof suggestions] || suggestions[3];
  };

  const suggestion = getAISuggestions(mood);

  const getBackgroundColor = () => {
    switch (suggestion.color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200';
      case 'purple':
        return 'bg-purple-50 border-purple-200';
      case 'green':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-in]">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg px-3 py-2"
        aria-label="Go back to recommendations"
      >
        <span className="text-xl">←</span>
        <span className="font-medium">Back</span>
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl sm:text-7xl mb-4 animate-[float_2s_ease-in-out_infinite]" aria-hidden="true">
          {suggestion.emoji}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-3 px-4 leading-relaxed">
          AI Suggestions for You
        </h2>
        <p className="text-base sm:text-lg text-gray-500">
          Based on your mood: <span className="font-semibold text-gray-700">{suggestion.moodLabel}</span>
        </p>
      </div>

      {/* AI Message Card */}
      <div className={`mb-6 p-6 sm:p-8 rounded-2xl border-2 ${getBackgroundColor()} animate-[slideIn_0.6s_ease-out]`}>
        <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed text-center">
          {suggestion.message}
        </p>
      </div>

      {/* Activities Card */}
      <div className="bg-secondary rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-sm animate-[slideIn_0.6s_ease-out]" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">💡</span> 
          <span>Recommended Activities</span>
        </h3>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {suggestion.activities.map((activity, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 p-4 bg-tertiary rounded-xl hover:bg-secondary hover:shadow-md transition-all duration-300 animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <span className="text-base sm:text-lg text-gray-700 flex-1">{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Crisis Warning for High Urgency */}
      {suggestion.urgency === 'high' && (
        <div className="mt-6 p-4 sm:p-6 bg-blue-100 border-l-4 border-blue-500 rounded-lg animate-[slideIn_0.6s_ease-out]" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm sm:text-base text-blue-900 flex items-start gap-2">
            <span className="text-xl">💙</span>
            <span className="flex-1">
              <strong>Important:</strong> If you're experiencing a crisis or having thoughts of self-harm, 
              please reach out to a counselor immediately or call a crisis helpline.
            </span>
          </p>
        </div>
      )}

      {/* Action Button */}
      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="bg-primary text-secondary font-semibold text-base sm:text-lg rounded-xl px-8 sm:px-12 py-3 sm:py-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40"
        >
          Choose Support Option
        </button>
      </div>
    </div>
  );
};

export default AISuggestions;
