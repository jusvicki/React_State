// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer.",
        imgSrc: "https://via.placeholder.com/150?text=John+Doe",
        profession: "Software Developer"
      },
      shows: false,
      elapsedTime: 0
    };
    this.timer = null; // To store the timer ID
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Clean up the timer
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state;
    
    return (
      <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
        <button onClick={this.toggleShow} style={{ marginBottom: '20px' }}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
            <img src={person.imgSrc} alt={person.fullName} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          <p>Time since component mounted: {elapsedTime} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
