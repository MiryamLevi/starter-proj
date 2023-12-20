// •  Present an email preview
// • Renders the subject (with text size limit)
// • Gives visual indication for read/unread
// • Support hover state
import { GoTrash } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


export function EmailPreview({ email, onRemoveEmail, onEmailPreviewClicked }) {
  
  const datetime = new Date(email.sentAt * 1000).toLocaleString("en-US");
  const fromName = email.from.split("@")[0]

    const textStyle = {
      fontWeight: email.isRead ? 'normal' : 'bold',
    };

  return (
    <Link to={`/inbox/${email.id}`}>
    <section className="email-preview" onClick={()=>{onEmailPreviewClicked(email.id)}}>
      {/* <button onClick={()=>onRemoveEmail(email.id)}><GoTrash /></button> */}
      <input type="checkbox"></input>
      <label><CiStar/></label>
     <p style={textStyle}> {fromName} | {email.subject} | {datetime} </p>
    </section>
    </Link>
  );
}
