import * as React from 'react';
import { useState } from 'react';
import { FlatList, Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Medications.styles';

interface ItemSwitchProps {
	text: string;
	selectedItem: { id?: string, name: string, image?: string };
	data: Array<{ id?: string, name: string, image?: string }>,
	onSwitch: (item: any) => void;
	switchItem: string;
}


const ItemSwitch = ({ text, selectedItem, data, onSwitch, switchItem }: ItemSwitchProps) => {
	const [modalVisible, setModalVisible] = useState(false);

	if (selectedItem === undefined) {
		selectedItem = { id: "", name: "", image: "" };
	}

	// if switch is for pets, then put the image portion else don't
	let image;
	if (switchItem === 'Pet') {
		// the following should always be able to set imageString to selectedItem.image
		const imageString = selectedItem.image ? selectedItem.image : '';
		image =
			<View>
				<View style={styles.imageOutline}>
					<Image src={imageString} style={styles.itemImage} />
				</View>
			</View>;
	}


	return (
		<View style={styles.itemSwitchContainer}>
			<TouchableOpacity
				style={styles.switchButton}
				onPress={() => setModalVisible(true)}>
				{image}
				<Text style={styles.switchText}>{text}</Text>
			</TouchableOpacity>

			<Modal visible={modalVisible} transparent animationType="fade">
				<View style={styles.modalOverlay}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>{`Select ${switchItem}`}</Text>
						<FlatList
							data={data}
							keyExtractor={(item) => item.id ? item.id.toString() : item.name.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={[
										styles.itemOption,
										item.id === selectedItem.id &&
										styles.selectedItemOption,
									]}
									onPress={() => {
										onSwitch(item);
										setModalVisible(false);
									}}>
									<Text style={styles.itemOptionText}>
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

export default ItemSwitch;
