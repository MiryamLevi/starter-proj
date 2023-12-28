import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { emailService } from "../services/emails.service";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

{
  /* 
• Allow deleting an email (using the service)
*/
}

// {
//     id: 'e102',
//     subject: 'Winter Sale!',
//     body: 'All the shirts in 50%',
//     isRead: false,
//     isStarred: false,
//     sentAt : 1702976732,
//     removedAt : null, //for later use
//     from: 'sales@momo.com',
//     to: 'user@appsus.com'
//     }

export function EmailDetails() {
  const [email, setEmail] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadEmail();
  }, []);

  async function loadEmail() {
    try{
    const email = await emailService.getById(params.emailID);
    email.isRead = true;
    setEmail(email);
    }
    catch(error)
    {
      navigate('/inbox')
      console.log('Has issues loading email', error);
    }
  }

  function onEmailDelete(emailID)
  {
    emailService.remove(emailID);
    navigate("/inbox");
  }

  if (!email) return <div>Loading...</div>;
  let emailSentAt = new Date(email.sentAt * 1000).toLocaleString();

  function onBack() {
    console.log("isRead", email.isRead);
    emailService.save(email);
    navigate("/inbox");
  }

  return (
    <section className="email-details">
      <label onClick={onBack}>
        <IoIosArrowRoundBack />
      </label>
      <label htmlFor="delete" onClick={()=>onEmailDelete(email.id)}><FaRegTrashAlt/></label>
      <div className="details-container">
        <h2>{email.subject}</h2>
        <h4>From: {email.from}</h4>
        <h4>To: {email.to}</h4>
        <h4> {emailSentAt}</h4>
        <h3>{email.body}</h3>
      </div>
    </section>
  );
}
