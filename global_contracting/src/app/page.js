import Landing from './components/Landing';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Values from './components/Values';

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Landing />
      <Values />
      <About />
      <Contact />
     
    </main>
  )
}