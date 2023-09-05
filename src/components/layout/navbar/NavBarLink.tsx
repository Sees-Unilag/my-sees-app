import React from 'react'
import { menuData } from './navbarData'
import { Link, useLocation } from 'react-router-dom'
import styles from './navbar.module.css'
// import { Location } from 'react-router-dom'

const NavBarLink = ({img, name, routeName}: menuData) => {
  const pathname = useLocation().pathname
  return (
   <Link to={routeName} className={`text-white ${styles.Link}`}>
    <li className={`${styles.navLi} ${pathname === routeName ? styles.navLiActive : ''}`}>
     <span><img className={`${styles.navLiImg}`} src={img} alt={name} /></span>
     {name}
    </li>
   </Link>
  )
}

export default NavBarLink