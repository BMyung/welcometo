import React, {useEffect, useState} from 'react';
import './App.css';
import io from 'socket.io-client'
import {Combo} from './components/section/combo'
// import {Back} from './components/section/back'
// import cover from './cover.jpg';

function App() {
  const [socket] = useState(()=> io(':8000'));

  useEffect(()=>{
    socket.on('welcome', console.log)

    return () => socket.disconnect();
  }, [socket])
  return (
    <div className="App">
    {/* <img src={cover} alt='game cover' className='gameCover'/> */}
    <h1>Welcome to Your Perfect Home</h1>
    <div className='cardArea'>
      <Combo />
      <Combo />
      <Combo />
    </div>
    {/* <Back /> */}

    </div>
  );
}

export default App;
