import React, { useState, useEffect } from 'react';
import { Player } from './components/Player';
import { Bullet } from './components/Bullet';
import { Target } from './components/Target';
import { useGameLoop } from './hooks/useGameLoop';
import { Position, Bullet as BulletType, Target as TargetType } from './types/game';

function App() {
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 400, y: 300 });
  const [playerRotation, setPlayerRotation] = useState(0);
  const [bullets, setBullets] = useState<BulletType[]>([]);
  const [targets, setTargets] = useState<TargetType[]>([]);
  const [score, setScore] = useState(0);

  useGameLoop(bullets, targets, setBullets, setTargets);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - playerPosition.x;
      const dy = e.clientY - playerPosition.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      setPlayerRotation(angle);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const dx = touch.clientX - playerPosition.x;
      const dy = touch.clientY - playerPosition.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      setPlayerRotation(angle);
    };

    const handleClick = (e: MouseEvent) => {
      const angle = (playerRotation * Math.PI) / 180;
      setBullets((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          position: { ...playerPosition },
          angle,
        },
      ]);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const angle = (playerRotation * Math.PI) / 180;
      setBullets((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          position: { ...playerPosition },
          angle,
        },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [playerPosition, playerRotation]);

  useEffect(() => {
    const spawnTarget = () => {
      const newTarget: TargetType = {
        id: Date.now().toString(),
        position: {
          x: Math.random() * (window.innerWidth - 50),
          y: Math.random() * (window.innerHeight - 50),
        },
        isHit: false,
      };
      setTargets((prev) => [...prev, newTarget]);
    };

    const targetInterval = setInterval(spawnTarget, 2000);
    return () => clearInterval(targetInterval);
  }, []);

  useEffect(() => {
    const hitTargets = targets.filter((target) => target.isHit).length;
    setScore(hitTargets);
  }, [targets]);

  return (
    <div className="relative w-screen h-screen bg-gray-900 overflow-hidden cursor-crosshair">
      <div className="absolute top-4 left-4 text-white text-2xl font-bold">
        Score: {score}
      </div>
      
      <Player position={playerPosition} rotation={playerRotation} />
      
      {bullets.map((bullet) => (
        <Bullet key={bullet.id} position={bullet.position} />
      ))}
      
      {targets.map((target) => (
        <Target
          key={target.id}
          position={target.position}
          isHit={target.isHit}
        />
      ))}
    </div>
  );
}

export default App;