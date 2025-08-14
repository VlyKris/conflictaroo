import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security", 
      description:
        "Bank-grade security with end-to-end encryption and compliance standards.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with sub-second response times and 99.9% uptime.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamless team workflows with real-time synchronization and role-based access.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description:
        "Built to scale with your business needs, from startup to enterprise.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <motion.header 
        className="w-full py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              ConflictAroo
            </span>
          </div>
          <AuthButton 
            trigger={<Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Sign In</Button>}
            dashboardTrigger={<Button variant="ghost">Dashboard</Button>}
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Streamline Your
              <br />
              <span className="text-primary">Development Workflow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional task management platform designed for development teams. 
              Track progress, manage dependencies, and deliver projects on time with enterprise-grade reliability.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AuthButton
                trigger={
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Enterprise Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern development teams in mind, providing the tools you need to succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ConflictAroo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}