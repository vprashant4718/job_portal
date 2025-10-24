import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {FaSquareXTwitter, FaSquareInstagram,FaYoutube, FaLinkedin} from "react-icons/fa6"

const Footer = () => {
  const {isAuthenticated}= useSelector(state=>state.user)
  return (
    <>
    <footer>
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Agra Road Jaipur, Rajasthan</li>
          <li>jobheaven@gmail.com</li>
          <li>+91 6376458550</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/jobs"}>Jobs</Link></li>
        {
          isAuthenticated && (
          <li>
            <Link to={"/dashboard"}></Link>
          </li>
          )}
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li><Link to={"/"}><span><FaSquareXTwitter /></span><span>Twitter (X)</span></Link></li>
          <li><Link to={"https://www.instagram.com/ig_techno/"}><span><FaSquareInstagram /></span><span>Instagram</span></Link></li>
          <li><Link to={"/"}><span><FaYoutube /></span><span>Youtube</span></Link></li>
          <li><Link to={"/"}><span><FaLinkedin /></span><span>LinkedIn</span></Link></li>
        </ul>
      </div>
    </footer>
    <div className='copyright'>
      &copy; CopyRight 2025. All Rights Reserved By JobHeaven.
    </div>
    
    </>
  );
};

export default Footer
