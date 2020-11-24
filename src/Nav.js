import React, { useEffect, useState } from 'react'
import './Nav.css';
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
                alt="Netflix Logo"
                scr="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"
            />
            <img className="nav__avatar"
                alt="Avatar"
                scr="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
            />
        </div>
    )
}

export default Nav
