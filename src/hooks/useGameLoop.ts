import { useEffect, useCallback } from 'react';
import { Position, Bullet, Target } from '../types/game';

const BULLET_SPEED = 10;
const COLLISION_DISTANCE = 20;

export const useGameLoop = (
  bullets: Bullet[],
  targets: Target[],
  setBullets: React.Dispatch<React.SetStateAction<Bullet[]>>,
  setTargets: React.Dispatch<React.SetStateAction<Target[]>>
) => {
  const checkCollisions = useCallback(() => {
    bullets.forEach((bullet) => {
      targets.forEach((target) => {
        if (!target.isHit) {
          const distance = Math.sqrt(
            Math.pow(bullet.position.x - target.position.x, 2) +
            Math.pow(bullet.position.y - target.position.y, 2)
          );
          
          if (distance < COLLISION_DISTANCE) {
            setTargets((prev) =>
              prev.map((t) =>
                t.id === target.id ? { ...t, isHit: true } : t
              )
            );
          }
        }
      });
    });
  }, [bullets, targets, setTargets]);

  const updateBullets = useCallback(() => {
    setBullets((prev) =>
      prev
        .map((bullet) => ({
          ...bullet,
          position: {
            x: bullet.position.x + Math.cos(bullet.angle) * BULLET_SPEED,
            y: bullet.position.y + Math.sin(bullet.angle) * BULLET_SPEED,
          },
        }))
        .filter(
          (bullet) =>
            bullet.position.x >= 0 &&
            bullet.position.x <= window.innerWidth &&
            bullet.position.y >= 0 &&
            bullet.position.y <= window.innerHeight
        )
    );
  }, [setBullets]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      updateBullets();
      checkCollisions();
    }, 16);

    return () => clearInterval(gameLoop);
  }, [updateBullets, checkCollisions]);
};