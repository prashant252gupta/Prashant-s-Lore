import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Demystifying Server Components in Next.js 14',
    date: 'July 15, 2024',
    excerpt: 'A deep dive into how React Server Components work and how they are changing the way we build web applications...',
    slug: '#',
  },
  {
    title: 'The Art of State Management in Modern React',
    date: 'June 28, 2024',
    excerpt: 'Exploring different state management libraries like Zustand, Redux Toolkit, and Jotai to find the right fit for your project...',
    slug: '#',
  },
  {
    title: 'Creating 3D Web Experiences with Spline',
    date: 'June 10, 2024',
    excerpt: 'A beginner-friendly tutorial on integrating stunning 3D animations into your website using Spline and React...',
    slug: '#',
  },
];

export default function Blog() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 text-destructive">From My Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.title} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">{post.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="p-0 h-auto text-accent">
                <a href={post.slug}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
