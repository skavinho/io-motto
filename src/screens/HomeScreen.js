import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import Header from '../components/Header';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<Header navigation={navigation} />
			<ScrollView
				style={styles.main}
				showsVerticalScrollIndicator={false}
			>
				<Baner />
				<PrevOrders navigation={navigation} />
				<TopSelling navigation={navigation} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginBottom: 110,
	},
});

export default HomeScreen;
