import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const GoalInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const handleText = (enteredText) => {
		setEnteredGoal(enteredText);
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput placeholder="Course goal" style={styles.input} onChangeText={handleText} value={enteredGoal} />
			<Button title="ADD" color="gray" onPress={() => props.onAdd(enteredGoal)} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		width: '75%',
		padding: 10,
		borderColor: 'black',
		borderWidth: 2
	}
});

export default GoalInput;
