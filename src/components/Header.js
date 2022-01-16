import React from "react";
import ticketsImage from "./../img/reading_tickets.jpg";

// CSS object with inline styles
function Header(props){
  const Header = {
    color: 'green',
    fontFamily: 'futura',
  }
  return (
    <React.Fragment>
      <div style={Header}>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of tickets" />
      </div>
    </React.Fragment>
  );
}

export default Header;