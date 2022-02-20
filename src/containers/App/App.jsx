import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    // Normally, just render children
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
