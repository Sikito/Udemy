import React, { Component } from 'react';
import styles from './App.module.css';

import Validation from './Validation';
import Character from './Character';

class App extends Component {
  state = {
    myText: ''
  };
  inputChangeHandler = e => {
    let myText = e.target.value;

    this.setState({ myText });
  };

  characterClickHandler = characterIndex => {
    const textArray = this.state.myText.split('');
    textArray.splice(characterIndex, 1);
    let updatedText = textArray.join('');
    this.setState({ myText: updatedText });
  };

  render() {
    return (
      <div className={styles.App}>
        <input
          className={styles.myInput}
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.myText}
        />
        <p className={styles.textLength}>{this.state.myText.length}</p>
        <Validation textLenght={this.state.myText.length} />
        {this.state.myText.split('').map((character, index) => (
          <Character
            value={character}
            key={index}
            cssClass={styles.character}
            clicked={() => this.characterClickHandler(index)}
          />
        ))}
      </div>
    );
  }
}

export default App;
