import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SearchIcon from '@mui/icons-material/Search';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { toggleShowSearchInput } from '../../redux/BeerSlice/beerSlice';
import headerData from '../../data/headerData';
import { ThemeContext } from '../../contexts/theme';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
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
            data-testid={shortName(headerData.title)}
            style={{
              textDecoration: 'none',
              color: '#fff',
            }}
            onClick={() => {
              dispatch(toggleShowSearchInput(true));
            }}
          >
            {
          showSearchInput ? (
            <h1
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
                margin: '1rem 0 0 1rem',
              }}
            >
              <SportsBarIcon style={{
                fontSize: '2.5rem',
              }}
              />
              <span className="logo">
                {shortName(headerData.title)}
              </span>
            </h1>
          ) : (
            <button
              style={{
                outline: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                margin: '1rem 0 0 1rem',
              }}
              type="button"
              onClick={() => {
                dispatch(toggleShowSearchInput(true));
              }}
            >
              <ChevronLeftIcon style={{
                fontSize: '2.5rem',
                color: '#fff',
              }}
              />
            </button>
          )
        }
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
                    margin: '1rem 0.5rem 0 0',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    borderRadius: '5px',
                    gap: '0.5rem',
                    paddingRight: '0.5rem',
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
          <li>
            <button
              style={{
                outline: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                margin: '1rem 1rem 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              type="button"
              onClick={toggleTheme}
              aria-label="toggle theme"
            >
              {themeName === 'pink' ? (
                <ToggleOffIcon
                  className="theme-btn"
                  style={{
                    fontSize: '2.7rem',
                  }}
                />
              ) : (
                <ToggleOnIcon
                  className="theme-btn"
                  style={{
                    fontSize: '2.7rem',
                  }}
                />
              )}
            </button>
          </li>
        </div>
      </ul>

    </nav>
  );
};

export default Navbar;
