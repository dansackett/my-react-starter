import React from 'react';
import { Link, IndexLink } from 'react-router';

export default (props) => (
  <div className="navbar">
    <div className="container">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/redux" activeClassName="active">Redux Example</Link>
    </div>
  </div>
);
