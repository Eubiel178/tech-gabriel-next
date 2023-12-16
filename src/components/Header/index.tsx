import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="bg-secondary py-9 px-5 centered">
      <div className="content-width flex justify-between items-center content-width">
        <h1 className="title-1 ">
          G<span className="text-highlight">abriel</span>
        </h1>

        <NavBar />
      </div>
    </header>
  );
};
