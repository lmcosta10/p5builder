import { useState, type ChangeEvent } from "react";
import { debuffMap } from '../maps/PersonasMaps';

const elementMapTable: Record<string, string> = {
    Matador: "Psychic",
    "Jack Frost": "Ice",
    Archangel: "Bless",
    Makami: "Nuke",
    Pixie: "Elec",
    "Jack-o'-Lantern": "Fire",
    "Leanan Sidhe": "Psychic",
    "Izanagi Picaro": "Phys"
};

function JokerPersonas(
    {onSelectElements, onSelectDebuffs}: {
        onSelectElements: React.Dispatch<React.SetStateAction<string[] | undefined>>;
        onSelectDebuffs: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    }
) {
    const [selectedPersonas, setSelectedPersonas] = useState<string[]>(["", "", ""]);
    const [, setSelectedLevels] = useState<string[]>(["", "", ""]);
    const allPersonas = ["Matador", "Jack Frost", "Archangel", "Makami", "Pixie", "Jack-o'-Lantern", "Leanan Sidhe"];

    function changePersonas(index: number, newPersona: string) {
        setSelectedPersonas(oldSelectedPersonas => {
            const newSelectedPersonas = [...oldSelectedPersonas];
            newSelectedPersonas[index - 1] = newPersona;

            onSelectElements(() => newSelectedPersonas.map(s => elementMapTable[s]));

            return newSelectedPersonas;
        });
    }

    function getDebuff(persona: string, level: string) {
        const levelAsNum = Number(level);
        
        const debuffKeys = Object.keys(debuffMap)
        .filter(s => s.startsWith(`${persona}-`))
        .map(s => ({
            level: Number(s.split("-")[1]),
            value: debuffMap[s],
        }))
        .filter(s => s.level <= levelAsNum)
        .sort((a, b) => b.level - a.level); // get highest

        return debuffKeys[0]?.value ?? [];
    }

    function handleLevelChange(e: ChangeEvent<HTMLInputElement>, index: number) {
        setSelectedLevels(oldSelectedLevels => {
            const newSelectedLevels = [...oldSelectedLevels];
            newSelectedLevels[index - 1] = e.target.value;

            onSelectDebuffs(selectedPersonas.flatMap((s, ind) => getDebuff(s, newSelectedLevels[ind])));

            return newSelectedLevels;
        });
    }

    function personasSelection(index: number) {
        return (
            <div className="flex">
                <select className="w-40"
                    value={selectedPersonas[index - 1]}
                    onChange={(e) => changePersonas(index, e.target.value)}
                >
                    <option value="">Select...</option>
                    {allPersonas
                        .filter(persona => !selectedPersonas.includes(persona) ||
                        persona === selectedPersonas[index - 1]) // when selected
                        .map(persona => (
                        <option key={persona} value={persona}>
                            {persona}
                        </option>
                    ))}
                </select>

                <div>
                    <label>Level: </label>
                    <input type="number" className="w-10" max="99" min="1" onChange={(e) => handleLevelChange(e, index)}></input>
                </div>
            </div>
        )
    }

    return (
        <>
            <div>
                <div className="font-semibold">Select your personas:</div>
                {personasSelection(1)}
                {personasSelection(2)}
                {personasSelection(3)}
                {personasSelection(4)}
                {personasSelection(5)}
                {personasSelection(6)}
                {personasSelection(7)}
                {personasSelection(8)}
                {personasSelection(9)}
                {personasSelection(10)}
            </div>
        </>
    )
}

export default JokerPersonas