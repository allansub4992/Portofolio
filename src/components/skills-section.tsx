"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Server,
  Palette,
  Wrench,
  Braces,
  Globe,
  Layers,
  Box,
  Cloud,
  GitBranch,
  Figma,
  Sparkles,
  Terminal,
  FileCode,
} from "lucide-react";

// ============================================
// SKILL DATA - Easy to modify and extend
// ============================================
interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number; // 0-100
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string; // HSL hue value
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    color: "14", // Coral/Orange (matches accent)
    skills: [
      { name: "React", icon: <Braces className="w-6 h-6" />, proficiency: 95 },
      { name: "Next.js", icon: <Layers className="w-6 h-6" />, proficiency: 90 },
      { name: "TypeScript", icon: <FileCode className="w-6 h-6" />, proficiency: 92 },
      { name: "JavaScript", icon: <Braces className="w-6 h-6" />, proficiency: 95 },
      { name: "Tailwind CSS", icon: <Sparkles className="w-6 h-6" />, proficiency: 90 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    color: "180", // Cyan/Teal
    skills: [
      { name: "Node.js", icon: <Terminal className="w-6 h-6" />, proficiency: 85 },
      { name: "REST APIs", icon: <Globe className="w-6 h-6" />, proficiency: 90 },
      { name: "GraphQL", icon: <Box className="w-6 h-6" />, proficiency: 70 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "270", // Purple
    skills: [
      { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, proficiency: 80 },
      { name: "MongoDB", icon: <Database className="w-6 h-6" />, proficiency: 78 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5" />,
    color: "45", // Gold/Amber
    skills: [
      { name: "Git", icon: <GitBranch className="w-6 h-6" />, proficiency: 88 },
      { name: "Docker", icon: <Box className="w-6 h-6" />, proficiency: 65 },
      { name: "AWS", icon: <Cloud className="w-6 h-6" />, proficiency: 60 },
    ],
  },
  {
    name: "Design",
    icon: <Palette className="w-5 h-5" />,
    color: "330", // Pink/Magenta
    skills: [
      { name: "Figma", icon: <Figma className="w-6 h-6" />, proficiency: 82 },
      { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, proficiency: 78 },
    ],
  },
];

// ============================================
// SKILL ORB COMPONENT
// ============================================
function SkillOrb({
  skill,
  color,
  delay,
  isVisible,
}: {
  skill: Skill;
  color: string;
  delay: number;
  isVisible: boolean;
}) {
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowRing(true), delay + 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const circumference = 2 * Math.PI * 42; // radius 42
  const strokeDashoffset = circumference - (skill.proficiency / 100) * circumference;

  return (
    <div
      className={`group relative transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="relative w-28 h-28 md:w-32 md:h-32 cursor-pointer transition-all duration-500 ease-out group-hover:scale-110"
        style={{ animationDelay: `${delay * 0.5}ms` }}
      >
        {/* Glow background effect */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, hsl(${color} 70% 50% / 0.5) 0%, transparent 70%)`,
          }}
        />

        {/* Outer ring container */}
        <div className="absolute inset-0 rounded-full">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-border/30"
            />
            {/* Proficiency ring */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                stroke: `hsl(${color} 70% 55%)`,
                strokeDasharray: circumference,
                strokeDashoffset: showRing ? strokeDashoffset : circumference,
                filter: `drop-shadow(0 0 6px hsl(${color} 70% 55% / 0.6))`,
              }}
            />
          </svg>
        </div>

        {/* Inner orb */}
        <div
          className="absolute inset-3 rounded-full flex flex-col items-center justify-center backdrop-blur-sm border transition-all duration-300 group-hover:border-opacity-80"
          style={{
            background: `radial-gradient(circle at 30% 30%, hsl(${color} 30% 20% / 0.4), hsl(${color} 30% 10% / 0.6))`,
            borderColor: `hsl(${color} 50% 40% / 0.3)`,
            boxShadow: `inset 0 1px 1px hsl(${color} 50% 80% / 0.1), 0 4px 20px hsl(${color} 50% 20% / 0.2)`,
          }}
        >
          {/* Icon */}
          <div
            className="mb-1 transition-all duration-300 group-hover:scale-110"
            style={{ color: `hsl(${color} 60% 70%)` }}
          >
            {skill.icon}
          </div>

          {/* Proficiency percentage */}
          <span
            className="text-[10px] font-mono font-medium opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ color: `hsl(${color} 50% 75%)` }}
          >
            {skill.proficiency}%
          </span>
        </div>
      </div>

      {/* Skill name */}
      <div className="text-center mt-3">
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

// ============================================
// FLOATING PARTICLES BACKGROUND
// ============================================
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/20 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 7}s`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// CATEGORY SECTION
// ============================================
function CategorySection({
  category,
  startIndex,
  isVisible,
}: {
  category: SkillCategory;
  startIndex: number;
  isVisible: boolean;
}) {
  return (
    <div className="mb-16 last:mb-0">
      {/* Category header */}
      <div
        className={`flex items-center justify-center gap-2 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        style={{ transitionDelay: `${startIndex * 50}ms` }}
      >
        <div
          className="p-2 rounded-lg"
          style={{
            background: `hsl(${category.color} 50% 20% / 0.3)`,
            color: `hsl(${category.color} 60% 65%)`,
          }}
        >
          {category.icon}
        </div>
        <h3
          className="text-xl font-display font-bold"
          style={{ color: `hsl(${category.color} 50% 70%)` }}
        >
          {category.name}
        </h3>
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {category.skills.map((skill, index) => (
          <SkillOrb
            key={skill.name}
            skill={skill}
            color={category.color}
            delay={(startIndex + index) * 80}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// MAIN SKILLS SECTION
// ============================================
export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  // Calculate start indices for staggered animations
  let runningIndex = 0;
  const categoryStartIndices = skillCategories.map((cat) => {
    const start = runningIndex;
    runningIndex += cat.skills.length + 1;
    return start;
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, 
          hsl(var(--background)) 0%, 
          hsl(var(--muted) / 0.3) 50%, 
          hsl(var(--background)) 100%)`,
      }}
    >
      {/* Atmospheric background */}
      <FloatingParticles />

      {/* Gradient orbs in background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A constellation of technologies I work with to bring ideas to life.
            Each orb represents a skill with its proficiency level.
          </p>
        </div>

        {/* Skills by category */}
        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <CategorySection
              key={category.name}
              category={category}
              startIndex={categoryStartIndices[index]}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
