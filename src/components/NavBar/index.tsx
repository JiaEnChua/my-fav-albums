import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';

const navBar = {
  display: 'flex',
  height: '10vh',
  width: '100%',
  borderBottom: '1px solid lightgray',
  backgroundColor: 'rgb(242, 242, 242)',
};

const navBarLeft = {
  marginLeft: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navBarRight = {
  marginLeft: 'auto',
  width: '20vw',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const NavBar: React.FC = () => {
  const matches = useMediaQuery('(min-width:500px)');

  return (
    <div className='navbar' style={navBar}>
      <div className='navbar__left' style={navBarLeft}>
        <p>My Favorite Albums</p>
      </div>
      {matches ? (
        <div className='navbar__right' style={navBarRight}>
          <BookmarkBorderIcon />
          <SearchIcon />
          <SettingsIcon />
        </div>
      ) : (
        <div className='navbar__right' style={navBarRight}>
          <MenuIcon />
        </div>
      )}
    </div>
  );
};
export default NavBar;
