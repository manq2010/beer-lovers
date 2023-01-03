import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
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
                  <SingleBeer key={uuidv4()} beer={beer} />
                  // <div key={beer.id}>
                  //   <p>{beer.beer_name}</p>
                  //   <p>{beer.beer_tagline}</p>
                  //   <p>{beer.beer_description}</p>
                  //   <p>{beer.beer_alcohol_volume}</p>
                  //   <p>{beer.beer_ph}</p>
                  //   <p>{beer.beer_food_pairing}</p>
                  //   <p>{beer.beer_brewers_tips}</p>
                  //   <p>{beer.beer_tip_contributer}</p>
                  // </div>
                ))}
              </Grid>
            ) : (
              <h3>No beers found</h3>
            )
        }

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
