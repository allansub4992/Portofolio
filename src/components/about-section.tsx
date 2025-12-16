"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center">
          <div
            className={`col-span-12 lg:col-span-6 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-black leading-tight">
                Building digital
                <br />
                <span className="text-accent">experiences</span>
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate web developer with a keen eye for design and a love for creating 
                seamless user experiences. With years of experience in modern web technologies, 
                I transform ideas into elegant, functional solutions.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring 
                every project not only meets requirements but exceeds expectations. I believe in 
                writing clean, maintainable code that stands the test of time.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div
            className={`col-span-12 lg:col-span-5 lg:col-start-8 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Professional portrait"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
