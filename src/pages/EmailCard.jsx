import { NavLink } from "react-router-dom"
import { useEmail } from "../main"

export const EmailCard = ({id, subject, read, inbox}) => {
    const { handleMarkAsRead } = useEmail();
    return (
        <>
        <li key={id}>
            <NavLink to={`/details/${id}`}>{subject}</NavLink>
            {inbox && !read && <button onClick={() => handleMarkAsRead(id)}>Mark as read</button>}
            </li>
        </>
    )
}