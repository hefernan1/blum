import './MatchPopup.css';

function MatchPopup({ onClose }) {
  return (
    <div className="match-popup">
      <div className="match-overlay"></div>
      <div className="match-content">
        <h2 className="match-title">It's a Match! 💕</h2>
        <div className="match-profiles">
          <img src="/homme.jpg" alt="You" className="match-avatar" />
          <div className="match-heart">❤️</div>
          <img src="/femme.webp" alt="Sophie" className="match-avatar" />
        </div>
        <p className="match-text">You and Sophie liked each other!</p>
        <div className="match-actions">
          <button className="btn-match-message btn-match-solo" onClick={onClose}>
            Discover the suggested activity!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchPopup;
