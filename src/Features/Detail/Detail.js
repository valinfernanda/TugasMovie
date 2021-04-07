import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import * as Source from '../../Utility/source';
import FastImage from 'react-native-fast-image';

export default function Detail(props) {
  const [movDetail, setMovDetail] = useState({});

  const getMovDetail = async () => {
    const respond = await axios
      .get(Source.movdb + Source.detailMov(props.route.params) + Source.mykey)
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
    if (respond) {
      setMovDetail(respond);
    } else {
      console.log('Failed to load');
    }
  };

  useEffect(() => {
    getMovDetail();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>{movDetail.original_title}</Text>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movDetail.backdrop_path}`,
        }}
        style={styles.gambar}
      />
      <Text style={styles.jam}>{movDetail.runtime} minutes</Text>
      <Text style={styles.tanggal}>{movDetail.release_date}</Text>
      {/* <Text>{movDetail.popularity}</Text> */}
      <Text style={styles.overview}>{movDetail.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  judul: {
    fontWeight: 'bold',
    fontSize: 27,
    alignSelf: 'center',
    paddingTop: 10,
    color: 'white',
  },
  gambar: {
    height: 200,
    width: 320,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  jam: {
    alignSelf: 'center',
    color: 'white',
    paddingTop: 9,
    fontWeight: 'bold',
    fontSize: 16,
  },
  tanggal: {
    alignSelf: 'center',
    color: 'white',
    paddingTop: 5,
  },
  overview: {
    paddingHorizontal: 20,
    paddingTop: 30,
    color: 'white',
    fontSize: 14,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
