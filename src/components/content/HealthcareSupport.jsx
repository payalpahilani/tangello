import React from 'react';
import './HealthcareSupport.css';


function HealthcareSupport() {

  return (
    <div className="healthcare-support-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Healthcare Support</h1>
        <p>
          Your health is our priority. Balancing academics and personal life can be challenging, and we're here to ensure you have access to the medical care and support you need. Our approach is designed to keep you healthy, informed, and ready to succeed.
        </p>
      </div>

      {/* Why Healthcare Matters Section */}
      <div className="why-healthcare-matters">
        <h2>Why Healthcare Matters</h2>
        <p>
          Good health is the foundation of a productive and fulfilling student life. Regular check-ups, prompt treatment for illnesses, and access to health information are essential for maintaining your well-being. Tangello can help you find quality healthcare services and resources to help you stay on top of your health.
        </p>
      </div>

      {/* Tangello Support Section */}
      <div className="tangello-support">
        <h2>Tangello is here to support you all the way</h2>
        <p>
          You can chat with <b>TangelloAI</b> or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
        </p>
      </div>

      {/* Available Services Section */}
      <div className="available-services">
        <h2>Available Services</h2>
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <h3>Medical Appointments</h3>
            <p>
              Schedule appointments with experienced healthcare professionals for general health check-ups, treatment of illnesses, and management of chronic conditions. Ontario has a robust medical system to address your health concerns with care and confidentiality.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <h3>Urgent Care</h3>
            <p>
              For non-life-threatening emergencies, urgent care services provide quick access to medical attention for cases such as minor injuries, broken bones, sprains, lacerations, asthma, dehydration, infections, and other urgent health issues.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <h3>Preventive Care</h3>
            <p>
              Preventive care is key to maintaining good health. The healthcare system in Ontario offers vaccinations, screenings, and health education to help you stay proactive about your well-being.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <h3>Sexual Health</h3>
            <p>
              Your sexual health is important. Walk-in Clinics provide confidential services including STI testing, contraceptive counseling, and reproductive health education.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
            <h3>Well-being Programs</h3>
            <p>
              Participate in wellness programs tailored to student life. From fitness classes to stress-relief workshops, GBC programs are designed to support your physical and mental health.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="service-card">
            <h3>Health Education</h3>
            <p>
              Access a wealth of information on various health topics, from nutrition and fitness to managing stress and preventing illness. Tangello’s resources empower you with the knowledge to make healthy choices.
            </p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Taking charge of your health is a crucial step towards achieving your academic and personal goals. Whether you need medical care, preventive services, or health information, Tangello is here to guide and support you.
        </p>
      </div>
    </div>
  );
}

export default HealthcareSupport;
