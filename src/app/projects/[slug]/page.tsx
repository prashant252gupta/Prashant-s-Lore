import { projects, Project } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/1zeQtflKZD13UN8W/scene.splinecode" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <article>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6 text-destructive">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <div className="relative p-1 rounded-lg overflow-hidden bg-gradient-to-b from-primary/50 to-primary/20 mb-10">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="object-cover w-full h-full rounded-md"
                    data-ai-hint={project.aiHint}
                />
            </div>
            
            <div className="prose prose-invert max-w-none text-foreground/80 text-lg mb-10">
              <p>{project.description}</p>
            </div>

            {project.documentation && (
              <div className="mt-16">
                <h2 className="font-headline text-3xl font-bold mb-8 text-destructive">Documentation</h2>
                <div 
                  className="prose prose-invert max-w-none text-foreground/80"
                  dangerouslySetInnerHTML={{ __html: project.documentation.replace(/###\s*(.*)/g, '<h3>$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code>$1</code>').replace(/\n/g, '<br />') }}
                />
              </div>
            )}

            <div className="flex items-center gap-4 mt-12">
              {project.liveUrl !== '#' && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl !== '#' && (
                <Button variant="secondary" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
