import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Waves, Sunset, SlidersHorizontal, Sparkles } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Waves,
      title: "Endless Vibe Stream",
      description:
        "Your tasks, flowing in a neon-lit digital river of pure productivity.",
    },
    {
      icon: SlidersHorizontal,
      title: "Set the Mood",
      description:
        "Prioritize with Low, Medium, or High-energy tags to match your flow.",
    },
    {
      icon: Sunset,
      title: "Chase the Sunset",
      description:
        "Set deadlines that glow like a retro horizon. Never miss a beat.",
    },
    {
      icon: Sparkles,
      title: "Digital Afterglow",
      description:
        "Your completed tasks, a shimmering record of your aesthetic achievements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark overflow-hidden">
      {/* Header */}
      <motion.header 
        className="w-full py-4 px-4 border-b border-border bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
              <Waves className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground/90 tracking-wider" style={{textShadow: '0 0 5px oklch(var(--primary))'}}>
              VibeFlow
            </span>
          </div>
          <AuthButton 
            trigger={<Button variant="outline" className="text-primary-foreground bg-primary hover:bg-primary/90">Get Started</Button>}
            dashboardTrigger={<Button variant="ghost">Enter the Flow</Button>}
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,white_10%,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground" style={{textShadow: '0 0 15px oklch(var(--secondary))'}}>
              Catch the Digital Wave
              <br />
              <span className="text-primary">An Aesthetic at a Time</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              An exercise in pure flow. Each task, a single ripple in an ocean of
              digital sunsets. Curate your vibe.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(var(--primary))]"
                  >
                    Start the Flow
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground/90" style={{textShadow: '0 0 10px oklch(var(--primary))'}}>The Anatomy of the Vibe</h2>
            <p className="text-xl text-muted-foreground">
              Tools designed to engineer your perfect workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                className="text-center p-6 rounded-xl bg-background/50 border border-border shadow-lg shadow-primary/10"
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_oklch(var(--primary)/50%)]">
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
            <h2 className="text-4xl font-bold mb-6 text-secondary" style={{textShadow: '0 0 15px oklch(var(--secondary))'}}>Ready to Ride?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The stream is waiting. Drop a new task and get in the zone.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_oklch(var(--secondary))]"
                  >
                    Start the Flow
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-background/80">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 VibeFlow. Keep it aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}