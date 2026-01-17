import JokerPersonas from './components/JokerPersonas';
import PartyMembers from './components/PartyMembers';
import ElementsCheck from './components/ElementsCheck';
import { useState } from 'react';

// FIXME:
// Cannot update a component (`App`) while rendering a different component (`PartyMembers`)
// Cannot update a component (`App`) while rendering a different component (`JokerPersonas`)
//
// BUG: erases Joker elements after Party change, and vice-versa
function App() {
  const [elements, setElements] = useState<string[]>();

  return (
    <>
      <JokerPersonas onSelect={elements => setElements(elements)} />
      <PartyMembers onSelect={elements => setElements(elements)} />
      <ElementsCheck elements={elements} />
    </>
  )
}

export default App
