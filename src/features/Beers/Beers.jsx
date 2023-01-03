import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import SingleBeer from './SingleBeer/SingleBeer';

const Beers = () => {
  const states = useSelector((state) => state.beerReducer);
  const { beers, isLoading } = states;
  //   useEffect(() => {
  //     if (missionsStatus === 'idle') {
  //       dispatch(fetchMissions());
  //     }
  //   }, [missionsStatus, dispatch]);

  const [search, setSearch] = useState('');

  const filteredBeers = beers.filter((beer) => {
    const content = beer.beer_name;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search beer name..."
        />
      </div>

      { isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {
            filteredBeers.length ? (
              <Grid
                padding="1rem"
                marginTop="2rem"
                gap="2rem"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {filteredBeers.map((beer) => (
                  <SingleBeer
                    key={uuidv4()}
                    beer={beer}
                  />
                ))}
              </Grid>
            ) : (
              <h3>No beers found</h3>
            )
        }
        </div>
      )}
    </div>
  );
};

export default Beers;
