const links = [
  { title: 'PRODUCTS', items: ['Course', 'Books', 'Freebis', 'Classes'] },
  {
    title: 'COMPANY',
    items: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Help'],
  },
  { title: 'GET IN TOUCH', items: ['Twitter', 'Facebook', 'Dribble'] },
];

const Footer = () => {
  return (
    <footer className="bg-[#272D3E]">
      <div className="py-12 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-white text-xl lg:text-[26px] font-medium leading-10">
            Sudah siap meningkatkan skill kamu?
          </h1>
          <p className="text-white/80 text-base lg:text-lg font-medium leading-8 mt-2.5">
            Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas{' '}
            <br className="hidden lg:block" /> pertanyaan kamu di halaman bantuan.
          </p>
        </div>
        <div className="flex-1 flex text-[#F4F7FF] gap-7 justify-center md:justify-end items-center w-full">
          <button
            type="button"
            className="text-inherit py-4 lg:py-6 px-6 lg:px-11 rounded-[10px] flex justify-center items-center font-bold text-base bg-white/5"
          >
            Pusat Bantuan
          </button>
          <button
            type="button"
            className="text-inherit py-4 lg:py-6 px-6 lg:px-11 rounded-[10px] flex justify-center items-center font-bold text-base bg-primary"
          >
            Mendaftar
          </button>
        </div>
      </div>
      <div className="py-12 flex flex-col lg:flex-row gap-7">
        <div className="flex-1 flex flex-col gap-[15px] logo">
          <a href="#home" className="w-fit">
            <img src="/Malaka.svg" alt="logo" />
          </a>
          <a href="#home" className="font-bold text-white text-lg w-fit">
            The Malaka
          </a>
          <p className="text-white/80 text-base leading-7">
            Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia, mulai dari
            pengembangan hingga desain grafis.
          </p>
        </div>

        <div className="flex-1 flex gap-7">
          {links.map((link) => (
            <div key={link.title} className="text-white/60 w-full">
              <p className="text-sm md:text-base">{link.title}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {link.items.map((item) => (
                  <li key={item} className="text-sm md:text-base">
                    <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
