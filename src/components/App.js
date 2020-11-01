import './../css/App.css';
import GameStats from './GameStats';
import CardsContainer from './CardsContainer';
import Timer from './Timer';

import { useState } from 'react';

export default function App() {
  const statsCount = 4;
  const statsMaxLevel = 10;

  const [state, setState] = useState({
    statsLevel: Array(statsCount).fill(statsMaxLevel / 2),
    statsLastLevel: Array(statsCount).fill(0),
  });

	const sendLevel = effect => setState({
    statsLevel: state.statsLevel.map((level, index) => level + effect[index]), // no need to call Array.from() bc a new array is returned
    statsLastLevel: Array.from(state.statsLevel),
  });

  return (
    <div className="app">
      <GameStats statsInfo={state} statsMaxLevel={statsMaxLevel}/>
      <CardsContainer sendLevel={sendLevel}/>
      <Timer />
    </div>
  );
}