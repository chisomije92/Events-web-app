import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../helpers/api-utils";

const AllEventsPage = (props) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={props.allEvents} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      allEvents: events,
    },
    revalidate: 100,
  };
}

export default AllEventsPage;
