import {View, Text} from 'react-native';
import React from 'react';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<Text>Images</Text>
			<ImageDetail
				title='Forest'
				image={require('../../assets/images/forest.jpg')}
				score={9}
			/>
			<ImageDetail
				title='Beach'
				image={require('../../assets/images/beach.jpg')}
				score={7}
			/>
			<ImageDetail
				title='Mountain'
				image={require('../../assets/images/mountain.jpg')}
				score={8.5}
			/>
		</View>
	);
};

export default ImageScreen;
