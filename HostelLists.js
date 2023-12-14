import React, { useState } from 'react';
import './HostelLists.css';
const hostelData = [
  { id: 1, name: 'Baskon', price: '650,000', rating: 4.5 },
  { id: 2, name: 'Olympia', price: '1,500,000', rating: 3.8 },
  { id: 3, name: 'God is Able', price: '1,000,000', rating: 4.0 },
  { id: 4, name: 'Nakiyinga', price: '1,200,000', rating: 4.0 },
  { id: 5, name: 'Garden Courts', price: '850,000', rating: 4.0 },
  { id: 6, name: 'Helican', price: '700,000', rating: 4.0 },
  { id: 7, name: 'Kasamba', price: '500,000', rating: 4.0 },
  { id: 8, name: 'MISH', price: '850,000', rating: 4.0 },
  { id: 9, name: 'JB', price: '800,000', rating: 4.0 },
  { id: 10, name: 'Lady Juliana', price: '650,000', rating: 4.0 },
  { id: 11, name: 'Maimood', price: '1,300,000', rating: 4.0 },
  // Add more hostel data as needed
];

const HostelLists = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Simulate searching based on the provided query
  const searchHostels = () => {
    const results = hostelData.filter((hostel) =>
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="hostellists">
      <h2>Hostel Search Results</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search hostels..."
      />
      <button onClick={searchHostels}>Search</button>

      {searchResults.length === 0 ? (
        <p>No hostels found</p>
      ) : (
        <ul>
          {searchResults.map((hostel) => (
            <li key={hostel.id}>
              <h3>{hostel.name}</h3>
              <p>Price: {hostel.price}</p>
              <p>Rating: {hostel.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HostelLists;