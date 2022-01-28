import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// The Square component renders a single <button> and the Board 
// renders 9 squares. The Game component renders a board.
class Square extends React.Component {
  // create a constructor for the Square component to initialize the state attribute 
  // initialize this.state as a dict because there are many 'keys' that can contribute to a component's state
  
  // why does 'value' not throw an error? we haven't defined it yet. perhaps the super(props) is looking at its properties?
  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    // we're setting state to {value: 'X'} and then printing state[]
    return (
      <button
       className="square" 
       onClick = { () => this.setState({value: 'X'})}
       > 
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value = {i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
