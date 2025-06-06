import { Children, ReactNode } from "react";

type sectionLayout = {
  children: ReactNode;
  className?: string;
  height?: string;
  paddingTop?: string;
  maxWidth?: string;
};

const SectionLayout = ({
  children,
  className,
  height = "h-[100%]",
  paddingTop = "pt-[200px]",
  maxWidth = "max-w-7xl",
}: sectionLayout) => {
  return (
    <section
      className={`w-full ${maxWidth} mx-auto ${height} ${paddingTop} ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
