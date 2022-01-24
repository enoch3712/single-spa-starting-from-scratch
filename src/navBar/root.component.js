import React from 'react'
import { navigateToUrl } from 'single-spa'
import { setUserName, getUserName } from '../imports/userImports'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>user:</li>
          <li><Example/></li>
          <li><a href="/" onClick={navigateToUrl}>Home</a></li>
          <li><a href="/react" onClick={navigateToUrl}>React</a></li>
          <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
        </ul>
      </div>
    </nav>
  )
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: getUserName()
    };
  }

  render() {
    return (
      <ul>
        <li>
          <input type="text" id="fname" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
        </li>
        <li>
          <input type="button" style={{backgroundColor: "green"}} onClick={() => 
            { 
              setUserName(this.state.name); 
            }} 
            value={"submit"}
          />
        </li>
      </ul>
    );
  }
}

export default NavBar