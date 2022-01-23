import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Featured Events</title>
        <meta
          name="description"
          content="Browse through a list of featured events for your convenience"
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
