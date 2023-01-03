import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import SingleBeer from './SingleBeer/SingleBeer';

const Beers = () => {
  const beers = useSelector((state) => state.beerReducer.beers);
  console.log(beers);
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

  console.log(filteredBeers);

  return (
    <div>

      <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search beer name..." />
      </div>
      <div>
        {
            filteredBeers.length ? (
              <Grid container direction="row" alignItems="center" justifyContent="center">
                {filteredBeers.map((beer) => (
                  <SingleBeer key={beer.id} beer={beer} />
                ))}
              </Grid>
            ) : (
              <h3>No beers found</h3>
            )
        }
      </div>
      {/* {beers.map((beer) => (
        <div key={beer.id}>
          <p>{beer.beer_name}</p>
          <p>{beer.beer_tagline}</p>
          <p>{beer.beer_description}</p>
          <p>{beer.beer_alcohol_volume}</p>
          <p>{beer.beer_ph}</p>
          <p>{beer.beer_food_pairing}</p>
          <p>{beer.beer_brewers_tips}</p>
          <p>{beer.beer_tip_contributer}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Beers;
