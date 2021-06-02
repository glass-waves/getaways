import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Detail = ({ place }) => {
    console.log(place);
    const placeObj = place[0];
    return (
        <div>
            <h1>{placeObj.name}</h1>
            <p>{placeObj.description}</p>
            <p>{placeObj.location}</p>
            <p>Price: {placeObj.pricePerNight}</p>
            <img src={placeObj.image} alt={placeObj.description} />
            <li>Max Guests: {placeObj.maxGuests}</li>
            <li>Pet Friendly: {placeObj.petFriendly && <span>yes</span>}</li>
            <li>Pool: {placeObj.pool ? <span>yes</span> : <span>no</span>}</li>
            <li>Wifi: {placeObj.wifi ? <span>yes</span> : <span>no</span>}</li>
            <Link to={`/book/${placeObj.id}`}>Book</Link>
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
            id: PropTypes.string.isRequired
        })),
};

export default Detail;
