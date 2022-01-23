import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/error-alert";
import { getFilteredEvents } from "../../helpers/api-utils";

const FilteredEventsPage = (props) => {
  const router = useRouter();

  const filteredData = router.query.slug;

  const { hasError, events } = props;

  const { year, month } = props.date;

  const headData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`Events listed for ${month}-${year}`} />
    </Head>
  );

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  if (hasError) {
    return (
      <Fragment>
        {headData}
        <ErrorAlert>
          <p>Values are Invalid. Please enter valid values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Display All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {headData}
        <ErrorAlert>
          <p>Events unavailable for said period</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Display All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <Fragment>
      {headData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;
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
    return {
      props: { hasError: true },
      //   notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
export default FilteredEventsPage;
