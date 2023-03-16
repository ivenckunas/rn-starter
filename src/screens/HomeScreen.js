import React from 'react';
import {Button} from 'react-native';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View>
			<Text style={styles.text}>HomeScreenas</Text>
			<Button
				style={styles.button}
				onPress={() => navigation.navigate('List')}
				title='List'
			/>
			<Button
				onPress={() => navigation.navigate('Components')}
				title='Components'
			></Button>
			<Button
				onPress={() => navigation.navigate('Image')}
				title='Images'
			></Button>
			<Button
				onPress={() => navigation.navigate('Counter')}
				title='Counter'
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
	button: {
		width: '50vw',
	},
});

export default HomeScreen;
