import developerImg from "@/assets/images/developer-large-image.jpeg";

import Image from "next/image";
// width: 100%;
// height: ;
export const About = () => {
  return (
    <section className="relative centered py-y-default" id="about-me__section">
      <div className="content-width flex gap-7 largex:flex-col">
        <figure className="">
          <Image
            className="block min-w-[16.875rem] w-[30vw] max-w-[30rem] min-h-[16.875rem] h-full max-h-[30rem] border-solid border-4 border-gray-100 medium:w-full medium:h-[18.75rem] "
            src={developerImg}
            alt="Foto do desenvolvedor: Gabriel Santos"
          />
        </figure>

        <div className="w-full flex flex-col justify-between items-start gap-10 ">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-2">
              <span className="text-highlight font-black">Discover</span>

              <h2 className="title-2">
                <span className="border-bottom">
                  Sob
                </span>
                re mim
              </h2>
            </div>

            <p className="text-base">
              Sou Desenvolvedor Front End a 2 anos com experiência em projetos
              pessoais e freelancer, atualmente estou me especializando nas
              tecnologias: TypeScript e NextJS. Como profissional valorizo o
              trabalho em equipe pois assim é possível expandir meus horizontes.
              Tenho a meta de me tornar um desenvolvedor FullStack excepcional,
              contribuindo para projetos inovadores que impactem positivamente a
              vida das pessoas.
            </p>
          </div>

          <button
            className="text-sm	 bg-highlight p-2 rounded-md"
            aria-label="Botão para baixar o curriculo de Gabriel Santos"
          >
            <a
              href="./CV Desenvolvedor Gabriel Silva.pdf"
              download="CV Desenvolvedor: Gabriel Santos"
            >
              Baixar Currículo
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
