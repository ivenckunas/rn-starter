import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const NameScreen = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={name}
				onChangeText={(newValue) => {
					setName(newValue);
				}}
			/>
			<Text>name: {name}</Text>
			<Text>Enter Password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => {
					setPassword(newValue);
				}}
			/>
			{password.length == 0 || password.length > 5 ? null : <Text>Password must be longer</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'grey',
		borderWidth: 1,
	},
});

export default NameScreen;
