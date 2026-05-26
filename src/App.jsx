import { useState } from "react";
import { Button } from "./components/ui/button";
import CreateWorkout from "./components/CreateWorkout";
import AddExerise from "./components/AddExerise";
import DeleteExercise from "./components/DeleteExercise";
import Workout from "./components/Workout";
import FinishSet from "./components/FinishSet";
import Timer from "./components/Timer";

function App() {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [musclesToHit, setMusclesToHit] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [workout, setWorkout] = useState({});
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState({});
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [finishedSets, setFinishedSets] = useState(0);
  const [exerciseId, setExerciseId] = useState(0);
  const [workoutRunning, setWorkoutRunning] = useState(false);
  const [workoutFinished, setWorkoutFinished] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + minutes * 60); // 10 minutes timer
  
  

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {Object.keys(workout).length == 0 && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold">🥷WorkoutNinja</h1>
          <CreateWorkout
            dayOfWeek={dayOfWeek}
            setDayOfWeek={setDayOfWeek}
            musclesToHit={musclesToHit}
            setMusclesToHit={setMusclesToHit}
            minutes={minutes}
            setMinutes={setMinutes}
            workout={workout}
            setWorkout={setWorkout}
          />
        </div>
      )}
      {Object.keys(workout).length > 0 && (
        <div className="flex w-full md:w-1/2 space-y-2 outline p-10 shadow-2xl flex-col justify-center items-center">
          <h1 className="font-bold text-center  text-4xl">📅{workout.day}</h1>
          <h1 className="text-3xl text-center font-bold text-gray-400">
            💪🏽{workout.muscles}
          </h1>
          <h1 className="text-xl text-center font-bold text-gray-500">
            
            {workoutRunning ? <Timer setWorkoutRunning={setWorkoutRunning} setWorkoutFinished={setWorkoutFinished} expiryTimestamp={time} /> :  `⏳${workout.time} minutes`}
          </h1>
          <div className="w-full flex flex-col justify-center items-center space-y-5">
            {workout.exercises.map((ex) => (
              <div
                key={ex.exerciseId}
                className={!workoutRunning && !workoutFinished ? 
                  `grid grid-cols-4 w-full justify-center items-center text-center` 
                  : `grid grid-cols-3 w-full justify-center items-center text-center` 
                }
              >
                <h2 className="flex flex-col">
                  <p className="font-bold">Exercise</p>
                  <p>{ex.exerciseName}</p>
                </h2>
                <h2 className="flex flex-col">
                  <p className="font-bold">Sets</p>
                  {/* {workoutRunning ? <p>{ex.finishedSets}/{ex.sets}</p> : <p>{ex.sets}</p> } */}
                  {ex.finishedSets}/{ex.sets}
                  {workoutRunning && ex.finishedSets < ex.sets && <FinishSet workout={workout} setWorkout={setWorkout} exId={ex.exerciseId} />}
                </h2>
                <h2 className="flex flex-col">
                  <p className="font-bold">Reps</p>
                  <p>{ex.reps}</p>
                </h2>
                {!workoutRunning && !workoutFinished && <DeleteExercise
                  workout={workout}
                  setWorkout={setWorkout}
                  delId={ex.exerciseId}
                />}
              </div>
            ))}
            {!workoutRunning && !workoutFinished && (
              <AddExerise
                exercises={exercises}
                setExercises={setExercises}
                exercise={exercise}
                setExercise={setExercise}
                exerciseName={exerciseName}
                setExerciseName={setExerciseName}
                sets={sets}
                setSets={setSets}
                reps={reps}
                setReps={setReps}
                workout={workout}
                setWorkout={setWorkout}
                exerciseId={exerciseId}
                setExerciseId={setExerciseId}
              />
            )}
            {workout.exercises.length > 0 && <Workout workoutFinished={workoutFinished} workoutRunning={workoutRunning} setWorkoutRunning={setWorkoutRunning} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
