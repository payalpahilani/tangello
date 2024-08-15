import React from 'react';
import './FitnessSupport.css';

function FitnessSupport() {
 
  return (
    <div className="fitness-support-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Fitness</h1>
        <p>
          Staying active is a vital part of maintaining your physical health, mental clarity, and overall well-being during your time at college. Whether you're a seasoned athlete or just getting started, Tangello’s resources are designed to help you incorporate fitness into your daily routine.
        </p>
      </div>

      {/* Why Fitness Matters Section */}
      <div className="why-fitness-matters">
        <h2>Why Fitness Matters</h2>
        <p>
          Regular physical activity offers countless benefits, from improved strength and endurance to reduced stress and better sleep. Fitness enhances your quality of life, boosts confidence, and supports mental health. It keeps you energized, focused, and resilient in the face of challenges.
        </p>
      </div>

      {/* Tangello Support Section */}
      <div className="tangello-support">
        <h2>Tangello is here to support you all the way</h2>
        <p>
          You can chat with <b>TangelloAI</b> or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
        </p>
      </div>

      {/* Fitness Resources and Facilities */}
      <div className="available-services">
        <h2>Fitness Resources and Facilities</h2>
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <h3>Fitness Centres</h3>
            <p>
              GBC’s Fitness Centres at St. James, Casa Loma, and Waterfront campuses offer cardio, resistance, and free weight training options. With a wide range of equipment and a welcoming environment, these centres cater to all fitness levels.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <h3>Personal Training</h3>
            <p>
              Looking for personalized guidance? Our certified trainers are available to help you design a workout plan tailored to your specific goals. Get expert advice, motivation, and support to enhance your fitness journey.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <h3>Fitness Apps and Tools</h3>
            <p>
              Enhance your fitness journey with apps and tools that help track workouts, set goals, and stay motivated. These digital resources support your fitness journey by tracking steps, heart rate, and more.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <h3>Nutrition and Fitness</h3>
            <p>
              Good nutrition and fitness go hand in hand. Explore how to fuel your body for exercise, recover after workouts, and maintain a balanced diet to support your fitness goals. Nutrition is key to achieving optimal results.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
            <h3>Mental Health and Fitness</h3>
            <p>
              Physical activity is a powerful tool for managing stress, anxiety, and other mental health challenges. Regular exercise can boost your mood, improve resilience, and help you maintain a positive outlook.
            </p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Get Moving, Stay Healthy, and Have Fun</h2>
        <p>
          Fitness is a journey that’s unique to each individual. Whether you’re aiming to improve athletic performance, manage stress, or simply stay active, Tangello’s fitness resources and programs are here to support you every step of the way.
        </p>
      </div>
    </div>
  );
}

export default FitnessSupport;
