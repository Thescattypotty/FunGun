import React from 'react';
import { Position } from '../types/game';

interface TargetProps {
  position: Position;
  isHit: boolean;
}

export const Target: React.FC<TargetProps> = ({ position, isHit }) => {
  return (
    <div
      className={`absolute w-8 h-8 rounded-full ${
        isHit ? 'bg-red-500' : 'bg-green-500'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};