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

function formatDocumentation(doc: string) {
  return doc
    .replace(/^#\s(.*?)$/gm, '<h1 class="text-4xl font-headline font-bold my-6">$1</h1>')
    .replace(/^##\s(.*?)$/gm, '<h2 class="text-3xl font-headline font-bold mt-12 mb-6">$1</h2>')
    .replace(/^###\s(.*?)$/gm, '<h3 class="text-2xl font-headline font-bold mt-8 mb-4">$1</h3>')
    .replace(/---/g, '<hr class="my-8 border-primary/20" />')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-primary/20 text-accent px-1 py-0.5 rounded">$1</code>')
    .replace(/^- (.*)$/gm, '<li class="ml-6 mb-2">$1</li>')
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="my-8 rounded-lg shadow-lg" />')
    .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc list-inside">$1</ul>')
    .replace(/\n/g, '<br />')
    .replace(/<br \/>(\s*<br \/>)+/g, '<br />')
    .replace(/<br \/>\s*<h/g, '<h')
    .replace(/<br \/>\s*<ul/g, '<ul')
    .replace(/<br \/>\s*<\/ul/g, '</ul')
    .replace(/<br \/>\s*<hr/g, '<hr')
    .replace(/<br \/>\s*<img/g, '<img');
}


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const formattedDocumentation = project.documentation ? formatDocumentation(project.documentation) : '';

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
            <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-4 text-destructive">{project.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              {project.githubUrl !== '#' && (
                <Button variant="secondary" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl !== '#' && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </a>
                </Button>
              )}
            </div>

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
                <div 
                  className="prose prose-invert max-w-none text-foreground/80"
                  dangerouslySetInnerHTML={{ __html: formattedDocumentation }}
                />
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
