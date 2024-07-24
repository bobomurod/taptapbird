import React, { useEffect, useRef } from 'react';

// Импортируем код игры как модуль
import { initGame } from '../../utils/game';

const FlappyBird: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Инициализация игры
    const cleanup = initGame(canvas);

    // Функция очистки
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas" width={320} height={480} tabIndex={1} />;
};

export default FlappyBird;
