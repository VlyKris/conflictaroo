import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BrainCircuit, Eye, Sprout, Ghost } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Implant Thought",
      description: "Capture loose cognitive ripples before they dissolve.",
    },
    {
      icon: Eye,
      title: "Observe The Swarm",
      description: "Watch the collection grow. It is a part of you now.",
    },
    {
      icon: Sprout,
      title: "Cultivate Meaning?",
      description: "Arrange the abstract into hierarchies. Does it help?",
    },
    {
      icon: Ghost,
      title: "Release The Apparition",
      description: "Mark a thought as 'done'. It will return later.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark overflow-hidden font-mono">
      {/* Header */}
      <motion.header
        className="w-full py-4 px-4 border-b-2 border-primary bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
          <AuthButton
            trigger={
              <Button variant="outline" className="text-primary border-primary">
                Engage
              </Button>
            }
            dashboardTrigger={<Button variant="ghost">Enter</Button>}
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-primary">
              YOUR BRAIN IS A BUCKET.
              <br />
              <span className="text-foreground/80">FILL IT WITH TASKS.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A temporary holding cell for stray thoughts and digital debris.
              Systemize the chaos.
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-xl px-10 py-8 bg-primary text-primary-foreground hover:bg-primary/80 border-2 border-primary-foreground/50"
                  >
                    BEGIN DUMP
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50 border-y-2 border-primary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-4 text-foreground/90">
              System Functions
            </h2>
            <p className="text-xl text-muted-foreground">
              A brief tour of the containment unit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + 0.1 * index,
                  type: "spring",
                }}
                className="text-center p-6 rounded-lg bg-background/50 border-2 border-primary/30"
              >
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground/90">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-semibold">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-primary/30 bg-background/80">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; 2077 DATA DUMP Corp. All wrongs reserved.</p>
        </div>
      </footer>
    </div>
  );
}