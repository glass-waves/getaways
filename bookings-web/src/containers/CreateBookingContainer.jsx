import React, { useEffect, useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getOnePlace } from '../services/getOnePLace';


export const CreateBookingContainer = ({ user, updateUser }) => {
    const { id } = useParams();
    console.log('user', user);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [place, setPlace] = useState(null);
    const start = moment(startDate);
    const end = moment(endDate);
    const diff = end.diff(start, 'days');
    


    useEffect(() => {
        updateUser();
        getOnePlace(id).then(place => setPlace(place[0]));
    }, []);

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <div>
                <form action="">
                    <DatePicker value={startDate} onChange={setStartDate} />
                    <DatePicker value={endDate} onChange={setEndDate} />
                    <h3>
                        Book for {diff} days for {diff * place.pricePerNight}
                    </h3>
                </form>
            </div>
        </MuiPickersUtilsProvider>
    );
};

CreateBookingContainer.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }),
    updateUser: PropTypes.func.isRequired,
};
