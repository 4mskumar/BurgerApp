import React from 'react';
import FollowCursor from "./Components/FollowCursor";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Testimonial from './Components/Testimonial';
import Our_feat from './Components/Our_feat';
import History from './Components/History';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      {/* The cursor will follow across the entire app */}
      <FollowCursor />

      {/* Navbar */}
      <NavBar />

      {/* Hero section */}
      <Hero />

      {/* Other sections */}
      <Testimonial />
      <Our_feat />
      <History />
      <Footer />
    </div>
  );
};

export default App;
