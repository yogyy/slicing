import { ArrowRightCircle, Download } from 'lucide-react';
import Testimonials from '../layouts/Testimonials';
import { cn } from '@/lib/utils';
import Strip from '../layouts/Strip';

const SectionFive = () => {
  return (
    <>
      <section className="">
        <div className="relative py-14 lg:py-24 px-14 lg:px-24 bg-[#EDFCFD] h-auto rounded-lg">
          <div className="">
            <Strip border="primary" variant="primary">
              TERSTIMONIAL
            </Strip>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-9">
              <h1 className="text-xl lg:text-3xl font-medium leading-normal lg:leading-10 flex-1">
                Apa kata orang-orang yang <br /> membaca buku ini?
              </h1>
              <p className="text-base lg:text-lg font-normal leading-loose flex-1">
                Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa, karena yang
                patut kamu percayai adalah Tuhan. Tapi, mungkin beberapa ulasan ini bisa
                membangkitkan hasratmu untuk membeli buku ini.
              </p>
            </div>
          </div>
          <div className="h-full py-14 flex flex-col items-center">
            <Testimonials />
            <div className="mt-8">
              <svg
                width="52"
                height="7"
                viewBox="0 0 52 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="3.42105"
                  cy="3.42105"
                  r="3.42105"
                  transform="matrix(1 0 0 -1 0 6.8418)"
                  fill="#00BAC7"
                />
                <circle
                  cx="3.42105"
                  cy="3.42105"
                  r="3.42105"
                  transform="matrix(1 0 0 -1 15.0526 6.8418)"
                  fill="#272D3E"
                  fillOpacity="0.1"
                />
                <circle
                  cx="3.42105"
                  cy="3.42105"
                  r="3.42105"
                  transform="matrix(1 0 0 -1 30.1053 6.8418)"
                  fill="#272D3E"
                  fillOpacity="0.1"
                />
                <circle
                  cx="3.42105"
                  cy="3.42105"
                  r="3.42105"
                  transform="matrix(1 0 0 -1 45.1579 6.8418)"
                  fill="#272D3E"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="py-36">
          <div className="font-bold flex justify-center">
            <div className="bg-[#EDFCFD] py-1.5 lg:py-3 px-2.5 lg:px-5 rounded-[100px]">
              <p className="text-primary text-sm lg:text-base tracking-[1.4px]">BELI BUKU</p>
            </div>
          </div>
          <h1 className="text-center text-xl lg:text-3xl font-medium leading-10 mt-2.5">
            Anda ingin segera memesan buku ini?
          </h1>
          <p className="text-center text-base lg:text-lg leading-8 text-[rgba(39,_45,_62,_0.80)] mt-5">
            Otak Kita butuh asupan nutrisi juga, tidak <br className="hidden lg:block" /> hanya
            perut saja.
          </p>
          <div className="flex flex-col-reverse gap-5 text-white xl:gap-10 lg:flex-row-reverse justify-center items-center mt-10">
            <button
              type="button"
              className={cn(
                'flex items-center gap-3 py-3 lg:py-6 px-5 lg:px-11 text-sm lg:text-base bg-primary rounded-[100px] font-semibold shadow-[0px_15px_30px_0px_rgba(0,_186,_199,_0.33)] max-w-fit',
              )}
            >
              Beli Sekarang
              <span>
                <ArrowRightCircle className="w-5 h-5" />
              </span>
            </button>
            <div className="flex gap-3 font-mono md:gap-6 text-black">
              <span className="flex py-2 items-center justify-around 2xl:items-start">
                <Download className="w-6 h-6" />
              </span>
              <div className="flex flex-row items-center justify-center gap-3 md:items-start md:flex-col md:gap-0">
                <p className="text-sm md:text-base text-[rgba(39,_45,_62,_0.80)] lg:tracking-[1.6px] font-bold inline-flex items-center">
                  SUDAH TERJUAL
                </p>
                <p className="text-sm font-semibold md:text-base lg:text-2xl">501,234+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
