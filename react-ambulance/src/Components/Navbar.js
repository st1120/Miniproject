import React from 'react';
import '../Styles/Navbar.css'
import { Link,useMatch,useResolvedPath } from "react-router-dom"
import logo from '../Images/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
    <img src={logo} alt="Logo" className="logo" /> 
    <Link to='/' className='nav-title'>CareConnect</Link>
    <ul className='nav-links'>
      <CustomLink to= "/Home">Home</CustomLink>
      <CustomLink to= "/Login">User</CustomLink>
      <CustomLink to= "/Login">Admin</CustomLink>
      <CustomLink to= "/Login">Driver</CustomLink>
      <CustomLink to= "/Remote">Remote</CustomLink>
      <CustomLink to= "/About">About Us</CustomLink>
    </ul>
  </nav>
  );
}
function CustomLink({ to,children, ...props }){
  const resolvedpath=useResolvedPath(to)
  const isActive = useMatch({path: resolvedpath.pathname, end:true})
  return(
    <li className={isActive ? "active" : ""}>
      <Link to= {to} {...props}>
        {children}
        </Link>
    </li>
  )
}

export default Navbar;
