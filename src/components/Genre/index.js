import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Genre = ({judul}) => {
    return (
        <View>
            <Text style={styles.genre}> {judul} </Text>

        </View>
    )
};

export default Genre;

const styles = StyleSheet.create({
    genre: { 
        fontSize: 20,
        color: 'grey',
        paddingHorizontal: 43,
        paddingTop: 13,
    }, 
})
