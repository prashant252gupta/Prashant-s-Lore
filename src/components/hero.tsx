"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center text-center">
      <div className={cn("transition-all duration-1000 ease-in-out", isAnimated ? 'scale-100' : 'scale-125')}>
        <h1 className={cn(
          "font-headline font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 transition-all duration-1000 ease-in-out",
          isAnimated ? "text-4xl sm:text-5xl md:text-6xl" : "text-6xl sm:text-7xl md:text-8xl"
        )}>
          Prashant Gupta
        </h1>
      </div>

      <div className={cn(
        "transition-all duration-700 ease-in-out mt-6",
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <p className="text-lg sm:text-xl text-foreground/80 font-headline">
          Creative Developer & Designer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-foreground/60">
          I build beautiful, responsive, and highly performant web applications. Passionate about modern web technologies and clean, elegant design.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
