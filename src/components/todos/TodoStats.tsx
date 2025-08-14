import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Check, Flame, Hourglass, Sigma } from "lucide-react";
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
      title: "Total Vibes",
      value: stats.total,
      icon: Sigma,
      color: "text-secondary",
    },
    {
      title: "Vibes Completed",
      value: stats.completed,
      icon: Check,
      color: "text-green-400",
    },
    {
      title: "Current Flow",
      value: stats.pending,
      icon: Hourglass,
      color: "text-yellow-400",
    },
    {
      title: "High-Energy",
      value: stats.highPriority,
      icon: Flame,
      color: "text-destructive",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-card border-border backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} style={{filter: `drop-shadow(0 0 3px currentColor)`}} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground/90">{stat.value}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}