import {
	Text,
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import SongList from "./songs/SongList";
import LocationList from "./locations/LocationList";

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
	}
});



export default function Main() {
	return (
		<ScrollView
			style={{
				marginTop: Constants.statusBarHeight,
				flexGrow: 1,
				height: "auto",
			}}>
			{/* <SongList /> */}
			<View style={styles.appBar}>
				<Text style={styles.appName}>Demo Fox - ReactNative</Text>
			</View>
			<LocationList />
		</ScrollView>
	);
}
