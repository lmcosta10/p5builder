function ElementsCheck({ jokerElements, membersElements }:
    { jokerElements: string[] | undefined, membersElements: string[] | undefined }) {
    const allElements = ["Phys", "Gun", "Fire", "Ice", "Elec", "Wind", "Psychic", "Nuke", "Light", "Death"];

    function OkIcon() {
        return (
            <p>OK</p>
        )
    }

    function MissingIcon() {
        return (
            <p>Missing</p>
        )
    }

    return (
        <>
        {allElements.map(element => (
            <div key={element}>
                {element}
                <div>
                    {jokerElements?.includes(element)?OkIcon():
                    membersElements?.includes(element)?OkIcon():MissingIcon()}
                </div>
            </div>
        ))}
        </>
    )
}

export default ElementsCheck