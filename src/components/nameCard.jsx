import { NavLink } from "react-router-dom"


export const NameCard = ({title, url}) => {

    return (
        <article>
            <NavLink to={url}>{title}</NavLink>
        </article>
    )
}