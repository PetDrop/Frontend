import * as React from 'react';
import { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import styles from '../../styles/Home.styles';
import { Pet } from '../../data/dataTypes';
import mockData from '../../data/mockData.json';

type CalendarProps = {
	pets: Pet[];
}

const Calendar = (props: CalendarProps) => {
	const { width, height } = Dimensions.get('window');

	const getMedicationBars = (
		date: string
	): { color: string; range: number }[] => {
		let medBars: { color: string; range: number }[] = [];
		props.pets.forEach((pet) => {
			pet.medications.forEach((med) => {
				if (med.dates.includes(date)) {
					medBars.push({ color: med.color, range: med.range });
				}
			});
		});
		return medBars;
	};

	const daysInMonth = 30;
	const firstDayOffset = 4;

	const calendarDays: (number | null)[] = Array(firstDayOffset).fill(null);

	for (let i = 1; i <= daysInMonth; i++) {
		calendarDays.push(i);
	}

	const totalDays = calendarDays.length;
	const remainingSlots = totalDays % 7;

	if (remainingSlots !== 0) {
		// Instead of removing, we leave it as-is without adding empty slots
		while (calendarDays.length % 7 !== 0) {
			calendarDays.push(null); // Add empty spaces to align the grid properly
		}
	}

	return (
		<View>
			<View style={styles.weekdaysRow}>
				{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
					<Text key={index} style={styles.weekdayText}>
						{day}
					</Text>
				))}
			</View>

			<View style={styles.daysGrid}>
				{calendarDays.map((day, index) => {
					const formattedDate = day
						? `2024-09-${day.toString().padStart(2, '0')}`
						: null;
					const medBars = day
						? getMedicationBars(formattedDate!)
						: [];

					return (
						<View key={index} style={styles.dayContainer}>
							{day ? (
								<Text style={styles.dayText}>{day}</Text>
							) : null}
							{day && medBars.length > 0 && (
								<View
									style={[
										styles.medMarker,
										{
											backgroundColor: medBars[0].color,
											width: medBars[0].range * 10, // Adjust length for multi-day meds
										},
										{ top: height * 0.04 },
									]}
								/>
							)}
						</View>
					);
				})}
			</View>
		</View>
	);
};

export default Calendar;
