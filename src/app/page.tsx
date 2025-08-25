
"use client";

import { useRef, useEffect, useCallback } from 'react';
import About from '@/components/about';
import LetsConnect from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Spline from '@splinetool/react-spline';
import type { Spline as SplineInstance } from '@splinetool/runtime';
import FloatingNav from '@/components/floating-nav';

export default function Home() {
  const splineRef = useRef<SplineInstance | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const animationStateRef = useRef<'playing' | 'paused'>('playing');

  const onSplineLoad = useCallback((spline: SplineInstance) => {
    splineRef.current = spline;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!splineRef.current || !footerRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
      lastScrollYRef.current = currentScrollY;

      const footerTop = footerRef.current.offsetTop;
      const viewportBottom = currentScrollY + window.innerHeight;

      // Check if the bottom of the viewport has reached the top of the footer
      const isFooterVisible = viewportBottom >= footerTop;

      if (scrollDirection === 'down' && isFooterVisible) {
        if (animationStateRef.current === 'playing') {
          splineRef.current.stop();
          animationStateRef.current = 'paused';
        }
      } else {
        if (animationStateRef.current === 'paused') {
          splineRef.current.play();
          animationStateRef.current = 'playing';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Spline 
          scene="https://prod.spline.design/1zeQtflKZD13UN8W/scene.splinecode"
          onLoad={onSplineLoad}
        />
      </div>
      <FloatingNav />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          <div id="home" className="h-screen">
            <Hero />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <LetsConnect />
          </div>
        </main>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}
