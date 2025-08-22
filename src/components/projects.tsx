"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
            <Card className="bg-transparent backdrop-blur-sm border-0 shadow-none hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden h-full">
              <div className="relative p-1 rounded-lg overflow-hidden bg-gradient-to-b from-primary/50 to-primary/20">
                <div className="aspect-video overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-card/80 mt-[-2rem] m-4 rounded-lg border border-primary/20 backdrop-blur-sm">
                <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 mb-4 flex-grow">{project.description}</p>
                <div className="text-accent inline-flex items-center text-sm font-medium">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
