import Logo from "./img/logo.png";
import { DashedBox } from "./DashedBox";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8">
      <nav className="container flex items-center justify-between">
        <img src={Logo} width="64" height="62" alt="Logo" />

        <ul className="flex text-gray-200 gap-4 p-2">
          <DashedBox>
            <a href="#home" className="text-white font-mono text-lg">
              Home
            </a>
          </DashedBox>

          <DashedBox>
            <a href="#sobre" className="text-white font-mono text-lg">
              Sobre
            </a>
          </DashedBox>
          <DashedBox>
            <a href="#projetos" className="text-white font-mono text-lg">
              Projetos
            </a>
          </DashedBox>

          <DashedBox>
            <a href="#contato" className="text-white font-mono text-lg">
              Contato
            </a>
          </DashedBox>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
