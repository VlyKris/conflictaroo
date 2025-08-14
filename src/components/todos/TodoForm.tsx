import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

export function TodoForm() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [dueDate, setDueDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createTodo = useMutation(api.todos.createTodo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("You gotta name the thing!");
      return;
    }

    setIsLoading(true);
    try {
      await createTodo({
        title: title.trim(),
        description: description.trim() || undefined,
        priority,
        dueDate: dueDate ? new Date(dueDate).getTime() : undefined,
      });

      toast.success("You did it! A new thing exists!");
      setTitle("");
      setDescription("");
      setPriority("medium");
      setDueDate("");
      setOpen(false);
    } catch (error) {
      toast.error("Computer says no.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-secondary border-4">
            <Plus className="h-4 w-4 animate-spin" />
            New Thingamajig
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-8 border-dashed border-secondary">
        <DialogHeader>
          <DialogTitle className="text-primary text-3xl font-black">Make a Task!</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-bold text-lg">Whatcha callit?</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Pet the dog"
              required
              className="border-2 border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-bold text-lg">The deets (or whatever)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell me more tell me more"
              rows={3}
              className="border-2 border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority" className="font-bold text-lg">How much u care?</Label>
            <Select
              value={priority}
              onValueChange={(value: "low" | "medium" | "high") =>
                setPriority(value)
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Meh</SelectItem>
                <SelectItem value="medium">Kinda</SelectItem>
                <SelectItem value="high">OMG AHHH</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dueDate" className="font-bold text-lg">When's it due? (don't lie)</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border-2 border-primary"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              disabled={isLoading}
              className="font-bold"
            >
              nvm lol
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold text-lg" disabled={isLoading}>
              {isLoading ? "DOIN IT..." : "YEEET"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}