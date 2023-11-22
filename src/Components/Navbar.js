import React,{useEffect, useState} from 'react'
import { getTopNav } from './Data/Navbars';
import { Link } from 'react-router-dom';

const Navbar =()=> {
const [navItems, setNavItems] = useState([]);
const [collapse, setCollapse] =useState("nav__menu");
const [toggleIcon, setToggleIcon] = useState("toggler__icon");

useEffect(()=>{
setNavItems(getTopNav());
}, []);

const onToggle =()=> {
collapse === 'nav__menu'
? setCollapse ('nav__menu nav__collapse')
: setCollapse('nav__menu');
toggleIcon === 'toggler__icon'
? setToggleIcon ('toggler__icon toggle')
:setToggleIcon ("toggler__icon");
};

return (
  <div className="nav__wrapper">
    <div className="container">
      <nav className="nav">
        <a href="#" className="nav__brand">
          MOLECULAR GASTRONOMY
        </a>
        <ul className={collapse}>

          <Link to={"/"}>HOME</Link>
          <Link to={"/ABOUT"}>ABOUT</Link>
          <Link to={"/LAB"}>LAB</Link>
          <Link to={"/EXPO"}>EXPO</Link>
        </ul>

        <div className={"toggleIcon"} onClick={onToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  </div>
);
}

export default Navbar;