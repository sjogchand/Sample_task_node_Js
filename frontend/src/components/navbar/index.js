import './index.css'
import img from '../../assets/images/2.png'
import img1 from '../../assets/images/11.png'
import { HiMenu } from 'react-icons/hi'
import { HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

export default function Navbar() {
  const [click, setClick] = useState(true)
  const handleClick = () => setClick(!click)

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const scrollTop = window.scrollY
    const header = document.querySelector('.navbar_container')

    scrollTop >= 98
      ? header.classList.add('shrink_navbar')
      : header.classList.remove('shrink_navbar')
  }

  return (
    <div className="navbar_container_wrapper">
      <div className="navbar_container">
        <div className="navbar_logo">
          <HashLink smooth to={'/'}>
            <img src={img} alt="" />
          </HashLink>
        </div>
        <div className="navbar_menu_items">
          <span>
            <HashLink smooth to={'/learn'}>
              Learn
            </HashLink>
          </span>
          <span>
            <HashLink smooth to={'/listing'}>
              Listing
            </HashLink>
          </span>
          <span>
            <HashLink smooth to={'/access'}>
              my Milenium haus
            </HashLink>
          </span>
          <span>
            <HashLink smooth to={'/contact'}>
              contact
            </HashLink>
          </span>
          <span>
            <HashLink smooth to={'/add-property'}>
              Add Property
            </HashLink>
          </span>
          <span className="menu_icon_desktop">
            <HiMenu />
          </span>
        </div>
      </div>
      {/* Mobile Navbar Start */}
      <div className="m_navbar">
        <div className="m_navbar_logo">
          <HashLink smooth to={'/'}>
            <img src={img} alt="" />
          </HashLink>
        </div>
        <div>
          <span onClick={handleClick}>
            <HiMenu />
          </span>
        </div>
      </div>
      <div className={click ? 'mobile-menu  menu-open' : 'mobile-menu'}>
        <div className="logo order-md-1">
          <div className="fix-icon text-dark" onClick={handleClick}>
            <IoClose />
          </div>
        </div>

        <div className="navbar-nav">
          <li className="nav-item">
            <HashLink
              smooth
              to={'/learn'}
              className="nav-link"
              onClick={handleClick}
            >
              Learn
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              smooth
              to={'/listing'}
              className="nav-link"
              onClick={handleClick}
            >
              Listing
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              smooth
              to={'/access'}
              className="nav-link"
              onClick={handleClick}
            >
              my Milenium haus
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              smooth
              to={'/contact'}
              className="nav-link"
              onClick={handleClick}
            >
              contact
            </HashLink>
          </li>
        </div>
      </div>
    </div>
  )
}
