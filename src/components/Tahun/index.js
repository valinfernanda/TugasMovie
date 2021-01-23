import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tahun = ({judul}) => {
    return (
        <View>
            <Text style={styles.title}> {judul} </Text>

        </View>
    )
};

export default Tahun;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        paddingTop: 10,
    },
})
