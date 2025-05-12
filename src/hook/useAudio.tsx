"use client";
import { useEffect, useRef, useState } from 'react';

export const useAudio = (url: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Cek agar hanya dijalankan di client
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(url);
    }
  }, [url]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current?.pause();
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    };
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggle = () => setPlaying(!playing);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  return { playing, toggle, play, pause };
};
