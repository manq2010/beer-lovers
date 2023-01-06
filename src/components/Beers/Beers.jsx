import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import SingleBeer from './SingleBeer/SingleBeer';
// import { toggleShowSearchInput } from '../../redux/BeerSlice/beerSlice';

const Beers = () => {
  const states = useSelector((state) => state.beerReducer);
  const { beers, isLoading, showSearchInput } = states;
  const [search, setSearch] = useState('');

  const searchedBeers = beers.filter((beer) => {
    const content = beer.beer_name + beer.beer_description;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  // Prepare Redux dispatch method:
  // const dispatch = useDispatch();

  return (
    <div>
      {
        showSearchInput ? (null) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
              style={{
                border: '1px solid #fff',
                borderRadius: '5px',
                padding: '10px',
                textAlign: 'start',
                fontSize: '1rem',
              }}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={() => setSearch('')}
              placeholder="Search beer by name..."
            />
          </div>
        )
      }

      { isLoading ? (
        <h3 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '65vh',
        }}
        >
          <span><HourglassTopIcon /></span>
          {' '}
          Loading...
        </h3>
      ) : (
        <div>
          {
            searchedBeers.length ? (
              <div>
                <div className="center">
                  <p>
                    Showing
                    {' '}
                    <b>
                      {searchedBeers.length}
                    </b>
                    {' '}
                    of
                    {' '}
                    {beers.length}
                    {' '}
                    beers
                  </p>
                </div>
                <div>
                  <Grid
                    padding="1rem"
                    marginTop="2rem"
                    gap="2rem"
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div className="grid">
                      {searchedBeers.map((beer) => (
                        <SingleBeer
                          key={uuidv4()}
                          beer={beer}
                        />
                      ))}
                    </div>
                  </Grid>
                </div>
              </div>
            ) : (
              <div style={{
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <h3>
                  <em>Opps</em>
                  {' '}
                  No beer match found!
                </h3>
              </div>
            )
        }
        </div>
      )}
    </div>
  );
};

export default Beers;
