import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={styles.viewOneStyle}></View>
			<View style={styles.viewTwoStyle}></View>
			<View style={styles.viewThreeStyle}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		height: 200,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	viewOneStyle: {
		height: 50,
		width: 100,
		borderWidth: 3,
		borderColor: 'violet',
	},
	viewTwoStyle: {
		height: 50,
		width: 100,
		borderWidth: 3,
		borderColor: 'green',
		marginTop: 50,
	},
	viewThreeStyle: {
		height: 50,
		width: 100,
		borderWidth: 3,
		borderColor: 'blue',
	},
});

export default BoxScreen;
