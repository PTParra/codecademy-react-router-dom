export const PokemonCard = ({name, abilities, sprite, types}) => {

    return(
        <article>
            <h1>{name}</h1>
            <img src={sprite} alt="" />
            <p>Possible Abilities:</p>
            <ul>
                {abilities.map((ability, index) => {
                    return(
                        <li key={index}>
                            <div>
                                <h4>{ability.ability.name}</h4>
                                {ability.is_hidden ? <p>Hidden ability</p> : ""}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {types.map((type, index) => {
                    return(
                        <li key={index}>
                            <h4 className={"types-of-pokemon " + type.type.name}>{type.type.name}</h4>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}