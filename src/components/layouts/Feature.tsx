import UFF from '@/assets/Utility-First-Framework.svg';
import TIE from '@/assets/Tailwind-JIT-Engine.svg';
import UF from '@/assets/Unopinionated-Framework.svg';

const features = [
  {
    title: 'Utility-First Framework',
    image: UFF,
    desc: 'Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.',
  },
  {
    title: 'Tailwind JIT Engine',
    image: TIE,
    desc: 'JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.',
  },
  {
    title: 'Unopinionated-Framework',
    image: UF,
    desc: 'Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.',
  },
];
type featuresType = {
  src: string;
  title: string;
  desc: string;
};

const Feature = ({ src, title, desc }: featuresType) => {
  return (
    <div className="text-center w-full max-w-[360px]">
      <img src={src} alt={src} />
      <h1 className="mt-5 text-lg md:text-xl">{title}</h1>
      <p className="text-sm md:text-base font-normal line leading-8 mt-2 flex-wrap inline-flex">
        {desc}
      </p>
    </div>
  );
};

const BunchFeatures = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-between md:flex-row gap-7">
      {features.map((feat, i) => (
        <Feature key={feat.title + i} src={feat.image} title={feat.title} desc={feat.desc} />
      ))}
    </div>
  );
};

export default BunchFeatures;
