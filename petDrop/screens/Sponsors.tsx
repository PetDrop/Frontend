import React, { useState } from 'react';
import { View, Text, ScrollView, Image, NativeScrollEvent, NativeSyntheticEvent, Dimensions } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import { styles } from '../styles/Sponsors.styles';
import { NavigationProp } from '@react-navigation/native';
import { ScreenEnum } from '../GlobalStyles';
import { useAccount } from '../context/AccountContext';

const { width } = Dimensions.get('window');

const sponsors = [
    {
        id: '1',
        name: 'Sponsor One',
        image: require('../assets/blue_dog_big.png'),
        description: 'Sponsor One is a company dedicated to doing pet related stuff and things that benefit the pet community, whatever that is. All I know is that I should make this description with a decent length so I can test to see how much space it really takes up, or rather, could theoretically take up.',
    },
    {
        id: '2',
        name: 'Sponsor Two',
        image: require('../assets/blue_dog_big.png'),
        description: 'same thing as 1',
    },
    {
        id: '3',
        name: 'Sponsor Three',
        image: require('../assets/blue_dog_big.png'),
        description: 'same thing as 1 and 2',
    },
];

type SponsorsProps = {
    navigation: NavigationProp<any>;
    route: any;
}

const Sponsors = ({ navigation, route } : SponsorsProps) => {
    const { account } = useAccount();
    // active pagination dot
    const [activeIndex, setActiveIndex] = useState(0);

    const pushToken: string = route.params.pushToken;

    // used to determine which pagination dot should be active
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollX / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{`Thank You To \nOur Sponsors!`}</Text>

            {/* horizontal scrollview for sponsors */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                snapToInterval={width}
                decelerationRate="fast"
            >
                {/* sponsor cards */}
                {sponsors.map((sponsor) => (
                    <View key={sponsor.id} style={styles.card}>
                        <Text style={styles.name}>{sponsor.name}</Text>
                        <Image source={sponsor.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.description}>{sponsor.description}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* pagination for sponsor cards */}
            <View style={styles.pagination}>
                {sponsors.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: index === activeIndex ? 1 : 0.3 }
                        ]}
                    />
                ))}
            </View>

            <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Sponsors} account={account} pushToken={pushToken} />
        </View >
    );
};

export default Sponsors;
