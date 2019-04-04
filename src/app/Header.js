import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <h1>BIT BLOG</h1>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='../entities/Posts.js'>Home</Link></li>
                        <li><Link to='./authors/Author.js'>Authors</Link></li>
                        <li><Link to='/'>About</Link></li>
                    </ul>
                </div>
            </nav>

        </>
    )

}

export default Header;