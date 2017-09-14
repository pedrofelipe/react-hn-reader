import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './placeholder.css';

class Placeholder extends Component {
  render() {
    return (
      <div className="placeholder">
        <div className="placeholder-text">
          <span className="placeholder-background"></span>
        </div>

        <div className="placeholder-text">
          <span className="placeholder-background"></span>
        </div>
      </div>
    );
  }
}

export default Placeholder;
