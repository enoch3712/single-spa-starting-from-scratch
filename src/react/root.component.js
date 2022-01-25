import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Gifs from './gifs';
import { getUserName } from '../imports/userImports';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    this.setState({
      userName: getUserName(),
    });
  }

  render() {
    return (
      <Router>  
        <div>
          <h4 className="light">
            React example | UserName: {this.state.userName}
          </h4>
          <p className="caption">
            This is a sample application written with React and Redux.
          </p>
          <div>
            <a className="waves-effect waves-light btn-large" style={{marginRight: 10}}>
              Show me cat gifs
            </a>
            <a className="waves-effect waves-light btn-large" style={{marginRight: 10}}>
              Take me home (No cats)
            </a>
          </div>
          <div className="row">
            <Gifs/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;