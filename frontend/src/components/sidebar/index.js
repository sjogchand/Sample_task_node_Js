import './index.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { HashLink } from 'react-router-hash-link'
import { useSelector } from 'react-redux'
import { setLoginData } from './../../actions/loginAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
  const loginData = useSelector((state) => state.loginReducer.loginData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="side-bar"
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

      <aside class="SideDrawer_drawer__3Q7S8">
        <div class="flex-1 px-3-3/8 sm:px-3-1/8 pt-mobile-hdp-navbar sm:pt-navbar space-y-2 sm:space-y-1-3/4 overflow-x-auto">
          <button
            class="close-btn absolute right-0 top-0 p-1-1/2"
            type="button"
            aria-label="Close Drawer"
          >
            <svg
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              class="text-primary-light stroke-current w-1-1/4 h-1-1/4"
            >
              <path fill="none" d="M1 1l12 12M13 1L1 13"></path>
            </svg>
          </button>
          {!loginData?.access_token && (
            <a class="StyledLink_accent-uppercase__3TrNb" href="/sign-up">
              <span class="sm:font-bold type-body-lg inline-block sm:type-body mt-2">
                Sign Up / Sign In
              </span>
            </a>
          )}
          {loginData?.access_token && (
            <HashLink smooth to={'/'}
              class="StyledLink_accent-uppercase__3TrNb"
              href="/"
              onClick={() => {
                // navigate('/')
                window.localStorage.removeItem('access_token')
                dispatch(setLoginData([]))
              }}
            >
              <span class="sm:font-bold type-body-lg inline-block sm:type-body mt-2">
                Sign Out
              </span>
            </HashLink>
          )}
          <div class="space-y-7/8">
            <p class="type-subhead text-primary-light uppercase">Discover</p>
            <ul class="space-y-1-3/4 sm:space-y-5/8" aria-label="Discover">
              <li>
                <HashLink smooth to={'/'}>
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/learn'}>
                  Learn
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/listing'}>
                  Listing
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/access'}>
                  my Milenium haus
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/contact'}>
                  contact
                </HashLink>
              </li>
            </ul>
          </div>
          {loginData?.role === 1 && (
            <div class="space-y-7/8">
              <p class="type-subhead text-primary-light uppercase">More</p>
              <ul class="space-y-1-3/4 sm:space-y-5/8" aria-label="More">
                <li>
                  {loginData?.role === 1 && (
                    <HashLink smooth to={'/add-property'}>
                      Add Property
                    </HashLink>
                  )}
                </li>
                <li>
                  {loginData?.role === 1 && (
                    <HashLink smooth to={'/manage-property'}>
                      Manage Property
                    </HashLink>
                  )}
                </li>
              </ul>
            </div>
          )}
          <div class="space-y-7/8">
            <p class="type-subhead text-primary-light uppercase">Support</p>
            <ul class="space-y-1-3/4 sm:space-y-5/8" aria-label="Support">
              <li>
                <HashLink smooth to={'/ownership'}>
                  FAQs
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/contact'}>
                  Contact
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/terms-and-conditions'}>
                  Terms
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={'/privacy-policy'}>
                  privacy-policy
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </Box>
  )

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {' '}
            <button
              class="mt-1/4 sidebar-menu-button"
              data-id="sidebar-menu-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 19.649"
                class="text-white fill-current h-1-1/4 sm:h-1-1/8"
              >
                <path
                  d="M0 0h25v3H0zM0 8.325h25v3H0zM0 16.649h25v3H0z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  )
}
