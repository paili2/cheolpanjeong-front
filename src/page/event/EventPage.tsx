import SectionLayout from "@/src/common/SectionLayout";
import Search from "../../common/components/Search";
import EventCard from "./subComponents/EventCard";
import ListHeader from "@/src/common/components/ListHeader";

const EventPage = () => {
  return (
    <section>
      <SectionLayout
        height="h-fit"
        className="pb-[200px] flex flex-col items-center justify-center"
      >
        <ListHeader title={"이벤트"}></ListHeader>
        <div className="w-full grid grid-cols-3 gap-10 pt-15">
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </div>
      </SectionLayout>
    </section>
  );
};

export default EventPage;
