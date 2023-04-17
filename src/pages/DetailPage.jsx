import { useParams } from "react-router"
import { useEmail } from "../main";

export const DetailPage = () => {
    const { emailId } = useParams();
    const { emails, sentEmails } = useEmail();

    const findEmail = emails.find(({id}) => id === Number(emailId)) ?? {};
    const {sender, subject, message} = findEmail;

    const findSentEmail = sentEmails.find(({id}) => id === Number(emailId)) ?? {};
    const {to, subject: sentSubject, message: sentMessage} = findSentEmail;

    return (
        <>
        {Object.keys(findEmail).length > 0 &&
            <div>
                <h1>{subject}</h1>
                <p>From: {sender}</p>
                <p>Message: {message}</p>
            </div>
        }
        {Object.keys(findSentEmail).length > 0 && 
            <div>
                <h1>{sentSubject}</h1>
                <p>To: {to}</p>
                <p>Message: {sentMessage}</p>
            </div>
        }       
        </>
    )
}