const Navigasi = [
  { href: '#top', label: 'Top' },
  { href: '#', label: 'To Everyone' },
  { href: '#benefit', label: 'Benefit' },
  { href: '#preview', label: 'Preview' },
  { href: '#penulis', label: 'Penulis' },
];

const Navbar = () => {
  return (
    <header className="absolute top-0 z-20 flex items-center justify-between w-full py-4 lg:py-6 xl:py-14">
      <div className="flex items-center gap-2 logo hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-14 md:h-14"
          viewBox="0 0 50 51"
          fill="none"
        >
          <rect y="0.5" width="50" height="50" rx="25" fill="#00BAC7" />
          <path
            d="M24.918 28.994L29.076 18.5H34.332V19.22C33.936 19.22 33.612 19.262 33.36 19.346C33.12 19.418 32.934 19.556 32.802 19.76C32.67 19.964 32.58 20.246 32.532 20.606C32.496 20.954 32.478 21.398 32.478 21.938V28.922C32.478 29.522 32.502 29.996 32.55 30.344C32.598 30.692 32.694 30.962 32.838 31.154C32.982 31.346 33.186 31.472 33.45 31.532C33.726 31.592 34.086 31.628 34.53 31.64V32.36H27.762V31.64C28.206 31.628 28.56 31.592 28.824 31.532C29.1 31.46 29.31 31.334 29.454 31.154C29.61 30.974 29.712 30.722 29.76 30.398C29.808 30.062 29.832 29.612 29.832 29.048V20.624H29.742L24.9 32.54H23.568L18.564 20.624H18.492V28.922C18.492 29.522 18.516 29.996 18.564 30.344C18.612 30.692 18.708 30.962 18.852 31.154C18.996 31.346 19.2 31.472 19.464 31.532C19.74 31.592 20.1 31.628 20.544 31.64V32.36H15V31.64C15.444 31.628 15.804 31.592 16.08 31.532C16.356 31.46 16.566 31.334 16.71 31.154C16.866 30.974 16.968 30.722 17.016 30.398C17.064 30.062 17.088 29.612 17.088 29.048V21.812C17.088 21.308 17.064 20.888 17.016 20.552C16.968 20.216 16.878 19.952 16.746 19.76C16.614 19.556 16.422 19.418 16.17 19.346C15.93 19.262 15.606 19.22 15.198 19.22V18.5H20.652L24.846 28.994H24.918Z"
            fill="white"
          />
        </svg>
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
        <button className="py-1.5 md:py-2.5 text-base md:text-md px-4 md:px-7 font-bold text-[#272D3E] bg-white rounded-3xl hover:bg-white/70">
          Download
        </button>
      </div>
    </header>
  );
};

export default Navbar;
