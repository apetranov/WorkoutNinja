import React from 'react'
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
import { useTimer } from 'react-timer-hook';

export default function Workout({workoutRunning, setWorkoutRunning, workoutFinished, setWorkoutFinished}) {

    const startWorkout = () => {
        setWorkoutRunning(true);
    }

  return (
    <>
      {!workoutFinished ? (
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button className="bg-green-600 text-white cursor-pointer" variant="outline">{workoutRunning ? "Finish Workout" : "Start Workout"}</Button>
            </DialogTrigger>
            {workoutRunning ? <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle className="font-bold">Finish workout?</DialogTitle>
                <DialogDescription>
                  Are you sure you want to finish the workout?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button onClick={() => {
                        setWorkoutFinished(true);
                        setWorkoutRunning(false);
                    }} type="submit">Yes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent> : <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle className="font-bold">Are you ready?!</DialogTitle>
                <DialogDescription>
                  You cannont delete or add exercises during the workout
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button onClick={startWorkout} type="submit">🔥Let's go!</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>}
          </form>
        </Dialog>
      ) : (
        <Button 
          className="bg-black text-white cursor-pointer" 
          onClick={() => window.location.reload()}
        >
          Start New Workout
        </Button>
      )}
    </>
  )
}
