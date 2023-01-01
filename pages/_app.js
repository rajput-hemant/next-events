import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";

export default function App({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Head>
					<title>Next Events</title>
					<meta
						name="description"
						content="Practice project for NextJS course by Academind"
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}
