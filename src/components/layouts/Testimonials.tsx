import { ArrowLeft, ArrowRight } from 'lucide-react';
import ahmad from '/testi/ahmadsaugi.png';
import dedi from '/testi/dediksugihartono.png';
import lut from '/testi/lutfihanafi.png';

const testimoni = [
  {
    msg: '“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”',
    name: 'Ahmad Saugi',
    job: 'Mahasiswa',
    pict: ahmad,
  },
  {
    msg: '“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”',
    name: 'Dedik Sugiharto',
    job: 'Front-end Engineer',
    pict: dedi,
  },
  {
    msg: '“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”',
    name: 'Lutfi Hanafiah Ramadhan',
    job: 'IT Support',
    pict: lut,
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 lg:gap-8 justify-center items-center">
      <button
        type="button"
        aria-label="see previous testimonial"
        className="hidden absolute -left-6 w-12 h-12 lg:flex items-center justify-center bg-primary rounded-full text-white hover:bg-primary/90"
      >
        <ArrowLeft />
      </button>
      {testimoni.map((testi) => (
        <div
          key={testi.name}
          className="bg-white rounded-xl shadow-[0px_30px_60px_0px_rgba(0,_186,_199,_0.08)] p-7 flex flex-col gap-3 lg:gap-7 w-full max-w-[406px] lg:w-[406px]"
        >
          <p>{testi.msg}</p>
          <div className="flex gap-4">
            <img className="w-12 h-12" src={testi.pict} alt={testi.name} />
            <div className="flex flex-col">
              <p>{testi.name}</p>
              <p>{testi.job}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        aria-label="see next testimonial"
        className="hidden absolute w-12 h-12 lg:flex items-center justify-center bg-primary rounded-full text-white hover:bg-primary/90 -right-6"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Testimonials;
