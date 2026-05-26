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

export default function CreateWorkout() {
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
              <Input id="name-1" name="name" placeholder="Example: monday" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Muscles you are hitting</Label>
              <Input id="username-1" name="username" placeholder="Example: back and biceps"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Workout time (minutes)</Label>
              <Input id="username-1" type="number" name="username" placeholder="Example: 60"/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">💪Create workout</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
