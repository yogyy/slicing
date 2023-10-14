import Navbar from '@/components/layouts/Navbar';
import SectionOne from '@/components/sections/SectionOne';
import SectionTwo from '@/components/sections/SectionTwo';

import Footer from '@/components/layouts/Footer';
import { lazy } from 'react';

const Sect3Lazy = lazy(() => import('@/components/sections/SectionThree'));
const Sect4Lazy = lazy(() => import('@/components/sections/SectionFour'));
const Sect5Lazy = lazy(() => import('@/components/sections/SectionFive'));

function App() {
  return (
    <>
      <Navbar />
      <main className="relative w-full h-full">
        <SectionOne />
        <SectionTwo />
        <Sect3Lazy />
        <Sect4Lazy />
        <Sect5Lazy />
      </main>
      <Footer />
    </>
  );
}

export default App;
