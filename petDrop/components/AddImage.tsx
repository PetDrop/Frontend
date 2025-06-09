import * as React from 'react';
import { Pressable, StyleProp, View, Image, Text } from 'react-native';
import styles from '../styles/AddImage.styles';

type AddImageType = {
    onPressFunction: () => void;
    containerStyle: StyleProp<any>;
    uri: string;
}

const AddImage = ({ onPressFunction, containerStyle, uri }: AddImageType) => {
    return (
        <View style={containerStyle}>
            <Pressable onPress={onPressFunction}>
                {uri === '' ?
                    <View>
                        <View style={styles.plusSign}>
                            <View style={styles.plusSignLine} />
                            <View style={[styles.rotate90, styles.plusSignLine]} />
                            <Text style={styles.addImageText}>ADD IMAGE</Text>
                        </View>
                    </View>
                    :
                    <View>
                        <Image source={{ uri: uri }} style={styles.image} />
                    </View>
                }
                <View style={styles.imageOutline} />
            </Pressable>
        </View>
    );
};

export default AddImage;