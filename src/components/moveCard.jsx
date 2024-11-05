export const MoveCard = ({name, damageClass, power, pp, type}) => {

    return(
        <article>
            <h1>{name}</h1>
            <p>Damage Type: {damageClass}</p>
            <p>Power: {power}</p>
            <p>PP: {pp}</p>
            <p>Type: {type}</p>
        </article>
    )
}