import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Joker } from '../../assets';

// const Container = ({ayee}) => {
//     if(ayee){
//         return <Joker />;
//     }
//     return <Joker />;
// };
    
const Container = ({title}) => {
    // const Gambar = () => {
    //     if(title==='satu'){
    //         return <Joker />;
    // }
    // return <Joker />;
    // }
    return (
        
            <View style={styles.wrapper}>
                {/* <Gambar /> */}
            <Image source={Joker} style={styles.img} />
            <Text style={styles.judul}>{title}</Text>
            </View>
        
    )
}

export default Container;

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 120,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 20,
      },
      judul: { 
        fontSize: 20,
        marginHorizontal: 20,
      },
    //   wrapper: {
    //       justifyContent: 'space-between',
    //   },
      popMov: {
        padding: 5,
        backgroundColor: 'red',
      },
})
