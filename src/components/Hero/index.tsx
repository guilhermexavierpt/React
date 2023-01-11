import React, { useState } from 'react'
import './index.css';
import { TILE_SIZE, HEAD_OFFSET } from '../settings/constants';

const initialPosition = {
  x: 5,
  y: 5
};

const Hero = () => {
  const [positionState, updatePositionState] = useState(initialPosition);

setTimeout(() => {
  const newPosition = {x:10, y:10}
  updatePositionState(newPosition)
},2000)

  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET, 
        backgroundImage: "url(./Assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: "hero-animation 1s steps(4) infinite"
}}
/>
  )
}

export default Hero;