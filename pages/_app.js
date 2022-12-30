import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
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
	);
}
