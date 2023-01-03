import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HomeIcon from '@mui/icons-material/Home';
import { toggleNavMenu } from '../../redux/BeerSlice/beerSlice';
import headerData from '../../data/headerData';

const Navbar = () => {
  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  const showNavMenu = useSelector((state) => state.beerReducer.showNavMenu);

  console.log(showNavMenu);

  const shortName = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };
  return (
    <nav>
      {
            showNavMenu ? (
              <ul>
                <li>
                  <NavLink
                    to="/"
                  >
                    <h1>
                      <SportsBarIcon />
                      {shortName(headerData.title)}
                    </h1>
                  </NavLink>
                </li>
                <div>
                  <li>
                    <button type="button">

                      <SearchIcon />
                      {' '}
                      Search...
                    </button>
                  </li>
                  <li>
                    <FilterAltIcon />
                  </li>
                </div>
              </ul>
            ) : (
              <ul>
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
              </ul>
            )
        }
    </nav>
  );
};

export default Navbar;
