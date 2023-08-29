import { Check, X } from 'lucide-react';

const pricelists = [
  {
    package: 'Buku Digital',
    price: 'Rp100.000',
    features: [
      { name: 'Buku Lengkap', got: true },
      { name: 'Akses secara digital', got: true },
      { name: 'Buku Fisik', got: false },
      { name: 'Mendapat pembaruan', got: true },
      { name: 'Konsultasi', got: true },
      { name: 'Dapat diunduh', got: true },
    ],
    key: 'barry',
  },
  {
    package: 'Buku Fisik',
    price: 'Rp185.000',
    features: [
      { name: 'Buku Lengkap', got: true },
      { name: 'Akses secara digital', got: false },
      { name: 'Buku Fisik', got: true },
      { name: 'Mendapat pembaruan', got: false },
      { name: 'Konsultasi', got: true },
      { name: 'Dapat diunduh', got: true },
    ],
    key: 'bruce',
  },
  {
    package: 'Buku Digital',
    price: 'Rp250.000',
    features: [
      { name: 'Buku Lengkap', got: true },
      { name: 'Akses secara digital', got: true },
      { name: 'Buku Fisik', got: true },
      { name: 'Mendapat pembaruan', got: true },
      { name: 'Konsultasi', got: true },
      { name: 'Dapat diunduh', got: true },
    ],
    key: 'clark',
  },
];

const Get = () => {
  return (
    <div className="w-5 h-5 bg-[#20D27D] rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
      <Check className="w-2.5 h-2.5 text-white" />
    </div>
  );
};

const Not = () => {
  return (
    <div className="w-5 h-5 bg-[#F52E52] rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
      <X className="w-2.5 h-2.5 text-white" />
    </div>
  );
};

const Prices = () => {
  return (
    <div className="flex gap-8 justify-center flex-wrap">
      {pricelists.map((price) => (
        <div
          key={price.key}
          className="p-7 lg:p-14 bg-white rounded-lg min-w-[306px] flex-col justify-start items-start inline-flex text-[#001533]"
        >
          <p className="text-primary font-semibold">{price.package}</p>
          <h1 className="text-2xl font-semibold mt-2.5">{price.price}</h1>
          <ul className="flex flex-col gap-5 mt-7">
            {price.features.map((feat) => (
              <li key={feat.name} className="flex gap-2.5">
                {feat.got === true ? <Get /> : <Not />}
                {feat.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Prices;
