
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Counter from './Counter'


const CounterRow: React.FC = () => {

    return (<View  style={styles.row}>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
    </View>)
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        backgroundColor: "red",
        flex: 1
    }
})

export default CounterRow