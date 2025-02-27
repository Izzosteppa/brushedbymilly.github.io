import { useEffect } from 'react';
import '@fontsource/playfair-display';
import '@fontsource/montserrat';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Policy from './components/Policy';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.body.className = 'font-montserrat bg-[#FDF8F7]';
  }, []);

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Gallery />
        <Policy />
        <BookingForm />
        <Footer />
      </main>
    </>
  );
}

export default App;