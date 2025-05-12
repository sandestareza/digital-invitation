// context/AudioContext.tsx
'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

type AudioContextType = {
  playing: boolean;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/audio/satu-shaf-dibelakangku.mp3'); // pastikan file di /public/audio
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    playing ? audio.play() : audio.pause();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [playing]);

  const toggle = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <AudioContext.Provider value={{ playing, toggle }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudioContext must be used within an AudioProvider');
  }
  return context;
};
