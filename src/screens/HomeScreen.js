import React from 'react';
import {Button} from 'react-native';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View>
			<Text style={styles.text}>Home</Text>
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
			<Button
				onPress={() => navigation.navigate('Color')}
				title='Color'
			></Button>
			<Button
				onPress={() => navigation.navigate('Square')}
				title='Square'
			></Button>
			<Button
				onPress={() => navigation.navigate('Name')}
				title='Name'
			></Button>
			<Button
				onPress={() => navigation.navigate('Box')}
				title='Box'
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
