"use client";

import SectionLayout from "@/src/common/SectionLayout";
import EventCard from "./components/EventCard";
import ListHeader from "@/src/common/components/ListHeader";
import ShortcutButton from "@/src/common/components/ShortcutButton";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const EventPage = () => {
  const [viewCount, setViewCount] = useState<number>(6);
  const event = Array(13).fill(0);

  return (
    <section>
      <SectionLayout
        height="h-fit"
        className="pb-[200px] flex flex-col items-center justify-center"
      >
        <ListHeader title={"이벤트"}></ListHeader>
        <div className="w-full grid grid-cols-3 gap-x-10 gap-y-15 pt-15">
          {event.slice(0, viewCount).map((v, i) => {
            return <EventCard key={i}></EventCard>;
          })}
        </div>
        {event.length > viewCount ? (
          <ShortcutButton
            onMouseDown={() => setViewCount((prev) => prev + 6)}
            className="mt-[100px]"
            hoverBg="[#FF291E]"
            text="더 보기"
          >
            <FaArrowDown />
          </ShortcutButton>
        ) : null}
      </SectionLayout>
    </section>
  );
};

export default EventPage;
