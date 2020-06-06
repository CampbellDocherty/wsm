import React from "react";
import { Link } from 'react-router-dom';

import Twitter from '../../utils/images/twitter.png'
import Insta from '../../utils/images/instagram.png'

const Navbar = () => {
  return (
    <nav>
      <ul className="center">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playhardmafia">Play Hard Mafia</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/lookbook"> Lookbook</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/archives">Archives</Link>
        </li>
        <li>
          <Link to="/f&f">Friends & Family</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div id="socialcontainer" className="center">
        <a href="https://twitter.com/wallstreetmaf" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" id="socialtwit" />
        </a>
        <a href="https://www.instagram.com/wall.street.mafia" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" id="socialgram" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
