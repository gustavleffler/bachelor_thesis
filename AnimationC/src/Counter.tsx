
import React from 'react';
import styled from 'styled-components'


const View = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Text = styled.span`
    font-size: 16px;
`


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


    return (<View style={{backgroundColor: color}}>
        <Text>{count}</Text>
    </View>)
}

export default Counter