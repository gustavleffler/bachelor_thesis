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

import Counter from './src/Counter'
import CounterRow from './src/CounterRow';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrap}>
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
        <CounterRow />
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
