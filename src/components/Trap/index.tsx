import React from 'react'
import './index.css';
import { TILE_SIZE } from '../settings/constants';

const Trap = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * 8,
        left: TILE_SIZE * 3,
        width: TILE_SIZE,
        height: 100, 
        backgroundImage: "url(./Assets/TRAP.png)",
        backgroundRepeat: "no-repeat",
        animation: "trap-animation 1s steps(8) infinite"
}}
/>
  )
}

export default Trap;