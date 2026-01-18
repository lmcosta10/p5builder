import JokerPersonas from './components/JokerPersonas';
import PartyMembers from './components/PartyMembers';
import ElementsCheck from './components/ElementsCheck';
import DebuffsCheck from './components/DebuffsCheck';
import TechnicalsList from './components/TechnicalsList';
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
    <div className="grid grid-cols-4 gap-10 p-4">
      <div className="col-span-4">
        <JokerPersonas onSelectElements={setJokerElements} onSelectDebuffs={setJokerDebuffs} />
        <PartyMembers onSelectElements={setMembersElements} onSelectDebuffs={setMembersDebuffs} />
      </div>
      <div className="col-span-1">
        <ElementsCheck jokerElements={jokerElements} membersElements={membersElements} />
        <DebuffsCheck jokerDebuffs={jokerDebuffs} membersDebuffs={membersDebuffs} />
      </div>
      <div className="col-span-1">
        <TechnicalsList />
      </div>
    </div>
  )
}

export default App
