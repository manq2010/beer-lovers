import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { toggleNavMenu } from '../../redux/BeerSlice/beerSlice';
import headerData from '../../data/headerData';

const Navbar = () => {
  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  const shortName = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    }
    return name;
  };
  return (
    <nav>
      <ul>
        <h1>
          {shortName(headerData.title)}
        </h1>
        <li>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            onClick={() => dispatch(toggleNavMenu())}
          >
            <HomeIcon />
          </NavLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
