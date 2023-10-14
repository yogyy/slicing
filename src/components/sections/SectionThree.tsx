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

        <div className="flex-1 w-full mt-10 xl:mt-0 lg:mx-auto lg:max-w-xl">
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
          <div className="flex flex-col gap-4 mt-5 md:gap-7 md:mt-10">
            <div className="py-3 px-4 md:py-5 md:px-7 flex gap-6 bg-white rounded-2xl shadow-[0px_15px_30px_0px_rgba(2,_40,_43,_0.10)] w-full">
              <div className="w-[30px]">
                <Layout className="text-primary w-6 md:w-[30px] h-6 md:h-[30px] my-2" />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div className="">
                  <h1 className="text-base font-semibold leading-8 text-primary lg:text-lg">
                    Live Demo Project
                  </h1>
                  <p className="text-sm leading-6 md:text-base md:leading-7">
                    Lihat live demo project yang akan kamu buat di akhir buku ini.
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="go to live demo project"
                    className="w-7 md:w-10 h-7 md:h-10 bg-[rgba(0,_186,_199,_0.10)] flex items-center justify-center rounded-full"
                  >
                    <ArrowRight className="flex-shrink-0 w-4 h-4 text-primary md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="py-3 px-4 md:py-5 md:px-7 flex gap-6 bg-white rounded-2xl shadow-[0px_15px_30px_0px_rgba(2,_40,_43,_0.10)] w-full">
              <div className="w-[30px]">
                <MessageSquare className="text-primary w-6 md:w-[30px] h-6 md:h-[30px] my-2" />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div className="">
                  <h1 className="text-base font-semibold leading-8 text-primary lg:text-lg">
                    Dukungan Komunitas
                  </h1>
                  <p className="text-sm leading-6 md:text-base md:leading-7">
                    Sebuah server Discord berisi teman-teman yang akan membantu kamu.
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="go to discord server"
                    className="w-7 md:w-10 h-7 md:h-10 bg-[rgba(0,_186,_199,_0.10)] flex items-center justify-center rounded-full"
                  >
                    <ArrowRight className="flex-shrink-0 w-4 h-4 text-primary md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col pb-24 lg:pb-48 bg-teal-50 gap-y-12 lg:gap-y-24">
        <div>
          <div className="flex justify-center">
            <div className="w-fit h-9 px-2.5 py-1.5 lg:px-5 lg:py-2.5 bg-teal-100 rounded-full justify-start items-center gap-2.5 inline-flex">
              <span className="text-xs font-bold tracking-wider text-cyan-500 lg:text-sm">
                PRATINJAU
              </span>
            </div>
          </div>
          <h1 className="text-center text-slate-800 text-xl lg:text-3xl font-medium leading-normal lg:leading-10 mt-2.5">
            Sebelum membeli, kamu dapat melihat beberapa <br className="hidden lg:block" /> halaman
            pratinjau isi di dalam buku ini
          </h1>
          <p className="mt-5 text-base font-normal leading-relaxed text-center text-slate-800 text-opacity-80 lg:text-lg lg:leading-loose">
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
            <br className="hidden lg:block" /> detail halaman buku tersebut dan membaca isinya.
          </p>
        </div>
        <div className="relative flex justify-center 2xl:pr-10">
          <div className="flex-col items-center justify-center flex-1">
            <img src="./Vectary.webp" draggable="false" alt="tailwind book" />
          </div>
          <div className="absolute hidden -right-56 2xl:block">
            <img
              src="./collection-page.webp"
              draggable="false"
              alt="tailwind book"
              className="my-10"
            />
          </div>
          <span className="absolute hidden text-xs leading-8 text-center lg:text-base bottom-20 2xl:block">
            Halaman 1 dari 257
          </span>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
