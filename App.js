import React from 'react';
import "./App.css";
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import BookingForm from './Components/BookingForm';
import HostelLists from './Components/HostelLists';
function App(){
return (
       <BrowserRouter>
       <div>
            <div>
              <Sidebar />
            </div> 
            <div>
              <Routes>
                     <Route path='/' element={<Home />}></Route>
                     <Route path='/order' element={<Order />}></Route>
                     <Route path='/register' element={<Register />}></Route>
                     <Route path='/login' element={<Login />}></Route>
                     <Route path='/bookingform' element={<BookingForm />}></Route>
                     <Route path='/hostellists' element={<HostelLists />}></Route>
              </Routes>
            </div> 
       </div>
       </BrowserRouter>
)
}
export default App;


function Order(){
       return <h2>Order component</h2>
}


// we are using routes in this App.js






















// import React from 'react';
// import Instructions from './Components/Instructions';
// import LoginForm from './Components/LoginForm';
// import RegisterForm from './Components/RegisterForm';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import AboutUs from './Components/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'antd/dist/antd.css';

// import './App.css';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function App() {

// return(
//  <div className="container">
//  <h1>Hello, World</h1>
 
 
 
//         <BrowserRouter>
//         <Header />
//         <Routes>
       
//                           {/* <Route path="/" exact component={Home} />
//                           <Route path="/about" component={AboutUs} /> */}

//         </Routes>
//         <Home />
//         <Instructions />
//          <LoginForm />
//         <RegisterForm /> 
//         </BrowserRouter>

//  </div>
//  )
// }

// export default App;
