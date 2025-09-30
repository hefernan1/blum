import './ValidationPopup.css';

function ValidationPopup({ onClose }) {
  return (
    <div className="validation-popup show">
      <div className="validation-overlay" onClick={onClose}></div>
      <div className="validation-content">
        <div className="validation-icon">🎉</div>
        <h3>Activité confirmée !</h3>
        <p>Rendez-vous samedi 5 octobre à 15h00 à Vertical'Art Pigalle</p>
        <p className="validation-note">Sophie a reçu une notification 💕</p>
        <button className="btn-validation-close" onClick={onClose}>Super !</button>
      </div>
    </div>
  );
}

export default ValidationPopup;
