import React from 'react';

import Nav from './Nav.jsx'

const Main = (props) => {
    return(
      <div>
        <Nav />
        <h3>Main.jsx</h3>
        {props.children}
      </div>
    );
}

export default Main;
