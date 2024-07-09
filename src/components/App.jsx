import { Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import MailboxList from "./MailboxList";
import MailboxDetals from "./MailboxDetails";
import MailboxForm from "./MailboxForm";
import { useState } from "react";
import "./App.css";

const App = () => {
  
  const [mailboxList, setMailboxList] = useState([{_id: 1, boxHolder: "Parisa", boxSize: "medium"}]);
  
  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxList.length + 1;
    setMailboxList([...mailboxList, newMailbox]);
  }
  
  return( <>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<h2>Post Office</h2>}/>
      <Route path="/mailbox" element={<MailboxList mailboxes={mailboxList} />}/>
      <Route path="/mailbox/:id" element ={<MailboxDetals mailboxes={mailboxList} />}/>
      <Route path ="/mailbox/new" element = {<MailboxForm addMailbox={addMailbox} />}/>
    </Routes>
    </>
  );
  
};

export default App;
