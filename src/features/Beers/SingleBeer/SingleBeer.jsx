import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const SingleBeer = ({ beer }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      {
            showMore ? (
              <div>
                <div>Showing More</div>
                <button
                  type="button"
                  onClick={() => setShowMore(true)}
                >
                  less
                </button>
              </div>
            ) : (
              <div>
                <img src={beer.beer.beer_image} alt={beer.beer_name} />
              </div>
            )
        }
    </div>
  );
};

SingleBeer.propTypes = {
  beer: PropTypes.node.isRequired,
};

export default SingleBeer;

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
