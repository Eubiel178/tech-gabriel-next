export const NavBar = () => {
  return (
    <nav className="large:hidden ">
      <menu className="flex justify-between items-center gap-5 text-xs">
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
