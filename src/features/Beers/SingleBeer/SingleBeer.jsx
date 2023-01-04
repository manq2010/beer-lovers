import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Paper from '@mui/material/Paper';

const SingleBeer = ({ beer }) => {
  const [showMoreFood, SetShowMoreFood] = useState(true);
  const [showMoreTip, SetShowMoreTip] = useState(true);

  const handleShowMoreFood = () => {
    SetShowMoreFood(!showMoreFood);
  };
  const handleShowMoreTip = () => {
    SetShowMoreTip(!showMoreTip);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/beer', { state: { stateData: { beer } } });
  };

  const path = window.location.pathname;

  if (path === '/beer') {
    return (
      <Paper
        sx={{
          cursor: 'pointer',
          p: 2,
          m: '10%',
          marginTop: '1rem',
          justifyContent: 'center',
          // width: '80%',
          // height: 350,
          // flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#1E81'),
        }}
      >
        <div>
          <img src={beer.beer_image} alt={beer.beer_name} style={{ height: '350px' }} />
        </div>
        <div>
          <h2>{beer.beer_name}</h2>
        </div>

        <div>
          <h1>{beer.beer_tagline}</h1>
          <div>
            <p>{beer.beer_description}</p>
          </div>

          <div style={{
            display: 'flex',
            border: 'solid 1px gray',
            borderRadius: '5px',
            justifyContent: 'space-between',
            padding: '0.5rem',
            maxWidth: '400px',
            minWidth: '200px',
            margin: 'auto',
          }}
          >
            <div>
              <span style={{
                fontWeight: 'bold',
                opacity: '0.5',
              }}
              >
                ABV
              </span>
              <p>
                {beer.beer_alcohol_volume}
                %
              </p>
            </div>
            <div>
              <span style={{
                fontWeight: 'bold',
                opacity: '0.5',
              }}
              >
                pH
              </span>
              <p>{beer.beer_ph}</p>
            </div>
            <div>
              <span style={{
                fontWeight: 'bold',
                opacity: '0.5',
              }}
              >
                First Brew
              </span>
              <p>{beer.beer_first_brewed}</p>
            </div>

          </div>
        </div>

        <div>
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem',
              paddingTop: '0',
              marginTop: '1rem',
              marginBottom: '-1rem',
              borderTop: '1px solid gray',
            }}
            >
              <h3>Food Pairing</h3>
              {
                showMoreFood ? (
                  <AddIcon onClick={handleShowMoreFood} />
                ) : (
                  <RemoveIcon onClick={handleShowMoreFood} />
                )
              }
            </div>
            {
              showMoreFood ? (
                null
              ) : (
                <div>
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      listStyle: 'square',
                    }}
                  >
                    {
                beer.beer_food_pairing.map((food) => (
                  <li key={uuidv4()}>{food}</li>
                ))
              }
                  </ul>
                </div>
              )
            }
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem',
                paddingTop: '0',
                marginTop: '0.5rem',
                borderTop: '1px solid gray',
              }}
            >
              <h3>Brewers Tips</h3>
              {
                showMoreTip ? (
                  <AddIcon onClick={handleShowMoreTip} />
                ) : (
                  <RemoveIcon onClick={handleShowMoreTip} />
                )
              }
            </div>
            {
              showMoreTip ? (
                null
              ) : (
                <div>
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: '0',
                    }}
                  >
                    <li style={{
                      fontStyle: 'italic',
                    }}
                    >
                      <FormatQuoteIcon />
                      {beer.beer_brewers_tips}
                    </li>
                    <li style={{
                      fontWeight: '100',
                    }}>
                      {beer.beer_tip_contributer}
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
        </div>
      </Paper>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
      }}
    >
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
              <span style={{
                fontWeight: 'bold',
                opacity: '0.5',
              }}
              >
                ABV
                {' '}
              </span>
              <span>
                {beer.beer_alcohol_volume}
                %
              </span>
            </div>
            <div>
              <span style={{
                fontWeight: 'bold',
                opacity: '0.5',
              }}
              >
                PH
                {' '}
              </span>
              <span>
                {beer.beer_ph}
              </span>
            </div>
            <div>
              <span style={{
                fontWeight: 'bold',
                opacity: '0.5',
              }}
              >
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
    </button>
  );
};

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
