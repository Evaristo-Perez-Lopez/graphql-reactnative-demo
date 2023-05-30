import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import LocationList from '../components/locations/LocationList';
import Constants from "expo-constants";
const styles = StyleSheet.create({
	appBar: {
		backgroundColor: "#ff5733",
		padding: 16,
		width: "100%",
		marginBottom: 16,
	},
	appName: {
		color: "#ffe5b4",
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "sans-serif",
	},
});
export const LocationsScreen = () => {
	return (
		<>
			<ScrollView
				style={{
					marginTop: Constants.statusBarHeight,
					flexGrow: 1,
					height: "auto",
				}}>
				<LocationList />
			</ScrollView>
		</>
	);
}
