import React from 'react'
import { Button } from './ui/button'

export default function DeleteExercise({ workout, setWorkout, delId }) {

    const deleteExercise = () => {
        setWorkout({
            ...workout,
            exercises: workout.exercises.filter(exercise => exercise.exerciseId !== delId)
        })
    }

  return (
    <Button onClick={deleteExercise} className="text-white bg-red-600">Delete</Button>
  )
}
