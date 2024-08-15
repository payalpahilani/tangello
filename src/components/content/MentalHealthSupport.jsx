import React from 'react';
import './MentalHealthSupport.css';

function MentalHealthSupport() {
      
        return (
          <div className="mental-health-support-page">
            
            {/* Header Section */}
            <div className="header-section">
              <h1>Mental Health Support</h1>
              <p>
                At our core, we believe that mental health is just as important as physical health. Life as a student can be both exciting and challenging, and it's completely normal to feel overwhelmed at times. We are here to provide you with the support, resources, and community you need to thrive mentally and emotionally.
              </p>
            </div>
      
            {/* Why Mental Health Matters Section */}
            <div className="why-mental-health-matters">
              <h2>Why Mental Health Matters</h2>
              <p>
                Your mental well-being influences every aspect of your life – from your academic performance to your relationships, and even your physical health. Taking care of your mind is a vital step toward achieving your goals and enjoying a balanced, fulfilling life.
              </p>
            </div>
      
            {/* Tangello Support Section */}
            <div className="tangello-support">
              <h2>Tangello is here to support you all the way</h2>
              <p>
                You can chat with <b>TangelloAI</b>  or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
              </p>
            </div>

      {/* Available Services Section */}
      <div className="available-services">
        <h2>Available Services</h2>
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <h3>Counseling and Therapy</h3>
            <p>
              Professional counselors and therapists are available to help you navigate through personal challenges, anxiety, depression, and more. Schedule a confidential session to talk about anything that's on your mind.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <h3>Peer Support Groups</h3>
            <p>
              Connect with fellow students who understand what you're going through. GBC’s peer support groups provide a safe, supportive environment to share experiences and coping strategies.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <h3>Workshops and Seminars</h3>
            <p>
              Attend workshops and seminars on topics such as stress management, mindfulness, and self-care. Gain practical tools and techniques to manage your mental health effectively.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <h3>Self-Help Tools</h3>
            <p>
              Explore Tangello’s library of self-help resources, including articles, videos, and apps designed to support your mental well-being. From guided meditations to time management tips, there's something for everyone.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
            <h3>Online Community</h3>
            <p>
              Join Tangello’s online community to connect with other students just like you in a safe space, share your experiences, and offer support. Together, we can create a network of care and understanding.
            </p>
          </div>
        </div>
      </div>

      {/* Crisis Support Section */}
      <div className="crisis-support">
        <h2>Crisis Support</h2>
        <p>
          If you're experiencing a mental health crisis, please call 911 immediately. This service is available 24/7 to provide urgent assistance.
        </p>
        <h3>Suicide Prevention Helpline</h3>
        <p>
          You deserve to be heard. We’re here to listen. You can call or text 988. A safe space to talk, 24 hours a day, every day of the year.
        </p>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Take the First Step</h2>
        <p>
          Taking care of your mental health is a journey, and you don't have to do it alone. Whether you're seeking support, looking for resources, or simply want to learn more, we're here for you every step of the way. Reach out today and take the first step towards a healthier, happier you.
        </p>
      </div>
    </div>
  );
}

export default MentalHealthSupport;
