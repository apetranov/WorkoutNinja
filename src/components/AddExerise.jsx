import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "../components/ui/field"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useState } from "react"


export default function AddExerise({ 
    workout, 
    setWorkout,
    exerciseName,
    setExerciseName,
    sets,
    setSets,
    reps,
    setReps
}) {
    

    const handleAddExercise = () => {
        if (!exerciseName || sets <= 0 || reps <= 0) {
            alert("All fields must be filled and sets and reps cannot be <= 0");
            return;
        }

        const newExercise = {
            exerciseName,
            sets: parseInt(sets),
            reps: parseInt(reps)
        }

        if (workout.exercises.length == 10) {
            alert("cannot add more than 10 exercises");
            return;
        }

        setWorkout({
        ...workout,
            exercises: [...workout.exercises, newExercise]
        });

        setExerciseName("");
        setSets(0);
        setReps(0);
    }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-black text-white cursor-pointer" variant="outline">+ Add Exercise</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-bold">Add Exercise</DialogTitle>
            <DialogDescription>
              Enter exercise details
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Exercise name</Label>
              <Input id="name-1" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} name="name" placeholder="Example: bench press" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Sets of exercise</Label>
              <Input id="username-1" value={sets} onChange={(e) => setSets(e.target.value)} type="number" name="username" placeholder="Example: 3"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Reps per set</Label>
              <Input id="username-1" value={reps} onChange={(e) => setReps(e.target.value)} type="number" name="username" placeholder="Example: 12"/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
                <Button onClick={handleAddExercise} type="submit">🏋️Add exercise</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    
  )
}
