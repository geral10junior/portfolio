import { DashedBox } from "./DashedBox";
import DownloadIcon from "./img/download.svg";
import CurriculoFile from "./img/GeraldezRibeiro_CV.pdf";

const DownloadPDF = () => {
  return (
    <div className="mx-auto w-fit">
      <DashedBox className="flex">
        <a
          className="flex gap-2 items-center font-mono py-3 px-6"
          download="GeraldezRibeiro_CV.pdf"
          href={CurriculoFile}
        >
          Baixar CV <img src={DownloadIcon} alt="" />
        </a>
      </DashedBox>
    </div>
  );
};

export default DownloadPDF;
