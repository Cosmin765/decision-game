import './../css/GameStats.css';
import Stat from './Stat';
import uniqid from 'uniqid';

import images from './../assets/statsImages';
import statsDescription from './../data/statsDescription.json';
import statsTitle from './../data/statsTitle.json';

export default function GameStats(props) {
  const statsCount = statsTitle.length;
  let count = 0; // for assigning descriptions
  
  const statElements = Array.from(Array(2 * statsCount - 1).keys()).map(i => i % 2 === 0 ? 
    <Stat 
      key={uniqid()}
      src={images[count]}
      description={statsDescription[count]}
      title={statsTitle[count++]}
    /> : <SizedBox key={uniqid()}/>
  );
  
  return (
    <div className="game-stats">
      { statElements }
    </div>
  );
}

function SizedBox() {
  return (
    <div style={{width: '3vw'}}></div>
  );
}