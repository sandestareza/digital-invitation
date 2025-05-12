import { useEffect, useState } from 'react';

const getTimeRemaining = (targetDate: Date) => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

export const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const updated = getTimeRemaining(targetDate);
      setTimeLeft(updated);
    };

    updateTime(); // Set initial value on client only

    const timer = setInterval(() => {
      const updated = getTimeRemaining(targetDate);
      if (updated.total <= 0) {
        clearInterval(timer);
      }
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
