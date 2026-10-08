import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Dimensions,
    Pressable,
    Linking,
} from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import Header from '../components/Header';
import { styles } from '../styles/Sponsors.styles';
import { NavigationProp } from '@react-navigation/native';
import { ScreenEnum } from '../GlobalStyles';
import { GET_ALL_SPONSORS, httpRequest } from '../data/endpoints';
import { Sponsor } from '../data/dataTypes';

const { width, height } = Dimensions.get('window');

// Keep logos within the card's image area while preserving their aspect ratio.
const MAX_IMAGE_WIDTH = width * 0.8 * 0.85;
const MAX_IMAGE_HEIGHT = height * 0.22;

type SponsorImageProps = {
    uri: string;
    onPress?: () => void;
};

const SponsorImage = ({ uri, onPress }: SponsorImageProps) => {
    const [imageSize, setImageSize] = useState({
        width: MAX_IMAGE_WIDTH,
        height: MAX_IMAGE_WIDTH / 5,
    });

    useEffect(() => {
        let isMounted = true;

        Image.getSize(
            uri,
            (originalWidth, originalHeight) => {
                if (
                    !isMounted ||
                    originalWidth <= 0 ||
                    originalHeight <= 0
                ) {
                    return;
                }

                // Scale the image to fit within the maximum bounds while
                // preserving its actual aspect ratio.
                const scale = Math.min(
                    MAX_IMAGE_WIDTH / originalWidth,
                    MAX_IMAGE_HEIGHT / originalHeight
                );

                setImageSize({
                    width: originalWidth * scale,
                    height: originalHeight * scale,
                });
            },
            (error) => {
                console.warn(
                    'Failed to get sponsor image dimensions:',
                    error
                );
            }
        );

        return () => {
            isMounted = false;
        };
    }, [uri]);

    const image = (
        <Image
            source={{ uri }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
        />
    );

    // Put the calculated dimensions on the Pressable itself so its hit area
    // matches the image dimensions rather than the parent card/container.
    if (onPress) {
        return (
            <Pressable
                style={imageSize}
                onPress={onPress}
                accessibilityRole="link"
            >
                {image}
            </Pressable>
        );
    }

    return (
        <View style={imageSize}>
            {image}
        </View>
    );
};

const Sponsors = ({ navigation }: { navigation: NavigationProp<any> }) => {
    // active pagination dot
    const [activeIndex, setActiveIndex] = useState(0);

    // get all sponsors from db
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);

    const getSponsors = async () => {
        const response = await httpRequest(GET_ALL_SPONSORS, 'GET', '', false);

        if (response.ok) {
            setSponsors(await response.json());
        } else {
            console.log('Failed to get sponsors: error code ' + response.status);
        }
    };

    useEffect(() => {
        getSponsors();
    }, []);

    // Open the sponsor's website/link
    const openSponsorLink = async (link?: string) => {
        if (!link?.trim()) {
            return;
        }

        try {
            const supported = await Linking.canOpenURL(link);

            if (supported) {
                await Linking.openURL(link);
            } else {
                console.log('Cannot open sponsor link: ' + link);
            }
        } catch (error) {
            console.log('Failed to open sponsor link:', error);
        }
    };

    // used to determine which pagination dot should be active
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollX / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Header navigation={navigation} />
            </View>

            <Text style={styles.header}>{`Thank You To \nOur Sponsors!`}</Text>

            {/* horizontal scrollview for sponsors */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                snapToInterval={width}
                decelerationRate="fast"
                scrollEventThrottle={16}
            >
                {/* sponsor cards */}
                {sponsors.map((sponsor) => {
                    const hasImage = !!sponsor.image?.trim();
                    const hasLink = !!sponsor.link?.trim();

                    return (
                        <View key={sponsor.id} style={styles.card}>

                            {/* Sponsor name */}
                            {sponsor.link?.trim() ? (
                                <Pressable
                                    onPress={() => openSponsorLink(sponsor.link)}
                                    accessibilityRole="link"
                                    accessibilityLabel={`Visit ${sponsor.name}`}
                                >
                                    <Text style={styles.name}>
                                        {sponsor.name}
                                    </Text>
                                </Pressable>
                            ) : (
                                <Text style={styles.name}>
                                    {sponsor.name}
                                </Text>
                            )}

                            {/* Sponsor image */}
                            {sponsor.image?.trim() ? (
                                <View style={styles.imageContainer}>
                                    <SponsorImage
                                        uri={sponsor.image}
                                        onPress={
                                            sponsor.link?.trim()
                                                ? () => openSponsorLink(sponsor.link)
                                                : undefined
                                        }
                                    />
                                </View>
                            ) : null}

                            {/* Sponsor description */}
                            <View style={styles.descriptionContainer}>
                                <ScrollView
                                    showsVerticalScrollIndicator={true}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.description}>
                                        {sponsor.description}
                                    </Text>
                                </ScrollView>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>

            {/* pagination for sponsor cards */}
            <View style={styles.pagination}>
                {sponsors.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: index === activeIndex ? 1 : 0.3 },
                        ]}
                    />
                ))}
            </View>

            <TopBottomBar
                navigation={navigation}
                currentScreen={ScreenEnum.Sponsors}
            />
        </View>
    );
};

export default Sponsors;