import React from 'react';
import { Crosshair } from 'lucide-react';
import { Position } from '../types/game';

interface PlayerProps {
  position: Position;
  rotation: number;
}

export const Player: React.FC<PlayerProps> = ({ position, rotation }) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <Crosshair className="w-8 h-8 text-blue-600" />
    </div>
  );
};