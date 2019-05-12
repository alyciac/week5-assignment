import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  _handResponseJson(json) {
    this.setState({

    });
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/')
    .then( res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error.message));
  }
}

export default App;
