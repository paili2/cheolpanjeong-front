import Checker from "./Checker";

type TermsAgreementProps = {
  title: string;
  description: string;
};
const TermsAgreement = ({ title, description }: TermsAgreementProps) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Checker />
        <strong>[필수]</strong>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="w-full h-[100px] border border-[#ccc] pt-0.5 overflow-y-auto break-words">
        {description}
      </div>
    </>
  );
};

export default TermsAgreement;
