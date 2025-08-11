import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, cart functionality, and a secure checkout process. Built with Next.js and Stripe.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'online store',
  },
  {
    title: 'Portfolio Template',
    description: 'A sleek, customizable portfolio template for developers and designers to showcase their work. Features a blog and contact form.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Astro', 'React', 'Tailwind CSS', 'MDX'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'website design',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with boards, lists, and cards. Inspired by Trello, with real-time updates using Firebase.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'Zustand', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'productivity app',
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
            <CardHeader>
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardTitle className="font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
