import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ComponentsScreen = () => {
	const name = 'Ignas';

	return (
		<View>
			<Text style={styles.header}>Getting started with react native!</Text>
			<Text style={styles.subHeader}>Hi my name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 45,
	},
	subHeader: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
