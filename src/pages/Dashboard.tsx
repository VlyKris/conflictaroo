import { UserButton } from "@/components/auth/UserButton";
import { TodoForm } from "@/components/todos/TodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { TodoStats } from "@/components/todos/TodoStats";
import { Protected } from "@/lib/protected-page";
import { motion } from "framer-motion";
import { Pizza } from "lucide-react";

export default function Dashboard() {
  return (
    <Protected>
      <div className="min-h-screen bg-background text-foreground dark">
        {/* Header */}
        <motion.header
          className="w-full py-4 px-4 border-b-4 border-dashed border-secondary bg-background/80 backdrop-blur-sm sticky top-0 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-8 h-8 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
              >
                <Pizza className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse tracking-widest">
                WACKYDOO
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
              <h1 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-accent">Your Pile o' Stuff</h1>
              <p className="text-muted-foreground font-bold">
                Get it done. Or don't. The universe is a cold, uncaring void.
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