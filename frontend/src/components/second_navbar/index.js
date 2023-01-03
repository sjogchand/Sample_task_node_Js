import './index.css'
import img from '../../assets/images/2.png'
import img1 from '../../assets/images/11.png'
import { HiMenu } from 'react-icons/hi'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { setLoginData } from './../../actions/loginAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [click, setClick] = useState(true)
  const handleClick = () => setClick(!click)
  const loginData = useSelector((state) => state.loginReducer.loginData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="navbar_container_wrapper">
      <div className="second_navbar_container">
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
          {loginData?.role === 1 && (
            <span>
              <HashLink smooth to={'/add-property'}>
                Add Property
              </HashLink>
            </span>
          )}
          {loginData?.role === 1 && (
            <span>
              <HashLink smooth to={'/manage-property'}>
                Manage Property
              </HashLink>
            </span>
          )}
          {!loginData?.access_token && (
            <span>
              <HashLink smooth to={'/sign-up'}>
                Sign Up
              </HashLink>
            </span>
          )}
          {loginData?.access_token && (
            <span>
              <button
                onClick={() => {
                  navigate('/')
                  window.localStorage.removeItem('access_token')
                  dispatch(setLoginData([]))
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#b8d6d9',
                  fontWeight: '600',
                  fontSize: '15px',
                  lineHeight: '18px',
                  textAlign: 'right',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  // marginRight: '76px',
                  cursor: 'pointer',
                }}
              >
                Sing Out
              </button>
            </span>
          )}
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
