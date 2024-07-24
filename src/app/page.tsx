'use client'
import { useEffect } from 'react';
import FlappyBird from '../components/FlappyBird';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready(): void;
        expand(): void;
      };
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize Telegram Web App
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Flappy Bird</h1>
      <FlappyBird />
    </main>
  );
}
