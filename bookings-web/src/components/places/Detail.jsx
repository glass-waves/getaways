import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ place }) => {
    return (
        <div>
            <h1>{place.name}</h1>
            <p>{place.description}</p>
            <p>{place.location}</p>
            <p>Price: {place.pricePerNight}</p>
            <img src={place.image} alt={place.description} />
            <li>Max Guests: {place.maxGuests}</li>
            <li>Pet Friendly: {place.petFriendly}</li>
            <li>Pool: {place.pool}</li>
            <li>Wifi: {place.wifi}</li>
        </div>
    );
};

Detail.propTypes = {
    place: PropTypes.shape({
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
    }),
};

export default Detail;
