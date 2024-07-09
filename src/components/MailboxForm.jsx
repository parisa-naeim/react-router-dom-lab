import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props)=>{
    
    const[formData, setFormData] = useState({boxHolder: "", boxSize: ""});
    const navigate = useNavigate();

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        navigate("/mailbox")
    }
    
    const _handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

return(
    <form style={{width: "50%"}} onSubmit={_handleSubmit}>
        <label>
            Box Holder Name:
            <input type="text" name="boxHolder" value={formData.boxHolder} onChange={_handleChange} />
        </label>
        
        <label>
            Box Size:
            <select onChange={_handleChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </label>
        
        <button type="submit">Submit</button>
    </form>
)

};
export default MailboxForm;