import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useQuery } from "convex/react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useQuery(api.todos.getTodos);

  if (todos === undefined) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="p-4 border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 bg-muted rounded mt-1"></div>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No todos yet</h3>
        <p className="text-muted-foreground">
          Create your first todo to get started!
        </p>
      </motion.div>
    );
  }

  const pendingTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="space-y-6">
      {pendingTodos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Pending ({pendingTodos.length})</h2>
          <div className="space-y-3">
            {pendingTodos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Completed ({completedTodos.length})</h2>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
