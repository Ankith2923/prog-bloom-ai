import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Code, CheckCircle, PlayCircle } from "lucide-react";

const sampleTasks = [
  {
    id: 1,
    title: "Implement Binary Search Algorithm",
    type: "Coding Challenge",
    difficulty: "Medium",
    timeEstimate: "45 min",
    points: 100,
    completed: false,
    language: "Python",
    description: "Write an efficient binary search function with O(log n) complexity"
  },
  {
    id: 2,
    title: "JavaScript Closures Quiz",
    type: "MCQ",
    difficulty: "Easy",
    timeEstimate: "15 min",
    points: 50,
    completed: true,
    language: "JavaScript",
    description: "Test your understanding of closures and scope in JavaScript"
  },
  {
    id: 3,
    title: "React Component Optimization",
    type: "Project",
    difficulty: "Hard",
    timeEstimate: "2 hours",
    points: 200,
    completed: false,
    language: "React",
    description: "Optimize a React component for better performance using memo and useMemo"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-learning-green/20 text-learning-green";
    case "Medium": return "bg-learning-orange/20 text-learning-orange";
    case "Hard": return "bg-learning-pink/20 text-learning-pink";
    default: return "bg-muted text-muted-foreground";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Coding Challenge": return <Code className="w-4 h-4" />;
    case "MCQ": return <CheckCircle className="w-4 h-4" />;
    case "Project": return <PlayCircle className="w-4 h-4" />;
    default: return <Code className="w-4 h-4" />;
  }
};

export const TaskPreview = () => {
  return (
    <section id="tasks" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered <span className="bg-gradient-primary bg-clip-text text-transparent">Task System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized tasks and challenges that adapt to your learning progress
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Overview */}
          <Card className="mb-8 bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Your Progress
                <Badge variant="secondary">3 Active Tasks</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weekly Goal</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-learning-green">12</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-learning-orange">3</div>
                    <div className="text-sm text-muted-foreground">In Progress</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-learning-blue">350</div>
                    <div className="text-sm text-muted-foreground">Points Earned</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Task List */}
          <div className="space-y-4">
            {sampleTasks.map((task, index) => (
              <Card 
                key={task.id} 
                className={`hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in ${
                  task.completed ? 'opacity-75' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${task.completed ? 'bg-learning-green/20' : 'bg-primary/20'}`}>
                        {task.completed ? 
                          <CheckCircle className="w-5 h-5 text-learning-green" /> : 
                          getTypeIcon(task.type)
                        }
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{task.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {task.timeEstimate}
                          </div>
                          <Badge variant="outline">{task.language}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getDifficultyColor(task.difficulty)} variant="secondary">
                        {task.difficulty}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-2">
                        {task.points} points
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{task.type}</Badge>
                    <Button 
                      variant={task.completed ? "outline" : "default"} 
                      size="sm"
                      disabled={task.completed}
                    >
                      {task.completed ? "Completed" : "Start Task"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">
              View All Tasks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};