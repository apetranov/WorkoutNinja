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
//   console.log(minutes, seconds);
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
        setWorkoutFinished(true);
        setWorkoutRunning(false);
    }
  },[minutes, seconds])

  return (
    <div >
      
      <div >
        <span>⏳{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default Timer 