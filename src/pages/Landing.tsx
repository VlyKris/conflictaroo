import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Target, Zap, Sparkles, Star, Heart, Rocket } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: CheckCircle,
      title: "✨ Simple Task Management",
      description: "Create, organize, and complete tasks with joy and ease! 🎯",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Target,
      title: "🎯 Priority Levels", 
      description: "Set priorities to focus on what matters most to you! ⭐",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Clock,
      title: "⏰ Due Dates",
      description: "Never miss a deadline with smart due date reminders! 🔔",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Zap,
      title: "⚡ Real-time Sync",
      description: "Your todos sync instantly across all devices! 🚀",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const floatingElements = [
    { icon: "🌟", delay: 0, x: 20, y: -20 },
    { icon: "💫", delay: 0.5, x: -15, y: 15 },
    { icon: "🎉", delay: 1, x: 25, y: 25 },
    { icon: "✨", delay: 1.5, x: -25, y: -10 },
    { icon: "🎊", delay: 2, x: 10, y: 30 },
    { icon: "💖", delay: 2.5, x: -30, y: 20 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-cyan-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.1, 1],
            x: [0, element.x, 0],
            y: [0, element.y, 0]
          }}
          transition={{ 
            duration: 8, 
            delay: element.delay, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ 
            left: `${50 + element.x}%`, 
            top: `${30 + element.y}%` 
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Header */}
      <motion.header 
        className="w-full py-4 px-4 border-b border-pink-200 bg-white/90 backdrop-blur-sm shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              TodoFlow ✨
            </span>
          </motion.div>
          <AuthButton 
            trigger={
              <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                🚀 Get Started
              </Button>
            }
            dashboardTrigger={
              <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300">
                🎯 Go to Dashboard
              </Button>
            }
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Sparkle effect */}
            <motion.div
              className="absolute top-20 left-1/2 transform -translate-x-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Organize Your Life
              </span>
              <br />
              <span className="text-gray-800">One Task at a Time! 🎉</span>
            </h1>
            
            <motion.p 
              className="text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              TodoFlow helps you stay organized and productive with a beautiful, 
              simple interface that makes task management <span className="font-semibold text-pink-600">effortless and fun!</span> 🎯✨
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <AuthButton 
                trigger={
                  <Button size="lg" className="text-xl px-10 py-7 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl">
                    🎊 Start Organizing Today! 🎊
                  </Button>
                }
              />
            </motion.div>

            {/* Fun stats */}
            <motion.div 
              className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>Trusted by 10,000+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-400 fill-current" />
                <span>99.9% satisfaction rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-400" />
                <span>Lightning fast setup</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-white/70 to-pink-50/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Everything You Need to Succeed! 🎯
            </h2>
            <p className="text-2xl text-gray-700">
              Powerful features wrapped in a simple, elegant, and <span className="font-semibold text-pink-600">joyful</span> interface ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotate: 1
                }}
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border border-pink-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Quote Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 p-12 rounded-3xl border border-pink-200 shadow-xl"
          >
            <div className="text-6xl mb-6">💭</div>
            <blockquote className="text-2xl font-medium text-gray-800 mb-4 italic">
              "TodoFlow turned my chaotic life into a beautiful symphony of productivity! 🎵✨"
            </blockquote>
            <p className="text-lg text-gray-600">- Happy TodoFlow User</p>
          </motion.div>
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
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Life? 🚀
            </h2>
            <p className="text-2xl text-gray-700 mb-10">
              Join thousands of users who have transformed their productivity and found <span className="font-semibold text-pink-600">joy in organization</span> with TodoFlow! ✨
            </p>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <AuthButton 
                trigger={
                  <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 rounded-3xl">
                    🎉 Get Started for Free! 🎉
                  </Button>
                }
              />
            </motion.div>
            
            <motion.p 
              className="mt-6 text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              No credit card required • Setup in 30 seconds • Cancel anytime 💖
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-pink-200 bg-gradient-to-r from-white/90 to-pink-50/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="h-8 w-8 text-white fill-current" />
            </div>
            <p className="text-xl text-gray-700 font-medium">
              &copy; 2024 TodoFlow. Built with 💖 and ✨ for productivity!
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center items-center gap-4 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span>🌟</span>
            <span>💫</span>
            <span>🎉</span>
            <span>✨</span>
            <span>🎊</span>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}