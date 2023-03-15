import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/charities" activeStyle>
                        Charities
                    </NavLink>
                    <NavLink to="/volunteers" activeStyle>
                        Volunteers
                    </NavLink>
                    <NavLink to="/research" activeStyle>
                        Research
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>                   
                    
                </NavMenu>
                <div><h2>Cyber Hack</h2></div>
            </Nav>
            
        </>
    );
};

export default Navbar;
