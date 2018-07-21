// Main app component which contains all other components and handles state.
import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import NewColorInput from '../components/NewColorInput/NewColorInput';
import Palette from '../components/Palette/Palette';

class App extends Component {
  state = {
    showNewColorInput: false,
    colors: [
      { id: 'A1234', value: '000000'},
      { id: 'A1434', value: 'cccccc' },
      { id: 'A1765', value: 'ff0000' },
      { id: 'A1678', value: 'ffff00' },
      { id: 'A1342', value: '0000ff' },
    ]
  }
  addColorHandler = (event) => {
    let input = event.target.value;
  }
  deleteColorHandler = (index) => {
    const colors = [...this.state.colors];
    colors.splice(index, 1);
    this.setState({
      colors
    });
  }
  toggleModalHandler = () => {
    const showNewColorInput = !this.state.showNewColorInput;
    this.setState({
      showNewColorInput
    });
  }
  render() {
    let newColorInput = null;
    if(this.state.showNewColorInput) {
      newColorInput = <NewColorInput toggleModal={this.toggleModalHandler} />;
    }
    return (
      <div className={classes.App}>
        <Cockpit />
        {newColorInput}
        <Palette colors={this.state.colors} deleted={this.deleteColorHandler} toggleModal={this.toggleModalHandler} />
      </div>
    );
  }
}

export default App;
