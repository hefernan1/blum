import './ValidationPopup.css';

function ValidationPopup({ onClose }) {
  return (
    <div className="validation-popup show">
      <div className="validation-overlay" onClick={onClose}></div>
      <div className="validation-content">
        <div className="validation-icon">🎉</div>
        <h3>Activity confirmed!</h3>
        <p>See you Saturday October 5 at 3:00 PM at Vertical'Art Pigalle</p>
        <p className="validation-note">Sophie received a notification 💕</p>
        <button className="btn-validation-close" onClick={onClose}>Awesome!</button>
      </div>
    </div>
  );
}

export default ValidationPopup;
