import { View, Image, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const HomePage = (setPage) => {
    let pet = <Text style={{padding:50}}>pet name and other info</Text>

    let listOfPets = 
    <ScrollView>
        {/*for every pet*/}
        {pet}
        {pet}
        {pet}
    </ScrollView>

    return (
        <View style={styles.container}>
            <Image style={styles.image} src={{uri: 'https://en.pimg.jp/082/992/149/1/82992149.jpg'}}></Image>
            <Text style={{fontSize:30}}>Welcome back, Loser</Text>
            {listOfPets}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default HomePage;