import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Events For You</title>
          <meta
            name="viewport"
            contents="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
