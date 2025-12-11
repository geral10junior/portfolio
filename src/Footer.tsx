import React from "react";
import Range from "./img/range-2.svg";

const Footer = () => {
  return (
    <div className="mt-40">
      <p className="font-sans text-neutral-400 text-center">
        Todos os direitos reservados. Geraldez Ribeiro.
      </p>
      <img className="container-range" src={Range} alt="" />
    </div>
  );
};

export default Footer;
