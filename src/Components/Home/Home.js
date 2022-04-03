import React from 'react';
import watch from '../../Picture/Apple_Watch_Series_6.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='container mt-5 p-3'>
            <div className='row '>
                <div className='col-lg-6 col-12'>
                    <div className='watch-details-style'>
                        <h1>Your Next Watch</h1>
                        <h2>Your Best Watch</h2>
                        <p>A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides for management and telemetry</p>
                        <button className='btn-style'>Live Demo</button>
                    </div>
                </div>
                <div className='col-lg-6 col-12 watch-style shadow-lg'>
                    <img className='w-100' src={watch} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;