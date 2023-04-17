import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/emailData";

export const EmailContext = createContext();

export const EmailProvider = ({children}) => {
    const [emails, setEmails] = useState([]);
    const [sentEmails, setSentEmails] = useState([]);

    const getEmails = async () => {
        try {
            const {data: {emails, sentEmails}} = await fakeFetch(`https://example.com/api/allemails`);
            setEmails(emails);
            setSentEmails(sentEmails)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => getEmails, []);

    const handleMarkAsRead = clickedId => {
        setEmails(emails.map(email => email.id === clickedId ? {...email, read: !email.read} : email))
    }

    return (
        <EmailContext.Provider value={{emails, sentEmails, handleMarkAsRead}}>
            {children}
        </EmailContext.Provider>
    )
}

export const useEmail = () => useContext(EmailContext)