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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Bouncer from './src/Bouncer';

const count = 64

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrap}>
        {[...Array(count)].map((e, i) => <Bouncer key={Math.random()} />)}
      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: "100%",
  }
});

export default App;
