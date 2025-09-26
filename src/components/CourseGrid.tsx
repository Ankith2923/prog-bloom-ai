import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ChevronRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the building blocks of modern web development",
    level: "Beginner",
    duration: "6 weeks",
    students: "2.3k",
    rating: 4.8,
    color: "learning-orange",
    topics: ["Variables", "Functions", "DOM", "ES6+"]
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Learn Python with focus on data analysis and machine learning",
    level: "Intermediate",
    duration: "8 weeks",
    students: "1.8k",
    rating: 4.9,
    color: "learning-blue",
    topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
  },
  {
    id: 3,
    title: "React Development",
    description: "Build modern user interfaces with React and its ecosystem",
    level: "Intermediate",
    duration: "10 weeks",
    students: "3.1k",
    rating: 4.7,
    color: "learning-green",
    topics: ["Components", "Hooks", "State", "Router"]
  },
  {
    id: 4,
    title: "Java Spring Boot",
    description: "Enterprise-level backend development with Spring framework",
    level: "Advanced",
    duration: "12 weeks",
    students: "1.2k",
    rating: 4.6,
    color: "learning-purple",
    topics: ["REST APIs", "Security", "Database", "Microservices"]
  },
  {
    id: 5,
    title: "Go Programming",
    description: "Modern systems programming with Google's Go language",
    level: "Intermediate",
    duration: "7 weeks",
    students: "890",
    rating: 4.8,
    color: "learning-pink",
    topics: ["Concurrency", "Web Servers", "CLI Tools", "Testing"]
  },
  {
    id: 6,
    title: "C++ Algorithms",
    description: "Data structures and algorithms for competitive programming",
    level: "Advanced",
    duration: "14 weeks",
    students: "1.5k",
    rating: 4.9,
    color: "learning-blue",
    topics: ["STL", "Dynamic Programming", "Graphs", "Optimization"]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-learning-green/20 text-learning-green";
    case "Intermediate": return "bg-learning-orange/20 text-learning-orange";
    case "Advanced": return "bg-learning-pink/20 text-learning-pink";
    default: return "bg-muted text-muted-foreground";
  }
};

export const CourseGrid = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courses designed by industry experts with AI-powered task allocation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-current text-learning-orange mr-1" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full group/btn">
                  Start Course
                  <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};