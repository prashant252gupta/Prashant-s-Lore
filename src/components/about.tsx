import Image from 'next/image';
import { Code, Database, Wind, Brush } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Frontend', description: 'React, Next.js, TypeScript, Tailwind CSS' },
  { icon: Database, title: 'Backend', description: 'Node.js, Express, Firebase, PostgreSQL' },
  { icon: Wind, title: 'DevOps', description: 'Docker, Vercel, Google Cloud' },
  { icon: Brush, title: 'Design', description: 'Figma, Spline, UI/UX Principles' },
];

export default function About() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Prashant Gupta"
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-accent/50 shadow-lg"
              data-ai-hint="man portrait"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="text-lg text-foreground/80 mb-6">
            Hello! I'm Prashant, a developer with a passion for creating dynamic and user-friendly web experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality. My journey in tech started with a fascination for how things work, which quickly evolved into a career building solutions that are not only powerful but also delightful to use.
          </p>
          <p className="text-lg text-foreground/80">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or diving into a good sci-fi novel.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.title} className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                <skill.icon className="w-8 h-8 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline font-bold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
