import { useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  // Reveal elements as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Nav />
      <main>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
