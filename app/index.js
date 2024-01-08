import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.white,
					},
					headerShadowVisible: false,
					headerLeft: () => {
						return <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />;
					},
					headerRight: () => {
						return <ScreenHeaderBtn iconUrl={icons.profile} dimensions="100%" />;
					},
					headerTitle: "",
				}}
			/>
			<Text>Helloo</Text>
		</SafeAreaView>
	);
};

export default Home;
