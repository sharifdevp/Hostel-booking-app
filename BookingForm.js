import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';
const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomType, setRoomType] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add your booking logic here
    console.log('Booking submitted:', {
      checkInDate,
      checkOutDate,
      roomType,
      numberOfGuests,
    });
  };

  return (
    
    <form onSubmit={handleFormSubmit}>
      <div className='booking-form'>
        <div><h2>Book Here</h2></div>
        <label>Check-In Date:</label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className='booking-form'>
        <label>Check-Out Date:</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className='booking-form'>
        <label>Room Type:</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">Select Room Type</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      <div className='booking-form'>
        <label>Number of Guests:</label>
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </div>

      <button type="submit" className="book-now" onclick={handleFormSubmit}>Book Now</button>
      
    </form>
  );
};

export default BookingForm;