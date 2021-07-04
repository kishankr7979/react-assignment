import React, { Component } from 'react';
import Leaderboard from 'react-leaderboard';
class board extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [{ name: 'Edward', score: 1},
          { name: 'Sharpe', score: 7},
          { name: 'Rishav', score: 45},
          { name: 'Kishan', score: 12 },
          { name: 'Ashutosh', score: 13 },
          { name: 'Hariom', score: 37},
          { name: 'Tarun', score: 12 },
          { name: 'Uday', score: 53 },
          { name: 'Shashwat', score: 47}, 
          { name: 'Vidhan', score: 9 },
          { name: 'Sameer', score: 0 },
          { name: 'Rivya', score: 27},],

        };
      }
    render() {
        return (
            <div className="string">
            <Leaderboard users={this.state.users}/>
          </div>
        );
    }
}

export default board;