import Navbar from '@/component/Navbar';
import { cn } from './libs/utils';
import Strip from './component/Strip';

function App() {
  return (
    <>
      <main className="relative w-full h-full">
        <Navbar />
        <section className="relative flex flex-col justify-around lg:flex-row bacabuku pt-[72px] md:pt-[88px] lg:pt-[104px] xl:pt-[164px]">
          <div className="z-10 flex-1 mt-12 ">
            <h1 className="text-2xl font-semibold text-white lg:font-normal lg:text-4xl md:text-3xl xl:text-5xl">
              Sebuah framework CSS <br /> untuk developer yang <br /> memiliki phobia <br />{' '}
              terhadap CSS
            </h1>
            <div className="w-full h-5 " />
            <p className="text-base lg:text-xl text-white/80">
              Buku ini akan mengajarkan kamu konsep utility-first pada CSS <br /> dan diakhiri
              dengan membangun sebuah website yang <br /> responsive dengan Tailwind CSS.
            </p>
            <div className="w-full h-6 lg:h-12" />
            <div className="flex flex-col gap-5 xl:gap-10 2xl:flex-row">
              <button
                className={cn(
                  'flex items-center gap-3 py-3 md:py-6 px-5 md:px-11 text-sm md:text-base bg-primary rounded-[100px] font-bold shadow-[0px_15px_30px_0px_rgba(0,_186,_199,_0.33)] max-w-fit',
                )}
              >
                Beli Sekarang
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-5 md:h-[21px]"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M9.99999 18.8333C14.6024 18.8333 18.3333 15.1024 18.3333 10.5C18.3333 5.89763 14.6024 2.16667 9.99999 2.16667C5.39762 2.16667 1.66666 5.89763 1.66666 10.5C1.66666 15.1024 5.39762 18.8333 9.99999 18.8333Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 13.8333L13.3333 10.5L10 7.16667"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66666 10.5H13.3333"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="flex gap-3 font-mono md:gap-6">
                <span className="flex items-center 2xl:items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex flex-row items-center gap-3 md:items-start md:flex-col md:gap-0">
                  <p className="text-sm md:text-base text lg:tracking-[1.6px] font-bold inline-flex items-center">
                    SUDAH TERJUAL
                  </p>
                  <p className="text-sm font-semibold md:text-base lg:text-2xl">501,234+</p>
                </div>
              </div>
            </div>
            <div className="w-full h-14 lg:h-24" />
            <div className="">
              <Strip>
                <p className="text-white/80">Teknologi yang digunakan</p>
              </Strip>
              <img
                src="./techused.svg"
                draggable="false"
                alt="tecknologi digunakan"
                className="hover:cursor-pointer"
                onClick={() => console.error('got u')}
              />
            </div>
          </div>
          <div className="z-10 flex items-center lg:flex-1">
            <img src="/tailwind-book.webp" draggable="false" alt="" width={700} />
          </div>
        </section>

        <section className="text-[#272D3E]">
          <div className="py-[12rem] flex flex-col gap-[5.25rem]">
            <div className="">
              <div className="">
                ./
                <h1>Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!</h1>
              </div>
              <p>
                Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku
                ini juga cocok untuk back-end developer dan UI designer agar dapat menulis style
                tanpa harus menulis kode CSS dan tanpa mengandalkan front-end developer!
              </p>
            </div>
            <div className=""></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
