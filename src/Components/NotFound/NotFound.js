import React from 'react';
import notFond from '../../Picture/404-error-page-not-found.jpg'
import './NotFond.css'

const NotFound = () => {
    return (
        <div className='not-font-style'>
            <img src={notFond} alt="" />
        </div>
    );
};

export default NotFound;