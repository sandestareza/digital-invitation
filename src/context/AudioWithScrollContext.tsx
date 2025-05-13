
'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

type AudioContextType = {
  playing: boolean;
  toggle: () => void;
};

const AudioWithScrollContext = createContext<AudioContextType | undefined>(undefined);

export const AudioWithScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side

  // Set isClient to true once the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/audio/satu-shaf-dibelakangku.mp3');
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [playing]);

  useEffect(() => {
    if (!isClient) return; // Don't run the scroll logic during SSR

    const scrollContainer = scrollContainerRef.current;
    const audio = audioRef.current;
    if (!scrollContainer || !audio) return;

    const scrollInterval = setInterval(() => {
      if (audio.currentTime) {
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollPosition = (audio.currentTime / audio.duration) * scrollHeight;

        scrollContainer.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }
    }, 100); // Update every 100ms to match audio progress

    return () => clearInterval(scrollInterval);
  }, [playing, isClient]); // Add isClient to the dependency array

  const toggle = () => {
    setPlaying((prev) => !prev);
  };

  if (!isClient) return null; // Render nothing on the server

  return (
    <AudioWithScrollContext.Provider value={{ playing, toggle }}>
      <div ref={scrollContainerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
        {children}
      </div>
    </AudioWithScrollContext.Provider>
  );
};

export const useAudioWithScrollContext = () => {
  const context = useContext(AudioWithScrollContext);
  if (context === undefined) {
    throw new Error('useAudioWithScrollContext must be used within an AudioWithScrollProvider');
  }
  return context;
};

