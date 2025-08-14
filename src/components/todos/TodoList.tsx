import { api } from "@/convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { useQuery } from "convex/react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useQuery(api.todos.getTodos);

  if (todos === undefined) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="p-4 border border-border/50 rounded-lg bg-card/50">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-muted rounded mt-1"></div>
                <div className="flex-1">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-16 border-2 border-dashed border-primary/50 rounded-lg"
      >
        <Eye className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-foreground/80">
          The Void Stares Back
        </h3>
        <p className="text-muted-foreground">It is unimpressed. Add data.</p>
      </motion.div>
    );
  }

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="space-y-8">
      {pendingTodos.length > 0 && (
        <div>
          <h2 className="text-2xl font-extrabold mb-4 text-primary">
            THE NOW-THING ({pendingTodos.length})
          </h2>
          <motion.div layout className="space-y-3">
            <AnimatePresence>
              {pendingTodos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <h2 className="text-2xl font-extrabold mb-4 text-muted-foreground">
            THE THEN-THING ({completedTodos.length})
          </h2>
          <motion.div layout className="space-y-3">
            <AnimatePresence>
              {completedTodos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
}