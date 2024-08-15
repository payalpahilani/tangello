import React from 'react';
import './HousingSupport.css';

function HousingSupport() {
  
  return (
    <div className="housing-support-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Housing</h1>
        <p>
          Finding the perfect place to live is an essential part of your college experience. Whether you prefer the convenience of college residence or the independence of off-campus housing, your living environment plays a crucial role in your academic success and personal well-being. Tangello is here to help you explore your options, make informed decisions, and find a space that feels like home.
        </p>
      </div>

      {/* Why Housing Matters Section */}
      <div className="why-housing-matters">
        <h2>Why Housing Matters</h2>
        <p>
          Your living situation can greatly influence your day-to-day life as a student. The right housing provides comfort, community, and a sense of stability, all of which are key to thriving both academically and socially. A well-chosen home environment supports your study habits, offers opportunities for social connections, and contributes to your overall happiness.
        </p>
      </div>

      {/* Tangello Support Section */}
      <div className="tangello-support">
        <h2>Tangello is here to support you all the way</h2>
        <p>
          You can chat with <b>TangelloAI</b> or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
        </p>
      </div>

      {/* On-Campus Housing Section */}
      <div className="on-campus-housing">
        <h2>On-Campus Housing</h2>
        <div className="housing-description">
          <h3>The George</h3>
          <p>
            George Brown College has an on-campus student residence, The George, that features all-inclusive living, with the flexibility of eight-month (fall/winter) and four-month (summer) agreements. 
          </p>
          <p>
            The George houses over 500 students in fully furnished two-bedroom suites that include a kitchenette and three-piece bathroom. The rooms also have Wi-Fi, flat-screen TVs with cable, and floor-to-ceiling windows. Common spaces include a patio, game rooms, and study spaces. 
          </p>
          <p>
            The George is located at 80 Cooperage St., Toronto. Inquiries can be answered via email at <a href="mailto:info@georgebrownresidence.ca">info@georgebrownresidence.ca</a> or by phone at (416) 761-8000.
          </p>
        </div>
      </div>

      {/* Housing Support Services */}
      <div className="available-services">
        <h2>Housing Support Services</h2>
        <p>
          Our housing office is here to assist with all aspects of on-campus living, from room assignments to maintenance requests. We’re dedicated to making your housing experience smooth and enjoyable.
        </p>
      </div>

      {/* Off-Campus Housing Section */}
      <div className="off-campus-housing">
        <h2>Off-Campus Housing</h2>
        <p>
          If you’re looking to live off-campus, we provide resources to help you find the right place. Explore listings for apartments, shared houses, or private rentals. Our resources include tips on budgeting, leases, and finding roommates.
        </p>
        <div className="housing-description">
          <h3>Places4Students</h3>
          <p>
            George Brown College partners with Places4Students, offering property listings, roommate profiles, and more. Visit <a href="https://www.places4students.com">Places4Students</a> for more information.
          </p>
        </div>
        <div className="housing-description">
          <h3>Other Options</h3>
          <p>
            Toronto offers various websites for rental listings, including Viewit.ca, Rentals.ca, RentFaster.ca, and others. Platforms like 4Stay offer student housing solutions as well. 
          </p>
          <p>
            Canada HomeShare™ is another option that pairs students with elderly Canadians for affordable housing. This program is facilitated by social workers who ensure safety and security.
          </p>
        </div>
      </div>

      {/* Emergency Housing Services Section */}
      <div className="emergency-support">
        <h2>Emergency Housing Services</h2>
        <p>
          For students facing emergency housing issues, the following resources are available:
        </p>
        <ul>
          <li><strong>City of Toronto Central Intake</strong>: Call 311 or 416-338-4766</li>
          <li><strong>Eva’s Place</strong>: Emergency shelter for youth aged 16-24. Contact: 416-338-4766.</li>
          <li><strong>Horizons for Youth</strong>: Shelter for youth aged 16-24. Contact: 416-781-9898.</li>
          <li><strong>Covenant House</strong>: Youth shelter and drop-in center. Contact: 416-593-4849.</li>
          <li><strong>YWCA Toronto</strong>: Offers free shelters for women, transgender, and non-binary individuals.</li>
        </ul>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Find Your Perfect Home</h2>
        <p>
          Whether you decide to live on-campus or off-campus, Tangello is here to support you every step of the way. Explore your options and find the perfect place to call home during your time at GBC.
        </p>
      </div>
    </div>
  );
}

export default HousingSupport;
