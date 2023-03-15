import React from 'react';
import CrudUser from '../components/volunteerTable/CrudUser';
import '../styles/App.css'

const Volunteers = () => {
    return (
        <><div>
            <h1>Volunteers</h1>
        </div>
        <div className='blocks'>
            <p>
                Are you a cyber security specialists looking to help a small business or NGO?<br></br>
                Fill in the fields below to register with Cyber Hack so companies in need can
                 get in touch with you today.
            </p>
        </div>
        <main>
                <CrudUser />
            </main></>
    );
};

export default Volunteers;
