import React, { Component } from 'react'; // import react
import './App.css'; // import stylesheet for App.js '.' takes you one level up 
import { connect } from 'react-redux'; // importing connect feature from react-redux package / connects a react components to a redux store 
import { addItem } from  './actions/items'; // importing the action addItem from actions

class App extends Component { // declaring App class as a react component

  handleOnClick() { // handle click of button
    this.props.addItem(); // access dispatch to change state 
  }

  render() { // jsx content being rendered to page 
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
