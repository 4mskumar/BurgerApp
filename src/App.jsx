import React from 'react';
import FollowCursor from "./Components/FollowCursor";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
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
      <Navbar />

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
