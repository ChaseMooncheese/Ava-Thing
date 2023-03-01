import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Container from './Container';
import Scores from './Scores';

function parseInput(str){
  const myReg = new RegExp("[0-9]\. ");
  const array = str.split(myReg);
  array.shift();
  const newArray = array.map(item => { return item.trim() });
  return newArray;
}

function App() {

  const [lists, setLists] = useState([]);
  const [scores, setScores] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newListStr = e.target.list.value;
    e.target.reset();
    const newList = parseInput(newListStr);
    
    setLists([
      ...lists, newList
    ]);
    
  }

  return (
    <div className="App">
      <div className="Title">
        <h1>Lists: </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          List:
          <input type="text" name="list" />
        </label>
      </form>



      <div className='Lists'>
        <Container lists={lists}></Container>
      </div>

      <div className='Averages'>
        <Scores lists={lists}></Scores>

      </div>

    </div>
    
  );
}

export default App;