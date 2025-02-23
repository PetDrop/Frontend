import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { styles } from '../../styles/ProfilePage.styles';
import Circle from '../../assets/blue_circle_big.svg';

const { width, height } = Dimensions.get('window');

const AddPicture = () => {
    return (
        <View style={styles.addPictureContainer}>
            <Circle />
            <View style={styles.horizontalLine} />
            <View style={styles.verticalLine} />
        </View>
    );
};

export default AddPicture;