import React from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Header from '../components/Header';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';
import CustomText from '../components/CustomText';
import HeaderSecondary from '../components/HeaderSecondary';

const SettingItem = ({ text, icon }) => {
	return (
		<TouchableOpacity>
			<View style={styles.item}>
				<View style={styles.leftSide}>
					{text === 'Logout' ? (
						<>
							<Feather
								name={icon}
								style={{
									...styles.icon,
									color: colors.common.REMOVE,
								}}
							/>
							<CustomText
								style={{
									...styles.text,
									color: colors.common.REMOVE,
								}}
							>
								{text}
							</CustomText>
						</>
					) : (
						<>
							<Feather name={icon} style={styles.icon} />
							<CustomText style={styles.text}>{text}</CustomText>
						</>
					)}
				</View>
				{text !== 'Logout' ? (
					<MaterialIcons
						name="arrow-forward-ios"
						style={styles.arrow}
					/>
				) : (
					<></>
				)}
			</View>
		</TouchableOpacity>
	);
};

const SettingScreen = ({ navigation }) => {
	const settings = {
		Orders: 'coffee',
		'Edit account': 'edit',
		'Rate us': 'star',
		Logout: 'log-out',
	};
	return (
		<View style={{ flex: 1 }}>
			<HeaderSecondary text="Account" navigation={navigation} stack />
			<View style={styles.acc}>
				<CustomText
					style={{ fontSize: 25, color: colors.common.TEXT2 }}
				>
					Michal Pozdal
				</CustomText>
				<CustomText
					style={{
						fontSize: 15,
						color: colors.common.DETAILS,
					}}
				>
					skav3@wp.pl
				</CustomText>
			</View>
			{Object.keys(settings).map((text) => (
				<SettingItem text={text} icon={settings[text]} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		display: 'flex',
	},
	acc: {
		height: 150,
		gap: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},

	item: {
		alignSelf: 'center',
		height: 80,
		display: 'flex',
		marginTop: 10,
		padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '90%',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: colors.common.DETAILS,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	leftSide: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrow: {
		fontSize: 30,
		color: colors.common.TEXT2,
	},
	icon: {
		fontSize: 30,
		color: colors.common.TEXT2,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.common.TEXT2,
		marginLeft: 10,
	},
});

export default SettingScreen;
