import React from 'react';
import './StudentLife.css';

function StudentLife() {
 

  return (
    <div className="student-life-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Student Life</h1>
        <p>
          College is about more than just classes and exams—it's a time to explore, grow, and discover who you are. Student life is rich with opportunities to learn outside the classroom, make lasting memories, and shape your future. Tangello is here to help you navigate all aspects of your student experience.
        </p>
      </div>

      {/* Why Student Life Matters Section */}
      <div className="why-student-life-matters">
        <h2>Why Student Life Matters</h2>
        <p>
          The experiences you gain during your time at college play a crucial role in your personal and professional development. Whether you’re getting involved in campus activities, exploring new interests, or making lifelong friends, every aspect of student life contributes to your growth.
        </p>
      </div>

      {/* Tangello Support Section */}
      <div className="tangello-support">
        <h2>Tangello is here to support you all the way</h2>
        <p>
          You can chat with <b>TangelloAI</b> " or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
        </p>
      </div>

      {/* Resources Section */}
      <div className="student-life-resources">
        <h2>Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Student Services</h3>
            <p>
              Take advantage of the various student services available to support your journey. From academic advising and career counseling to health services, legal services, and financial aid, we’re here to help you navigate challenges and make the most of college life.
            </p>
          </div>

          <div className="resource-card">
            <h3>Leadership and Volunteering</h3>
            <p>
              Develop leadership skills and give back to the community by getting involved in leadership roles or volunteering opportunities. These experiences will enrich your time at college and prepare you for life beyond graduation.
            </p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Make the Most of Your Student Life</h2>
        <p>
          College is a time of exploration, discovery, and growth. It’s a time to try new things, meet new people, and create unforgettable memories. Tangello is here to ensure that your student life is as fulfilling and rewarding as possible. Get involved, stay active, and embrace all that GBC has to offer. This is your time—make it count.
        </p>
      </div>
    </div>
  );
}

export default StudentLife;
