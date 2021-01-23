import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Judul = ({judul}) => {
    return (
        <View>
            <Text style={styles.title}>{judul}</Text>

        </View>
    )
};

export default Judul;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 40,
        paddingTop: 40,
        color: 'white',
    },
})
