import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* import './RealEstatePage.css';  when we want to cutomize our css */

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  description: string;
}

const RealEstatePage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
      } catch (err) {
        setError('Failed to fetch properties. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>; 
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="real-estate-page">
      <h1>Real Estate Listings</h1>
      <div className="property-list">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.imageUrl} alt={property.title} className="property-image" />
            <div className="property-details">
              <h2>{property.title}</h2>
              <p className="property-location">{property.location}</p>
              <p className="property-price">${property.price.toLocaleString()}</p>
              <p className="property-description">{property.description}</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstatePage;
