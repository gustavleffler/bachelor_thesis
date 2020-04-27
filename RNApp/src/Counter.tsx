
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const Counter: React.FC = () => {
    const [count, setCount] = React.useState(0)
    const [color, setColor] = React.useState("white")

    const updateColor = () => {
        const ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        setColor(ColorCode)
    }

    React.useEffect(() => {
        setInterval(() => {
            setCount(counter => counter + 1)
            updateColor()
        },1)
      }, []);


    return (<View  style={[styles.counter, {backgroundColor: color}]}>
        <Text style={styles.number}>{count}</Text>
    </View>)
}

const styles = StyleSheet.create({
    counter: {
        flex: 1,
        justifyContent: 'center'
    },
    number: {
        fontSize: 16,
        textAlign: 'center',
    }
})

export default Counter