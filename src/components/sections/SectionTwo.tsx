import BunchFeatures from '../layouts/Feature';
import Strip from '../layouts/Strip';

const SectionTwo = () => {
  return (
    <section className="text-[#272D3E]">
      <div className="py-20 lg:py-[12rem] flex flex-col gap-8 lg:gap-[5.25rem]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
          <div>
            <Strip border="primary" variant="primary">
              BUKU INI UNTUK SIAPA
            </Strip>
            <h1 className="text-xl lg:text-3xl font-medium leading-normal lg:leading-[3rem] mt-2 inline-flex items-end">
              Buku yang cocok dibaca untuk <br className="hidden md:block" /> front-end dan
              back-end,
              <br /> bahkan UI designer!
            </h1>
          </div>
          <p className="inline-flex items-end text-base lg:text-lg">
            Buku ini bukan hanya untuk front-end developer yang ingin
            <br className="hidden md:block" /> meningkatkan skill, buku ini juga cocok untuk
            back-end developer <br className="hidden md:block" /> dan UI designer agar dapat menulis
            style tanpa harus menulis kode <br className="hidden md:block" /> CSS dan tanpa
            mengandalkan front-end developer!
          </p>
        </div>
        <div>
          <BunchFeatures />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
