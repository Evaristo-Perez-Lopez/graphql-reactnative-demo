import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "./../../../data/songs.json";
import SongItem from "./SongItem";


const styles = StyleSheet.create({
	wrapper: {
		padding: 16,
		height: "100%",
	},
});

function SongList() {
	return (
		// <View style={styles.wrapper}>
			<FlatList
				data={data.songs}
				ItemSeparatorComponent={() => <Text> </Text>}
				renderItem={({ item: song }) => (
					<SongItem key={song} {...song} />
				)}></FlatList>
		// </View>
	);
}

export default SongList;
