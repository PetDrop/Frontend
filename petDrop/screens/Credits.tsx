import React, { useState } from 'react';
import { View, Text, ScrollView, Image, NativeScrollEvent, NativeSyntheticEvent, Dimensions } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import Header from '../components/Header';
import { styles } from '../styles/Credits.styles';
import { NavigationProp } from '@react-navigation/native';
import { ScreenEnum } from '../GlobalStyles';

const { width } = Dimensions.get('window');

const authors = [
    {
        id: '1',
        name: 'Jesus Diaz Bujan',
        title: 'App Creator',
        image: require('../assets/default_dog.png'),
        bio: 'Dr. Jesus Diaz Bujan received his veterinary degree from the University of León (Spain) in 2010. After three years in small animal practice in the United Kingdom, he completed an internship at the Animal Health Trust in 2016, followed by an ophthalmology internship at a private referral center in the United Kingdom. In 2021, he completed a three-year ophthalmology residency program with a master’s degree at the Royal Veterinary College, London. After two years working in a private referral hospital in Ottawa (Canada), he joined the ophthalmology service at Iowa State University (ISU), where he is currently a clinical assistant professor, in September 2023.',
    },
    {
        id: '2',
        name: 'Emily Peshke',
        title: 'App Designer',
        image: require('../assets/default_dog.png'),
        bio: 'Hello! My name is Emily Peschke, the UI/UX and brand designer for Pet Drop. As I near graduation, experiences like these have helped to launch me forward in the professional space, and I am deeply grateful for that. I am so excited to see where the app goes, and I am so thankful to have been part of such a wonderful team. From branding to app capabilities/design, our app is made with its users in mind. I hope you enjoy: Pet Drop!',
    },
    {
        id: '3',
        name: 'Jesse Williams',
        title: 'App Developer',
        image: require('../assets/default_dog.png'),
        bio: '',
    },
    {
        id: '4',
        name: 'Blake Bryan',
        title: 'App Developer',
        image: require('../assets/default_dog.png'),
        bio: '',
    },
];

const Credits = ({ navigation }: { navigation: NavigationProp<any> }) => {
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
            <View style={styles.headerWrapper}>
                <Header navigation={navigation} />
            </View>
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
                        <Text style={styles.title}>{author.title}</Text>
                        <Image source={author.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.bio}>{author.bio}</Text>
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

            <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Credits} />

        </View >
    );
};

export default Credits;
