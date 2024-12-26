export interface Position {
  x: number;
  y: number;
}

export interface Player {
  position: Position;
  rotation: number;
}

export interface Bullet {
  id: string;
  position: Position;
  angle: number;
}

export interface Target {
  id: string;
  position: Position;
  isHit: boolean;
}