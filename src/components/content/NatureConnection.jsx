import React from 'react';
import './NatureConnection.css';

function NatureConnection() {
  
  return (
    <div className="nature-connection-page">
      
      {/* Header Section */}
      <div className="header-section">
        <h1>Nature Connection</h1>
        <p>
          Amid the hustle and bustle of college life, taking time to connect with nature can be a powerful way to recharge, find balance, and enhance your well-being. Whether you’re exploring green spaces around your campus or simply appreciating the natural world around you, connecting with nature offers countless benefits for your mind, body, and soul.
        </p>
      </div>

      {/* Why Nature Matters Section */}
      <div className="why-nature-matters">
        <h2>Why Connecting with Nature Matters</h2>
        <p>
          Spending time in nature has been shown to reduce stress, improve mood, and boost creativity. Whether it’s a walk in the park, a weekend hike, or simply sitting under a tree, engaging with nature is a simple yet powerful way to support your overall well-being.
        </p>
      </div>

      {/* Tangello Support Section */}
      <div className="tangello-support">
        <h2>Tangello is here to support you all the way</h2>
        <p>
          You can chat with <b>TangelloAI</b>  or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
        </p>
      </div>

      {/* Green Spaces */}
      <div className="green-spaces">
        <h2>Green Spaces</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>SNAP Spadina Community Garden</h3>
            <p>
              The Community Garden is a summer initiative designed to provide students with a communal space to grow their own produce, engage with the Toronto community, and learn valuable skills. Participants contribute to the SNAP Pantry program, ensuring access to nutritious food for fellow students.
            </p>
          </div>
          <div className="service-card">
            <h3>Walking Trails and Outdoor Areas</h3>
            <p>
              Explore the various walking trails and outdoor areas around campus. Whether you’re looking for a place to exercise or unwind, these trails offer a peaceful setting for all.
            </p>
          </div>
          <div className="service-card">
            <h3>Outdoor Study Spots</h3>
            <p>
              Combine productivity with nature by studying in one of the many outdoor study spots. These areas offer the perfect blend of fresh air and quiet focus.
            </p>
          </div>
        </div>
      </div>

      {/* Outdoor Adventures Section */}
      <div className="outdoor-adventures">
        <h2>Outdoor Adventures</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Hiking and Biking</h3>
            <p>
              Discover the natural beauty around Ontario with local hiking and biking trails. These outdoor activities offer a fun and active way to explore the area, get some exercise, and immerse yourself in the natural world.
            </p>
          </div>
          <div className="service-card">
            <h3>Nature Workshops and Events</h3>
            <p>
              Join GBC’s nature-focused workshops and events to develop outdoor skills and meet fellow nature enthusiasts. From birdwatching to nature photography, there’s something for everyone.
            </p>
          </div>
          <div className="service-card">
            <h3>Mindful Nature Practices</h3>
            <p>
              Incorporate mindfulness into your nature experiences with guided practices such as forest bathing and mindful walking. These practices can enhance your sense of connection to the environment.
            </p>
          </div>
        </div>
      </div>

      {/* Nature Therapy Section */}
      <div className="nature-therapy">
        <h2>Nature Therapy and Well-Being</h2>
        <p>
          Learn about nature therapy, also known as ecotherapy, and how spending time outdoors can positively impact your mental and emotional health. Nature is a powerful source of healing and inspiration.
        </p>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section">
        <h2>Reconnect with the Natural World</h2>
        <p>
          Nature is a powerful source of healing, inspiration, and balance. By taking time to connect with the natural world, you can enhance your well-being, find peace, and develop a deeper appreciation for the environment.
        </p>
      </div>
    </div>
  );
}

export default NatureConnection;
