import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Joker } from '../../assets';
import { Genre, Isi, Judul, Runtime, Tahun } from '../../components';

const Movie2 = () => {
    return (
        <View style={styles.all}>
            <ScrollView>
            {/* <Text style={styles.judul}>JOKER</Text> */}
            <Judul judul="BLADERUNNER 2049" />
            <Genre judul="Drama" />
            <Runtime judul= "2 hours" />
            <Image source={Joker} style={styles.gambar} />
            <Tahun judul="2017" />
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
            <Isi judul="Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years." />
            
        </ScrollView>
        </View>
    );
};

export default Movie2;

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
