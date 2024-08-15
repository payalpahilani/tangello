import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './tangello-place.css';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// Define the events and locations for each campus
const campusLocations = {
  "St. James": {
    location: "200 King St E, Toronto, ON M5A 3W8",
    events: [
      { 
        name: "Healthy Emotions Group", 
        image: "assets/Events-Emotions.png", 
        occupancy: "5/15", 
        date: "2024-08-25", 
        time: "2:00 PM",
        description: "Learn mindfulness and distress tolerance to help manage difficult emotions and behaviors. Full participation is essential.",
        requirements: "Open to all students; prior registration required."
      },
      { 
        name: "Therapeutic Dance Movement",
        image: "assets/Events-Dance.png",
        occupancy: "10/20",
        date: "2024-08-24",
        time: "10:00 AM",
        description: "Explore movement and dance to reduce stress and reconnect with your body in a supportive environment.",
        requirements: "No prior dance experience necessary; come prepared to move and explore."
      }
    ]
  },
  "Waterfront": {
    location: "451 Dockside Dr, Toronto, ON M5A 0B6",
    events: [
      { 
        name: "Stress Management Workshop", 
        image: "assets/Events-Stress.png", 
        occupancy: "8/12", 
        date: "2024-08-26", 
        time: "1:00 PM",
        description: "Engage in practical activities and discussions to learn effective stress management techniques.",
        requirements: "Open to all students; prior registration required."
      },
      { 
        name: "Therapeutic Dance Movement",
        image: "assets/Events-Dance.png",
        occupancy: "10/20",
        date: "2024-08-24",
        time: "10:00 AM",
        description: "Explore movement and dance to reduce stress and reconnect with your body in a supportive environment.",
        requirements: "No prior dance experience necessary; come prepared to move and explore."
      }
    ]
  },
  "Casa Loma": {
    location: "5175 Kendal Ave, Toronto, ON M5R 3S8",
    events: [
      { 
        name: "Changing Behaviours", 
        image: "assets/Events-Behaviours.png", 
        occupancy: "12/15", 
        date: "2024-08-27", 
        time: "3:00 PM",
        description: "Learn techniques to modify unwanted behaviors through cognitive-behavioral strategies and peer support.",
        requirements: "Open to all students; prior registration required."
      },
      { 
        name: "Healthy Emotions Group", 
        image: "assets/Events-Emotions.png", 
        occupancy: "5/15", 
        date: "2024-08-25", 
        time: "2:00 PM",
        description: "Learn mindfulness and distress tolerance to help manage difficult emotions and behaviors. Full participation is essential.",
        requirements: "Open to all students; prior registration required."
      }
    ]
  },
  "Daniels": {
    location: "3 Lower Jarvis St, Toronto, ON M5A 3Y5",
    events: [
      { 
        name: "Changing Behaviours", 
        image: "assets/Events-Behaviours.png", 
        occupancy: "12/15", 
        date: "2024-08-27", 
        time: "3:00 PM",
        description: "Learn techniques to modify unwanted behaviors through cognitive-behavioral strategies and peer support.",
        requirements: "Open to all students; prior registration required."
      },
      { 
        name: "Healthy Emotions Group", 
        image: "assets/Events-Emotions.png", 
        occupancy: "5/15", 
        date: "2024-08-25", 
        time: "2:00 PM",
        description: "Learn mindfulness and distress tolerance to help manage difficult emotions and behaviors. Full participation is essential.",
        requirements: "Open to all students; prior registration required."
      },
      { 
        name: "Stress Management Workshop", 
        image: "assets/Events-Stress.png", 
        occupancy: "8/12", 
        date: "2024-08-26", 
        time: "1:00 PM",
        description: "Engage in practical activities and discussions to learn effective stress management techniques.",
        requirements: "Open to all students; prior registration required."
      },
      { 
        name: "Therapeutic Dance Movement",
        image: "assets/Events-Dance.png",
        occupancy: "10/20",
        date: "2024-08-24",
        time: "10:00 AM",
        description: "Explore movement and dance to reduce stress and reconnect with your body in a supportive environment.",
        requirements: "No prior dance experience necessary; come prepared to move and explore."
      }
    ]
  }
};

