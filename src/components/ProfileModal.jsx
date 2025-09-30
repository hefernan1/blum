import './ProfileModal.css';

function ProfileModal({ onClose }) {
  return (
    <div className="profile-modal">
      <div className="profile-modal-overlay" onClick={onClose}></div>
      <div className="profile-modal-content">
        <button className="profile-modal-close" onClick={onClose}>×</button>
        
        <div className="profile-modal-header">
          <img src="/femme.webp" alt="Sophie" className="profile-modal-image" />
          <div className="profile-modal-info">
            <h2>Sophie, 28</h2>
            <p className="profile-modal-location">📍 2 km away • Paris 11th</p>
          </div>
        </div>

        <div className="profile-modal-body">
          <div className="profile-section">
            <h3 className="section-title">About me</h3>
            <p className="profile-bio">
              Passionate about sports and adventure! I love discovering new activities and 
              meeting people who share the same interests. Always up for a new experience! 🌟
            </p>
          </div>

          <div className="profile-section">
            <h3 className="section-title">My favorite activities</h3>
            <div className="activities-grid">
              <div className="activity-card featured">
                <span className="activity-emoji">🧗‍♀️</span>
                <div className="activity-info">
                  <h4>Indoor climbing</h4>
                  <p className="activity-level">Intermediate level</p>
                  <p className="activity-desc">My passion for 3 years! I love the feeling of climbing and pushing myself.</p>
                  <span className="frequency-badge">2-3x per week</span>
                </div>
              </div>

              <div className="activity-card">
                <span className="activity-emoji">🏃‍♀️</span>
                <div className="activity-info">
                  <h4>Running</h4>
                  <p className="activity-level">Advanced</p>
                  <p className="activity-desc">I love running along the Canal Saint-Martin in the morning.</p>
                  <span className="frequency-badge">4x per week</span>
                </div>
              </div>

              <div className="activity-card">
                <span className="activity-emoji">🧘‍♀️</span>
                <div className="activity-info">
                  <h4>Yoga</h4>
                  <p className="activity-level">Beginner</p>
                  <p className="activity-desc">To relax and work on my flexibility.</p>
                  <span className="frequency-badge">1x per week</span>
                </div>
              </div>

              <div className="activity-card">
                <span className="activity-emoji">🔐</span>
                <div className="activity-info">
                  <h4>Escape game</h4>
                  <p className="activity-level">Passionate</p>
                  <p className="activity-desc">I love puzzles and the atmosphere with friends!</p>
                  <span className="frequency-badge">2x per month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Activities to try</h3>
            <div className="wishlist-activities">
              <span className="wishlist-tag">🎿 Ski</span>
              <span className="wishlist-tag">🏄‍♀️ Surf</span>
              <span className="wishlist-tag">🎨 Cours de peinture</span>
              <span className="wishlist-tag">🍳 Atelier cuisine</span>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Meeting style</h3>
            <div className="preferences-tags">
              <span className="pref-tag">☕ Coffee before activity</span>
              <span className="pref-tag">🌞 Prefers daytime</span>
              <span className="pref-tag">👥 Group or duo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
