
import React from 'react';
import styled from 'styled-components'

import Counter from './Counter'

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    flex: 1;
`

const CounterRow: React.FC = () => {

    return (<Wrap>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
    </Wrap>)
}

export default CounterRow