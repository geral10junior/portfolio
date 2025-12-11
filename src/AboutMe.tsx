import React from "react";
import Range from "./img/range-1.svg";
import CvImage from "./img/cv.svg";
import DownloadPDF from "./DownloadPDF";

const AboutMe = () => {
  return (
    <div>
      <img className="container-range mt-24" src={Range} alt="" />
      <div className="container flex max-lg:flex-col gap-28 mt-20 lg:32">
        <div
          id="sobre"
          className="text-gray-200 max-w-[800px] flex flex-col justify-center gap-8 lg:gap-12"
        >
          <h1 className="whitespace-nowrap lg:text-7xl text-5xl font-mono text-center">
            Sobre mim
          </h1>
          <p className="text-center max-xl:text-[16px] max-w-[800px]  text-neutral-400 font-sans">
            Me chamo <strong> Geraldez Ribeiro</strong>, acadêmico de
            <strong> Ciência da Computação</strong> na Universidade Estadual da
            Paraíba ( <strong>UEPB</strong>). Minha jornada na tecnologia é
            movida pela busca do <strong>equilíbrio</strong> perfeito entre
            <strong> funcionalidade</strong> e <strong>estética</strong>. <br />
            Atualmente, atuo como <strong>Diretor</strong> de
            <strong> UI/UX</strong> em uma <strong>Empresa Júnior</strong> de
            <strong> desenvolvimento web</strong>. Nessa função, não apenas
            <strong> lidero</strong> a criação de interfaces, mas vivencio a
            prática do <strong>mercado:</strong>
            <strong> gerencio projetos</strong>,
            <strong> colaboro com times de desenvolvimento</strong> e
            <strong> entrego soluções digitais para clientes reais</strong>.
            Essa experiência prática me ensinou que um
            <strong> bom código</strong> precisa de um
            <strong> design intuitivo</strong> para ser verdadeiramente
            <strong> útil</strong>.
          </p>
          <DownloadPDF />
        </div>
        <div className="flex lg:min-w-[400px] max-lg:justify-center justify-end">
          <img src={CvImage} alt="Currículo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
