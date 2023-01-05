import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Paper from '@mui/material/Paper';
import { toggleShowSearchInput } from '../../../redux/BeerSlice/beerSlice';
import './SingleBeer.css';

const SingleBeer = ({ beer }) => {
  const dispatch = useDispatch();

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
    dispatch(toggleShowSearchInput(false));
    return (
      <div>
        <div className="header-beer">
          <h2 style={{
            margin: '-2.5rem 2rem 0 3rem',
            // minWidth: '1rem',
          }}
          >
            {beer.beer_name}
          </h2>
        </div>
        <Paper
          sx={{
          // m: '10%',
            marginTop: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          <Grid
            className="grid"
            justifyContent="center"
            alignItems="center"
            item
            padding={2}
          >
            <div
              style={{
                background: '#fffafa',
                padding: '10px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={beer.beer_image}
                alt={beer.beer_name}
                style={{
                  height: '350px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              {/* <div
                className="center"
              >
                <h2>
                  {beer.beer_name}
                </h2>
              </div> */}
              <div className="center">
                <h1 style={{ textTransform: 'uppercase' }}>{beer.beer_tagline}</h1>
              </div>
              <div className="center">
                <p>{beer.beer_description}</p>
              </div>
              <div>
                <div
                  className="beerItem"
                  style={{
                    display: 'flex',
                    borderRadius: '5px',
                    justifyContent: 'space-between',
                    padding: '0.5rem',
                    maxWidth: '400px',
                    minWidth: '200px',
                    margin: 'auto',
                    backgroundColor: '#fffafa',
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
                    borderTop: '1px solid #fffafa',
                  }}
                  >
                    <h3
                      style={{
                        margin: '0.5rem 0',
                      }}
                    >
                      Food Pairing

                    </h3>
                    {
                showMoreFood ? (
                  <AddIcon
                    onClick={handleShowMoreFood}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <RemoveIcon
                    onClick={handleShowMoreFood}
                    style={{ cursor: 'pointer' }}
                  />
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
                  <li
                    style={{
                      margin: '0.5rem 0 0 1.5rem',
                    }}
                    key={uuidv4()}
                  >
                    {food}
                  </li>
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
                      borderTop: '1px solid #fffafa',
                    }}
                  >
                    <h3
                      style={{
                        margin: '0.5rem 0',
                      }}
                    >
                      Brewers Tips

                    </h3>
                    {
                showMoreTip ? (
                  <AddIcon
                    onClick={handleShowMoreTip}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <RemoveIcon
                    onClick={handleShowMoreTip}
                    style={{ cursor: 'pointer' }}
                  />
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
                      marginTop: '0.5rem',
                    }}
                    >
                      {beer.beer_tip_contributer}
                    </li>
                  </ul>
                </div>
              )
            }
                </div>
              </div>
            </div>

          </Grid>
        </Paper>
      </div>
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
        sx={
          [{
            cursor: 'pointer',
            margin: 'auto',
            justifyContent: 'center',
            borderRadius: '10px',
            display: 'inline',
            fontWeight: 'light',
            // mx: 0.5,
            // fontSize: 14,
            marginTop: 0,
          },
          {
            '&:hover': {
              fontWeight: 'bold',
            },
          },
          ]
}
      >
        <Grid
          className="grid-beer"
          justifyContent="center"
          alignItems="center"
          item
          padding={1}
          // paddingTop={0}
        >
          <div
            style={{
              background: '#fff',
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
            }}
          >
            <img src={beer.beer_image} alt={beer.beer_name} style={{ height: '200px' }} />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.3rem',
          }}
          >
            <h3 style={{ textTransform: 'uppercase' }}>
              {beer.beer_name}
            </h3>
            <h3 style={{
              textTransform: 'capitalize', opacity: '0.8', fontStyle: 'italic',
            }}
            >
              {beer.beer_tagline}
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
            >
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
