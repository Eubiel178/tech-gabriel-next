import useModal from "@/hooks/useModal";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  const modal = useModal();

  return (
    <nav
      className={`flex justify-between items-center gap-5 ${
        modal.isOpen ? "bg-shadow absolute inset-0 z-20" : "block"
      }`}
    >
      <button
        className={`hidden text-2xl ${
          modal.isOpen ? "large:hidden" : "large:block"
        } `}
        onClick={modal.handleModal}
      >
        <GiHamburgerMenu />
      </button>

      <menu
        className={`flex justify-between items-center gap-5 text-xs ${
          modal.isOpen
            ? "bg-tertiary fixed top-8 right-3 z-30 flex-col w-44 py-7 shadow-sm"
            : "large:hidden"
        }`}
      >
        <li
          className={`absolute right-2 top-2  ${
            modal.isOpen ? "block" : "hidden"
          } `}
        >
          <button className="text-2xl" onClick={modal.handleModal}>
            <IoClose />
          </button>
        </li>

        <li className="p-2 duration-700 ease-in-out hover:bg-highlight rounded-lg 	">
          <a href="#about-me__section">Sobre mim</a>
        </li>

        <li className="p-2 duration-700 ease-in-out hover:bg-highlight rounded-lg 	">
          <a href="#skills__section">Habilidades</a>
        </li>

        <li className="p-2 duration-700 ease-in-out hover:bg-highlight rounded-lg 	">
          <a href="#projects__section">Projetos</a>
        </li>

        <li className="p-2 duration-700 ease-in-out hover:bg-highlight rounded-lg 	">
          <a href="#contact-forms__section">Contatos</a>
        </li>
      </menu>
    </nav>
  );
};
