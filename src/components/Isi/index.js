import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Isi = ({judul}) => {
    return (
        <View>
            <Text style={styles.isi}> {judul} </Text>

        </View>
    )
};

export default Isi;

const styles = StyleSheet.create({
    isi: {
        paddingHorizontal: 18,
        paddingTop: 30,
        color: '#B2B1B7',
    }
})
