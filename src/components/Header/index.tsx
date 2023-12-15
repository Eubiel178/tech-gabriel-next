import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="bg-secondary py-9 px-5 flex justify-between items-center">
      <h1 className="text-2xl font-black">
        G<span className="text-highlight">abriel</span>
      </h1>

      <NavBar />
    </header>
  );
};
