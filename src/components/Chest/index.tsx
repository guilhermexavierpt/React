import React from 'react'
import './index.css';
import { HEAD_OFFSET, TILE_SIZE } from '../settings/constants';

const Chest = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * 4,
        left: TILE_SIZE * 7,
        width: TILE_SIZE,
        height: 100, 
        backgroundImage: "url(./Assets/CHEST.png)",
        backgroundRepeat: "no-repeat",
        animation: "chest-animation 1s steps(3) infinite"
}}
/>
  )
}

export default Chest;