import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;