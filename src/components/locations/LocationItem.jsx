import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 16,
		paddingBottom: 8,
		paddingTop: 8,
		backgroundColor: "#333",
		borderRadius: 5,
	},
	title: {
		fontWeight: "bold",
		color: "#fff",
		paddingBottom: 8,
		paddingTop: 8,
		textAlign: "center",
		backgroundColor: "#555",
		borderRadius: 5,
		fontSize: 20,
		marginBottom: 8,
	},
	subtitle: {
		color: "#aaf",
		fontSize: 14,
		lineHeight: 18,
	},
	image: {
		width: "100%",
		height: 100,
		borderRadius: 50,
		marginBottom: 8,
	},
});

export default function LocationItem(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.name}</Text>
			<Image style={styles.image} source={{ uri: props.photo }} />
			<Text style={styles.subtitle}>{props.description.slice(0, 150)}</Text>
		</View>
	);
}
