import React, { useState } from 'react';
import { View, Text, ScrollView, Image, NativeScrollEvent, NativeSyntheticEvent, Dimensions } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import { styles } from '../styles/Credits.styles';
import { NavigationProp } from '@react-navigation/native';
import { ScreenEnum } from '../GlobalStyles';

const { width } = Dimensions.get('window');

const authors = [
    {
        id: '1',
        name: 'Jesus Diaz Bujan',
        image: require('../assets/blue_dog_big.png'),
        description: 'Dr. Bujan description',
    },
    {
        id: '2',
        name: 'Emily Peshke',
        image: require('../assets/blue_dog_big.png'),
        description: 'Emily Peshke description',
    },
    {
        id: '3',
        name: 'Jesse Williams',
        image: require('../assets/blue_dog_big.png'),
        description: 'Jesse Williams description',
    },
    {
        id: '4',
        name: 'Blake Bryan',
        image: require('../assets/blue_dog_big.png'),
        description: 'Blake Bryan description',
    },
];

type CreditsProps = {
    navigation: NavigationProp<any>;
    route: any;
}

const Credits = ({ navigation, route } : CreditsProps) => {
    // active pagination dot
    const [activeIndex, setActiveIndex] = useState(0);

    // used to determine which pagination dot should be active
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollX / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{`Credits`}</Text>

            {/* horizontal scrollview for authors */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                snapToInterval={width}
                decelerationRate="fast"
            >
                {/* author cards */}
                {authors.map((author) => (
                    <View key={author.id} style={styles.card}>
                        <Text style={styles.name}>{author.name}</Text>
                        <Image source={author.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.description}>{author.description}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* pagination for sponsor cards */}
            <View style={styles.pagination}>
                {authors.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: index === activeIndex ? 1 : 0.3 }
                        ]}
                    />
                ))}
            </View>

            <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Credits} account={route.params.account} />
        </View >
    );
};

export default Credits;
