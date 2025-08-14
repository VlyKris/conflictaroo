import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { motion } from "framer-motion";
import { Calendar, MoreVertical, Trash2 } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

interface TodoItemProps {
  todo: Doc<"todos">;
}

export function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  const handleToggle = async () => {
    try {
      await toggleTodo({ id: todo._id });
      toast.success(
        todo.completed
          ? "Vibe reactivated."
          : "Vibe captured.",
      );
    } catch (error) {
      toast.error("Signal lost. Try again.");
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo({ id: todo._id });
      toast.success("Poof! It's gone.");
    } catch (error) {
      toast.error("It refuses to die.");
      console.error(error);
    }
  };

  const getPriorityClasses = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-destructive/80 text-destructive bg-red-500/20 animate-pulse";
      case "medium":
        return "border-yellow-400/80 text-yellow-500 bg-yellow-500/20";
      case "low":
        return "border-green-500/80 text-green-600 bg-green-500/20";
      default:
        return "border-muted-foreground/30 text-muted-foreground";
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
      layout
      className={`group p-4 border-4 border-double border-border rounded-lg transition-all hover:border-primary/80 ${
        todo.completed ? "bg-card/20" : "bg-card"
      }`}
    >
      <div className="flex items-start gap-4">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggle}
          className="mt-1"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3
              className={`font-black text-xl transition-colors ${
                todo.completed
                  ? "line-through text-muted-foreground"
                  : "text-foreground/90"
              }`}
            >
              {todo.title}
            </h3>
            <span
              className={`text-sm px-3 py-1 rounded-full border-2 capitalize font-bold ${getPriorityClasses(
                todo.priority,
              )}`}
            >
              {todo.priority === "high" ? "OMG AHHH" : todo.priority === "medium" ? "Kinda" : "Meh"}
            </span>
          </div>

          {todo.description && (
            <p className="text-sm mb-2 text-muted-foreground/80">
              {todo.description}
            </p>
          )}

          {todo.dueDate && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70 mt-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>Sunset: {formatDate(todo.dueDate)}</span>
            </div>
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={handleDelete}
              className="text-destructive cursor-pointer focus:bg-destructive/10 focus:text-destructive font-bold"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              NUKE IT
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
}