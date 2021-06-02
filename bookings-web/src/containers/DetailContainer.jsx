import React, { useEffect, useState } from 'react';
import { Detail } from '../components/places/Detail';
import { getOnePlace } from '../services/getOnePlace';
import { useParams } from 'react-router-dom'; 

export const DetailContainer = () => {
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getOnePlace(id).then(setPlace).then(() => setLoading(false));
    }, []);
    if (loading) return <h1>Loading...</h1>;


    return (
        <div>
            <Detail place={place} />
        </div>
    );
};
