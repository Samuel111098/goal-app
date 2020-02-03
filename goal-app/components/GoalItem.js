import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = (props) => {
	return (
		<TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	listItem: {
		color: '#fff',
		padding: 10,
		backgroundColor: '#ccc',
		margin: 10
	}
});

export default GoalItem;
