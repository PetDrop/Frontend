import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, NativeScrollEvent, NativeSyntheticEvent, Dimensions } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import { styles } from '../styles/Sponsors.styles';
import { NavigationProp } from '@react-navigation/native';
import { ScreenEnum } from '../GlobalStyles';
import { GET_ALL_SPONSORS, httpRequest } from '../data/endpoints';
import { Sponsor } from '../data/dataTypes';
import HelpButton from '../components/HelpButton';
import HelpPopup from '../components/HelpPopup';
import { helpText } from '../data/helpText';

const { width } = Dimensions.get('window');


const Sponsors = ({ navigation } : { navigation: NavigationProp<any> }) => {
    // active pagination dot
    const [activeIndex, setActiveIndex] = useState(0);
    const [showHelp, setShowHelp] = useState(false);

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
                        <Image source={{ uri: sponsor.image || 'https://via.placeholder.com/150' }} style={styles.image} resizeMode="contain" />
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

            <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Sponsors} />

            <HelpButton onPress={() => setShowHelp(true)} />
            <HelpPopup
                isVisible={showHelp}
                helpText={helpText.Sponsors}
                onClose={() => setShowHelp(false)}
            />
        </View >
    );
};

export default Sponsors;
