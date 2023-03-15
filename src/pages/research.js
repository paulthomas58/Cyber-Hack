import React from 'react';
import research from '../images/Research-Topics.jpeg';

const Research = () => {
    return (
        <><div>
            <h1>Research</h1>
        </div>
        <div className='blocks'>
            Looking for some ideas on how to improve your cyber security?<br></br>
            Use the image below to select a cyber security topic to study and start learning.
        </div>
        <div className='topics'>
        <img src={research} />
        </div>
        </>
    );
};

export default Research;
