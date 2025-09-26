import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CourseGrid } from "@/components/CourseGrid";
import { TaskPreview } from "@/components/TaskPreview";
import { CertificatePreview } from "@/components/CertificatePreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CourseGrid />
      <TaskPreview />
      <CertificatePreview />
    </div>
  );
};

export default Index;
