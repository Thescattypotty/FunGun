import React from 'react';
import { Position } from '../types/game';

interface BulletProps {
  position: Position;
}

export const Bullet: React.FC<BulletProps> = ({ position }) => {
  return (
    <div
      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};