import React from "react";
import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider, gql } from "@apollo/client";
import apolloClient from "./src/utils/apolloClient";


export default function App() {
	return (
		<>
			<ApolloProvider client={apolloClient}>
				<Main />
				<StatusBar style="auto" />
			</ApolloProvider>
		</>
	);
}
