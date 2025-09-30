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
            <h2>Sophie, 28 ans</h2>
            <p className="profile-modal-location">📍 À 2 km • Paris 11ème</p>
          </div>
        </div>

        <div className="profile-modal-body">
          <div className="profile-section">
            <h3 className="section-title">À propos de moi</h3>
            <p className="profile-bio">
              Passionnée de sport et d'aventure ! J'aime découvrir de nouvelles activités et 
              rencontrer des gens qui partagent les mêmes centres d'intérêt. Toujours partante 
              pour une nouvelle expérience ! 🌟
            </p>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Mes activités favorites</h3>
            <div className="activities-grid">
              <div className="activity-card featured">
                <span className="activity-emoji">🧗‍♀️</span>
                <div className="activity-info">
                  <h4>Escalade en salle</h4>
                  <p className="activity-level">Niveau intermédiaire</p>
                  <p className="activity-desc">Ma passion depuis 3 ans ! J'adore la sensation de grimper et me dépasser.</p>
                  <span className="frequency-badge">2-3x par semaine</span>
                </div>
              </div>

              <div className="activity-card">
                <span className="activity-emoji">🏃‍♀️</span>
                <div className="activity-info">
                  <h4>Course à pied</h4>
                  <p className="activity-level">Confirmé</p>
                  <p className="activity-desc">J'adore courir le long du canal Saint-Martin le matin.</p>
                  <span className="frequency-badge">4x par semaine</span>
                </div>
              </div>

              <div className="activity-card">
                <span className="activity-emoji">🧘‍♀️</span>
                <div className="activity-info">
                  <h4>Yoga</h4>
                  <p className="activity-level">Débutant</p>
                  <p className="activity-desc">Pour me détendre et travailler ma souplesse.</p>
                  <span className="frequency-badge">1x par semaine</span>
                </div>
              </div>

              <div className="activity-card">
                <span className="activity-emoji">🔐</span>
                <div className="activity-info">
                  <h4>Escape game</h4>
                  <p className="activity-level">Passionnée</p>
                  <p className="activity-desc">J'adore les énigmes et l'ambiance entre amis !</p>
                  <span className="frequency-badge">2x par mois</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Activités à essayer</h3>
            <div className="wishlist-activities">
              <span className="wishlist-tag">🎿 Ski</span>
              <span className="wishlist-tag">🏄‍♀️ Surf</span>
              <span className="wishlist-tag">🎨 Cours de peinture</span>
              <span className="wishlist-tag">🍳 Atelier cuisine</span>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Style de rencontre</h3>
            <div className="preferences-tags">
              <span className="pref-tag">☕ Café avant activité</span>
              <span className="pref-tag">🌞 Préfère le jour</span>
              <span className="pref-tag">👥 Groupe ou duo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
