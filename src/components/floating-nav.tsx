import Link from 'next/link';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const navItems = [
  {
    name: 'About Me',
    link: '#about',
    icon: (
      <Image
        src="/images/iFace.png"
        alt="Prashant Gupta"
        width={56}
        height={56}
        className="rounded-full object-cover"
        data-ai-hint="man portrait"
      />
    ),
    animationClass: 'animate-gentle-float-1',
    size: 'w-20 h-20',
  },
  {
    name: 'Experience',
    link: '#experience',
    icon: (
      <Image
        src="/images/money.gif"
        alt="Experience"
        width={40}
        height={40}
        className="object-contain rounded-full"
        data-ai-hint="money"
      />
    ),
    animationClass: 'animate-gentle-float-2',
    size: 'w-14 h-14',
  },
  {
    name: 'Projects',
    link: '#projects',
    icon: (
      <Image
        src="/images/gundam.png?v=2"
        alt="Projects"
        width={40}
        height={40}
        className="object-contain rounded-full"
        data-ai-hint="robot"
      />
    ),
    animationClass: 'animate-gentle-float-3',
    size: 'w-14 h-14',
  },
];

export default function FloatingNav() {
  return (
    <div className="fixed top-4 left-4 z-50 grid grid-cols-2 grid-rows-2 gap-4" style={{gridTemplateAreas: '"profile experience" "projects ."'}}>
      <Link href={navItems[0].link} style={{gridArea: 'profile'}}>
        <div
          className={`group relative flex items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg cursor-pointer
                      transform transition-transform duration-500 ease-in-out ${navItems[0].animationClass} ${navItems[0].size}`}
        >
          <div className="text-accent transition-transform duration-300 group-hover:scale-110">
            {navItems[0].icon}
          </div>
          <span className="absolute left-full ml-4 w-max bg-primary text-primary-foreground text-sm px-3 py-1 rounded-md shadow-lg
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {navItems[0].name}
          </span>
        </div>
      </Link>
      <Link href={navItems[1].link} style={{gridArea: 'experience'}}>
        <div
          className={`group relative flex items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg cursor-pointer
                      transform transition-transform duration-500 ease-in-out ${navItems[1].animationClass} ${navItems[1].size}`}
        >
          <div className="text-accent transition-transform duration-300 group-hover:scale-110">
            {navItems[1].icon}
          </div>
          <span className="absolute left-full ml-4 w-max bg-primary text-primary-foreground text-sm px-3 py-1 rounded-md shadow-lg
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {navItems[1].name}
          </span>
        </div>
      </Link>
      <Link href={navItems[2].link} style={{gridArea: 'projects'}}>
        <div
          className={`group relative flex items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg cursor-pointer
                      transform transition-transform duration-500 ease-in-out ${navItems[2].animationClass} ${navItems[2].size}`}
        >
          <div className="text-accent transition-transform duration-300 group-hover:scale-110">
            {navItems[2].icon}
          </div>
          <span className="absolute left-full ml-4 w-max bg-primary text-primary-foreground text-sm px-3 py-1 rounded-md shadow-lg
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {navItems[2].name}
          </span>
        </div>
      </Link>
    </div>
  );
}
