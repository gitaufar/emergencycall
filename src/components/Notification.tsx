import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 sm:p-8 z-50 pointer-events-none">
      <div 
        className="bg-secondary text-gray-700 px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-2xl flex items-center gap-3 sm:gap-4 animate-[slideDown_0.3s_ease-out] pointer-events-auto border-l-4 border-primary max-w-md w-full"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="m-0 text-sm sm:text-base font-medium flex-1">{message}</p>
        <button 
          onClick={onClose} 
          className="bg-transparent border-none text-gray-500 text-lg sm:text-xl cursor-pointer p-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-tertiary hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Notification;
