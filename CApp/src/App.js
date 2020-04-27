import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import CounterRow from './CounterRow'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

function App() {
  return (
    <>
      <Page>
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
      </Page>
    </>
  );
}


export default App;
