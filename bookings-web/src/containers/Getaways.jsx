import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
// import styles from './outer.css';

const Getaways = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPlaces().then(setPlaces).then(setLoading(false));
    }, []);
    if (loading) return <h1>Loading...</h1>;
    return (
        <>
            <header>
                <h1>Getaway!</h1>
            </header>
            <PlaceList places={places} />;
        </>
    );
};

export default Getaways;
