import banner from "@/assets/images/banner.jpeg";
import developer from "@/assets/images/developer.png";
import Image from "next/image";

export const DeveloperInfo = () => {
  return (
    <section className="relative centered bg-shadow h-[37rem]">
      <Image
        className="absolute top-0 h-full z-[-1] content-width"
        src={banner}
        alt="banner"
      />

      <div className="container-config content-width items-center z-10">
        <Image
          className="border-solid border-4 border-gray-100 rounded-full h-44 w-44"
          src={developer}
          alt="Foto do desenvolvedor: Gabriel Santos"
        />

        <div className="text-center">
          <h2 className="title-2 text-highlight">Gabriel Santos</h2>

          <p>Desenvolvedor Front end</p>
        </div>
      </div>
    </section>
  );
};
