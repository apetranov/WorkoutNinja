import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, setWorkoutFinished, setWorkoutRunning }) {
  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });
  
  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    if (totalSeconds <= 0) {
        setWorkoutFinished(true);
        setWorkoutRunning(false);
    }
  }, [totalSeconds, setWorkoutFinished, setWorkoutRunning]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div >
      
      <div >
        ⏳<span>{pad(hours)}:</span><span>{pad(minutes)}</span>:<span>{pad(seconds)}</span>
      </div>
    </div>
  );
}

export default Timer 