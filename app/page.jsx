import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Responsibilities from '../components/Responsibilities';
import Skills from '../components/Skills';
import WorkPhotos from '../components/WorkPhotos';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Responsibilities />
      <Skills />
      <WorkPhotos />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
