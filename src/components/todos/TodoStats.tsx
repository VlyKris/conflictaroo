import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Banana, Gamepad2, Ghost, Bone } from "lucide-react";
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
      title: "Total Thingies",
      value: stats.total,
      icon: Bone,
      color: "text-secondary",
    },
    {
      title: "Done Dones",
      value: stats.completed,
      icon: Gamepad2,
      color: "text-green-500",
    },
    {
      title: "Stuff 2 Do",
      value: stats.pending,
      icon: Banana,
      color: "text-yellow-500",
    },
    {
      title: "SCARY STUFF",
      value: stats.highPriority,
      icon: Ghost,
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
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ rotate: (index % 2 === 0 ? 5 : -5), scale: 1.1 }}
        >
          <Card className="bg-card border-4 border-dashed border-primary backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-black text-card-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-foreground/90">{stat.value}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}