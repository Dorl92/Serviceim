import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { useAuth } from './contexts/authContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchBar from './SearchBar.js'
import Drawer from '@material-ui/core/Drawer';
import styles from './styles/NavbarStyles';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
 
function Navbar(props) {
  const { history, classes } = props;
  const [navbarBackground, setNavbarBackground] = useState(false)
  const [navbarSearch, setNavbarSearch] = useState(false)
  const [error, setError] = useState();
  const [openDrawer, setOpenDrawer] = useState(false)

  const { logout, loggedUser } = useAuth();

  const handleLogout = async () => {
    setError("")
    try {
      await logout()
      history.push("/")
    } catch (error) {
      setError(error.message)
    }
  }

  const handleCloseDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(false)
  }

  const moveToUserProfile = () => {
    if (loggedUser) {
      history.push(`/user-info/${loggedUser.userId}`)
    }
  }

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setNavbarBackground(true)
      if (window.scrollY >= 300) {
        setNavbarSearch(true)
      } else {
        setNavbarSearch(false)
      }
    } else {
      setNavbarBackground(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <Fragment>
      <div className={navbarBackground || history.location.pathname !== '/' ? classes.navbarScroll : classes.navbar}>
        <div className={navbarBackground || history.location.pathname !== '/' ? classes.logoScroll : classes.logo}>
          <MenuIcon onClick={() => setOpenDrawer(true)} className={classes.menuIcon} />
          <div><Link exact={true} to="/">service<span>im</span></Link></div>
        </div>
        <div className={classes.navbarLinks}>
          <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/"><span>Home</span></NavLink></div>
          <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/services"><span>Services</span></NavLink></div>
          {loggedUser && <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/favorites">Favorites</NavLink></div>}
          {loggedUser && loggedUser.isSeller && <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/services/new">Add Service</NavLink></div>}
          {loggedUser && !loggedUser.isSeller && <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/signup/new-seller">Become a Seller</NavLink></div>}
        </div>
        <div className={classes.authLinks}>
          <div className={classes.searchBar}>
            {navbarSearch && <SearchBar navbar={true} />}
          </div>
          {!loggedUser && <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/login">Log In</NavLink></div>}
          {!loggedUser && <div><NavLink exact={true} activeClassName={navbarBackground || history.location.pathname !== '/' ? classes.activeLinkScroll : classes.activeLink} to="/signup">Sign Up</NavLink></div>}
          {loggedUser &&
            <div className={classes.navbarUserDetails}>
              <span>Welcome, <strong>{loggedUser.username || 'Friend'}</strong></span>
              <Avatar src={loggedUser.photoUrl} onClick={moveToUserProfile} className={classes.avatar} />
              <ExitToAppIcon className={classes.signout} onClick={handleLogout} />
            </div>
          }
        </div>
      </div>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <div className={classes.drawerNavbar}>
          <div className={classes.drawerLogo}>
            <Link exact={true} to="/">service<span>im</span></Link>
          </div>
          <NavLink exact={true} activeClassName={classes.activeLink} to="/">Home</NavLink>
          <NavLink exact={true} activeClassName={classes.activeLink} to="/services">Services</NavLink>
          {loggedUser && <NavLink exact={true} activeClassName={classes.activeLink} to="/favorites">Favorites</NavLink>}
          {loggedUser && loggedUser.isSeller && <NavLink exact={true} activeClassName={classes.activeLink} to="/services/new">Add Service</NavLink>}
          {loggedUser && !loggedUser.isSeller && <NavLink exact={true} activeClassName={classes.activeLink} to="/signup/new-seller">Become a Seller</NavLink>}
          <div className={classes.drawerAuthLinks}>
            {!loggedUser && <NavLink exact={true} activeClassName={classes.activeLink} to="/login">Log In</NavLink>}
            {!loggedUser && <NavLink exact={true} activeClassName={classes.activeLink} to="/signup">Sign Up</NavLink>}
            {loggedUser && <button onClick={handleLogout} className={classes.signoutButton}>Sign Out</button>}
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

export default withRouter(withStyles(styles)(Navbar));