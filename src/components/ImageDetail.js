import {View, Text, Image} from 'react-native';
import React from 'react';

const ImageDetail = ({title, image, score}) => {
	return (
		<View>
			<Image source={image} />
			<Text>{title}</Text>
			<Text>{score}/10</Text>
		</View>
	);
};

export default ImageDetail;
