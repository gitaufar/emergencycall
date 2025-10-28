import { useState } from 'react'
import MoodForm from './components/MoodForm'
import Notification from './components/Notification'
import RecommendationCard from './components/RecommendationCard'
import AISuggestions from './components/AISuggestions'
import ComingSoon from './components/ComingSoon'

function App() {
  const [showNotification, setShowNotification] = useState(false)
  const [showRecommendation, setShowRecommendation] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [comingSoonFeature, setComingSoonFeature] = useState<'ai-support' | 'counselor'>('ai-support')
  const [currentMood, setCurrentMood] = useState<number>(3)

  const handleMoodSubmit = (mood: number) => {
    console.log('Mood submitted:', mood)
    setCurrentMood(mood)
    setShowNotification(true)
    setShowRecommendation(true)
  }

  const handleViewSuggestions = () => {
    setShowSuggestions(true)
    setShowRecommendation(false)
  }

  const handleBackToRecommendations = () => {
    setShowSuggestions(false)
    setShowRecommendation(true)
  }

  const handleShowComingSoon = (feature: 'ai-support' | 'counselor') => {
    setComingSoonFeature(feature)
    setShowComingSoon(true)
    setShowRecommendation(false)
    setShowSuggestions(false)
  }

  const handleBackFromComingSoon = () => {
    setShowComingSoon(false)
    setShowRecommendation(true)
  }

  const handleNotificationClose = () => {
    setShowNotification(false)
  }

  return (
    <div className="min-h-screen bg-tertiary flex items-center justify-center p-4 sm:p-5">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 drop-shadow-sm">
            EmergencyCall
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light px-4">
            Mental Health Support Platform
          </p>
        </header>

        <main className="bg-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl animate-[fadeIn_0.5s_ease-in]">
          {!showRecommendation && !showSuggestions && !showComingSoon ? (
            <MoodForm onSubmit={handleMoodSubmit} />
          ) : showComingSoon ? (
            <ComingSoon feature={comingSoonFeature} onBack={handleBackFromComingSoon} />
          ) : showSuggestions ? (
            <AISuggestions mood={currentMood} onBack={handleBackToRecommendations} />
          ) : (
            <RecommendationCard 
              isVisible={showRecommendation} 
              onViewSuggestions={handleViewSuggestions}
              onShowComingSoon={handleShowComingSoon}
            />
          )}
        </main>

        <Notification
          message="Your mood has been recorded 💙"
          isVisible={showNotification}
          onClose={handleNotificationClose}
        />
      </div>
    </div>
  )
}

export default App
