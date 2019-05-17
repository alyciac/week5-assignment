import React from 'react';
import PropTypes from 'prop-types'; // ES6


class Character extends React.Component {
  render () {
    let characterData = this.props.location.state.characterData;
    return (
    <div className="character-page">
        <img className="charcterImage" src={characterData.image}></img>
        <div>
          <h1>{characterData.name}</h1>
          <ul className="charcterFacts">
            <li><b>Status:</b> {characterData.status}</li>
            <li><b>Species: </b>{characterData.species}</li>
            <li><b>Origin: </b> {characterData.origin.name}</li>
            <li><b>Location: </b>{characterData.location.name}</li>
        </ul>
        </div>
    </div>
    );
  };
}

Character.propTypes ={
  characterData: PropTypes.array
};

export default Character;