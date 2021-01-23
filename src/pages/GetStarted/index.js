import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Container from '../../components/Container'
import Kotak from '../../components/Kotak'
// import Button from '../Button'

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.bg}>
            
            <View>
            <Text style={styles.title}>RNFlix</Text>
            </View>
            <ScrollView>
                <Text style={styles.judulawal}>Popular Movies</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {/* <Kotak><Container title ='Ayeeee' /> </Kotak>
                    <Kotak><Container title ="Val"  /> </Kotak> */}
                <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie1')}>
                    <Container title ="1"  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie2')}>
                    <Container title ="2"  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie3')}>
                    <Container title ="3"  />
                </TouchableOpacity>
                    </ScrollView>
                 <View style={styles.verti}>
                <Text style={styles.judulawal}>New Release</Text>
                 <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie4')}>
                    <Container title ="4"  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie5')}>
                    <Container title ="5"  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie6')}>
                    <Container title ="6"  />
                </TouchableOpacity> 
                </View>   
                
                
                
                
            </ScrollView>
        </View>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    title: { 
        fontSize: 40,
          backgroundColor: 'red',
          color: 'whitesmoke',
          alignSelf: 'center',
          marginBottom: 10,
          borderRadius: 5,
          marginTop: 15,
    },
    bg: { 
        backgroundColor: '#3D393D',
    },
    judulawal: { 
        fontSize: 20,
        color: "white",
        marginLeft: 20,
    }, 
    hori: { 
        flexDirection: 'row',
    }, 
    verti: {
        alignItems: 'center',
    },
})


