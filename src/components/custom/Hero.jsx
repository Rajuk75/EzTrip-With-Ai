import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="font-extrabold text-3xl md:text-4xl text-center mt-16">
        <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span>
        <br />
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-lg text-gray-500 text-center mt-4 mx-4">
        Your Personal trip Planner and travel curator, creating itineraries tailored to your interests and budget
      </p>

      {/* Button to navigate to CreateTrip page */}
      <Link to="/create-trip">
        <button className="create-trip-btn mt-8">Create Trip</button>
      </Link>
    </div>
  );
}

export default Hero;
