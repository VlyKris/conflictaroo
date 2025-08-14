import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Brain, CloudDrizzle, Anchor, Biohazard } from "lucide-react";
import { useQuery } from "convex/react";

export function TodoStats() {
  const stats = useQuery(api.todos.getTodoStats);

  if (!stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse bg-card/50">
            <CardHeader className="pb-2">
              <div className="h-4 bg-muted rounded w-16"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-8"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const statCards = [
    {
      title: "Cognitive Loads",
      value: stats.total,
      icon: Brain,
      color: "text-secondary",
    },
    {
      title: "Released Thoughts",
      value: stats.completed,
      icon: CloudDrizzle,
      color: "text-green-500",
    },
    {
      title: "Lingering Whispers",
      value: stats.pending,
      icon: Anchor,
      color: "text-yellow-500",
    },
    {
      title: "Red Alerts",
      value: stats.highPriority,
      icon: Biohazard,
      color: "text-destructive",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 150 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="bg-card border-2 border-primary/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md text-card-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-foreground/90">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}