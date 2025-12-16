import Logo from "./img/logo.png";
import { DashedBox } from "./DashedBox";
import React from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 py-8 bg-neutral-900">
      <div className="container flex items-center justify-between">
        <a href="./" className="relative z-0">
          <img src={Logo} width="64" height="62" alt="Logo - Lupa" />
        </a>

        <nav
          id="mobile-menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:block text-gray-200 max-lg:fixed max-lg:inset-0 max-lg:w-full items-center`}
        >
          {isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed z-40 inset-0 bg-neutral-950/70 backdrop-blur-md lg:hidden"
            ></div>
          )}

          <ul className="lg:flex max-lg:divide-y-2 max-lg:divide-white/10 lg:flex-wrap z-50 max-lg:absolute lg:gap-4 p-2 max-lg:p-8 max-lg:w-full text-2xl lg:text-xl *:*:text-center">
            <li className="lg:hidden block ">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="max-lg:hover:bg-white/10 text-white font-mono text-lg p-4 block"
              >
                Home
              </a>
            </li>
            <li className="lg:hidden block">
              <a
                href="#sobre"
                onClick={() => setIsMenuOpen(false)}
                className="max-lg:hover:bg-white/10 text-white font-mono text-lg p-4 block"
              >
                Sobre
              </a>
            </li>
            <li className="lg:hidden block">
              <a
                href="#projetos"
                onClick={() => setIsMenuOpen(false)}
                className="max-lg:hover:bg-white/10 text-white font-mono text-lg p-4 block"
              >
                Projetos
              </a>
            </li>
            <li className="lg:hidden block">
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="max-lg:hover:bg-white/10 text-white font-mono text-lg p-4 block"
              >
                Contato
              </a>
            </li>
            <DashedBox className="max-lg:hidden">
              <a
                href="#home"
                className="text-white font-mono text-lg block py-3 px-6"
              >
                Home
              </a>
            </DashedBox>

            <DashedBox className="max-lg:hidden">
              <a
                href="#sobre"
                className="text-white font-mono text-lg block py-3 px-6"
              >
                Sobre
              </a>
            </DashedBox>
            <DashedBox className="max-lg:hidden">
              <a
                href="#projetos"
                className="text-white font-mono text-lg block py-3 px-6"
              >
                Projetos
              </a>
            </DashedBox>

            <DashedBox className="max-lg:hidden">
              <a
                href="#contato"
                className="text-white font-mono text-lg block py-3 px-6"
              >
                Contato
              </a>
            </DashedBox>
          </ul>
        </nav>

        <button
          id="mobile-button"
          className="lg:hidden flex cursor-pointer group text-gray-200 items-center gap-4 border border-neutral-600 py-2 px-3 rounded-md relative z-50"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Menu
          <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-b-md *:bg-gray-200 transition-colors *:group-hover:bg-red-600">
            <span
              className={
                isMenuOpen
                  ? "rotate-45 translate-y-1.5 transition-transform"
                  : "transition-transform"
              }
            ></span>
            <span
              className={isMenuOpen ? "opacity-0" : "transition-opacity"}
            ></span>
            <span
              className={
                isMenuOpen
                  ? "-rotate-45 -translate-y-1 transition-transform"
                  : "transition-transform"
              }
            ></span>
          </span>
        </button>
      </div>
    </header>
  );
};
export default Header;
