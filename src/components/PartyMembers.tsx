import { useState } from "react";

const elementMapTable: Record<string, string> = {
    Ryuji: "Elec",
    Morgana: "Wind",
    Ann: "Fire",
    Yusuke: "Ice",
    Makoto: "Nuke"
};

const debuffMap : Record<string, string[]> = {
    "Ann": ["Decrease attack", "Remove buffs", "Sleep"],
    "Makoto": ["Forget"]
};

function PartyMembers(
    {onSelectElements, onSelectDebuffs}: {
        onSelectElements: React.Dispatch<React.SetStateAction<string[] | undefined>>;
        onSelectDebuffs: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    }
) {
    const [selectedMembers, setSelectedMembers] = useState<string[]>(["", "", ""]);
    const allMembers = ["Ryuji", "Morgana", "Ann", "Yusuke", "Makoto"];

    function changeMembers(index: number, newMember: string) {
        setSelectedMembers(oldSelectedMembers => {
            const newSelectedMembers = [...oldSelectedMembers];
            newSelectedMembers[index - 1] = newMember;

            onSelectElements(() => newSelectedMembers.map(s => elementMapTable[s]));
            onSelectDebuffs(newSelectedMembers.flatMap(s => debuffMap[s]));

            return newSelectedMembers;
        });
    }

    function partyMembersSelection(index: number) {
        return (
            <div className="flex">
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

                <form action="">
                    <label>[TODO] Level: </label>
                    <input type="number" className="w-10" max="99" min="1"></input>
                </form>
            </div>
        )
    }

    return (
        <div className="pt-4">
            <div>Select your party members:
                <div>{partyMembersSelection(1)}</div>
                <div>{partyMembersSelection(2)}</div>
                <div>{partyMembersSelection(3)}</div>
            </div>
        </div>
    )
}

export default PartyMembers