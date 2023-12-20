import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { emailService } from "../services/emails.service";

{
  /* • Routable component (page)
• show the entire email
• Allow deleting an email (using the service)
• Allow navigating back to the list */
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

export function EmailDetails({onEmailDelete}) {
  const [email, setEmail] = useState(null);
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    loadEmail();
  }, []);

  async function loadEmail() {
    const email = await emailService.getById(params.emailID);
    email.isRead = true
    setEmail(email);
  }

  if (!email) return <div>Loading...</div>;
  let emailSentAt = new Date(email.sentAt * 1000).toLocaleString();

  function onBack() {
    console.log("isRead", email.isRead)
    emailService.save(email)
    navigate('/inbox')
  }

  return (
    <section className="email-details">
      <label onClick={onBack}> Back </label>
      <h1> Email Details</h1>
      <h3>From: {email.from}</h3>
      <h4>To: {email.to}</h4>
      <h2>Time: {emailSentAt}</h2>
      <h3>Subject: {email.subject}</h3>
      <h3>Content:{email.body}</h3>
    </section>
  );
}
