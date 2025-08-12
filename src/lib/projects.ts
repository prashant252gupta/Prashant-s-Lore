import { Github, ExternalLink } from 'lucide-react';

export const projects = [
  {
    slug: 'ai-web3-crm',
    title: 'AI Web3 CRM',
    description: 'A landing page for a Web3-focused CRM powered by AI. Designed to showcase features and capture leads.',
    image: '/images/CRM.png',
    tags: ['React', 'Next.js', 'AI', 'Web3', 'Tailwind CSS'],
    liveUrl: 'https://ai-web3-crm-landing-page.netlify.app/',
    githubUrl: '#',
    aiHint: 'crm dashboard',
  },
  {
    slug: 'nyxiebot',
    title: 'Nyxiebot',
    description: 'A multi-purpose bot for Discord, offering moderation, entertainment, and utility commands to enhance server engagement.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Node.js', 'Discord.js', 'JavaScript'],
    liveUrl: 'https://nyxiebot.netlify.app/',
    githubUrl: '#',
    aiHint: 'discord bot',
  },
  {
    slug: 'stock-trend-prediction',
    title: 'Stock Trend Prediction',
    description: 'A machine learning model that predicts stock market trends using historical data and various technical indicators.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    liveUrl: '#',
    githubUrl: 'https://github.com/prashant252gupta/Stock_trend_prediction',
    aiHint: 'stock chart',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    description: 'A design and 3D model and animation project.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Design', '3D Modeling', 'Animation', 'Spline'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: '3d animation',
  },
];

export type Project = (typeof projects)[0];
