import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="w-[300px] flex items-center gap-2 border-1 rounded-4xl py-3 px-5">
      <select className="outline-0 w-1/4 cursor-pointer" name="" id="">
        <option value="">제목</option>
        <option value="">내용</option>
        <option value="">제목+내용</option>
      </select>
      <div>
        <input className="outline-0 w-full" type="text" />
      </div>
      <MdSearch className="text-2xl cursor-pointer hover:text-[#FF291E] transition-all duration-150" />
    </div>
  );
};

export default Search;
