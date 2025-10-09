import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Initial property list
  const [properties, setProperties] = useState([
    {
      id: 1,
      address: "123 Main St, New York",
      location: "New York",
      value: 850000,
      rent: 2500,
      image: "https://source.unsplash.com/400x250/?modern-house",
    },
    {
      id: 2,
      address: "456 Oak Ave, Los Angeles",
      location: "Los Angeles",
      value: 720000,
      rent: 2200,
      image: "https://source.unsplash.com/400x250/?villa",
    },
  ]);

  // Form inputs
  const [formData, setFormData] = useState({
    address: "",
    location: "",
    value: "",
    rent: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new property
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.address || !formData.location || !formData.value) return;

    const newProperty = {
      id: properties.length + 1,
      address: formData.address,
      location: formData.location,
      value: Number(formData.value),
      rent: Number(formData.rent),
      image: `https://source.unsplash.com/400x250/?house,${properties.length + 1}`,
    };

    setProperties([...properties, newProperty]);
    setFormData({ address: "", location: "", value: "", rent: "" });
  };

  return (
    <div className="app">
      <header>
        <h1>🏡 Dream Homes Tracker</h1>
      </header>

      <div className="container">
        {/* Add Property Form */}
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="number"
            name="value"
            placeholder="Value ($)"
            value={formData.value}
            onChange={handleChange}
          />
          <input
            type="number"
            name="rent"
            placeholder="Rent ($/month)"
            value={formData.rent}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Add Property
          </button>
        </form>

        {/* Property Grid */}
        <div className="property-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.address} />
              <div className="property-details">
                <h2>{property.address}</h2>
                <p>Location: {property.location}</p>
                <p className="property-price">
                  Value: ${property.value.toLocaleString()}
                </p>
                <p>Rent: ${property.rent.toLocaleString()}/month</p>
                <a href="#" className="btn">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>&copy; 2025 Dream Homes Tracker. All rights reserved.</footer>
    </div>
  );
};

export default App;

