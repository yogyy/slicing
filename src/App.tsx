import Navbar from '@/components/layouts/Navbar';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';
import SectionThree from './components/sections/SectionThree';
import SectionFour from './components/sections/SectionFour';
import SectionFive from './components/sections/SectionFive';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative w-full h-full">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
      <Footer />
    </>
  );
}

export default App;
