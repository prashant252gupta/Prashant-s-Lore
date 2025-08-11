import About from '@/components/about';
import Blog from '@/components/blog';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/1zeQtflKZD13UN8W/scene.splinecode" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div id="home" className="h-screen">
            <Hero />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="blog">
            <Blog />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}