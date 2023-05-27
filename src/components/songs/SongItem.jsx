import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
	container: {
		padding: 16,
		paddingBottom: 5,
		paddingTop: 5,
		backgroundColor: "#333",
	},
	bold: {
		fontWeight: "bold",
		color: "#fff",
	},
	subtitle: {
		color: "#aaafff",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	}
});
export default function SongItem(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.bold}>Title: {props.title} </Text>
			<Text style={styles.subtitle}>Artist: {props.artist}</Text>
			<Image style={styles.image} source={{ uri: props.cover }} />
		</View>
	);
}
