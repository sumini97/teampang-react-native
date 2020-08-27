/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, //이미지 사용에 대해서 import 
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.textcolor}>팀프앙 home</Text>
      <Image 
      style={styles.logo}
      source = {{url:'https://user-images.githubusercontent.com/37579661/91409009-bf86e200-e87f-11ea-9be5-75635b4f7b2a.png',}} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
      width: 250,
      height: 90,
  },
  container: {
    flex : 1,
    justifyContent : 'center', //세로에서 센터
    alignItems : 'center' //가로에서 센터 
  },
  textcolor: {
    color : 'blue',
  }
});

export default App;
