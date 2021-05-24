import React from 'react';
import PropTypes from 'prop-types';

export const Detail = ({ place }) => {
    const placeObj = place[0];
    return (
        <div>
            <h1>{placeObj.name}</h1>
            <p>{placeObj.description}</p>
            <p>{placeObj.location}</p>
            <p>Price: {placeObj.pricePerNight}</p>
            <img src={placeObj.image} alt={placeObj.description} />
            <li>Max Guests: {placeObj.maxGuests}</li>
            <li>Pet Friendly: {placeObj.petFriendly}</li>
            <li>Pool: {placeObj.pool}</li>
            <li>Wifi: {placeObj.wifi}</li>
        </div>
    );
};

Detail.propTypes = {
    place: PropTypes.arrayOf(
        PropTypes.shape({
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
        })),
};

export default Detail;
