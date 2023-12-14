import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
function Sidebar(){

    return(
        <div className='sidebar'>
           <a href="#">
           <i className="">
            <span className=''>Sidebar</span>
           </i>
           </a>
           <hr className='' />

           <ul className="ordered">
            <li className='list-items'>
            <Link to="/">
                <i className=''></i>
                <span className='lists'>Dashboard</span>
            </Link>
            </li>
            <li className='list-items'>
            <Link to="bookingform">
                <i className=''></i>
                <span className='lists'>Booking Form</span>
            </Link>
            </li>
            <li className='list-items'>
            <Link to="hostellists">
                <i className=''></i>
                <span className='lists'>Hostel Lists</span>
            </Link>
            </li>
            <li className='list-items'>
            <Link to="order">
                <i className=''></i>
                <span className='lists'>Hostel Details</span>
            </Link>
            </li>
            <li className='list-items'>
            <Link to="/register">
                <i className=''></i>
                <span className='lists'>Register</span>
            </Link>
            </li>
            <li className='list-items'>
            <Link to="login">
                <i className=''></i>
                <span className='lists'>Login</span>
            </Link>
            </li>
            <li className='list-items'>
            <Link to="login">
                <i className=''></i>
                <span className='lists'>User Profile</span>
            </Link>
            </li>
            <div className="sidebar-footer">
                <hr className=''/>
                <i className=''></i>
                <span>By Samuel</span>
            </div>
           </ul>
        </div>
    )
}
export default Sidebar;