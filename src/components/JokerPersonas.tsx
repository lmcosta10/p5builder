import { useState } from "react";

const elementMapTable: Record<string, string> = {
    Matador: "Psychic"
};

function JokerPersonas(
    {onSelect}: {
        onSelect: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    }
) {
    const [selectedPersonas, setSelectedPersonas] = useState<string[]>(["", "", ""]);
    const allPersonas = ["Matador"];

    function changePersonas(index: number, newPersona: string) {
        setSelectedPersonas(oldSelectedPersonas => {
            const newSelectedPersonas = [...oldSelectedPersonas];
            newSelectedPersonas[index - 1] = newPersona;

            onSelect(() => newSelectedPersonas.map(s => elementMapTable[s]));

            return newSelectedPersonas;
        });
    }

    function personasSelection(index: number) {
        return (
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