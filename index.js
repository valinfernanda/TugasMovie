/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
