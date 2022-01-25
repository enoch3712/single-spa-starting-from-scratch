
import React from 'react';

class Gifs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data,
        });
      });
  }

  render() {
    return (
      <div style={{paddingTop: 20}}>
        <h4 className="light">
          Cat Gifs gifs
        </h4>
        <p>
        </p>
        <div>
          {this.state.gifs.map(gif => <img key={Math.random()} src={gif.images.downsized_medium.url} className="col l3"></img>)}
        </div>
      </div>
    );
  }
}

export default Gifs;