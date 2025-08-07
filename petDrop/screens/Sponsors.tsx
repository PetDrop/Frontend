import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import { styles } from '../styles/Sponsors.styles';


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
        description: '',
    },
    {
        id: '3',
        name: 'Sponsor Three',
        image: require('../assets/blue_dog_big.png'),
        description: '',
    },
    // Add more sponsors as needed
];

const Sponsors = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{`Thank You To \nOur Sponsors!`}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {sponsors.map((sponsor) => (
                    <View key={sponsor.id} style={styles.card}>
                        <Text style={styles.name}>{sponsor.name}</Text>
                        <Image source={sponsor.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.description}>{sponsor.description}</Text>
                    </View>
                ))}
            </ScrollView>

            <TopBottomBar navigation={undefined} currentScreen={-1} account={{id: '', email: '', image: '', password: '', pets: [], sharedPets: [], sharedUsers: [], username: '', usersSharedWith: []}}/>
        </View>
    );
};

export default Sponsors;
