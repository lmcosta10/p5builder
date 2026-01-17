import JokerPersonas from './components/JokerPersonas';
import PartyMembers from './components/PartyMembers';
import ElementsCheck from './components/ElementsCheck';
import { useState } from 'react';

// FIXME:
// Cannot update a component (`App`) while rendering a different component (`PartyMembers`)
// Cannot update a component (`App`) while rendering a different component (`JokerPersonas`)
function App() {
  const [jokerElements, setJokerElementslements] = useState<string[]>();
  const [membersElements, setMembersElements] = useState<string[]>();

  return (
    <div className="p-2">
      <JokerPersonas onSelect={setJokerElementslements} />
      <PartyMembers onSelect={setMembersElements} />
      <ElementsCheck jokerElements={jokerElements} membersElements={membersElements} />
    </div>
  )
}

export default App
