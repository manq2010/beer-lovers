import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SearchIcon from '@mui/icons-material/Search';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HomeIcon from '@mui/icons-material/Home';
import { toggleNavMenu } from '../../redux/BeerSlice/beerSlice';
import headerData from '../../data/headerData';

const Navbar = () => {
  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  const showNavMenu = useSelector((state) => state.beerReducer.showNavMenu);

  console.log(showNavMenu);

  const path = window.location.pathname;
  console.log(path);

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
              color: '#585e63',
              opacity: '0.9',
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
              {shortName(headerData.title)}
            </h1>
          </NavLink>
        </li>
        <div>
          <li>
            <button
              type="button"
              style={{
                border: '1px solid #585e63',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: '2rem',
                color: '#585e63',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                gap: '0.5rem',
                paddingRight: '1rem',
                cursor: 'pointer',
              }}
            >
              <SearchIcon />
              {' '}
              Search...
            </button>
          </li>
          {/* <li>
                    <FilterAltIcon />
                  </li> */}
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
