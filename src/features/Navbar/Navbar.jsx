import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import HomeIcon from '@mui/icons-material/Home';
import { toggleShowSearchInput } from '../../redux/BeerSlice/beerSlice';
import headerData from '../../data/headerData';

const Navbar = () => {
  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  const { showSearchInput } = useSelector((state) => state.beerReducer);

  const shortName = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };
  return (
    <nav>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <li>
          <NavLink
            to="/"
            style={{
              textDecoration: 'none',
              color: '#fff',
            }}
            onClick={() => {
              dispatch(toggleShowSearchInput(true));
            }}
          >
            <h1
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <SportsBarIcon />
              <span className="logo">
                {shortName(headerData.title)}
              </span>
            </h1>
          </NavLink>
        </li>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          {
          showSearchInput ? (
            <div>
              <li>
                <button
                  type="button"
                  style={{
                    border: '1px solid #fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: '2rem',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    borderRadius: '5px',
                    gap: '0.5rem',
                    paddingRight: '1rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    dispatch(toggleShowSearchInput(false));
                  }}
                  className="search-button"
                >
                  <SearchIcon />
                  {' '}
                  <span className="logo">
                    Search...
                  </span>
                </button>

              </li>
            </div>
          ) : (
            null
          )
        }
          <li
            className="icons"
            style={{
              marginRight: '1rem',
              marginLeft: '-2.5rem',
            }}
          >
            <MicIcon style={{ marginRight: '0.5rem' }} />
            <PowerSettingsNewIcon style={{ marginRight: '0.5rem' }} />
            <SettingsIcon style={{ marginRight: '0.5rem' }} />
            <MoreVertIcon style={{ marginRight: '0.5rem' }} />
          </li>
        </div>
      </ul>

      {/* <ul>
                <li>
                  <NavLink
                    to="/"
                  >
                    <h1>
                      <SportsBarIcon />
                      Name of beer!
                    </h1>
                    <button type="button" onClick={() => dispatch(toggleNavMenu())}>
                      <HomeIcon />
                    </button>
                  </NavLink>
                </li>
              </ul> */}

    </nav>
  );
};

export default Navbar;
