import './../css/App.css';
import GameStats from './GameStats';
import CardsContainer from './CardsContainer';
import Timer from './Timer';
import gameEventsTemp from './../data/gameEvents.json';

import { useState } from 'react';

export default function App() {
  const [gameEvents] = useState(Array.from(gameEventsTemp)); // to copy the gameEvents as it's read only
  const statsCount = 4;
  const statsMaxLevel = 10;
  const timerIncrementRate = 366 / gameEventsTemp.length;

  const [state, setState] = useState({
    statsLevel: Array(statsCount).fill(statsMaxLevel / 2),
    statsLastLevel: Array(statsCount).fill(0),
    updateTimer: false,
    timerPassed: 0,
  });

	const sendLevel = effect => setState({
    statsLevel: state.statsLevel.map((level, index) => level + effect[index]), // no need to call Array.from() bc a new array is returned
    statsLastLevel: Array.from(state.statsLevel),
    updateTimer: true,
    timerPassed: state.timerPassed + timerIncrementRate,
  });

  const removeCard = () => {
    gameEvents.splice(0, 1);
    // setGameEvents(Array.from(gameEvents)); // for some reason this causes a memory leak but the app works without it
  }
  


  return (
    <div className="app">
      <GameStats statsInfo={state} statsMaxLevel={statsMaxLevel}/>
      <CardsContainer sendLevel={sendLevel} gameEvents={gameEvents} removeCard={removeCard}/>
      <Timer passed={state.timerPassed}/>
    </div>
  );
}