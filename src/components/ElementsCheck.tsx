function ElementsCheck({ jokerElements, membersElements }:
    { jokerElements: string[] | undefined, membersElements: string[] | undefined }) {
    const allElements = ["Phys", "Gun", "Fire", "Ice", "Elec", "Wind", "Psychic", "Nuke", "Light", "Death"];

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
        {allElements.map(element => (
            <div key={element} className="flex gap-2">
                {element}
                {
                    jokerElements?.includes(element)?OkIcon():
                    membersElements?.includes(element)?OkIcon():MissingIcon()
                }
            </div>
        ))}
        </div>
    )
}

export default ElementsCheck