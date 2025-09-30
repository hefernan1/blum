import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/swipe');
  };

  return (
    <div className="phone-container">
      <div className="welcome-screen">
        <div className="logo-container">
          <img src="/logo.png" alt="Blum Logo" className="welcome-logo" />
          <button className="cta-button" onClick={handleStart}>
            Commencer l'aventure
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
