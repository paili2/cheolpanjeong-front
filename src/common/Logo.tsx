import Link from "next/link";

type LogoProps = {
  className?: string;
};
const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <h1 className={`text-5xl text-white ${className}`}>철판정</h1>
    </Link>
  );
};

export default Logo;
