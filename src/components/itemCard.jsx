export const ItemCard = ({name, sprite, description}) => {

    return(
        <article>
            <h1>{name}</h1>
            <img src={sprite} alt="" />
            <p>{description}</p>
        </article>
    )
}