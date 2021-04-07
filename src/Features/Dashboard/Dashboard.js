import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DashStyle} from './style';
import {ScrollView} from 'react-native-gesture-handler';
import Film from '../../Assets/Poster/poster';
import axios from 'axios';
import * as Source from '../../Utility/source';
import FastImage from 'react-native-fast-image';

// import Navigation from '../Shared/Navigation';

const Stack = createStackNavigator();

export default function Dashboard(props) {
  const [topRatedMov, setTopRatedMov] = useState([]);
  const [newList, setNewList] = useState([]);

  const seeDetail = (id) => {
    props.navigation.navigate('Detail', id);
  };
  const movieList = async () => {
    const respond = await axios
      .get(Source.movdb + Source.topRated + Source.mykey)
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
    if (respond) {
      setTopRatedMov(respond.results);
    } else {
      console.log('Failed to load');
    }
  };

  const popularMovies = async () => {
    const respond = await axios
      .get(Source.movdb + Source.popMov + Source.mykey)
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
    if (respond) {
      setNewList(respond.results);
    } else {
      console.log('Failed to load');
    }
  };

  useEffect(() => {
    movieList();
    popularMovies();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.atas}>Top Rated Movies</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={topRatedMov}
          renderItem={({item}) => {
            return (
              <>
                <TouchableOpacity onPress={() => seeDetail(item.id)}>
                  <View style={{margin: 20, alignItems: 'center'}}>
                    <FastImage
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                      }}
                      style={{height: 100, width: 200, borderRadius: 10}}
                    />
                    <Film movie={item} full={false} />
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
        <Text style={styles.atas}>Popular Movies</Text>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          data={newList}
          renderItem={({item}) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => seeDetail(item.id)}
                  style={{marginBottom: 20}}>
                  <View style={{alignItems: 'center'}}>
                    <FastImage
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                      }}
                      style={{
                        height: 100,
                        width: '90%',
                        borderRadius: 10,
                        margin: 10,
                      }}
                    />
                    <Film
                      movie={item}
                      full={true}
                      onTap={() => seeDetail(item.id)}
                    />
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  atas: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 4,
    paddingLeft: 7,
    color: 'white',
  },
  container: {
    backgroundColor: 'black',
  },
});
