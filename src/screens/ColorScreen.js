import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

const ColorScreen = () => {
	const [colorArr, setColorArr] = useState([]);

	return (
		<View>
			<Button
				title='Add a color'
				onPress={() => {
					setColorArr([...colorArr, randomRgb()]);
				}}
			/>
			<FlatList
				keyExtractor={(item) => item}
				data={colorArr}
				renderItem={({item}) => {
					return (
						<View
							style={{
								height: 100,
								width: 100,
								backgroundColor: item,
							}}
						/>
					);
				}}
			/>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
