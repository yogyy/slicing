import { cn } from '@/lib/utils';
import Strip from '../layouts/Strip';
import { ArrowRightCircle, Download } from 'lucide-react';

const SectionOne = () => {
  return (
    <section className="relative flex flex-col justify-around lg:flex-row bacabuku pt-[72px] md:pt-[88px] lg:pt-[104px] xl:pt-[164px]">
      <div className="z-10 flex-1 mt-12">
        <h1 className="text-2xl font-semibold text-white lg:font-normal lg:text-4xl md:text-3xl xl:text-5xl">
          Sebuah framework CSS <br className="hidden xl:block" /> untuk developer yang{' '}
          <br className="hidden lg:block" /> memiliki phobia <br className="hidden xl:block" />{' '}
          terhadap CSS
        </h1>
        <div className="w-full h-5" />
        <p className="text-base lg:text-xl text-white/80">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS <br /> dan diakhiri dengan
          membangun sebuah website yang <br /> responsive dengan Tailwind CSS.
        </p>
        <div className="w-full h-6 lg:h-12" />
        <div className="flex flex-col gap-5 text-white xl:gap-10 lg:flex-row">
          <button
            className={cn(
              'flex items-center gap-3 py-3 md:py-6 px-5 md:px-11 text-sm md:text-base bg-primary rounded-[100px] font-bold shadow-[0px_15px_30px_0px_rgba(0,_186,_199,_0.33)] max-w-fit',
            )}
          >
            Beli Sekarang
            <span>
              <ArrowRightCircle className="w-5 h-5" />
            </span>
          </button>
          <div className="flex gap-3 font-mono md:gap-6">
            <span className="flex py-2 items-center justify-around 2xl:items-start">
              <Download className="w-6 h-6" />
            </span>
            <div className="flex flex-row items-center justify-center gap-3 md:items-start md:flex-col md:gap-0">
              <p className="text-sm md:text-base text lg:tracking-[1.6px] font-bold inline-flex items-center">
                SUDAH TERJUAL
              </p>
              <p className="text-sm font-semibold md:text-base lg:text-2xl">501,234+</p>
            </div>
          </div>
        </div>
        <div className="block mt-10 lg:mt-24">
          <Strip>TEKNOLOGI YANG DIGUNAKAN</Strip>
          <img
            src="./techused.svg"
            draggable="false"
            alt="tecknologi digunakan"
            className="hover:cursor-pointer"
            onClick={() => console.error('got u')}
          />
        </div>
      </div>
      <div className="flex items-center lg:flex-1 justify-center">
        <div className="w-4/5 lg:w-full">
          <img src="/tailwind-book.webp" draggable="false" alt="tailwind book" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
