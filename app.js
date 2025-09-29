import React, { useState } from "react";
import "./App.css";

function App() {
  // State for property list
  const [properties, setProperties] = useState([
    {
      id: 1,
      address: "123 Main St, New York",
      location: "New York",
      value: 850000,
      rent: 2500,
      image: "https://source.unsplash.com/400x250/?house,1"
    },
    {
      id: 2,
      address: "456 Oak Ave, Los Angeles",
      location: "Los Angeles",
      value: 720000,
      rent: 2200,
      image: "https://source.unsplash.com/400x250/?house,2"
    }
  ]);

  // State for form inputs
  const [newAddress, setNewAddress] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newRent, setNewRent] = useState("");

  // Function to add new property
  const addProperty = (e) => {
    e.preventDefault();
    if (!newAddress || !newLocation || !newValue || !newRent) return;

    const newProperty = {
      id: properties.length + 1,
      address: newAddress,
      location: newLocation,
      value: Number(newValue),
      rent: Number(newRent),
      image: `https://source.unsplash.com/400x250/?house,${properties.length + 3}`
    };

    setProperties([...properties, newProperty]);

    // Clear form
    setNewAddress("");
    setNewLocation("");
    setNewValue("");
    setNewRent("");
  };

  return (
    <div className="app">
      <header>
        <h1>Dream Homes Tracker</h1>
      </header>

      <div className="container">
        {/* Add Property Form */}
        <form className="add-form" onSubmit={addProperty}>
          <input
            type="text"
            placeholder="Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <input
            type="number"
            placeholder="Value ($)"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rent ($/month)"
            value={newRent}
            onChange={(e) => setNewRent(e.target.value)}
          />
          <button type="submit">Add Property</button>
        </form>

        {/* Property Grid */}
        <div className="property-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.address} />
              <div className="property-details">
                <h2>{property.address}</h2>
                <p>Location: {property.l

