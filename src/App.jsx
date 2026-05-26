import { useState } from 'react'
import { Button } from './components/ui/button'
import CreateWorkout from './components/CreateWorkout'


function App() {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [musclesToHit, setMusclesToHit] = useState("");
  const [minutes, setMinutes] = useState(0);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-3xl md:text-5xl font-bold'>🥷WorkoutNinja</h1>
      <CreateWorkout
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
        musclesToHit={musclesToHit}
        setMusclesToHit={setMusclesToHit}
        minutes={minutes}
        setMinutes={setMinutes}
      />
    </div>
  )
}

export default App
