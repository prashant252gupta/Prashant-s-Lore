import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Web3 CRM',
    description: 'A landing page for a Web3-focused CRM powered by AI. Designed to showcase features and capture leads.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Next.js', 'AI', 'Web3', 'Tailwind CSS'],
    liveUrl: 'https://ai-web3-crm-landing-page.netlify.app/',
    githubUrl: '#',
    aiHint: 'crm dashboard',
  },
  {
    title: 'Nyxiebot',
    description: 'A multi-purpose bot for Discord, offering moderation, entertainment, and utility commands to enhance server engagement.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Node.js', 'Discord.js', 'JavaScript'],
    liveUrl: 'https://nyxiebot.netlify.app/',
    githubUrl: '#',
    aiHint: 'discord bot',
  },
  {
    title: 'Stock Trend Prediction',
    description: 'A machine learning model that predicts stock market trends using historical data and various technical indicators.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    liveUrl: '#',
    githubUrl: 'https://github.com/prashant252gupta/Stock_trend_prediction',
    aiHint: 'stock chart',
  },
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
          <Card key={project.title} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
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
              <div className="flex justify-between items-center">
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center text-sm font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <div className="flex gap-2">
                  {project.githubUrl !== '#' && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl !== '#' && (
                     <Button variant="ghost" size="icon" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
