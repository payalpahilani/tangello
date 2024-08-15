import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate(); 

  const navigateToTangelloPlace = () => {
    navigate('/tangello-place');
    };

  return (
    <section>
      <section className="hero">
        <h1>Meet Your Personal Health and Well-being Navigator!</h1>
        <p>Chat with Tangello or visit Tangello Place to connect with other students and join interesting and dynamic activities designed just for you.</p>
        <img src="/assets/MainScreen.png" alt="hands-joining" className="header-image"/>
      </section>
      
      <h3 className='event-h3'>Upcoming Events at Tangello Place</h3>
      <section className="events">
        {/* Event 1 */}
        <div className="event-card" onClick={navigateToTangelloPlace}>
          <div className="event-thumbnail" style={{ backgroundImage: "url('/assets/Events-Dance.png')" }}>
          </div>
          <div className="event-details">
            <h4>Therapeutic Dance Movement</h4>
            <p><span className="icon-group">📍</span>Multiple Locations</p>
          </div>
        </div>
        {/* Event 2 */}
        <div className="event-card" onClick={navigateToTangelloPlace}>
          <div className="event-thumbnail" style={{ backgroundImage: "url('/assets/Events-Emotions.png')" }}>
          </div>
          <div className="event-details">
            <h4>Healthy Emotions Group</h4>
            <p><span className="icon-group">📍</span>Multiple Locations</p>
          </div>
        </div>
        {/* Event 3 */}
        <div className="event-card" onClick={navigateToTangelloPlace}>
          <div className="event-thumbnail" style={{ backgroundImage: "url('/assets/Events-Stress.png')" }}>
          </div>
          <div className="event-details">
            <h4>Stress Management Workshop</h4>
            <p><span className="icon-group">📍</span>Multiple Locations</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
