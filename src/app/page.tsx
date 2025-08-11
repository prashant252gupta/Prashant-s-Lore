import SplineBackground from '@/components/spline-background';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import Blog from '@/components/blog';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SplineBackground />
      <Header />
      <main className="flex-grow">
        <div id="home" className="pt-16 sm:pt-24"><Hero /></div>
        <div id="projects" className="pt-16 sm:pt-24"><Projects /></div>
        <div id="about" className="pt-16 sm:pt-24"><About /></div>
        <div id="blog" className="pt-16 sm:pt-24"><Blog /></div>
        <div id="contact" className="pt-16 sm:pt-24"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
