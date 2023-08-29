import { cn } from '@/lib/utils';
import Strip from '../layouts/Strip';
import review from '../../assets/433test.png';
import { ArrowRight, Layout, MessageSquare } from 'lucide-react';

const SectionThree = () => {
  return (
    <>
      <section className="relative pb-48 bg-[#EDFCFD] flex flex-col xl:flex-row justify-between gap-6 xl:items-center">
        <div className={cn('w-full xl:max-w-xl flex-1 relative lg:mr-4 flex justify-center')}>
          <img
            src={review}
            alt=""
            className={cn(
              'p-2 -rotate-6 bg-white/20 flex-shrink-0 rounded-2xl shadow-[0px_40px_80px_0px_rgba(29,_43,_63,_0.10)]',
              'w-4/5 md:w-auto',
            )}
          />
        </div>
        <div className="w-full lg:max-w-xl flex-1">
          <Strip border="primary" variant="primary">
            SELAIN ITU
          </Strip>
          <h1 className="text-[#272D3E] text-xl md:text-3xl font-medium leading-5 md:leading-10 mt-2">
            Buku dengan studi kasus nyata, juga komunitas yang ramah
          </h1>
          <p className="mt-5 text-base md:text-lg">
            Buku ini diakhiri dengan membangun website yang responsive dengan Tailwind. Selain itu
            kamu juga kamu dapat bergabung ke komunitas untuk bertanya ketika mengalami kesulitan.
          </p>
          <div className="flex flex-col gap-4 md:gap-7 mt-5 md:mt-10">
            <div className="py-3 px-4 md:py-5 md:px-7 flex gap-6 bg-white rounded-2xl shadow-[0px_15px_30px_0px_rgba(2,_40,_43,_0.10)] w-full">
              <div className="w-[30px]">
                <Layout className="text-primary w-6 md:w-[30px] h-6 md:h-[30px] my-2" />
              </div>
              <div className="flex gap-3 justify-between w-full">
                <div className="">
                  <h1 className="text-primary text-base lg:text-lg leading-8 font-semibold">
                    Live Demo Project
                  </h1>
                  <p className="text-sm md:text-base leading-6 md:leading-7">
                    Lihat live demo project yang akan kamu buat di akhir buku ini.
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="go to live demo project"
                    className="w-7 md:w-10 h-7 md:h-10 bg-[rgba(0,_186,_199,_0.10)] flex items-center justify-center rounded-full"
                  >
                    <ArrowRight className="text-primary w-4 md:w-6 h-4 md:h-6 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>

            <div className="py-3 px-4 md:py-5 md:px-7 flex gap-6 bg-white rounded-2xl shadow-[0px_15px_30px_0px_rgba(2,_40,_43,_0.10)] w-full">
              <div className="w-[30px]">
                <MessageSquare className="text-primary w-6 md:w-[30px] h-6 md:h-[30px] my-2" />
              </div>
              <div className="flex gap-3 justify-between w-full">
                <div className="">
                  <h1 className="text-primary text-base lg:text-lg leading-8 font-semibold">
                    Dukungan Komunitas
                  </h1>
                  <p className="text-sm md:text-base leading-6 md:leading-7">
                    Sebuah server Discord berisi teman-teman yang akan membantu kamu.
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="go to discord server"
                    className="w-7 md:w-10 h-7 md:h-10 bg-[rgba(0,_186,_199,_0.10)] flex items-center justify-center rounded-full"
                  >
                    <ArrowRight className="text-primary w-4 md:w-6 h-4 md:h-6 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-48 bg-teal-50 flex flex-col gap-y-12 lg:gap-y-24">
        <div>
          <div className="flex justify-center">
            <div className="w-fit h-9 px-2.5 py-1.5 lg:px-5 lg:py-2.5 bg-teal-100 rounded-full justify-start items-center gap-2.5 inline-flex">
              <span className="text-cyan-500 text-xs lg:text-sm font-bold tracking-wider">
                PRATINJAU
              </span>
            </div>
          </div>
          <h1 className="text-center text-slate-800 text-xl lg:text-3xl font-medium leading-normal lg:leading-10 mt-2.5">
            Sebelum membeli, kamu dapat melihat beberapa <br className="hidden lg:block" /> halaman
            pratinjau isi di dalam buku ini
          </h1>
          <p className="text-center text-slate-800 text-opacity-80 text-base lg:text-lg font-normal leading-relaxed lg:leading-loose mt-5">
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
            <br className="hidden lg:block" /> detail halaman buku tersebut dan membaca isinya.
          </p>
        </div>
        <div className="flex relative 2xl:pr-10 justify-center">
          <div className="flex-1 flex-col justify-center items-center">
            <img src="/Vectary.webp" draggable="false" alt="tailwind book" />
          </div>
          <div className="absolute -right-56 hidden 2xl:block">
            <img
              src="/collection-page.webp"
              draggable="false"
              alt="tailwind book"
              className="my-10"
            />
          </div>
          <span className="text-xs lg:text-base leading-8 text-center absolute bottom-20 hidden 2xl:block">
            Halaman 1 dari 257
          </span>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
