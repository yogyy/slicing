import Strip from '../layouts/Strip';

const SectionThree = () => {
  return (
    <section className="flex flex-col justify-between gap-8 text-white bg-primary py-14 lg:py-28 xl:flex-row">
      <div>
        <Strip border="white" variant="white">
          BUKU INI UNTUK SIAPA
        </Strip>
        <h1 className="text-2xl lg:text-4xl">Kata Pengantar Dari Penulis Buku</h1>
        <div className="flex h-[50px] gap-5 mt-10 lg:mt-20">
          <img src="/author.png" className="w-[50px] h-[50px] rounded-full" alt="author" />
          <div className="relative h-[90%]">
            <p className="text-lg font-medium">Muhamad Nauval Azhar</p>
            <p className="text-xs">@mhdnauvalazhar</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[674px]">
        <p className="text-base leading-7 lg:text-lg lg:leading-10">
          "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan
          tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan
          membutuhkan waktu yang lebih lama ketika membangun sebuah website dengan utility-first
          framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus memikirkan desain
          dan mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat
          manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat
          mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai
          dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku
          ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer,
          memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website
          sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill."
        </p>
      </div>
    </section>
  );
};

export default SectionThree;
