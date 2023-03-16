import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = () => {
	const [number, setNumber] = useState(0);

	return (
		<View>
			<Button
				title='increase'
				onPress={() => setNumber(number + 1)}
			></Button>
			<Button
				title='decrease'
				onPress={() => setNumber(number - 1)}
			></Button>
			<Text style={styles.number}>{number}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	number: {
		fontSize: 40,
		textAlign: 'center',
	},
});

export default CounterScreen;
