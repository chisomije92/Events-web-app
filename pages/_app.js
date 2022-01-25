import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import Notification from "../components/UI/notification";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Events For You</title>
        <meta
          name="viewport"
          contents="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <Notification title="Test" message="This is a test" status="pending" />
    </Layout>
  );
}

export default MyApp;
