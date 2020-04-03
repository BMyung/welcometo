import React, {useEffect, useState} from 'react';
import './App.css';
import io from 'socket.io-client'
import {Combo} from './components/section/combo'
import {Menu} from './components/section/menu'
import {Goal} from './components/section/goals'
// import {Back} from './components/section/back'
import cover from './cover.jpg';

function App() {
  const [socket] = useState(()=> io(':8000'));
  const [stacks, setStacks] = useState([
    {
      topStacks:'', discardStacks:''
    },
    {
      topStacks:'', discardStacks:''
    },{
      topStacks:'', discardStacks:''
    }]);
  const [remaining, setRemaining] = useState(null);
  const [goals, setGoals] = useState([{
    level: '', goal: '', description: '', first_points: '', second_points: ''
  },{
    level: '', goal: '', description: '', first_points: '', second_points: ''
  },{
    level: '', goal: '', description: '', first_points: '', second_points: ''
  }])
  

  useEffect(()=>{
    socket.on('decks', data =>{
      setStacks(data.allStacks);
      setRemaining(data.remaining);
      setGoals(data.goalsStack)
    });
    
    return () => socket.disconnect();
  }, [socket]);

  
function handleNew(event) {
  event.preventDefault();
    socket.emit('new');
}
function handleNext(event) {
  event.preventDefault();
   remaining > 1 ? socket.emit('next') : socket.emit('reshuffle');
}
function handleReshuffle(event) {
  event.preventDefault();
   socket.emit('reshuffle');
}

  return (
    <div className="App">
    <h1>Welcome to Your Perfect Home</h1>
    <div className='wrapper'>
    <div className = 'goals'>
      <Goal goalCard = {goals[0]}/>
      <Goal goalCard = {goals[1]}/>
      <Goal goalCard = {goals[2]}/>
    </div>
    <div className='cardArea'>
      {stacks.map((data,i)=>{
        return (<Combo deck={data} key={i}/>)
      })}
    </div>
    <div className = 'menuWrapper'>
    <img className = 'image' src={cover} alt='game cover'></img>
      <h2>Cards remaining: {remaining}</h2>
      <button onClick={handleNew}>New Game</button>
      <button onClick={handleNext}>Next Card</button>
      <button onClick={handleReshuffle}>Reshuffle</button>
      <Menu />
    </div>
    </div>

    </div>
  );
}

export default App;
