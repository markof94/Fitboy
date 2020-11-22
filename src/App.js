import './styles.css';
import styled from 'styled-components'
import { useState } from 'react'
import SelectView from './Screens/SelectView'
import LogView from './Screens/LogView'
import DataView from './Screens/DataView'

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

`;

function App() {
  const [view, setView] = useState('select'); //select, log, data

  return (
    <Container>
      {view === 'select' &&
        <SelectView>
          {'select'}
        </SelectView>
      }
    </Container >
  )

  return null;
}

export default App;
