/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
// import styles from './outer.css';

const Getaways = ({ updateUser }) => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);

    const perPage = 10;
    const totalCount = places.length;
    const totalPages = Math.ceil(totalCount / perPage);
    // eslint-disable-next-line max-len
    const slicedList = places.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );
    const incrementPage = (e) => {
        if (e.target.value === 'PREV') {
            setCurrentPage((prevPage) => prevPage - 1);
        }
        if (e.target.value === 'NEXT') {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        if (currentPage !== totalPages) setNext(false);
        if (currentPage === 1) setPrev(true);
        if (currentPage === totalPages) setNext(true);
        if (currentPage !== 1) setPrev(false);
    }, [currentPage]);

    useEffect(() => {
        updateUser();
        getPlaces().then(setPlaces).then(setLoading(false));
    }, []);
    if (loading) return <h1>Loading...</h1>;
    return (
        <>
            <header>
                <h1>Getaway!</h1>
            </header>
            <button onClick={incrementPage} disabled={prev} value="PREV">
                Prev
            </button>
            <button onClick={incrementPage} disabled={next} value="NEXT">
                Next
            </button>
            <p>{`Page ${currentPage} of ${totalPages}`}</p>
            <PlaceList places={slicedList} />
        </>
    );
};

export default Getaways;
