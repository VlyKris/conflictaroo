import { UserButton } from "@/components/auth/UserButton";
import { TodoForm } from "@/components/todos/TodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { TodoStats } from "@/components/todos/TodoStats";
import { Protected } from "@/lib/protected-page";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function Dashboard() {
  return (
    <Protected>
      <div className="min-h-screen bg-background text-foreground dark font-mono">
        {/* Header */}
        <motion.header
          className="w-full py-4 px-4 border-b-2 border-primary bg-background/80 backdrop-blur-sm sticky top-0 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360, 0],
                  scale: [1, 1.2, 1],
                  borderRadius: ["50%", "20%", "50%"],
                }}
                transition={{ ease: "easeInOut", duration: 5, repeat: Infinity }}
              >
                <Eye className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="text-2xl font-bold text-primary animate-pulse tracking-widest">
                DATA DUMP
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
            <div className="mb-8 text-center">
              <h1 className="text-5xl font-black mb-2 text-primary">
                Consciousness Stream
              </h1>
              <p className="text-muted-foreground">
                Observe the data. Do not interfere. Correction: interfere.
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