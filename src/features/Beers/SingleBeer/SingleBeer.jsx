import React from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const SingleBeer = ({ beer }) => (
  <Paper
    sx={{
      cursor: 'pointer',
      p: 2,
      m: 2,
      margin: 'auto',
      justifyContent: 'center',
      width: 150,
      height: 350,
      // flexGrow: 1,
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#1E81'),
    }}
  >
    <Grid
      justifyContent="center"
      alignItems="center"
      item
    >
      <img src={beer.beer_image} alt={beer.beer_name} style={{ height: '200px' }} />
      <h3>
        {beer.beer_name}
      </h3>
      <div>
        <div>
          <span>
            ABV
            {' '}
          </span>
          <span>
            {beer.beer_alcohol_volume}
            %
          </span>
        </div>
        <div>
          <span>
            PH
            {' '}
          </span>
          <span>
            {beer.beer_ph}
          </span>
        </div>
        <div>
          <span>
            First Brew
            {' '}
          </span>
          <span>
            {beer.beer_first_brewed}
          </span>
        </div>
      </div>
    </Grid>
  </Paper>
);

export default SingleBeer;

SingleBeer.propTypes = {
  beer: PropTypes.node.isRequired,
};

// beer_id: beer.id,
// beer_name: beer.name,
// beer_tagline: beer.tagline,
// beer_description: beer.description,
// beer_image: beer.image_url,
// beer_alcohol_volume: beer.abv,
// beer_ph: beer.ph,
// beer_ingredient: beer.ingredients,
// beer_method: beer.method,
// beer_food_pairing: beer.food_pairing,
// beer_brewers_tips: beer.brewers_tips,
// beer_tip_contributer: beer.contributed_by,
