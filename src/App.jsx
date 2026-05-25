import { useState } from 'react'
import { Button } from './components/ui/button'
import CreateWorkout from './components/CreateWorkout'


function App() {
  
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-3xl md:text-5xl font-bold'>🥷WorkoutNinja</h1>
      <CreateWorkout />
    </div>
  )
}

export default App
