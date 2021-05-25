import React from 'react';
import PropTypes from 'prop-types';

const EditUserContainer = (props) => {
    return (
        <form>
            <label htmlFor="">
                Update Username
                <input id="username" type="text" />
            </label>
            <label htmlFor="">
                Update Email
                <input id="email" type="text" />
            </label>
            <label htmlFor="">
                Update Password
                <input id="password" type="text" />
            </label>
            <button>Update</button>
        </form>
    );
};

EditUserContainer.propTypes = {};

export default EditUserContainer;
