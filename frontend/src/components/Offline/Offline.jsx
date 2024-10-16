import React from 'react'
import "./offline-page.css"
import { WifiOff } from "lucide-react"

const Offline = () => {
  const handleTryAgain = () => {
    // Attempt to reconnect or refresh the page
    window.location.reload()
  }
  return (
    
    <div className="offline-container">
    <div className="offline-card">
    <WifiOff className="offline-icon" />
      <h1 className="offline-title">Oops! You are offline</h1>
      <p className="offline-message">
        It looks like you've lost your internet connection. Finnews needs an active connection to provide you with the latest fintech insights.
      </p>
      <button 
        onClick={handleTryAgain}
        className="try-again-button"
      >
        Try Again
      </button>
      <p className="offline-help-text">
        If the problem persists, please check your network settings or contact your internet service provider.
      </p>
    </div>
  </div>
  )
}

export default Offline