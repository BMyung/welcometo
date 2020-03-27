import React, {useEffect, useState} from 'react';
import './App.css';
import io from 'socket.io-client'
import {Combo} from './components/section/combo'
import {Menu} from './components/section/menu'
import {Goal} from './components/section/goals'
// import {Back} from './components/section/back'
// import cover from './cover2.jpg';

function App() {
  const [socket] = useState(()=> io(':8000'));
  const [stacks, setStacks] = useState([['null'],['null'],['null']]);
  const [discards, setDiscards] = useState([['null'],['null'],['null']]);
  const cardInfo1 = {stacks: stacks[0],discards: discards[0]}
  const cardInfo2 = {stacks: stacks[1], discards: discards[1]}
  const cardInfo3 = {stacks: stacks[2], discards: discards[2]}
  useEffect(()=>{
    socket.on('decks', data =>{
      setStacks(data.stacks);
      setDiscards(data.discards);
    });


    return () => socket.disconnect();
  }, [socket])
  return (
    <div className="App">
    <h1>Welcome to Your Perfect Home</h1>
    <div className='wrapper'>
    <div className = 'goals'>
      <Goal />
      <Goal />
      <Goal />
    </div>
    <div className='cardArea'>
      <Combo deck={cardInfo1}/>
      <Combo deck={cardInfo2}/>
      <Combo deck={cardInfo3}/>
    </div>
    <div className = 'menuWrapper'>
      <Menu />
    </div>
    </div>

    </div>
  );
}

export default App;
