import React from 'react';

interface MoodScaleProps {
  selectedMood: number;
  onMoodChange: (mood: number) => void;
}

const MoodScale: React.FC<React.PropsWithChildren<MoodScaleProps>> = ({ selectedMood, onMoodChange }) => {
  const moods = [
    { emoji: '😢', label: 'Very Sad', value: 1, ariaLabel: 'Select very sad mood' },
    { emoji: '😟', label: 'Sad', value: 2, ariaLabel: 'Select sad mood' },
    { emoji: '😐', label: 'Neutral', value: 3, ariaLabel: 'Select neutral mood' },
    { emoji: '🙂', label: 'Good', value: 4, ariaLabel: 'Select good mood' },
    { emoji: '😄', label: 'Very Happy', value: 5, ariaLabel: 'Select very happy mood' },
  ];

  const selectedMoodData = moods.find(mood => mood.value === selectedMood);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
      <fieldset className="flex flex-col gap-3 w-full">
        <legend className="sr-only">Select your current mood</legend>
        {moods.map((mood) => (
          <label
            key={mood.value}
            className={`
              flex items-center gap-4 p-4 sm:p-5 rounded-xl border-2 cursor-pointer
              transition-all duration-300 ease-in-out
              focus-within:ring-4 focus-within:ring-primary/30 focus-within:outline-none
              ${selectedMood === mood.value 
                ? 'bg-primary border-primary shadow-md scale-[1.02]' 
                : 'bg-secondary border-gray-300 hover:border-primary hover:shadow-sm hover:scale-[1.01]'
              }
            `}
          >
            <input
              type="radio"
              name="mood"
              value={mood.value}
              checked={selectedMood === mood.value}
              onChange={() => onMoodChange(mood.value)}
              aria-label={mood.ariaLabel}
              className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer focus:outline-none focus:ring-0"
            />
            <span className={`text-base sm:text-lg font-medium flex-1 transition-colors duration-200 ${
              selectedMood === mood.value ? 'text-secondary font-semibold' : 'text-gray-700'
            }`}>
              {mood.label}
            </span>
          </label>
        ))}
      </fieldset>
      {selectedMoodData && (
        <div 
          className="flex flex-col items-center justify-center gap-3 py-4 md:py-8 h-full"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="text-7xl sm:text-8xl animate-[float_2s_ease-in-out_infinite] mb-2" aria-hidden="true">
            {selectedMoodData.emoji}
          </div>
          <p className="text-base sm:text-lg font-medium text-gray-600 text-center px-4 mb-2">
            You're feeling <span className="text-primary font-semibold">{selectedMoodData.label.toLowerCase()}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodScale;
