import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, FolderKanban } from 'lucide-react';

const navItems = [
  {
    name: 'About Me',
    link: '#about',
    icon: (
      <Image
        src="/images/pfp.jpg"
        alt="Prashant Gupta"
        width={40}
        height={40}
        className="rounded-full object-cover"
        data-ai-hint="man portrait"
      />
    ),
  },
  {
    name: 'Experience',
    link: '#experience',
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    name: 'Projects',
    link: '#projects',
    icon: <FolderKanban className="h-6 w-6" />,
  },
];

export default function FloatingNav() {
  return (
    <div className="fixed top-4 left-4 z-50 flex flex-col gap-4">
      {navItems.map((item, index) => (
        <Link key={item.name} href={item.link}>
          <div
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg cursor-pointer
                       transform transition-transform duration-500 ease-in-out animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-accent transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <span className="absolute left-20 w-max bg-primary text-primary-foreground text-sm px-3 py-1 rounded-md shadow-lg
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {item.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
