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
    <View style={styles.container}>
      <Image style={{
        aspectRatio: 0.22,
        resizeMode: 'contain'
      }}
        source={require('./assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center', //세로에서 센터
    alignItems: 'center' //가로에서 센터 
  },
  textcolor: {
    color: 'blue',
  }
});

export default App;
