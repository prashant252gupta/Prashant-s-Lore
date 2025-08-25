import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:pguptaprashant252@gmail.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/that_asymmetrical_boy/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/prashant252gupta' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/prashant252gupta/' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/guptaji522' },
];

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; Made with <span role="img" aria-label="heart">❤️</span> by Prashant Gupta
          </p>
        </div>
      </div>
    </footer>
  );
}
