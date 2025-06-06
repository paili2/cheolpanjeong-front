import SectionLayout from "@/src/common/SectionLayout";
import Search from "../../common/components/Search";
import ListHeader from "@/src/common/components/ListHeader";
import ListTitle from "./components/ListTitle";
import List from "./components/List";

const NoticePage = () => {
  const postlist = Array(5).fill(0);

  return (
    <section>
      <SectionLayout
        height="h-fit"
        className="pb-[200px] flex flex-col items-center justify-center"
      >
        <ListHeader title={"공지사항"}></ListHeader>
        <ListTitle></ListTitle>
        {postlist.map((post, i) => (
          <List key={i}></List>
        ))}
      </SectionLayout>
    </section>
  );
};

export default NoticePage;
