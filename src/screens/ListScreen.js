import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const ListScreen = () => {
	const friends = [
		{
			name: 'Andy',
			age: 20,
		},
		{
			name: 'Mike',
			age: 20,
		},
		{
			name: 'Sarah',
			age: 20,
		},
		{
			name: 'Jessica',
			age: 20,
		},
		{
			name: 'Greg',
			age: 20,
		},
		{
			name: 'Justin',
			age: 20,
		},
	];

	return (
		<FlatList
			showsHorizontalScrollIndicator={false}
			keyExtractor={(friend) => friend.name}
			renderItem={({item}) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
			data={friends}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
		marginHorizontal: 50,
		fontSize: 20,
		color: 'gray',
	},
});

export default ListScreen;
