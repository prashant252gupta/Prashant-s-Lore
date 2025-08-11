import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
      <div className="max-w-3xl">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Prashant Gupta
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-foreground/80 font-headline">
          Creative Developer & Designer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-foreground/60">
          I build beautiful, responsive, and highly performant web applications. Passionate about modern web technologies and clean, elegant design.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
