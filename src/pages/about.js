import React from "react";

const About = () => {
    return (
        <><div className='fields' >
            <h2>Vision</h2>
            <p>To lead Canada’s cyber security services for charities while motivating and empowering 
                Canadian Veterans to trace and continue their career in the cyber security field.</p>
        </div>
        <div className='fields'>
            <h2>Mission</h2>
                <p>In an increasingly connected and digitized world no business is safe from cyber-attacks.
                     At Cyber Hack our mission is to educate and enable charities to protect their computer 
                     and information systems allowing them to focus on maximizing their social impact.</p>
        </div>
        <div>
            <h2>Core Values</h2>
            <div className='fields'>
                <h3>Education</h3>
                    <p>Knowledge is power. We want to empower the next generation of cyber security talent 
                        by providing educational resources. We want to educate the planet to achieve our 
                        vision of creating a more secure planet. </p>
            </div>
            <div className='fields'>
                <h3>Professional Development</h3>
                    <p>Despite the growing demand for cyber security there is often a barrier of experience
                         in place to prevent students and new graduates from entering the industry. We want
                          to bridge this gap by giving aspiring cyber security professionals an opportunity 
                          to gain relevant experience. </p>
            </div>
            <div className='fields'>
                <h3>Integrity</h3>
                    <p>We hold ourselves accountable by measuring ourselves against the highest standards of
                         integrity and fiscal responsibility.</p>
            </div>
            <div className='fields'>
                <h3>Trust</h3>
                    <p>We build trust through constructive, candid communication that serves the common good.
                         We value the talent, time and intentions of all of our volunteers.</p>
            </div>
            <div className='fields'>
                <h3>Passion</h3>
                    <p>We love cyber security. All the industry professionals that work with our organization
                         love cyber security with a passion and do this outside their career. We love the idea
                          of being able to apply our talent to give back to our community.</p>
            </div>
        </div>
        </>
    );
};

export default About;
