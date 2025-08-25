"use client";

import { cn } from '@/lib/utils';

const socialLinks = [
    {
        name: 'Twitter',
        description: 'Random Thoughts & Interesting Retweets',
        url: 'https://x.com/guptaji522',
    },
    {
        name: 'Instagram',
        description: 'Films, Animations & Photographs',
        url: 'https://www.instagram.com/that_asymmetrical_boy/',
    },
    {
        name: 'Linkedin',
        description: 'Professional & Work Related',
        url: 'https://www.linkedin.com/in/prashant252gupta/',
    },
    {
        name: 'Github',
        description: 'All things Code & Development',
        url: 'https://github.com/prashant252gupta',
    },
    {
        name: 'Email',
        description: 'pguptaprashant252@gmail.com',
        url: 'mailto:pguptaprashant252@gmail.com',
        highlight: true,
    },
]

export default function LetsConnect() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
        <div className="w-full h-px bg-primary/20 mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                        "group relative p-6 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/80",
                        link.highlight ? "bg-accent text-accent-foreground lg:col-start-3" : "hover:bg-card/80"
                    )}
                >
                    <div>
                        <h3 className="font-headline font-bold text-lg">{link.name}</h3>
                        <p className={cn(
                            "mt-1 text-sm",
                            link.highlight ? "text-accent-foreground/80" : "text-muted-foreground"
                        )}>
                            {link.description}
                        </p>
                    </div>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
}