import { useEmail } from "../main";
import { EmailCard } from "./EmailCard";

export const InboxPage = () => {
    const { emails } = useEmail();

    const unreadCount = emails.filter(({read}) => !read).length;
    const readCount = emails.filter(({read}) => read).length

    return (
        <>
        <h1>Inbox Page</h1>
        <p>Unread Emails: {unreadCount}</p>
        <p>Read Emails: {readCount}</p>
        <ul>
        {
            emails.map(email => 
                <EmailCard {...email} inbox/>
            )
        }
        </ul>
        </>
    )
}