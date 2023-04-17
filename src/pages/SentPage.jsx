import { useEmail } from "../main"
import { EmailCard } from "./EmailCard";

export const SentPage = () => {
    const { sentEmails } = useEmail();
    return (
        <>
        <h1>Sent Page</h1>
        <ul>
        {
            sentEmails.map(email => <EmailCard {...email} />)
        }
        </ul>
        </>
    )
}