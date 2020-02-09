import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);
	const [ isAddMode, setAddMode ] = useState(false);

	const addGoal = (goalTitle) => {
		setCourseGoals((currentGoals) => [ ...currentGoals, { id: Math.random().toString(), value: goalTitle } ]);
		setAddMode(false);
	};
	const removeMode = () => {
		setAddMode(false);
	};
	const removeGoal = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id != goalId);
		});
	};

	return (
		<View style={styles.view}>
			<Button title="Add New Goal" onPress={() => setAddMode(true)} />
			<GoalInput visible={isAddMode} onAdd={addGoal} onCancel={removeMode} />
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem id={itemData.item.id} onDelete={removeGoal} title={itemData.item.value} />
				)}
			/>
			<View />
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		padding: 75
	}
});
