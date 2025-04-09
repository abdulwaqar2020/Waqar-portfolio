import React from 'react'
import './MobileNav.css'
import Image from '../../assets/images/Waqar.png'

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
            <img className='logo' src={Image} alt="" />
            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>

                <li>
                    <a className='menu-item'>Skills</a>
                </li>

                <li>
                    <a className='menu-item'>Experience</a>
                </li>

                <li>
                    <a className='menu-item'>Contact us</a>
                </li>
                
                <button className='contact-btn' onClick={() =>{}}>
                    Hire me
                </button>
            </ul>
        </div>
    </div>
    </>
  );
};

export default MobileNav