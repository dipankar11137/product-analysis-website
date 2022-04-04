import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 p-5 mt-5 text-start'>
                    <h1 className='mb-4 fw-bold'>Watch Watch And <span className='text-danger'>Watch</span></h1>
                    <p className='fs-4 '>Since first being used in the military for synchronizing maneuvers, watches have been developed to help divers in the ocean, as well as pilots in the sky and everything in between. Today, there are wristwatches dedicated for usage within a large number of areas such as diving, racing, exploring, flying, and much more.</p>
                </div>
                <div className='col-lg-6 p-5'>
                    <img src="https://www.startech.com.bd/image/cache/catalog/smart-watch/apple/apple-watch-se/apple-watch-se-01-500x500.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;