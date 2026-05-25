import { useState } from 'react'
import { Button } from './components/ui/button'


function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-5xl font-bold'>🥷WorkoutNinja</h1>
      <Button>+ Create Workout</Button>
    </div>
  )
}

export default App
