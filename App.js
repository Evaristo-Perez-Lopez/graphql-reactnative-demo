import React from "react";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider, gql } from "@apollo/client";
import apolloClient from "./src/utils/apolloClient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { LocationsScreen } from "./src/screens/LocationsScreen";
import { ReadQrCodeScreen } from "./src/screens/ReadQrCode.Screen";
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<ApolloProvider client={apolloClient}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{ headerTitle: "HomeScreen" }}
						/>
						<Stack.Screen name="Locations" component={LocationsScreen} />
						<Stack.Screen name="QrCodes" component={ReadQrCodeScreen} />
					</Stack.Navigator>
				</NavigationContainer>
				<StatusBar style="auto" />
			</ApolloProvider>
		</>
	);
}
