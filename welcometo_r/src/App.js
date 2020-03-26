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

  useEffect(()=>{
    socket.on('deal', console.log)
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
      <Combo />
      <Combo />
      <Combo />
    </div>
    <div className = 'menuWrapper'>
      <Menu />
    </div>
    </div>

    </div>
  );
}

export default App;
