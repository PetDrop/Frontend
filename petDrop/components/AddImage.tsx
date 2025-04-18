import * as React from 'react';
import { Pressable, StyleProp, View, Image } from 'react-native';
import styles from '../styles/AddImage.styles';
import OuterCircle from '../assets/blue_circle_big.svg';

type AddImageType = {
    onPressFunction: () => void;
    containerStyle: StyleProp<any>;
    uri: string;
}

const AddImage = ({ onPressFunction, containerStyle, uri }: AddImageType) => {
    return (
        <View style={containerStyle}>
            <Pressable onPress={onPressFunction}>
                <OuterCircle style={styles.outerCircle} />
                {uri === '' ?
                    <View>
                        <View style={styles.plusSign}>
                            <View style={styles.plusSignLine} />
                            <View style={[styles.rotate90, styles.plusSignLine]} />
                        </View>
                    </View>
                    :
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: uri }} width={styles.outerCircle.width} height={styles.outerCircle.height} />
                    </View>
                }
            </Pressable>
        </View>
    );
};

export default AddImage;