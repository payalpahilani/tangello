import React from 'react';
import './WellBeing.css'; 
import { useNavigate } from 'react-router-dom'; 

function WellBeing() {
  const navigate = useNavigate(); 

  // Circle data array (including empty circles for design purposes)
  const circles = [
   
    {
      title: "Community and Connection",
      size: "medium",
      circleColor: "#00537A",
      textColor: "#FFFFFF",
      link: "/community-connection" 
    },
    {
      title: "Sleep and Relaxation",
      size: "large",
      circleColor: "#FF6633",
      textColor: "#FFFFFF",
      link: "/sleep-relaxation" 
    },
    {
      title: "Housing",
      size: "small",
      circleColor: "#FFFFFF",
      textColor: "#000",
      borderColor: "#00A8E7",
      link: "/housing" 
    },
    {
      title: "Student Life",
      size: "small",
      circleColor: "#00A8E7",
      textColor: "#FFFFFF",
      link: "/student-life" 
    },
    {
      title: "Nutrition",
      size: "small",
      circleColor: "#FFFFFF",
      textColor: "#000",
      borderColor: "#FF6633",
      link: "/nutrition" 
    },

    {
      title: "Mental Health",
      size: "large",
      circleColor: "#FF6633",
      textColor: "#FFFFFF",
      link: "/mentalhealth" 
    },
    {
      title: "Healthcare",
      size: "small",
      circleColor: "#00A8E7",
      textColor: "#FFFFFF",
      link: "/healthcare" 
    },
    {
      title: "Nature Connection",
      size: "medium",
      circleColor: "#00537A",
      textColor: "#FFFFFF",
      link: "/nature" 
    },
  
    {
      title: "Fitness",
      size: "large",
      circleColor: "#ffff",
      borderColor: "#00537A",
      textColor: "#000",
      link: "/fitness" 
    },

   
  ];


  // Size mapping for circle sizes
  const sizeMap = {
    small: "25vw",
    medium: "30vw",
    large: "40vw",
  };

  return (
    <div className="wellbeing-page">
      <div className="wellbeing-description-container">
        <h2>Explore Your Path to Holistic Well-Being</h2>
        <p>
          Discover the different health and well-being services and resources available to you by tapping on the elements below. Each of them represents critical well-being factors, guiding you on a journey to holistic physical, mental, and social well-being.
        </p>
      </div>

      <div className="circle-container">
        {circles.map((circle, index) => {
          const circleStyle = {
            width: sizeMap[circle.size],
            height: sizeMap[circle.size],
            backgroundColor: circle.circleColor,
            border: `1px solid ${circle.borderColor}`,
            borderRadius: '50%',
            color: circle.textColor || 'white', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            textAlign: 'center',
            margin: '5px', // Add margin between circles
            cursor: circle.link ? 'pointer' : 'default', // Cursor pointer only for clickable circles
          };

          return (
            <div
              key={index}
              style={circleStyle}
              className={`circle ${circle.size}`}
              onClick={circle.link ? () => navigate(circle.link) : undefined} // Only navigate if there's a link
            >
              {circle.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WellBeing;
