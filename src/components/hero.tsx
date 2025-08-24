"use client";

import { useState, useEffect } from 'react';
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
      <div className={cn(
        "transition-all duration-1000 ease-in-out",
        isAnimated ? 'scale-100 -translate-y-8' : 'scale-100'
      )}>
        <h1 className={cn(
          "font-headline-netflix font-bold tracking-tight transition-all duration-1000 ease-in-out text-destructive",
          isAnimated ? "text-7xl sm:text-8xl" : "text-8xl sm:text-9xl"
        )}>
          Prashant Gupta
        </h1>
      </div>

      <div className={cn(
        "transition-all duration-700 ease-in-out",
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <p className="text-xl sm:text-2xl text-foreground font-headline font-bold">
          BizDev, Solution Architect, Designer & Developer.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-foreground/80">
          Building growth systems that turn ideas into adoption. Obsessed with web3, sharp design, and tech that actually scales.
        </p>
        <p className="mt-4 text-base sm:text-lg text-foreground/80">
          Undergrad @<a href="https://www.nitj.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">NIT Jalandhar</a>
        </p>
      </div>
    </section>
  );
}
