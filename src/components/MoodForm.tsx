import React, { useState } from 'react';
import MoodScale from './MoodScale';

interface MoodFormProps {
  onSubmit: (mood: number) => void;
}

const MoodForm: React.FC<MoodFormProps> = ({ onSubmit }) => {
  const [selectedMood, setSelectedMood] = useState<number>(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedMood);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8 sm:mb-10 leading-relaxed px-4">
        How are you feeling today?
      </h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
        <MoodScale 
          selectedMood={selectedMood} 
          onMoodChange={setSelectedMood} 
        />
        
        <button 
          type="submit" 
          className="bg-primary text-secondary font-semibold text-base sm:text-lg rounded-xl px-8 sm:px-12 py-3 sm:py-4 mt-4 mx-auto max-w-xs w-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/90 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary/40"
          aria-label="Submit your mood selection"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default MoodForm;
