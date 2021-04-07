import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {DashStyle} from '../../Features/Dashboard/style';
import Dashboard from '../../Features/Dashboard/Dashboard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const Film = (props) => {
  return (
    <View style={{marginHorizontal: 8}}>
      <TouchableOpacity onPress={props.onTap}>
        {/* <FastImage
          style={props.full ? DashStyle.imgFull : DashStyle.img}
          source={require('../../Assets/Images/mrbean.jpg')}
        /> */}
        <Text style={styles.judul}>{props.movie.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Film;

const styles = StyleSheet.create({
  judul: {
    color: 'white',
  },
});
