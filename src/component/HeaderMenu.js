import React, { useState} from 'react';
import { Link } from 'react-router-dom';


const HeaderMenu = () => {
 const [show, setshow] =useState(false);
  return (
    <>
    <header>
      <div id="side-bar">
      <nav className="navbar navbar-expand-none">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" onClick={()=> setshow(!show)}>
       <span className='one'></span>
       <span className='two'></span>
       <span className='three'></span>
      </button>
      <div className={`paimary-navbar ${ show ? "d-black" : "d-none"}`}>
        <div className=" text-end position-relative">
          <button className=" bg-transparent border-0 position-absolute close" onClick={()=> setshow(!show)}>
            <span></span>
            <span></span>
          </button>
        </div>
        <li className="nav-items">
          <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li className="nav-items">
          <Link className='nav-link'>Nearest Metro Station</Link>
          </li>
        <li className="nav-items">
          <Link to="/RoutePage" className='nav-link'>Search Metro Route</Link>
          </li>
          <li className="nav-items">
          <Link className='nav-link'>Metro Map</Link>
          </li>
          <li className="nav-items">
          <Link className='nav-link'>Metro Fare</Link>
          </li>
          <li className="nav-items">
          <Link className='nav-link'>Metro Stations</Link>
          </li>
          <li className="nav-items">
          <Link className='nav-link'>Last Train Time</Link>
          </li>
          <li className="nav-items">
          <Link className='nav-link'>Privacy Policy</Link>
          </li>
      </div>
    </nav>
    </div>
      </header>
      </>
  );
};

export default HeaderMenu;