import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Spline from '@splinetool/react-spline';

export default function JourneyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/1zeQtflKZD13UN8W/scene.splinecode" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/#about">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Link>
          </Button>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-12 text-center text-destructive">Asymmetrical side quests</h1>
          {/* Content for the journey page will go here */}
        </div>
      </div>
    </div>
  );
}
