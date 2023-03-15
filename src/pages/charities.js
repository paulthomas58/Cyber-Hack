import React from 'react';
import CrudUser from '../components/charitiesTable/CrudUser';
import '../styles/App.css'


const Charities = () => {
    return (
        <><div>
            <h1>Charities</h1>
        </div>
        <div className='blocks'>
            <p>
                Are you a small businees or NGO looking to improve your cybersecurity?<br></br>
                Fill in the fields below to register with Cyber Hack so our volunteers can help.
            </p>
        </div>
            <main>
                <CrudUser />
            </main>
        </>
    );
};


export default Charities;

