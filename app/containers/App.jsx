import React from 'react';

import Navigation from 'Components/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
