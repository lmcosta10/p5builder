import { useState, type ChangeEvent } from "react";
import { debuffMap } from '../maps/MembersMaps';

const elementMapTable: Record<string, string> = {
    Ryuji: "Elec",
    Morgana: "Wind",
    Ann: "Fire",
    Yusuke: "Ice",
    Makoto: "Nuke"
};

function PartyMembers(
    {onSelectElements, onSelectDebuffs}: {
        onSelectElements: React.Dispatch<React.SetStateAction<string[] | undefined>>;
        onSelectDebuffs: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    }
) {
    const [selectedMembers, setSelectedMembers] = useState<string[]>(["", "", ""]);
    const [, setSelectedLevels] = useState<string[]>(["", "", ""]);
    const allMembers = ["Ryuji", "Morgana", "Ann", "Yusuke", "Makoto"];

    function changeMembers(index: number, newMember: string) {
        setSelectedMembers(oldSelectedMembers => {
            const newSelectedMembers = [...oldSelectedMembers];
            newSelectedMembers[index - 1] = newMember;

            onSelectElements(() => newSelectedMembers.map(s => elementMapTable[s]));

            return newSelectedMembers;
        });
    }

    function getDebuff(member: string, level: string) {
        const levelAsNum = Number(level);

        const debuffKeys = Object.keys(debuffMap)
        .filter(s => s.startsWith(`${member}-`))
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

            onSelectDebuffs(selectedMembers.flatMap((s, ind) => getDebuff(s, newSelectedLevels[ind])));

            return newSelectedLevels;
        });
    }

    function partyMembersSelection(index: number) {
        return (
            <div className="flex">
                <select className="w-40 border border-gray-300 rounded-md mt-1"
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

                <div className="pl-1">
                    <label>Level: </label>
                    <input type="number" className="w-12 p-1 border border-gray-300 rounded-md mt-1"
                    max="99" min="1" onChange={(e) => handleLevelChange(e, index)}></input>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-4">
            <div>
                <div className="font-semibold">Select your party members:</div>
                <div>{partyMembersSelection(1)}</div>
                <div>{partyMembersSelection(2)}</div>
                <div>{partyMembersSelection(3)}</div>
            </div>
        </div>
    )
}

export default PartyMembers