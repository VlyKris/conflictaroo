import { UserButton } from "@/components/auth/UserButton";
import { TodoForm } from "@/components/todos/TodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { TodoStats } from "@/components/todos/TodoStats";
import { Protected } from "@/lib/protected-page";
import { motion } from "framer-motion";
import { ListTodo } from "lucide-react";

export default function Dashboard() {
  return (
    <Protected>
      <div className="min-h-screen bg-background text-foreground dark">
        {/* Header */}
        <motion.header
          className="w-full py-4 px-4 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                <ListTodo className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground/80">
                Sigh...
              </span>
            </div>
            <div className="flex items-center gap-4">
              <TodoForm />
              <UserButton />
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 text-foreground/90">My Burdens</h1>
              <p className="text-muted-foreground">
                Here they are. The tasks that weigh you down.
              </p>
            </div>

            <TodoStats />
            <TodoList />
          </motion.div>
        </main>
      </div>
    </Protected>
  );
}