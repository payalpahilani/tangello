import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import WellBeing from './components/WellBeing.jsx';
import TangelloPlace from './components/tangello-place.jsx';
import NearYouZone from './components/NearYouZone.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Profile from './components/Profile.jsx';
import './App.css';
import MentalHealthSupport from './components/content/MentalHealthSupport.jsx';
import HealthcareSupport from './components/content/HealthcareSupport.jsx';
import NutritionSupport from './components/content/NutritionSupport.jsx';
import CommunitySupport from './components/content/CommunitySupport.jsx';
import HousingSupport from './components/content/HousingSupport.jsx';
import FitnessSupport from './components/content/FitnessSupport.jsx';
import NatureConnection from './components/content/NatureConnection.jsx';
import StudentLife from './components/content/StudentLife.jsx';
import SleepSupport from './components/content/SleepSupport.jsx';


function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/WellBeing" element={<WellBeing/>} />
          <Route path="/tangello-place" element={<TangelloPlace/>} />
          <Route path="/NearYouZone" element={<NearYouZone/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Routes for content pages */}
          <Route path="/mentalhealth" element={<MentalHealthSupport/>} />
          <Route path="/healthcare" element={<HealthcareSupport/>} />
          <Route path="/nutrition" element={<NutritionSupport/>} />
          <Route path="/community-connection" element={<CommunitySupport/>} />
          <Route path="/housing" element={<HousingSupport/>} />
          <Route path="/fitness" element={<FitnessSupport/>} />
          <Route path="/nature" element={<NatureConnection/>} />
          <Route path="/student-life" element={<StudentLife/>} />
          <Route path="/sleep-relaxation" element={<SleepSupport/>} />
          </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
