import React from 'react';
import './CommunitySupport.css';

function CommunitySupport() {



  return (
    <div className="community-support-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Community & Connection</h1>
        <p>
          Life as a student is about more than just academics—it's about building connections that will last a lifetime. Whether you’re looking to make new friends, join student organizations, or simply find a place where you belong, Tangello’s community resources are here to help you foster meaningful relationships and create a support network that enhances your college experience.
        </p>
      </div>

      {/* Why Community Matters Section */}
      <div className="why-community-matters">
        <h2>Why Community Matters</h2>
        <p>
          A strong sense of community can make all the difference during your time in school. Being part of a community provides emotional support, enriches your social life, and contributes to your overall well-being. It’s through these connections that you’ll find encouragement, shared experiences, and opportunities for growth both personally and professionally.
        </p>
      </div>

      {/* Tangello Support Section */}
      <div className="tangello-support">
      <h2>Tangello is here to support you all the way</h2>
      <p>
        You can chat with <b>TangelloAI</b> or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
      </p>
      </div>

      {/* Ways to Connect Section */}
      <div className="available-services">
        <h2>Ways to Connect</h2>
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <h3>Student Groups</h3>
            <p>
              Explore a wide range of GBC’s student groups that cater to diverse interests and passions. Whether you’re into arts, sports, social activism, or academic clubs, there’s a group for you. Joining a student group is a great way to meet like-minded individuals and make a positive impact on campus.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <h3>Campus Events</h3>
            <p>
              Get involved by attending campus events and activities. From social mixers and cultural festivals to academic workshops and guest lectures, there’s always something happening. These events are perfect opportunities to meet new people and engage with the GBC community.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <h3>Mentorship Programs</h3>
            <p>
              Connect with experienced students, faculty, or alumni through GBC’s mentorship programs. Whether you need academic guidance, career advice, or personal support, mentors can provide valuable insights and help you navigate your student journey.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <h3>Peer Support Networks</h3>
            <p>
              Join our peer support networks where students come together to share advice, discuss challenges, and offer encouragement. These networks provide a safe and inclusive space to talk about your experiences and build strong, supportive relationships.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
            <h3>Leadership Opportunities</h3>
            <p>
              Get involved in leadership roles within the school. GBC’s Student Association regularly posts opportunities for students to lead groups, organize campus events, allowing you to develop leadership skills and make a difference on campus.
            </p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Build Your Community Today</h2>
        <p>
          Post-secondary life is a time to build connections that will shape your future. Whether you’re looking to make new friends, find a mentor, or get involved in student life, Tangello is here to support you in creating a strong and vibrant network.
        </p>
      </div>
    </div>
  );
}

export default CommunitySupport;
