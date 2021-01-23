import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const Kotak = ({navigation}) => {
    return (
            <TouchableOpacity style={styles.hori} onPress={() => navigation.navigate('Movie1')}>

            </TouchableOpacity>      
    )
}

export default Kotak;

const styles = StyleSheet.create({
    hori: { 
        flexDirection: 'row',
    }
})
