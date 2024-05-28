import React from 'react';
import '../css/Service.css';

const Service = () => {
  const services = [
    {
      title: 'Movie Search',
      description: 'Find your favorite movies easily with our powerful search feature.',
      icon: '🔍'
    },
    {
      title: 'Popular Movies',
      description: 'Stay updated with the latest popular movies and their ratings.',
      icon: '⭐'
    },
    {
      title: 'Movie Details',
      description: 'Get detailed information about any movie, including trailers and reviews.',
      icon: '🎬'
    },
    {
      title: 'User Reviews',
      description: 'Read reviews from other users and share your own opinions.',
      icon: '📝'
    }
  ];

  return (
    <div className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
