import * as React from 'react';
import  { useState } from 'react';
import {
	FlatList,
	Image,
	Modal,
	Pressable,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { petImages } from '../../GlobalStyles';
import styles from '../../styles/Medications.styles';

interface PetSwitchProps {
	selectedPet: {
		id: number;
		name: string;
		image: string;
		age: number;
		breed: string;
		address: string;
		medications: {
			name: string;
			color: string;
			description: string;
			dates: string[];
			range: number;
		}[];
		vet: string;
		vetPhone: string;
	};
	pets: {
		id: number;
		name: string;
		image: string;
		age: number;
		breed: string;
		address: string;
		medications: {
			name: string;
			color: string;
			description: string;
			dates: string[];
			range: number;
		}[];
		vet: string;
		vetPhone: string;
	}[];
	onSwitch: (pet: any) => void;
}


const PetSwitch: React.FC<PetSwitchProps> = ({
	selectedPet,
	pets,
	onSwitch,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.petSwitchContainer}>
			<Pressable
				style={styles.switchButton}
				onPress={() => setModalVisible(true)}>
				<View>
					<Image source={require('../../assets/white_circle.png')} style={styles.whiteCircle}/>
					<Image source={petImages[selectedPet.image]} style={styles.petImage} />
					<Image
						source={require('../../assets/blue_circle_big.png')}
						style={styles.petCircle}
					/>
				</View>
				<Text style={styles.switchText}>SWITCH</Text>
			</Pressable>

			<Modal visible={modalVisible} transparent animationType="fade">
				<View style={styles.modalOverlay}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>Select a Pet</Text>
						<FlatList
							data={pets}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={[
										styles.petOption,
										item.id === selectedPet.id &&
											styles.selectedPetOption,
									]}
									onPress={() => {
										onSwitch(item);
										setModalVisible(false);
									}}>
									<Text style={styles.petOptionText}>
										{item.name}
									</Text>
								</TouchableOpacity>
							)}
						/>
						<Pressable
							style={styles.closeButton}
							onPress={() => setModalVisible(false)}>
							<Text style={styles.closeButtonText}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default PetSwitch;
