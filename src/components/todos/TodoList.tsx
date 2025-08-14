import { api } from "@/convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { Waves } from "lucide-react";
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 border border-dashed border-border/50 rounded-lg"
      >
        <Waves className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2 text-foreground/80">The stream is clear.</h3>
        <p className="text-muted-foreground">
          Time to capture a new vibe.
        </p>
      </motion.div>
    );
  }

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="space-y-8">
      {pendingTodos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground/80">
            Current Flow ({pendingTodos.length})
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
          <h2 className="text-lg font-semibold mb-4 text-foreground/80">
            Past Waves ({completedTodos.length})
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