import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Runtime = ({judul}) => {
    return (
        <View>
            <Text style={styles.title}> {judul} </Text>

        </View>
    )
};

export default Runtime;

const styles = StyleSheet.create({
    title: { 
        fontSize: 16,
        color: 'grey',
        paddingTop: 8,
        paddingHorizontal: 43,
    },
})
