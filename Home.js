import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import hostel1 from './hostel1.png';
import hostel2 from './hostel2.png';
import hostel3 from './hostel3.jpg';
import hostel4 from './hostel4.jpg';
export default function Home() {
  return (
    <div>
      <div>
        <h2>WELCOME TO THE HOME OF HOSTELS</h2>
        <h2>Please navigate through our lists for more </h2>
      </div>
    <div className="home">
       <p><h3>Warm Greeting</h3></p>
<p>Welcome to our cozy hostel! Your home away from home. 
Whether you're a student, a traveler, or simply seeking a comfortable stay, 
we're delighted to host you. Explore our modern facilities and find the perfect 
accommodation for your needs.</p>

 <p><h3>Comfort and Convenience</h3></p>
<p>Step into a world of comfort and convenience! Welcome to our hostel, 
where modern amenities meet a welcoming atmosphere. 
From well-designed rooms to friendly staff, we're here to make your stay memorable. 
Feel at home, away from home.</p>

 <p><h3>Explore and Enjoy</h3></p>
<p>Welcome to our vibrant hostel! Your gateway to a delightful stay. 
Discover our diverse range of rooms, each crafted for your comfort. 
Whether you're here for studies or leisure, we invite you to explore, 
unwind, and enjoy the unique charm of our hostel.</p>

 <p><h3>Secure and Serene</h3></p>
<p>Greetings! Nestled in the heart of [Your City], 
our hostel offers a secure and serene haven for students and 
travelers alike. As you embark on your journey, we extend a warm welcome. 
Experience tranquility, modern amenities, and a sense of community here with us.</p>
     
   <Link to="/Login">Go To</Link>   
    </div>
    <div className=''>
    <img src={hostel1} className="emojilogo" alt="Hostel Logo" />
    </div>
    <div className=''>
    <img src={hostel2} className="emojilogo" alt="Hostel Logo" />
    </div>
    <div className=''>
    <img src={hostel3} className="emojilogo" alt="Hostel Logo" />
    </div>
    <div className=''>
    <img src={hostel4} className="emojilogo" alt="Hostel Logo" />
    </div>
    </div>
  );
}