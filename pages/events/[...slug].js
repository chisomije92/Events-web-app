import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = (props) => {
  const router = useRouter();

  const filteredData = router.query.slug;

  console.log(filteredData);

  if (!filteredData) {
    return <p className="centered">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Values are Invalid. Please enter valid values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>Events unavailable for said period</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
