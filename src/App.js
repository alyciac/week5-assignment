import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

import { Switch } from 'react-router';

import Character from './Character'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then( res => res.json())
    .then((response) => {
      this.setState({
        isLoaded: true,
        items: response.results
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    const { error, isLoaded, items} = this.state;
    if (error){
      return <div>Error: {error.message}</div>
    }else if(!isLoaded){
      return <div>Wubba dub dub, friends!</div>;
    }else{

      return (
        <Router>
          <div>
            <ul className="character-list">
              {
                items.map(item => {
                  let characterPath = `/character/${item.id}`;
                  return (
                    <li key={item.id}>
                      <Link to={{
                        pathname: characterPath,
                        state:{characterData:item}
                      }}>{item.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
            </div>
            <Route path="/character/:id" component={Character}></Route>
        </Router>
      )
    }
  };
}
export default App;
