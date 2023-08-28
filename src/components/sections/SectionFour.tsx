import Prices from '../layouts/Prices';

const SectionFour = () => {
  return (
    <>
      <section className="pricelist pt-10 -mt-36">
        <div className="py-14 lg:py-48">
          <div className="flex flex-col w-full items-center">
            <button className="px-2.5 py-1.5 lg:px-5 lg:py-2.5 bg-teal-100/10 rounded-full">
              <span className="text-cyan-500 text-xs lg:text-sm font-bold tracking-wide lg:tracking-wider">
                HARGA BUKU
              </span>
            </button>
            <h1 className="text-center text-white text-xl lg:text-3xl font-medium leading-10 mt-2.5">
              Kamu dapat membeli buku fisik atau buku <br className="hidden lg:block" /> elektronik
              untuk dibaca di perangkat kamu
            </h1>
            <p className="text-center text-white/80 text-base lg:text-lg leading-loose mt-5">
              Dilarang memperjualbelikan atau memperbanyak tanpa seizin
              <br className="hidden lg:block" /> penulis. Hak cipta dilindungi undang-undang.
            </p>
          </div>
          <div className="my-10 lg:my-20">
            <Prices />
          </div>
          <p className="text-white/80 text-center text-base lg:text-lg leading-normal lg:leading-8">
            *Buku digital akan dikirimkan ke alamat email kamu <br /> *Buku fisik dikirim 7 hari
            setelah pemesanan
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-48">
        <div className="flex justify-between flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <div className="flex-1 flex justify-center">
            <div className="p-4 h-full relative flex flex-col items-center w-4/5 lg:w-full">
              <img src="/public/author.jpg" alt="author picture" className="bg" />
              <div className="static min-[400px]:-mt-32 lg:mt-0 xl:absolute bottom-36 left-20 bg-primary rounded-lg py-3 px-4 lg:py-6 lg:px-8 w-fit">
                <p className="text-white text-sm lg:text-base">Muhamad Nauval Azhar</p>
                <p className="text-white/80 text-xs lg:text-sm">@mhdnauvalazhar</p>
              </div>
            </div>
          </div>
          <div className="text-[#272D3E] flex-1 mt-10 lg:mt-0">
            <p className="text-primary text-sm tracking-[1.4px] font-bold ">PENULIS BUKU</p>
            <h1 className="text-xl leading-normal lg:text-3xl text-inherit lg:leading-10 font-medium mt-2.5">
              Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
            </h1>
            <p className="text-inherit font-normal text-sm md:text-base leading-8 mt-5">
              “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun,
              kedepannya saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai
              orang yang rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer.
              Saya seorang web developer yang masuk kategori
              apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih senang fokus di
              front-end development, karena --menurut saya-- ini lebih sederhana saja. Di front-end
              development pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan
              JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau
              kamu cocoknya pake jQuery, malah maksa pake React.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
