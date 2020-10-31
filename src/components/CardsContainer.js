import './../css/CardsContainer.css';
import Card from './Card';
import gameEventsTemp from './../data/gameEvents.json';
import uniqid from 'uniqid';
import { useState } from 'react';

export default function CardsContainer(props) {
  const [gameEvents, setGameEvents] = useState(Array.from(gameEventsTemp));
  
  const cardsCount = gameEvents.length;
  
  const getVisibleCard = () => {
     const el = cards.reduce((acc, el) => {
       if(acc.props.offset < el.props.offset) return el;
       return acc;
     }, cards[0]);
     
     return el;
  };
  
  const removeCard = () => {
    gameEvents.splice(0, 1);
    setGameEvents(Array.from(gameEvents));
  }
  
  const cards = Array.from(Array(cardsCount).keys()).map(i => <Card 
      offset={i * 3} 
      key={uniqid()}
      id={uniqid()}
      gameEvent={gameEvents[gameEvents.length - 1 - i]}
      getVisibleCard={getVisibleCard}
      removeCard={removeCard}
      setLevel={props.setLevel}
    />
  );
  
  return (
    <div className="cards-container">
      <div className="cards-holder">
        { cards }
      </div>
    </div>
  );
}