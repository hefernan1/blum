import { useState, useEffect, useRef } from 'react';
import BottomNav from '../components/BottomNav';
import ActivityModal from '../components/ActivityModal';
import ValidationPopup from '../components/ValidationPopup';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [showActivityProposal, setShowActivityProposal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Auto-generate conversation
    const conversation = [
      { type: 'received', text: 'Hey ! Super qu\'on se soit matché ! 😊', time: '14:23', delay: 500 },
      { type: 'sent', text: 'Salut Sophie ! Oui j\'ai vu qu\'on aimait tous les deux l\'escalade 🧗‍♀️', time: '14:24', delay: 1500 },
      { type: 'received', text: 'Carrément ! Ça fait longtemps que tu grimpes ?', time: '14:25', delay: 2500 },
      { type: 'sent', text: 'Quelques années, mais je suis un peu rouillé 😅', time: '14:26', delay: 3500 },
      { type: 'received', text: 'Aha moi aussi ! On confirme sur Blum ?', time: '14:27', delay: 4500 },
      { type: 'sent', text: 'Lets go 🎉', time: '14:28', delay: 5500 },
    ];

    const timeouts = [];

    conversation.forEach((msg) => {
      const timeout = setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, msg.delay);
      timeouts.push(timeout);
    });

    const proposalTimeout = setTimeout(() => {
      setShowActivityProposal(true);
    }, 6500);
    timeouts.push(proposalTimeout);

    // Cleanup function to cancel timeouts if component unmounts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showActivityProposal]);

  const handleAcceptActivity = () => {
    setShowActivityProposal(false);
    setTimeout(() => {
      setShowValidation(true);
    }, 400);
  };

  const handleCloseProposal = () => {
    setShowActivityProposal(false);
  };

  const handleCloseValidation = () => {
    setShowValidation(false);
    
    // Ajouter les messages de confirmation après avoir fermé la validation
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        type: 'sent',
        text: 'Super ! J\'ai hâte ! 🎉',
        time: '14:29'
      }]);
    }, 300);
    
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        type: 'received',
        text: 'Génial ! À samedi alors ! 😊',
        time: '14:29'
      }]);
    }, 1300);
  };

  return (
    <div className="phone-container">
      <div className="header">
        <button className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="profile-info">
          <img src="/femme.webp" alt="Profile" className="profile-pic" />
          <div className="profile-details">
            <h2>Sophie</h2>
            <span className="online-status">En ligne</span>
          </div>
        </div>
        <button className="menu-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="1.5" fill="white"/>
            <circle cx="12" cy="12" r="1.5" fill="white"/>
            <circle cx="12" cy="18" r="1.5" fill="white"/>
          </svg>
        </button>
      </div>

      <div className="messages-container">
        <div className="match-notification">
          <div className="match-banner">
            <div className="match-hearts">💕</div>
            <h3>Vous avez matché sur l'escalade 🧗‍♀️</h3>
            <p>Blum vous propose une rencontre !</p>
          </div>
        </div>

        <div className="date-separator">Aujourd'hui</div>

        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.type === 'received' && (
              <img src="/femme.webp" alt="Sophie" className="message-avatar" />
            )}
            <div className="message-content">
              <p>{msg.text}</p>
              <span className="message-time">{msg.time}</span>
            </div>
          </div>
        ))}

        {showActivityProposal && (
          <div className="activity-proposal-card">
            <div className="proposal-header">
              <span className="blum-badge">🌸 Blum vous propose</span>
            </div>
            <div className="proposal-activity">
              <div className="proposal-icon">🧗‍♀️</div>
              <h3>Session d'escalade en salle</h3>
            </div>
            <div className="proposal-details">
              <div className="proposal-item">
                <span className="proposal-emoji">📍</span>
                <span>Vertical'Art Pigalle, Paris 9ème</span>
              </div>
              <div className="proposal-item">
                <span className="proposal-emoji">📅</span>
                <span>Samedi 5 octobre 2025</span>
              </div>
              <div className="proposal-item">
                <span className="proposal-emoji">⏰</span>
                <span>15h00 - 17h00</span>
              </div>
              <div className="proposal-item">
                <span className="proposal-emoji">😎</span>
                <span>-15% grâce à Blum sur cette activité !</span>
              </div>
            </div>
            <div className="proposal-message">
              <p>💡 Une session relax pour apprendre à se connaître autour de votre passion commune !</p>
            </div>
            <div className="proposal-actions">
              <button className="btn-proposal-decline" onClick={handleCloseProposal}>Plus tard</button>
              <button className="btn-proposal-accept" onClick={handleAcceptActivity}>Ça me dit ! 🎉</button>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container"></div>

      {showModal && <ActivityModal onClose={() => setShowModal(false)} />}
      {showValidation && <ValidationPopup onClose={handleCloseValidation} />}

      <BottomNav activePage="chat" />
    </div>
  );
}

export default Chat;
