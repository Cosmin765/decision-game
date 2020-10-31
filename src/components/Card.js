import './../css/Card.css';
import { useState } from 'react';
import backImage from './../assets/card_icon.png';

const map = (x, a, b, c, d) => (x - a) / (b - a) * (d - c) + c;
const nothing = () => {};

export default function Card(props) {
  const [posX, setPosX] = useState(0);
  const [fade, setFade] = useState(false);
  
  const visible = props.getVisibleCard().props.id === props.id;
  
  const fadeDuration = 0.4;
  const rotation = map(posX, -window.innerWidth / 2, window.innerWidth / 2, -35, 35);
  
  const handleTouchMove = e => {
    setPosX(e.touches[0].pageX - window.innerWidth / 2);
  };
  
  const resetPos = () => setPosX(0);
  
  const fadeTo = dir => {
    setFade(true);
    setPosX(dir * 1.5 * window.innerWidth);
    
    /* if(dir === -1) console.log(props.gameEvent.left.decision);
    else console.log(props.gameEvent.right.decision); */
    
    setTimeout(() => props.removeCard(), fadeDuration * 1000);
  };
  
  const handleTouchEnd = () => {
    if(Math.abs(posX) > window.innerWidth / 4)
      fadeTo(posX < 0 ? -1 : 1);
    else resetPos();
  };
  
  return (
    <div 
      className="card"
      style={{
        background: visible ? "rgb(148, 33, 0)" : "rgb(99, 22, 0)",
        top: -props.offset,
        transform: `translateX(${posX - props.offset}px) rotateZ(${rotation}deg)`,
        transitionDuration: fade ? `${fadeDuration}s` : '0.07s'
      }}
      onTouchMove={visible ? handleTouchMove : nothing}
      onTouchEnd={visible ? handleTouchEnd : nothing}
    >
    
      <div 
        className="left option"
        style={{
          opacity: `${map(posX, 0, window.innerWidth / 8, 0, 100)}%`
        }}
      >
        { props.gameEvent.right.decision }
      </div>
      <div 
        className="right option"
        style={{
          opacity: `${map(posX, 0, -window.innerWidth / 8, 0, 100)}%`
        }}
      >
        { props.gameEvent.left.decision }
      </div>
      
      { visible ? 
        props.gameEvent.q 
        :
        <img src={backImage} alt="" className="back-image"/>
      }
    </div>
  );
}