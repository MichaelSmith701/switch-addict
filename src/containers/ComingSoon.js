import React, { Component } from 'react';
import * as apiCalls from '../services/api';
import CSGame from '../components/CSGame';

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }
  
  componentDidMount() {
    this.loadGames();
  }
  
  async loadGames() {
    let games = await apiCalls.getGames();
    this.setState({games});
  }
  
  render() {
    const games = this.state.games.map((g) => (
        <div key={g._id}>
          <CSGame 
            name={g.name}
            cover={g.cover}
            date={g.releaseDate}
            website={g.officialURL}
          />
        </div>
      )
    );
    
    return (
      <div>
        <div className="coming-soon-thumbs">
          <h1 className="newsfeed-header">Coming Soon</h1>
          <div>{games}</div>
        </div>
      </div>
      );
  }
  
}

export default ComingSoon;