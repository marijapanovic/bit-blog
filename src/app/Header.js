import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper header">
                    <h1>BIT BLOG</h1>

                    <ul id="nav-mobile" className="right med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/authors'>Authors</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/posts/new'>New Post</Link></li>
                    </ul>

                </div>
            </nav>

        </>
    )

}

export default Header;