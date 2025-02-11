import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/Home.styles';

type UserGreetingProps = {
	name: string;
};

const UserGreeting = ({ name }: UserGreetingProps) => {
	return (
		<View style={styles.greetingContainer}>
			<Text style={styles.greetingText}>Hi,</Text>
			<Text style={styles.greetingName}>{name}!</Text>
		</View>
	);
};

export default UserGreeting;
