import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cat, Dog, Pizza, Rocket } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Cat,
      title: "Cats N Stuff", 
      description:
        "Literally just a cat. What else do you want from me?",
    },
    {
      icon: Dog,
      title: "Also A Dog",
      description:
        "Ok fine, here's a dog too. Are you happy now?",
    },
    {
      icon: Pizza,
      title: "PIZZA!!",
      description:
        "Yeah, that's right. A whole pizza. Don't question it.",
    },
    {
      icon: Rocket,
      title: "To The Moon",
      description:
        "This app is going places. Probably to the moon. IDK.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark overflow-hidden">
      {/* Header */}
      <motion.header 
        className="w-full py-4 px-4 border-b-4 border-dashed border-secondary bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: -100, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
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
          <AuthButton 
            trigger={<Button variant="outline" className="text-primary-foreground bg-primary hover:bg-primary/90 animate-bounce">Let's Get Weird</Button>}
            dashboardTrigger={<Button variant="ghost">Enter the ZONE</Button>}
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-accent">
              WELCOME 2 THE INTERNET
              <br />
              <span className="text-primary">It's a Wild Ride</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-bold">
              Throw your todos in the trash can of tomorrow! Or today. I don't care. Click the button.
            </p>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.8, rotate: -15 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-2xl px-10 py-8 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground border-4 border-primary"
                  >
                    MASH HERE
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50 border-y-8 border-double border-primary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary to-foreground">Look At This Stuff</h2>
            <p className="text-xl text-muted-foreground">
              It's all very important, probably.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100, rotate: (index % 2 === 0 ? 10: -10) }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index, type: "spring" }}
                className="text-center p-6 rounded-3xl bg-background/50 border-4 border-dashed border-accent"
              >
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground/90">{feature.title}</h3>
                <p className="text-muted-foreground font-semibold">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-secondary bg-background/80">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground font-bold text-lg animate-pulse">
          <p>&copy; 1998 WACKYDOO Inc. All rights reserved... or whatever.</p>
        </div>
      </footer>
    </div>
  );
}