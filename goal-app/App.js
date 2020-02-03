import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ courseGoals, setCourseGoals ] = useState([]);
	const handleText = (enteredText) => {
		setEnteredGoal(enteredText);
	};
	const addGoal = () => {
		setCourseGoals((currentGoals) => [ ...currentGoals, enteredGoal ]);
	};

	return (
		<View style={styles.view}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course goal"
					style={styles.input}
					onChangeText={handleText}
					value={enteredGoal}
				/>
				<Button title="ADD" color="gray" onPress={addGoal} />
			</View>
			<View>
				{courseGoals.map((goal, index) => {
					return (
						<Text key={index} style={styles.input}>
							{goal}
						</Text>
					);
				})}
			</View>
			<View />
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		padding: 75
	},
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
