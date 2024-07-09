import { useParams } from "react-router-dom";

const MailboxDetals = (props)=>{
    const params = useParams();
    const mailbox = props.mailboxes.find((m) => m._id == params.id);

    console.log(mailbox);

    return(
        <>
        {mailbox ? 
            <div>
                <h2>Mailbox details</h2>
                <h3>Mailbox Holder Name: {mailbox?.boxHolder}</h3>
                <h3>Mailbox Size: {mailbox?.boxSize}</h3>
            </div> : <h4>Mailbox does not exist</h4>}
        </>    
        )

};
export default MailboxDetals;