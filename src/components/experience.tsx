import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const professionalExperience = [
  {
    role: 'Cloud Solutions Architect (Infrastructure)',
    company: 'Microsoft',
    period: '2022 - 2024',
    details: [
      'Partnered with 15+ startups to drive cloud adoption, delivering up to 30% cost savings as a strategic infrastructure partner.',
      'Acted as a trusted advisor to CXOs, helping SaaS clients scale faster and enter new markets by aligning cloud solutions with business goals.',
      'Led end-to-end pre-sales and post-sales cycles, boosting Azure adoption and ensuring long-term client retention.',
      'Delivered tailored solutions by collaborating with product, sales, and technical teams, translating complex architectures into clear value propositions.',
    ],
  },
  {
    role: 'CSA Aspire Mentorship',
    company: 'Microsoft',
    period: '2021',
    githubUrl: 'https://github.com/prashant252gupta/Azure-Resource-Dashboard',
    details: [
      'Built an Azure resource dashboard to track deployments by region, improving resiliency and cost visibility for users.',
      'Converted raw infrastructure data into actionable insights that guided scaling and optimization decisions.',
      'Developed the tool with React, MongoDB, and REST APIs, showcasing end-to-end delivery from design to client impact.',
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
                  <Image
                    src="/images/money.gif"
                    alt="Experience"
                    width={24}
                    height={24}
                    className="object-contain"
                    data-ai-hint="money"
                  />
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
