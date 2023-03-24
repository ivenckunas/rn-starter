import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase_count':
			return {...state, count: state.count + action.payload};
		case 'decrease_count':
			return {...state, count: state.count - action.payload};
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, {count: 0});
	const {count} = state;

	return (
		<View>
			<Button
				title='increase'
				onPress={() => dispatch({type: 'increase_count', payload: 1})}
			></Button>
			<Button
				title='decrease'
				onPress={() => dispatch({type: 'decrease_count', payload: 1})}
			></Button>
			<Text style={styles.number}>{count}</Text>
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
