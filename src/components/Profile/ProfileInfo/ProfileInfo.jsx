import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfo = ({city = 'default', date = '01.01.1970', gender = 'male'}) => {
    return (
        <div>
            <div>город: {city}</div>
            <div>дата рождения: {date}</div>
            <div>пол: {gender}</div>
        </div>
  );
};

ProfileInfo.propTypes = {
    city: PropTypes.string,
    date: PropTypes.string,
    gender: PropTypes.string,
}

export default ProfileInfo;