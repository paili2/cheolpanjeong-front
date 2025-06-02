import SectionLayout from "@/src/common/SectionLayout";
import Search from "../../common/components/Search";
import ListHeader from "@/src/common/components/ListHeader";
import ListTitle from "./subComponents/ListTitle";
import List from "./subComponents/List";

const NoticePage = () => {
  return (
    <section>
      <SectionLayout
        height="h-fit"
        className="pb-[200px] flex flex-col items-center justify-center"
      >
        <ListHeader title={"공지사항"}></ListHeader>
        <ListTitle></ListTitle>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
      </SectionLayout>
    </section>
  );
};

export default NoticePage;
