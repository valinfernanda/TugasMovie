import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FitDetail from '../FitDetail'
import ListDetail from '../ListDetail'


const Detail = () => {
    const [details] = useState([
        {
            id: 1, 
            judul: 'Joker',
            genre: 'Kevin William',
            runtime: 'Baik ibu, terimakasih banyak atas wakt...',
            tahun: 2020,
        },
        {
            id: 2, 
            judul: 'Joker2',
            genre: 'Kevin Williamsssss',
            runtime: 'wedew...',
            tahun: 2020,
        },
    ])
    return (
        <View>
           
            <Text>Detail</Text>
            {
                details.map(detail => {
                    return <FitDetail key={detail.id} judul={detail.judul} genre={detail.genre} runtime={detail.runtime}  />
                })
            }
            
        
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    
})

