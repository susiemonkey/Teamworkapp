import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import React from 'react';

export const Header = () => {
    return (
        // Navigation
        <nav className='nav'>
            <Link to='/' className='site-title' href="/">Logo </Link>
            {/* Home/About/Blog/Contact */}
            <ul>
                <li><CustomLink to ="/">Home</CustomLink></li>
                <li><CustomLink to="/About">About</CustomLink></li>
                <li><CustomLink to="/Blog">Blog</CustomLink></li>
                <li><CustomLink to="/Contact">Contact</CustomLink></li>
            </ul>


        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Header