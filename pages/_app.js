import React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme";

const MyApp = (props) => {
	const { Component, pageProps } = props;

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<style jsx global>{`
					body {
						background-color: ${theme.palette.primary.highlight};
					`}</style>

				<Head>
					<title>Weather - PK</title>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width"
					/>
				</Head>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default MyApp;
