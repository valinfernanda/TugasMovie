import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Joker } from '../../assets';
import { Genre, Isi, Judul, Runtime, Tahun } from '../../components';

const Movie3 = () => {
    return (
        <View style={styles.all}>
            <ScrollView>
            {/* <Text style={styles.judul}>JOKER</Text> */}
            <Judul judul="Ex Machina" />
            <Genre judul="Drama" />
            <Runtime judul= "2 hours" />
            <Image source={Joker} style={styles.gambar} />
            <Tahun judul="2015" />
            <View style={styles.star}>
            <Entypo
                name= "star" 
                size={20} />
                <Entypo
                name= "star" 
                size={20} />
                <Entypo
                name= "star" 
                size={20} />

            </View>
            <Isi judul="A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I." />
            
        </ScrollView>
        </View>
    );
};

export default Movie3;

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#3D393D',
        flex: 1,
    },
    gambar: { 
        marginTop: 15,
        marginHorizontal: 20,
        height:200,
        width: 320,
    },
    star: {
        flexDirection :'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
});
