"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center noise-texture overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight">
                Web Developer
                <br />
                <span className="text-accent">& Freelancer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Crafting exceptional digital experiences through clean code and thoughtful design. 
                Specializing in modern web applications that solve real problems.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-base font-medium rounded-full border-2 hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
