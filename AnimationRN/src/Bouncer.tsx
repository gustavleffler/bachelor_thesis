
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';


const Bouncer: React.FC = () => {
    const [count, setCount] = React.useState(0)

    let x = Math.floor(Math.random() * Dimensions.get('window').width) - 50 + 1
    let y = Math.floor(Math.random() * Dimensions.get('window').height) - 50 + 1
    let moveAnimation = new Animated.ValueXY({ x: x, y: y })
    let xSpeed = 0
    let ySpeed = 0
    const color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        

    const move = () => {
        const { x, y } = getNewPos()
        const distance = getDistance(moveAnimation.x._value, x, moveAnimation.y._value, y)
        const time = distance * 2
        Animated.timing(moveAnimation, {
          toValue: {x: x, y: y,},
          duration: time,
          useNativeDriver: false
        }).start(() => {
            requestAnimationFrame(move)
        })
    }

    const getNewPos = () => {
        if(Math.random() > 0.5){
            x = x != 0 ? 0 : Dimensions.get('window').width - 50
            y = Math.floor(Math.random() * (Dimensions.get('window').height - 50)) + 1
        } else {
            x = Math.floor(Math.random() * (Dimensions.get('window').width - 50)) + 1
            y = y != 0 ? 0 : Dimensions.get('window').height - 50
        }
        return { x: x, y: y}
    }

    const getDistance = (x1, x2, y1, y2) => {
        const a = x1 - x2
        const b = y1 - y2

        return Math.sqrt( a*a + b*b )
    }

    React.useEffect(() => {
        requestAnimationFrame(move)
      }, []);


    return (
        <Animated.View style={[styles.bouncer, moveAnimation.getLayout(), {backgroundColor: color}]}></Animated.View>)
}

const styles = StyleSheet.create({
    bouncer: {
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: "red",
        justifyContent: 'center'
    }
})

export default Bouncer