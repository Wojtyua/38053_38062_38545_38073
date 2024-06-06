import { MdNoFood } from "react-icons/md";
import { TbNumbers } from "react-icons/tb";
import { IoIosHappy } from "react-icons/io";

const Featured = () => {
  return (
    <section id="about">
      <h2 className="text-4xl capitalize font-bold mb-10">
        dowiedz się wiecej
      </h2>
      <div className="grid grid-cols-3 gap-5 ">
        <div className="bg-backgroundDarker rounded-xl px-10 py-8">
          <div className="flex justify-center mb-8">
            <MdNoFood size={64} />
          </div>
          <div className="text-[#3f413e]  flex flex-col items-center">
            <h3 className="text-xl relative font-medium mb-4 after:content-[''] after:absolute after:bg-secondary after:w-full after:h-2 after:-bottom-1 after:left-0">
              Wybierz produkt
            </h3>

            <p className="leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iusto tenetur corrupti omnis voluptas
            </p>
          </div>
        </div>
        <div className="bg-backgroundDarker rounded-xl px-10 py-8">
          <div className="flex justify-center mb-8">
            <TbNumbers size={64} />
          </div>
          <div className="text-[#3f413e] flex flex-col items-center">
            <h3 className="text-xl relative font-medium mb-4 after:content-[''] after:absolute after:bg-secondary after:w-full after:h-2 after:-bottom-1 after:left-0">
              Podaj ilość
            </h3>

            <p className="leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iusto tenetur corrupti omnis voluptas
            </p>
          </div>
        </div>
        <div className="bg-backgroundDarker rounded-xl px-10 py-8">
          <div className="flex justify-center mb-8">
            <IoIosHappy size={64} />
          </div>
          <div className="text-[#3f413e] flex flex-col items-center">
            <h3 className="text-xl relative font-medium mb-4 after:content-[''] after:absolute after:bg-secondary after:w-full after:h-2 after:-bottom-1 after:left-0">
              Oblicz kalorie
            </h3>

            <p className="leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iusto tenetur corrupti omnis voluptas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
