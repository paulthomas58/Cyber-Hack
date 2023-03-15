import React from 'react';
import cyber from '../images/Cybersecurity.jpg';

const Home = () => {
    return (
        <><div>
            <h1>Welcome to Cyber Hack</h1>
        </div>
        <div classname= "cyber">
        <img src={cyber} width= "100%" />
        </div>
        <div className='fields'>            
            <p>As a small business or NGO, is your cybersecurity program strong enough to protect 
                against today's sophisticated cyber threats? Can you offer paying for a cyber 
                specialist to fix you system problems?<br></br>
                Cyber hack is a company that connects the providers of the cyber security specialists
                 to the clients that they need this service. Our clients are mainly non-for-profit 
                 organizations for free.<br></br> 
                 The volunteer will use our web application to apply to be
                  one of our volunteers and help in their service.<br></br>
                  The NGO will also apply to be a client for our company.<br></br>
                So, our main goal is to connect the 2 ends and make sure that the need for help is 
                fulfilled.
            </p>
        </div></>
    );
};

export default Home;
