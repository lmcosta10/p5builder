import JokerPersonas from './components/JokerPersonas';
import PartyMembers from './components/PartyMembers';
import ElementsCheck from './components/ElementsCheck';
import DebuffsCheck from './components/DebuffsCheck';
import { useState } from 'react';

// FIXME:
// Cannot update a component (`App`) while rendering a different component (`PartyMembers`)
// Cannot update a component (`App`) while rendering a different component (`JokerPersonas`)
function App() {
  const [jokerElements, setJokerElements] = useState<string[]>();
  const [membersElements, setMembersElements] = useState<string[]>();
  const [jokerDebuffs, setJokerDebuffs] = useState<string[]>();
  const [membersDebuffs, setMembersDebuffs] = useState<string[]>();

  return (
    <div className="p-2">
      <JokerPersonas onSelectElements={setJokerElements} onSelectDebuffs={setJokerDebuffs} />
      <PartyMembers onSelectElements={setMembersElements} onSelectDebuffs={setMembersDebuffs} />
      <ElementsCheck jokerElements={jokerElements} membersElements={membersElements} />
      <DebuffsCheck jokerDebuffs={jokerDebuffs} membersDebuffs={membersDebuffs} />
    </div>
  )
}

export default App
