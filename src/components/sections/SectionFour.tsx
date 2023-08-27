import Strip from '../layouts/Strip';
import book from '@/assets/manfaat buku.webp';
import { Check } from 'lucide-react';

const manfaat = [
  'Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap',
  'Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi',
  'Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer',
  'Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS',
];

const SectionFour = () => {
  return (
    <section className="bg-[#EDFCFD] text-[rgba(39,_45,_62,_0.80)] py-24 lg:py-48 flex gap-7 flex-col lg:flex-row">
      <div className="max-w-[575px] flex-1">
        <Strip>MANFAAT BUKU</Strip>
        <h1 className="text-xl md:text-3xl leading-5 md:leading-10 font-medium text-[#272D3E]">
          Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
        </h1>
        <p className="mt-5 text-base md:text-lg leading-5 md:leading-8">
          "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau tak
          bisa berharap yang terpantul adalah seorang yang jenius." - J.K Rowling
        </p>
        <div className="flex flex-col gap-3 md:gap-5 mt-5 md:mt-10 text-sm md:text-base font-normal leading-5 md:leading-7">
          {manfaat.map((man) => (
            <div key={man.length} className="flex gap-3 md:gap-5">
              <div className="w-6 md:w-[30px] h-6 md:h-[30px] flex justify-center items-center bg-[#20D27D] rounded-full flex-shrink-0">
                <Check strokeWidth={2} className="w-4 text-white" />
              </div>
              <p>{man}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center flex-1">
        <img src={book} alt="tailwind book" />
        <div className="absolute bottom-5 flex justify-between w-full p-3 text-sm text-white bg-primary rounded-xl lg:p-7 max-w-[575px] min-w-[300px]">
          <div className="w-1/4">
            <p className="text-xl font-bold lg:text-3xl">19</p>
            <span>Jumlah Chapter</span>
          </div>
          <div className="w-[1px] h-auto bg-[rgba(255,_255,_255,_0.30)]" />
          <div className="w-1/4">
            <p className="text-xl font-bold lg:text-3xl">253</p>
            <span>Jumlah Halaman</span>
          </div>
          <div className="w-[1px] h-auto bg-[rgba(255,_255,_255,_0.30)]" />
          <div className="w-1/4">
            <p className="text-xl font-bold lg:text-3xl">60</p>
            <span>Hari Menulis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
