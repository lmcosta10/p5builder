function DebuffsCheck({ jokerDebuffs, membersDebuffs }:
    { jokerDebuffs: string[] | undefined, membersDebuffs: string[] | undefined }) {
    const allDebuffs = ["Remove buffs", "Decrease attack", "Decrease defense",
        "Decrease accuracy", "Dizzy", "Confuse", "Sleep", "Forget"];

    function OkIcon() {
        return (
            <div className="text-green-900">OK</div>
        )
    }

    function MissingIcon() {
        return (
            <div className="text-red-500">Missing</div>
        )
    }

    return (
        <div className="pt-4">
        <div className="font-semibold">Debuffs:</div>
        {allDebuffs.map(debuff => (
            <div key={debuff} className="flex gap-2">
                {debuff}
                {
                    jokerDebuffs?.includes(debuff)?OkIcon():
                    membersDebuffs?.includes(debuff)?OkIcon():MissingIcon()
                }
            </div>
        ))}
        </div>
    )
}

export default DebuffsCheck