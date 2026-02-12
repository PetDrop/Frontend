import * as React from 'react';
import { Pressable, StyleProp, View, Image, Text, ImageSourcePropType } from 'react-native';
import styles from '../styles/AddImage.styles';
import { isValidImageUri } from '../utils/imageUtils';

type AddImageType = {
    onPressFunction: () => void;
    containerStyle: StyleProp<any>;
    /** Image source: string (uri for file/http), number (from require() for bundled assets), or empty string for placeholder */
    source: string | number;
    /** Optional. When provided, shows a clear button to revert to default (only when source is a custom image URI) */
    onClearImage?: () => void;
}

const AddImage = ({ onPressFunction, containerStyle, source, onClearImage }: AddImageType) => {
    const hasValidSource = source && (typeof source === 'number' || isValidImageUri(source));
    const isCustomImage = typeof source === 'string' && isValidImageUri(source);
    const showClearButton = isCustomImage && onClearImage;
    const imageSource: ImageSourcePropType | null = !hasValidSource
        ? null
        : typeof source === 'number'
            ? source
            : { uri: source as string };

    return (
        <View style={containerStyle}>
            <Pressable onPress={onPressFunction}>
                {!hasValidSource ?
                    <View>
                        <View style={styles.plusSign}>
                            <View style={styles.plusSignLine} />
                            <View style={[styles.rotate90, styles.plusSignLine]} />
                            <Text style={styles.addImageText}>ADD IMAGE</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.imageWrapper}>
                        <Image source={imageSource!} style={styles.image} />
                        {showClearButton && (
                            <Pressable
                                style={styles.clearButton}
                                onPress={(e) => {
                                    e.stopPropagation();
                                    onClearImage();
                                }}
                                hitSlop={8}
                            >
                                <Image source={require('../assets/remove_x_blue.png')} style={styles.clearButtonIcon} />
                            </Pressable>
                        )}
                    </View>
                }
                <View style={styles.imageOutline} />
            </Pressable>
        </View>
    );
};

export default AddImage;