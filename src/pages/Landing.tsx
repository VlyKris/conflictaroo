import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Archive, Clock, ListTodo, Layers } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: ListTodo,
      title: "A Record of Your Burdens",
      description: "List the tasks that weigh on your soul. Watch them pile up.",
    },
    {
      icon: Layers,
      title: "Rank Your Sufferings", 
      description: "Assign priority to your sorrows. Which agony comes first?",
    },
    {
      icon: Clock,
      title: "Inevitable Deadlines",
      description: "The steady, relentless march towards a finish line you may never cross.",
    },
    {
      icon: Archive,
      title: "Constant Reminders",
      description: "Your list, a persistent echo in the quiet corners of your digital life.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <motion.header 
        className="w-full py-4 px-4 border-b border-border/50 bg-background/80 backdrop-blur-sm"
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
          <AuthButton 
            trigger={<Button variant="outline">Get Started</Button>}
            dashboardTrigger={<Button variant="ghost">Enter the Void</Button>}
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground/90">
              Confront the Void
              <br />
              <span className="text-foreground/50">One Task at a Time</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A futile attempt to bring order to the chaos. Each task, a stark
              reminder of the unending list that is life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6"
                    variant="outline"
                  >
                    Begin the Struggle
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground/80">An Unending Cycle</h2>
            <p className="text-xl text-muted-foreground">
              Features designed to reflect the pointlessness of it all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                className="text-center p-6 rounded-xl bg-background/50 border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground/90">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground/80">Ready for More?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The void is patient. It will wait for you to add another task to the pile.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6"
                    variant="outline"
                  >
                    Embrace the Inevitable
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-background/80">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Sigh... Another day, another list.</p>
        </div>
      </footer>
    </div>
  );
}