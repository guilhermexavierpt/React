import React from 'react'
import './index.css';
import { HEAD_OFFSET, TILE_SIZE } from '../settings/constants';

const MiniDemon = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * 4,
        left: TILE_SIZE * 9,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET, 
        backgroundImage: "url(./Assets/MINI-DEMON.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: "mini-demon-animation 1s steps(4) infinite"
}}
/>
  )
}

export default MiniDemon;