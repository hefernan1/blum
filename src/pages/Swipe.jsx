import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchPopup from '../components/MatchPopup';
import ProfileModal from '../components/ProfileModal';
import './Swipe.css';

function Swipe() {
  const navigate = useNavigate();
  const [showMatch, setShowMatch] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragCurrent, setDragCurrent] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    setDragCurrent({ x: clientX, y: clientY });
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diffX = dragCurrent.x - dragStart.x;
    
    if (diffX > 100) {
      handleSwipeRight();
    } else if (diffX < -100) {
      handleSwipeLeft();
    } else {
      setDragCurrent({ x: 0, y: 0 });
    }
  };

  const handleSwipeRight = () => {
    setDragCurrent({ x: 500, y: 0 });
    setTimeout(() => {
      setShowMatch(true);
    }, 50);
  };

  const handleSwipeLeft = () => {
    setDragCurrent({ x: -500, y: 0 });
    setTimeout(() => {
      resetCard();
    }, 300);
  };

  const resetCard = () => {
    setDragCurrent({ x: 0, y: 0 });
    setDragStart({ x: 0, y: 0 });
  };

  const handleMatchClose = () => {
    navigate('/chat');
  };

  const handleShowProfile = (e) => {
    e.stopPropagation();
    setShowProfileModal(true);
  };

  const handleCloseProfile = () => {
    setShowProfileModal(false);
  };

  const getCardStyle = () => {
    const diffX = dragCurrent.x - dragStart.x;
    const rotation = diffX / 10;
    const opacity = isDragging ? Math.max(0.3, 1 - Math.abs(diffX) / 500) : 1;
    
    return {
      transform: `translateX(${diffX}px) rotate(${rotation}deg)`,
      opacity,
      transition: isDragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease'
    };
  };

  const getLikeOpacity = () => {
    const diffX = dragCurrent.x - dragStart.x;
    return diffX > 50 ? Math.min(diffX / 150, 1) : 0;
  };

  const getNopeOpacity = () => {
    const diffX = dragCurrent.x - dragStart.x;
    return diffX < -50 ? Math.min(Math.abs(diffX) / 150, 1) : 0;
  };

  return (
    <div className="phone-container">
      <div className="header-simple">
        <img src="/logo_name.png" alt="Blum" className="header-logo" />
      </div>

      <div className="swipe-container">
        <div className="card-stack">
          <div className="swipe-card" style={{ transform: 'scale(0.95) translateY(10px)', zIndex: 1 }}>
            <div className="card-image">
              <img src="/femme.webp" alt="Profile" />
            </div>
          </div>

          <div className="swipe-card" style={{ transform: 'scale(0.97) translateY(5px)', zIndex: 2 }}>
            <div className="card-image">
              <img src="/femme.webp" alt="Profile" />
            </div>
          </div>

          <div 
            className="swipe-card active"
            style={getCardStyle()}
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragEnd}
          >
            <div className="card-image">
              <img src="/femme.webp" alt="Sophie" />
              
              <div className="swipe-indicator like-indicator" style={{ opacity: getLikeOpacity() }}>
                LIKE
              </div>
              <div className="swipe-indicator nope-indicator" style={{ opacity: getNopeOpacity() }}>
                NOPE
              </div>
            </div>

            <div className="card-info">
              <div className="card-header">
                <div>
                  <h2>Sophie <span className="age">28</span></h2>
                  <p className="location">📍 À 2 km</p>
                </div>
                <button className="info-button" onClick={handleShowProfile}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 16v-4m0-4h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="interests">
                <span className="interest-tag">🧗‍♀️ Escalade</span>
                <span className="interest-tag">🏃‍♀️ Course à pied</span>
                <span className="interest-tag">🧘‍♀️ Yoga</span>
                <span className="interest-tag">🔐 Escape game</span>
              </div>

              <div className="activity-pref">
                <div className="activity-label">Activité préférée</div>
                <div className="activity-highlight">
                  <span className="activity-icon">🧗‍♀️</span>
                  <span className="activity-name">Escalade en salle</span>
                </div>
                <p className="activity-description">J'adore grimper ! C'est ma passion depuis 3 ans. Toujours partante pour découvrir de nouvelles salles 🔥</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-btn nope-btn" onClick={handleSwipeLeft}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF8C42"/>
          </svg>
        </button>

        <button className="action-btn like-btn" onClick={handleSwipeRight}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#4CAF50"/>
          </svg>
        </button>
      </div>

      {showMatch && <MatchPopup onClose={handleMatchClose} />}
      {showProfileModal && <ProfileModal onClose={handleCloseProfile} />}
    </div>
  );
}

export default Swipe;
