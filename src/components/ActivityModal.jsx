import './ActivityModal.css';

function ActivityModal({ onClose, onAccept }) {
  const handleAccept = () => {
    if (onAccept) onAccept();
    onClose();
  };

  return (
    <div className="activity-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="activity-header">
          <div className="activity-icon">🧗‍♀️</div>
          <h3>Meeting suggested by Blum</h3>
        </div>

        <div className="activity-details">
          <h2>Climbing session</h2>
          
          <div className="blum-suggestion">
            <p>💡 <strong>Blum suggests</strong> you meet around your shared passion!</p>
          </div>
        
          <div className="activity-info">
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FF8C42"/>
              </svg>
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">Vertical'Art Pigalle</span>
              </div>
            </div>

            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="#FF8C42"/>
              </svg>
              <div>
                <span className="info-label">Date</span>
                <span className="info-value">Samedi 5 octobre</span>
              </div>
            </div>

            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" fill="#FF8C42"/>
              </svg>
              <div>
                <span className="info-label">Time</span>
                <span className="info-value">15h00 - 17h00</span>
              </div>
            </div>

            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#FF8C42"/>
              </svg>
              <div>
                <span className="info-label">Level</span>
                <span className="info-value">All levels welcome</span>
              </div>
            </div>
          </div>

          <div className="activity-description">
            <p>A relaxed climbing session to get to know each other! We can start with easy routes and see how it goes 😊</p>
          </div>

          <div className="modal-actions">
            <button className="btn-modal-decline" onClick={onClose}>Maybe later</button>
            <button className="btn-modal-accept" onClick={handleAccept}>I accept! 🎉</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityModal;
