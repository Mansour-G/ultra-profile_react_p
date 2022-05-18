import React from "react";
// import { Link } from "react-router-dom";

import { NavbarSection , Logo, LogoText, UlList , ListItem, Anchor , StyledLink } from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection className="navbar">
            
      <div className="container">
          
          <Logo className="logo">
              <LogoText className="logo-text">Ultra Profile</LogoText>
          </Logo>
          
        
          <UlList>
              <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
              <ListItem><Anchor href="#">Work</Anchor></ListItem>
              <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
              <ListItem><Anchor href="#">Resume</Anchor></ListItem>
              <ListItem><Anchor href="#">About</Anchor></ListItem>
              <ListItem><StyledLink  to="/Contact">Contact</StyledLink></ListItem>
          </UlList>
          
      </div>
            
    </NavbarSection>
  );
};

export default Navbar;
