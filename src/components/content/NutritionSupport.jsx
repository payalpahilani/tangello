import React from 'react';
import './NutritionSupport.css';

function NutritionSupport() {

  

  return (
    <div className="nutrition-support-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Nutrition Support</h1>
        <p>
          Good nutrition is the cornerstone of a healthy and energetic student life. Whether you're tackling a busy class schedule, preparing for exams, or enjoying campus activities, fueling your body with the right nutrients is essential for maintaining your energy, focus, and overall well-being. Tangello is here to guide you on your journey to making smart, nutritious choices that fit your lifestyle.
        </p>
      </div>

      {/* Why Nutrition Matters Section */}
      <div className="why-nutrition-matters">
        <h2>Why Nutrition Matters</h2>
        <p>
          Your diet directly impacts your physical health, mental clarity, and emotional balance. Eating well can boost your immune system, improve your concentration, and enhance your mood, all of which contribute to academic success and personal fulfillment. Understanding and prioritizing nutrition is key to thriving during your college years and beyond.
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
        <h2>Nutrition Resources and Services</h2>
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <h3>Healthy Eating on Campus</h3>
            <p>
              Eating well doesn’t have to be complicated or expensive. GBC’s campus dining services offer a variety of healthy and delicious options that cater to diverse dietary needs and preferences. Whether you’re vegan, vegetarian, gluten-free, or just looking for balanced meals, you’ll find plenty of nutritious choices.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <h3>Student Nutrition Access Program (SNAP)</h3>
            <p>
              The mission of the Student Nutrition Access Program (SNAP) is to provide support on the nutrition, health, and wellness needs of George Brown College students to help them succeed academically. Students can register for SNAP at Casa Loma Campus.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <h3>Personalized Nutrition Counseling</h3>
            <p>
              Need help developing a meal plan or managing dietary restrictions? Our registered dietitians are here to provide personalized nutrition counseling. Get expert advice on everything from managing food allergies to creating balanced meals.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <h3>Meal Planning and Prep</h3>
            <p>
              Learn the art of meal planning and preparation with our resources and workshops. We’ll teach you how to create nutritious meals on a budget, optimize your time in the kitchen, and make healthy eating a seamless part of your routine.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
            <h3>Mindful Eating</h3>
            <p>
              Practice mindful eating by paying attention to what, when, and how you eat. We offer guidance on developing healthy eating habits, understanding hunger and fullness cues, and enjoying your food in a balanced, stress-free way.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="service-card">
            <h3>Nutrition Education</h3>
            <p>
              Explore our library of nutrition resources, including articles, videos, and recipes that cover a wide range of topics. From understanding macronutrients to debunking food myths, our educational content empowers you to make informed choices about your diet.
            </p>
          </div>

          {/* Service Card 7 */}
          <div className="service-card">
            <h3>Healthy Recipes</h3>
            <p>
              Discover easy, nutritious recipes that fit a student’s budget and schedule. From quick breakfasts to satisfying dinners, our recipes are designed to be simple, delicious, and nourishing.
            </p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Nourish Your Body, Fuel Your Mind</h2>
        <p>
          Eating well is one of the best ways to take care of yourself during your time at college. Whether you’re looking to improve your diet, manage a specific health condition, or simply make healthier choices, Tangello is here to support you every step of the way.
        </p>
      </div>
    </div>
  );
}

export default NutritionSupport;
