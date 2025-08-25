import Image from 'next/image';
import { Code, Database, Wind, Brush, Zap } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Frontend', description: 'React, Next.js, TypeScript, Tailwind' },
  { icon: Database, title: 'Backend', description: 'Node.js, Express, Firebase, MongoDB' },
  { icon: Wind, title: 'Cloud & DevOps', description: 'Google Cloud, Vercel, Netlify, Docker' },
  { icon: Brush, title: 'Design', description: 'Figma, Spline, UI/UX, Motion Design' },
];

export default function About() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/images/profile.jpg"
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
            I'm a builder at heart, driven by a passion for turning complex ideas into elegant, high-performance web experiences. My expertise lies at the intersection of sharp design and scalable engineering, where I thrive on building systems that not only work flawlessly but also feel incredible to use. I'm obsessed with the entire product lifecycle—from initial concept to polished, production-ready code.
          </p>
          <p className="text-lg text-foreground/80">
            Outside of the digital world, I'm an adrenaline junkie who's always chasing the next thrill, whether it's exploring new heights or diving into uncharted territories. This love for adventure translates into my work, where I constantly push boundaries and explore new technologies to create something truly innovative.
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