function TangelloPlace() {
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    additional_notes: ''
  });
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCampus(event.target.value);
    setSelectedEvent(null); 
  };

  const openDetailsModal = (event) => {
    setEventDetails(event);
    setSelectedEvent(event); 
    setDetailsModalIsOpen(true);
  };

  const openRegistrationModal = () => {
    if (eventDetails) { // Check if eventDetails is set
      setSelectedEvent(eventDetails);  // Set the selected event here
      setModalIsOpen(true);
      setDetailsModalIsOpen(false);
    } else {
      console.error('Event details not set.');
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!selectedEvent) {
      console.error('No event selected for registration');
      setRegistrationStatus('No event selected for registration.');
      return;
    }
  
    axios.post('http://localhost:3001/register_event', {
      ...formData,
      campus_location: selectedCampus,
      event_name: selectedEvent.name
    }).then(response => {
      setRegistrationStatus('Registration successful!');
      setTimeout(() => {
        setModalIsOpen(false);
        setRegistrationStatus('');
        setFormData({ name: '', email: '', phone_number: '', additional_notes: '' });
      }, 2000);
    }).catch(error => {
      console.error('There was an error registering for the event!', error);
      setRegistrationStatus('Failed to register for the event.');
    });
  };
  

  return (
    <div className="tangello-space">
      <h1>Tangello Place</h1>
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} interval={2000}>
         <div>
            <img src="assets/Space2.png" alt="Tangello Space 2" className="space-image" />
          </div>
          <div>
            <img src="assets/Space4.png" alt="Tangello Space 4" className="space-image" />
          </div>
          <div>
            <img src="assets/Space5.png" alt="Tangello Space 5" className="space-image" />
          </div>
        </Carousel>
      </div>
      <p>Welcome to Tangello Place, a dedicated place for students to relax, connect, and engage in various activities to promote holistic well-being. Explore our campuses to see the available resources and upcoming events.</p>
      <div className="dropdown-container">
        <label htmlFor="campus-select">Select Campus Location: </label>
        <select id="campus-select" value={selectedCampus} onChange={handleSelectChange}>
          <option value="">--Select a Campus--</option>
          {Object.keys(campusLocations).map(campus => (
            <option key={campus} value={campus}>{campus}</option>
          ))}
        </select>
      </div>

      {selectedCampus && (
        <div className="campus-info">
          <p><strong>Address:</strong> {campusLocations[selectedCampus].location}</p>
          <div className="events-list">
            {campusLocations[selectedCampus].events.map((event, index) => (
              <div key={index} className="event-item">
                <img src={event.image} alt={event.name} className="event-image" />
                <div className="event-details">
                  <h3>{event.name}</h3>
                  <p><strong>Occupancy:</strong> {event.occupancy}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <button onClick={() => openDetailsModal(event)}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal
        isOpen={detailsModalIsOpen}
        onRequestClose={() => setDetailsModalIsOpen(false)}
        contentLabel="Event Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {eventDetails && (
          <div>
            <h2>{eventDetails.name}</h2>
            <p><strong>Description:</strong> {eventDetails.description}</p>
            <p><strong>Requirements:</strong> {eventDetails.requirements}</p>
            <div className="button-group">
            <button onClick={openRegistrationModal}>Register</button>
            <button onClick={() => setDetailsModalIsOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Event Registration"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="registration-form">
          <h2>Register for {eventDetails ? eventDetails.name : 'Event'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Additional Notes:</label>
              <textarea name="additional_notes" value={formData.additional_notes} onChange={handleInputChange}></textarea>
            </div>
            <div className="button-group">
              <button type="submit">Submit</button>
              {registrationStatus && <p>{registrationStatus}</p>}
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default TangelloPlace;
