import { useNavigate } from 'react-router-dom';
import './BottomNav.css';

function BottomNav({ activePage }) {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      <a 
        href="#" 
        className={`nav-item ${activePage === 'swipe' ? 'active' : ''}`}
        onClick={(e) => { e.preventDefault(); navigate('/swipe'); }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
      </a>
      <a 
        href="#" 
        className={`nav-item ${activePage === 'chat' ? 'active' : ''}`}
        onClick={(e) => { e.preventDefault(); navigate('/chat'); }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
        </svg>
        {activePage === 'chat' && <span className="badge">1</span>}
      </a>
      <a 
        href="#" 
        className={`nav-item ${activePage === 'profile' ? 'active' : ''}`}
        onClick={(e) => { e.preventDefault(); navigate('/welcome'); }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
        </svg>
      </a>
    </nav>
  );
}

export default BottomNav;
