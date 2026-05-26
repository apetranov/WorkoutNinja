import { useState } from "react";
import { Button } from "./components/ui/button";
import CreateWorkout from "./components/CreateWorkout";

function App() {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [musclesToHit, setMusclesToHit] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [workout, setWorkout] = useState({});

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
      {Object.keys(workout).length > 0 && <div className="flex space-y-2 outline p-10 shadow-2xl flex-col justify-center items-center">
          <h1 className="font-bold text-4xl">📅{workout.day}</h1>
          <h1 className="text-3xl font-bold text-gray-400">💪🏽{workout.muscles}</h1>
          <h1 className="text-xl font-bold text-gray-500">⏳{workout.time} minutes</h1>
        </div>}
    </div>
  );
}

export default App;
