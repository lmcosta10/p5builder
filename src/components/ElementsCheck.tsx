function ElementsCheck({ elements }: { elements: string[] | undefined }) {
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

    console.log(elements);

    return (
        <>
        {allElements.map(element => (
            <div key={element}>
                {element}
                <div>
                    {elements?.includes(element)?OkIcon():MissingIcon()}
                </div>
            </div>
        ))}
        </>
    )
}

export default ElementsCheck