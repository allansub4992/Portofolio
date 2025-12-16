"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration, inventory management, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    size: "large",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    size: "medium",
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description: "Smart content creation tool powered by AI for marketing and social media.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tech: ["TypeScript", "OpenAI", "Tailwind"],
    size: "medium",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio site with smooth animations and dark mode support.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tech: ["Next.js", "Framer Motion"],
    size: "small",
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with advanced search and filters.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tech: ["React", "GraphQL", "AWS"],
    size: "large",
    link: "#",
    github: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Health and fitness tracking app with workout plans and progress monitoring.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    tech: ["React Native", "Firebase"],
    size: "small",
    link: "#",
    github: "#",
  },
];

export function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-display font-black mb-4">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                project.size === "large"
                  ? "md:col-span-2"
                  : project.size === "medium"
                  ? "md:col-span-1"
                  : "md:col-span-1"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                  hoveredIndex === index ? "translate-y-0" : "translate-y-4"
                }`}
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold">
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 max-h-20"
                        : "opacity-0 max-h-0"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono bg-background/80 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className={`flex gap-3 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
