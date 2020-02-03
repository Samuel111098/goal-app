import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);

	const addGoal = (goalTitle) => {
		setCourseGoals((currentGoals) => [ ...currentGoals, { id: Math.random().toString(), value: goalTitle } ]);
	};

	const removeGoal = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id != goalId);
		});
	};

	return (
		<View style={styles.view}>
			<GoalInput onAdd={addGoal} />
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
