import Link from "next/link";

type menuButtonProps = {
  menu: string;
  link: string;
};

const MenuButton = ({ menu, link }: menuButtonProps) => {
  return (
    <li>
      <Link className="text-xl text-white" href={link}>
        {menu}
      </Link>
    </li>
  );
};

export default MenuButton;
