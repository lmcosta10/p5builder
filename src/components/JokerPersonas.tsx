import { useState } from "react";

const elementMapTable: Record<string, string> = {
    Matador: "Psychic",
    "Jack Frost": "Ice",
    Archangel: "Light",
    Makami: "Nuke",
    Pixie: "Elec",
    "Jack-o'-Lantern": "Fire",
    "Leanan Sidhe": "Psychic"
};

const debuffMap : Record<string, string[]> = {
    "Archangel": ["Dizzy"],
    "Matador": ["Decrease attack", "Decrease accuracy"]
};

function JokerPersonas(
    {onSelectElements, onSelectDebuffs}: {
        onSelectElements: React.Dispatch<React.SetStateAction<string[] | undefined>>;
        onSelectDebuffs: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    }
) {
    const [selectedPersonas, setSelectedPersonas] = useState<string[]>(["", "", ""]);
    const allPersonas = ["Matador", "Jack Frost", "Archangel", "Makami", "Pixie", "Jack-o'-Lantern", "Leanan Sidhe"];

    function changePersonas(index: number, newPersona: string) {
        setSelectedPersonas(oldSelectedPersonas => {
            const newSelectedPersonas = [...oldSelectedPersonas];
            newSelectedPersonas[index - 1] = newPersona;

            onSelectElements(() => newSelectedPersonas.map(s => elementMapTable[s]));
            onSelectDebuffs(newSelectedPersonas.flatMap(s => debuffMap[s]));

            return newSelectedPersonas;
        });
    }

    function personasSelection(index: number) {
        return (
            <div className="flex">
                <select
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

                <form action="">
                    <label>[TODO] Level: </label>
                    <input type="number" className="w-10" max="99" min="1"></input>
                </form>
            </div>
        )
    }

    return (
        <>
            <div>Select your personas:
                <div>{personasSelection(1)}</div>
                <div>{personasSelection(2)}</div>
                <div>{personasSelection(3)}</div>
            </div>
        </>
    )
}

export default JokerPersonas