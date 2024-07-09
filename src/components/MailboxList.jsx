import { Link } from "react-router-dom";

const MailboxList = (props)=>{

    return(
        <ul>
            {props.mailboxes.map((mailbox)=>{
                return <Link to={`/mailbox/${mailbox._id}`}> 
                            <li key={mailbox._id} className="mailbox">{mailbox._id}</li>
                        </Link>
            })}
        </ul>
    )
};
export default MailboxList;