import { useState } from "react";

const elementMapTable: Record<string, string> = {
    Ryuji: "Elec",
    Morgana: "Wind",
    Ann: "Fire",
    Yusuke: "Ice",
    Makoto: "Nuke"
};

function PartyMembers(
    {onSelect}: {
        onSelect: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    }
) {
    const [selectedMembers, setSelectedMembers] = useState<string[]>(["", "", ""]);
    const allMembers = ["Ryuji", "Morgana", "Ann", "Yusuke", "Makoto"];

    function changeMembers(index: number, newMember: string) {
        setSelectedMembers(oldSelectedMembers => {
            const newSelectedMembers = [...oldSelectedMembers];
            newSelectedMembers[index - 1] = newMember;

            onSelect(() => newSelectedMembers.map(s => elementMapTable[s]));

            return newSelectedMembers;
        });
    }

    function partyMembersSelection(index: number) {
        return (
            <select
                value={selectedMembers[index - 1]}
                onChange={(e) => changeMembers(index, e.target.value)}
            >
                <option value="">Select...</option>
                {allMembers
                    .filter(member => !selectedMembers.includes(member) ||
                    member === selectedMembers[index - 1]) // when selected
                    .map(member => (
                    <option key={member} value={member}>
                        {member}
                    </option>
                ))}
            </select>
        )
    }

    return (
        <>
            <div>Select your party members:
                <div>{partyMembersSelection(1)}</div>
                <div>{partyMembersSelection(2)}</div>
                <div>{partyMembersSelection(3)}</div>
            </div>
        </>
    )
}

export default PartyMembers