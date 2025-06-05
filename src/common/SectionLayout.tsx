import { Children, ReactNode } from "react";

type sectionLayout = {
  children: ReactNode;
  className?: string;
  height?: string;
  paddingTop?: string;
};

const SectionLayout = ({
  children,
  className,
  height = "h-[100%]",
  paddingTop = "pt-[200px]",
}: sectionLayout) => {
  return (
    <section
      className={`w-full max-w-7xl mx-auto ${height} ${paddingTop} ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
