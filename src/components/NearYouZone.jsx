import React from 'react';
import './NearYouZone.css';
import Footer from './Footer.jsx';

function NearYouZone() {
    return (
      <div className="near-you-zone">
      <div className="overview-container">
          <img src="/assets/Frame.png" alt="General Overview" className="overview-image"/>
      </div>
      <p className="description">Explore everything from community centers to recreational activities available in your neighborhood.</p>
            <div className="options-container">
                <div className="option-card">
                    <img src="/assets/Near-Walk.png" alt="15-Minute Neighborhood" className="option-image"/>
                    <h2>15-Minute Neighborhood</h2>
                    <p>Discover what you can access within a 15-minute walk from your home—cafes, parks, schools, and more. This promotes a sustainable, community-focused lifestyle.</p>
                    <a href="https://gbc-bsi.maps.arcgis.com/apps/webappviewer/index.html?id=4663a76dda324d9f9e24219b94efeec8" target="_blank" rel="noopener noreferrer" className="explore-button">Explore 15-Minute Vicinity</a>
                </div>

                <div className="option-card">
                    <img src="/assets/Near-City.png" alt="City Scale Insights" className="option-image"/>
                    <h2>City Scale Insights</h2>
                    <p>Explore urban layout and key infrastructures across the city. Understand how city planning and public transport networks shape your urban experience.</p>
                    <a href="https://gbc-bsi.maps.arcgis.com/apps/webappviewer/index.html?id=47ab2cab8d92491c8f87b0b3161035fe" target="_blank" rel="noopener noreferrer" className="explore-button">Explore City Scale</a>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}

export default NearYouZone;
