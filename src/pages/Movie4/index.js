import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Joker } from '../../assets';
import { Genre, Isi, Judul, Runtime, Tahun } from '../../components';

const Movie4 = () => {
    return (
        <View style={styles.all}>
            <ScrollView>
            {/* <Text style={styles.judul}>JOKER</Text> */}
            <Judul judul="In The Tall Grass " />
            <Genre judul="Drama" />
            <Runtime judul= "2 hours" />
            <Image source={Joker} style={styles.gambar} />
            <Tahun judul="2019" />
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
            <Isi judul="After hearing a young boy's cry for help, a sister and brother venture into a vast field of tall grass in Kansas but soon discover there may be no way out...and that something evil lurks within." />
            
        </ScrollView>
        </View>
    );
};

export default Movie4;

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
