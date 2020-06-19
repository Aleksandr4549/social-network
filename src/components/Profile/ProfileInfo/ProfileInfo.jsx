import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfo = ({fullName}) => {
    return (
        <div>
            <div>имя: {fullName}</div>

        </div>
  );
};

ProfileInfo.propTypes = {
    fullName: PropTypes.string
}

export default ProfileInfo;