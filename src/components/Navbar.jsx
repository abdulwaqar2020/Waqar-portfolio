import React, { useState } from 'react'
import './Navbar.css'
import ImageLogo from '../assets/images/Waqar.png'
import MobileNav from './MobileNav/MobileNav';
import Toggle from '../assets/images/toggle.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    // Logout funtion is here
    const handleLogout = () => {
        localStorage.removeItem('token');
        
        
        // Redirect to login page
        alert('You are logout successfully');
        navigate('/login');
    };
    return (

        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <div className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={ImageLogo} alt="logo" />
                    <ul>
                        <li>
                        <Link className='menu-item' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/education">Education</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/workexperience">Work Experience</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to="/contactus">Contact</Link>
                        </li>
                      
                        <button className='logout-btn' onClick={handleLogout}>
                            Logout
                        </button>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span
                        // class = {"material-symbols-outlined"}
                        // style={{fontSize:"1.8rem"}}

                        >
                            {openMenu ? "" : ""}
                            < img src={Toggle} alt="" />



                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar