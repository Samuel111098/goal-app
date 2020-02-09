import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const handleText = (enteredText) => {
		setEnteredGoal(enteredText);
	};
	const addGoalHandle = () => {
		props.onAdd(enteredGoal);
		setEnteredGoal('');
	};
	const handleCancel = () => {
		props.onCancel();
	};
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course goal"
					style={styles.input}
					onChangeText={handleText}
					value={enteredGoal}
				/>
				<View style={styles.btn}>
					<View style={styles.button}>
						<Button title="Cancel" color="red" onPress={handleCancel} />
					</View>
					<View style={styles.button}>
						<Button title="ADD" color="gray" onPress={addGoalHandle} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '75%',
		padding: 10,
		borderColor: 'black',
		borderWidth: 2,
		marginBottom: 10
	},
	btn: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '70%',
		alignItems: 'center'
	},
	button: {
		width: '40%'
	}
});

export default GoalInput;
