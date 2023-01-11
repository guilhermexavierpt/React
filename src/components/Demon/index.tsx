import React from 'react'
import './index.css';
import { DEMON_TILE_SIZE, TILE_SIZE } from '../settings/constants';

const Demon = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * 3,
        left: TILE_SIZE * 5,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE, 
        backgroundImage: "url(./Assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "demon-animation 1s steps(4) infinite"
}}
/>
  )
}

export default Demon;