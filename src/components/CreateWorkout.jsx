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

export default function CreateWorkout({
  dayOfWeek,
  setDayOfWeek,
  musclesToHit,
  setMusclesToHit,
  minutes,
  setMinutes,
  workout,
  setWorkout
}) {
  const handleCreateWorkout = () => {
    if (!dayOfWeek || !musclesToHit || !minutes) {
      alert("All fields must be filled and minutes cannot be 0")
      return;
    }

    if (minutes <= 0) {
      alert("Please enter valid minutes")
      return;
    }

    const newWorkout = {
      day: dayOfWeek,
      muscles: musclesToHit,
      time: parseInt(minutes),
      exercises: []
    }

    setWorkout(newWorkout);
    // console.log(newWorkout);
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-black text-white cursor-pointer" variant="outline">+ Create Workout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-bold">Create Workout</DialogTitle>
            <DialogDescription>
              Enter workout details
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Day of the week</Label>
              <Input value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)} id="name-1" name="name" placeholder="Example: monday" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Muscles you are hitting</Label>
              <Input value={musclesToHit} onChange={(e) => setMusclesToHit(e.target.value)} id="username-1" name="username" placeholder="Example: back and biceps"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Workout time (minutes)</Label>
              <Input value={minutes} onChange={(e) => setMinutes(e.target.value)} id="username-1" type="number" name="username" placeholder="Example: 60"/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleCreateWorkout} type="submit">💪Create workout</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
