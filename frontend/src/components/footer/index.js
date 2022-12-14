import './index.css'
import logo from '../../assets/images/2.png'
import icon from '../../assets/images/icon.png'
import { HashLink } from 'react-router-hash-link'
import { useSelector } from 'react-redux'
import { setLoginData } from './../../actions/loginAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const loginData = useSelector((state) => state.loginReducer.loginData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="footer_container_bg theme_container">
      <div className="footer_container">
        <div className="footer_content">
          <div className="f_logo_container">
            <HashLink smooth to={'/'}>
              <img src={logo} alt="" />
            </HashLink>
          </div>
          <p>
            Milenium Haus gives you a seamless experience when buying a home. We
            make it easy to become an investor in 60-90 days.
          </p>
        </div>
        <div className="footer_menu_items">
          <div className="footer_sub_wrapper">
            <h3>About</h3>
            <p>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/learn'}>
                Learn
              </HashLink>
            </p>
            <p>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/access'}>
                My Milenium Haus
              </HashLink>
            </p>
          </div>
          <div className="footer_sub_wrapper">
            <h3>Property</h3>
            {!loginData?.access_token && (
              <p>
                <span>
                  <img src={icon} alt="" />
                </span>
                <HashLink smooth to={'/sign-up'}>
                  Sign up
                </HashLink>
              </p>
            )}
            {!loginData?.access_token && (
              <p style={{ margin: '15px 0' }}>
                <span>
                  <img src={icon} alt="" />
                </span>
                <HashLink smooth to={'/sign-in'}>
                  Sign In
                </HashLink>
              </p>
            )}
            {loginData?.access_token && (
              <p style={{ margin: '15px 0' }}>
                <span>
                  <img src={icon} alt="" />
                </span>
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
                  }}
                >
                  Sing Out
                </button>
              </p>
            )}
            <p>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/listing'}>
                Listing
              </HashLink>
            </p>
          </div>
          <div className="footer_sub_wrapper">
            <h3>Support</h3>
            <p>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/ownership'}>
                FAQs
              </HashLink>
            </p>
            <p>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/contact'}>
                Contact
              </HashLink>
            </p>
            <p style={{ margin: '15px 0' }}>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/terms-and-conditions'}>
                Terms
              </HashLink>
            </p>
            <p style={{ margin: '15px 0' }}>
              <span>
                <img src={icon} alt="" />
              </span>
              <HashLink smooth to={'/privacy-policy'}>
                privacy-policy
              </HashLink>
            </p>
          </div>
        </div>
      </div>
      <div className="border_bottom"></div>
      <div className="Credit_">
        <p>??2020 Milenium Haus. All Rights Reserved</p>
      </div>
    </div>
  )
}
