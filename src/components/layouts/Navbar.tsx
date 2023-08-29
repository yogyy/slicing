import { cn } from '@/lib/utils';

const Navigasi = [
  { href: '#top', label: 'Top' },
  { href: '#', label: 'To Everyone' },
  { href: '#benefit', label: 'Benefit' },
  { href: '#preview', label: 'Preview' },
  { href: '#penulis', label: 'Penulis' },
];

const Navbar = () => {
  return (
    <header
      className={cn(
        'relative z-20 flex items-center justify-between w-full py-4 lg:py-6 xl:py-14',
        '-mb-[72px] md:-mb-[88px] lg:-mb-[104px] xl:-mb-[168px]',
      )}
    >
      <div className="flex items-center gap-2 logo hover:cursor-pointer">
        <img src="/Malaka.svg" alt="logo" />
        <p className="text-base font-bold text-white xl:text-xl">The Malaka</p>
      </div>
      <nav className="hidden text-white/80 xl:block">
        <ul className="flex gap-12 text-lg">
          {Navigasi.map((navi, i) => (
            <li className="first:text-white" key={navi.href + i}>
              <a href={navi.href}>{navi.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="">
        <button
          type="button"
          className="py-1.5 md:py-2.5 text-base md:text-md px-4 md:px-7 font-bold text-[#272D3E] bg-white rounded-3xl hover:bg-white/70"
        >
          Download
        </button>
      </div>
    </header>
  );
};

export default Navbar;
