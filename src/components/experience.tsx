import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const professionalExperience = [
  {
    role: 'Cloud Solutions Architect',
    company: 'Microsoft',
    period: '2022 - 2024',
    details: [
      'Architected and deployed scalable, secure, and resilient cloud solutions on Microsoft Azure for enterprise clients.',
      'Collaborated with sales and engineering teams to drive adoption of cloud services.',
      'Provided technical guidance and best practices to customers, ensuring successful cloud migrations and modernizations.',
    ],
  },
  {
    role: 'CSA Aspire Mentorship',
    company: 'Microsoft',
    period: '2021',
    githubUrl: 'https://github.com/prashant252gupta/Azure-Resource-Dashboard',
    details: [
      'Mentored aspiring Cloud Solution Architects through the Microsoft Aspire program.',
      'Provided guidance on technical skills, career development, and solution design.',
      'Fostered a collaborative learning environment for program participants.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {professionalExperience.map((exp, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <CardTitle className="font-headline text-2xl">{exp.role}</CardTitle>
                <CardDescription className="text-base">
                  {exp.company} &middot; {exp.period}
                </CardDescription>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              {exp.githubUrl && (
                <Button asChild className="mt-4">
                  <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
