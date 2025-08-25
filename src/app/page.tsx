import About from '@/components/about';
import LetsConnect from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Spline from '@splinetool/react-spline';
import FloatingNav from '@/components/floating-nav';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/1zeQtflKZD13UN8W/scene.splinecode" />
      </div>
      <FloatingNav />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          <div id="home" className="h-screen">
            <Hero />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <LetsConnect />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
