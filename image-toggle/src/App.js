import React, { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('cover'); // 'cover', 'cardList', 'cardDisplay'
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // Total cards count - image1.jpg to image52.jpg
  const totalCards = 52;
  
  const handleShowRandomCard = () => {
    // Generate random index between 0 and totalCards-1
    const randomIndex = Math.floor(Math.random() * totalCards);
    setCurrentCardIndex(randomIndex);
    setCurrentView('cardDisplay');
  };
  
  const handleShowCardList = () => {
    setCurrentView('cardList');
  };
  
  const handleSelectCard = (cardNumber) => {
    setCurrentCardIndex(cardNumber - 1); // Convert to 0-based index
    setCurrentView('cardDisplay');
  };
  
  const handleBackToCover = () => {
    setCurrentView('cover');
  };
  
  const handleBackToCardList = () => {
    setCurrentView('cardList');
  };
  
  // Generate array of card numbers for easy mapping
  const cardNumbers = Array.from({ length: totalCards }, (_, i) => i + 1);
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FDF5E6',
      fontFamily: '"Noto Sans KR", sans-serif'
    }}>
      {currentView === 'cover' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(135deg, #F5DEB3 0%, #DEB887 100%)',
          padding: '20px'
        }}>
          {/* Cover image placeholder */}
          <div style={{
            width: '380px',
            height: '600px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            backgroundImage: `url(${typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/buttu'}/images/cover.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>
            <span style={{ color: '#666', fontSize: '18px' }}>표지 이미지</span>
          </div>
          
          {/* Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center'
          }}>
            <button
              onClick={handleShowRandomCard}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: '#FF8C00',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 5px 15px rgba(255,140,0,0.4)',
                transition: 'all 0.3s ease',
                minWidth: '200px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 7px 20px rgba(255,140,0,0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 5px 15px rgba(255,140,0,0.4)';
              }}
            >
              오늘의 단어
            </button>
            
            <button
              onClick={handleShowCardList}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: '#DAA520',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 5px 15px rgba(218,165,32,0.4)',
                transition: 'all 0.3s ease',
                minWidth: '200px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 7px 20px rgba(218,165,32,0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 5px 15px rgba(218,165,32,0.4)';
              }}
            >
              카드 보기
            </button>
          </div>
        </div>
      )}
      
      {currentView === 'cardList' && (
        <div style={{
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <header style={{
            textAlign: 'center',
            marginBottom: '30px',
            padding: '20px'
          }}>
            <h1 style={{
              color: '#8B4513',
              fontSize: '28px',
              marginBottom: '10px'
            }}>
              불교 명상 카드 선택
            </h1>
            <p style={{
              color: '#A0522D',
              fontSize: '16px'
            }}>
              원하는 카드 번호를 선택해주세요
            </p>
          </header>
          
          {/* Card grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '15px',
            marginBottom: '30px'
          }}>
            {cardNumbers.map((cardNumber) => (
              <button
                key={cardNumber}
                onClick={() => handleSelectCard(cardNumber)}
                style={{
                  padding: '20px 10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: '#F5F5DC',
                  color: '#8B4513',
                  border: '2px solid #DEB887',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#DAA520';
                  e.target.style.color = 'white';
                  e.target.style.borderColor = '#DAA520';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(218,165,32,0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#F5F5DC';
                  e.target.style.color = '#8B4513';
                  e.target.style.borderColor = '#DEB887';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                }}
              >
                {cardNumber}번
              </button>
            ))}
          </div>
          
          {/* Back button */}
          <div style={{
            textAlign: 'center'
          }}>
            <button
              onClick={handleBackToCover}
              style={{
                padding: '12px 25px',
                fontSize: '16px',
                backgroundColor: '#CD853F',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#A0522D';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#CD853F';
              }}
            >
              처음으로 돌아가기
            </button>
          </div>
        </div>
      )}
      
      {currentView === 'cardDisplay' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(135deg, #F0E68C 0%, #BDB76B 100%)',
          padding: '20px'
        }}>
          <header style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <h1 style={{
              color: '#8B4513',
              fontSize: '24px',
              marginBottom: '5px'
            }}>
              불교 명상 카드
            </h1>
            <p style={{
              color: '#A0522D',
              fontSize: '16px'
            }}>
              {currentCardIndex + 1}번 카드
            </p>
          </header>
          
          {/* Card display */}
          <div style={{
            marginBottom: '30px'
          }}>
            <div style={{
              width: '380px',
              height: '600px',
              backgroundColor: '#fff',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={`${typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/buttu'}/images/image${currentCardIndex + 1}${currentCardIndex + 1 === 49 ? '.png' : '.jpg'}`} 
                alt={`명상 카드 ${currentCardIndex + 1}`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                display: 'none',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '16px'
              }}>
                카드 이미지 {currentCardIndex + 1}
              </div>
            </div>
          </div>
          
          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={handleShowRandomCard}
              style={{
                padding: '12px 20px',
                fontSize: '16px',
                backgroundColor: '#FF8C00',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#FF7F00';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#FF8C00';
              }}
            >
              다른 카드 보기
            </button>
            
            <button
              onClick={handleBackToCardList}
              style={{
                padding: '12px 20px',
                fontSize: '16px',
                backgroundColor: '#DAA520',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#B8860B';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#DAA520';
              }}
            >
              카드 목록으로
            </button>
            
            <button
              onClick={handleBackToCover}
              style={{
                padding: '12px 20px',
                fontSize: '16px',
                backgroundColor: '#CD853F',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#A0522D';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#CD853F';
              }}
            >
              처음으로
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;