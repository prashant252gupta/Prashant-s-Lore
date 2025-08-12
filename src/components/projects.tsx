"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/projects';


export default function Projects() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
            <Card className="bg-card/90 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden h-full">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
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