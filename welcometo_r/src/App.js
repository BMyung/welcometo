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
  const [stacks, setStacks] = useState([{topStacks:'', discardStacks:''},{topStacks:'', discardStacks:''},{topStacks:'', discardStacks:''}]);
  const [remaining, setRemaining] = useState(0);
  

  useEffect(()=>{
    socket.on('decks', data =>{
      console.log(data.allStacks);
      setStacks(data.allStacks);
      setRemaining(data.remaining);
    });
    
    return () => socket.disconnect();
  }, [socket])

  
console.log('stacks = '+ stacks[0]['topStacks']['number'])
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
      {stacks.map((data,i)=>{
        return (<Combo deck={data} key={i}/>)
      })}
    </div>
    <div className = 'menuWrapper'>
      <h2>Cards remaining: {remaining}</h2>
      <button onClick=>New Game</button>
      <Menu />
    </div>
    </div>

    </div>
  );
}

export default App;
