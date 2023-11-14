import React from 'react';
import './navbar.css';
import navbardata from '../../assets/navbardata';
import logoutimg from '../../assets/logout.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        document.location.href = "https://padmini-qurinom-frontend.vercel.app/"
    }
    return (
        <div className='navbar'>
            <div className="navlist">
                {
                    navbardata.map((n) => (<Link to={`/${n.name}`} className="menulist" key={n.id}>
                        <img src={n.img} alt="xyz" />
                        <div>{n.name}</div>
                    </Link>))
                }
            </div>
            <div className="menulist" onClick={logout}>
                <img src={logoutimg} alt="xyz" />
                <div className='logout'>Log out</div>
            </div>
        </div>
    )
}

export default Navbar
