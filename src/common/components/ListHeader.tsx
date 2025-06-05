import Search from "./Search";

type listHeaderProps = { title: string };

const ListHeader = ({ title }: listHeaderProps) => {
  return (
    <>
      <h2 className="text-5xl font-bold pb-25">{title}</h2>
      <div className="w-full flex justify-end border-b-4 border-[#FF291E] pb-10">
        <Search></Search>
      </div>
    </>
  );
};

export default ListHeader;
