import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.welcome}>
				<Text style={styles.welcomeText}>HomeScreen</Text>
			</View>
			<View style={styles.actionContainer}>
				<Button
					title="Go to Locations"
					onPress={() => navigation.push("Locations")}
				/>
				<Button
					title="Go to ReadQrCodes"
					onPress={() => navigation.push("QrCodes")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
		alignContent: "space-between",
		justifyContent: "space-between",
	},
	welcome: {
		alignSelf: "stretch",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "skyblue",
		height: 200,
		borderRadius: 10,
	},
	welcomeText: {
		fontSize: 30,
		color: "#fff",
		fontWeight: "bold",
	},
	actionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
