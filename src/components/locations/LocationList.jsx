import React from "react";
import { useQuery, gql } from "@apollo/client";
import { View, Text, FlatList, StyleSheet } from "react-native";
import LocationItem from "./LocationItem";

const GET_LOCATIONS = gql`
	query getLocations {
		locations {
			id
			name
			photo
			description
		}
	}
`;

const styles = StyleSheet.create({
	wrapper: {
		padding: 16,
		height: "100%",
	}
});

export default function LocationList() {
	const { loading, error, data } = useQuery(GET_LOCATIONS);
	console.log(data);
	if (loading)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	if (error)
		return (
			<View>
				<Text>Error : </Text>
			</View>
		);
	return (
		// <View style={styles.wrapper}>
			<FlatList
				data={data.locations}
				ItemSeparatorComponent={() => <Text></Text>}
				renderItem={({ item }) => (
					<LocationItem key={item.id} {...item} />
				)}></FlatList>
		// </View>
	);
}
