import React from 'react';
import PropTypes from 'prop-types';
import styles from './place.css';

const Place = ({
    name,
    // description,
    location,
    pricePerNight,
    // image,
    imageThumbnail,
    // maxGuests,
    // petFriendly,
    // pool,
    // wifi,
}) => {
    return (
        <div className={styles.place}>
            <h2>
                {name} <span className={styles.price}>${pricePerNight}</span>
            </h2>
            {/* <p>{description}</p> */}
            <h4>{location}</h4>
            {/* <li>{image}</li> */}
            <img src={imageThumbnail} />
            {/* <li>Max Guests: {maxGuests}</li>
      <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>Has a Pool!</li> : null}
      {wifi ? <li>Free Wifi</li> : null} */}
        </div>
    );
};

Place.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    imageThumbnail: PropTypes.string.isRequired,
    maxGuests: PropTypes.number.isRequired,
    petFriendly: PropTypes.bool.isRequired,
    pool: PropTypes.bool.isRequired,
    wifi: PropTypes.bool.isRequired,
};

export default Place;
