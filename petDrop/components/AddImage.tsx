import * as React from 'react';
import { StyleProp, View } from 'react-native';
import styles from '../styles/AddImage.styles';
import OuterCircle from '../assets/blue_circle_big.svg';

type AddImageType = {
    onPressFunction: () => void;
    containerStyle: StyleProp<any>;
}

const AddImage = ({ onPressFunction, containerStyle }: AddImageType) => {
    return (
        <View style={containerStyle}>
            <OuterCircle style={styles.outerCircle} />
            <View style={styles.plusSign}>
                <View style={styles.plusSignLine} />
                <View style={[styles.rotate90, styles.plusSignLine]} />
            </View>
        </View>
    );
};

export default AddImage;