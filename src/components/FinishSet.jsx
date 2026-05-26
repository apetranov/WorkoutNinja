import React from 'react'
import { Button } from './ui/button';

export default function FinishSet({workout, setWorkout, exId}) {
    
    const handleFinishSet = () => {
        setWorkout({
        ...workout,
            exercises: workout.exercises.map(exercise => exercise.exerciseId == exId ?
                { ...exercise, finishedSets: exercise.finishedSets + 1 }
                : exercise
            )
        });
    }

  return (
    <Button onClick={handleFinishSet}>FinishSet</Button>
  )
}
