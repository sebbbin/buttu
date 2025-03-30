import React, { useState } from 'react';
import './App.css';

function App() {
  const [showCover, setShowCover] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // Total cards count
  const totalCards = 53;
  
  const handleShowRandomCard = () => {
    // Generate random index between 0 and totalCards-1
    const randomIndex = Math.floor(Math.random() * totalCards);
    setCurrentCardIndex(randomIndex);
    setShowCover(false);
  };
  
  const handleBackToCover = () => {
    setShowCover(true);
  };
  
  return (
    <div className="app-container">
      {showCover ? (
        <div className="cover-container">
          {/* Cover image as background - Replace with your actual image path */}
          <img src="${process.env.PUBLIC_URL}/images/표지버츄.png" alt="Cover" className="cover-image" />
          
          {/* Today's Word button */}
          <div className="cover-button-container">
            <button
              onClick={handleShowRandomCard}
              className="today-word-button"
            >
              오늘의 단어
            </button>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <header className="card-header">
            <h1>불교 명상 카드</h1>
          </header>
          
          {/* Random card display */}
          <div className="card-display">
            <div className="card">
              {/* Replace this with your actual card image */}
              <img 
                src={`${process.env.PUBLIC_URL}/images/image${currentCardIndex + 1}.jpg`} 
                alt={`명상 카드 ${currentCardIndex + 1}`} 
                className="card-image" 
              />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="button-group">
            <button
              onClick={handleShowRandomCard}
              className="next-card-button"
            >
              다음 카드 보기
            </button>
            
            <button
              onClick={handleBackToCover}
              className="back-button"
            >
              처음으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;