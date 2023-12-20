import { useEffect, useState } from "react";
import { emailService } from "../services/emails.service";
import { EmailList } from "../cmps/EmailList";

export function EmailIndex() {
  const [emails, setEmails] = useState(null);
  useEffect(() => {
    loadEmails();
  }, []);

  async function loadEmails() {
    const allEmails = await emailService.query();
    setEmails(allEmails);
    console.log(allEmails);
  }

  async function onRemoveEmail(emailID) {
    try {
      await emailService.remove(emailID);
      setEmails((prevEmails) => {
        return prevEmails.filter((email) => email.id !== emailID);
      });
    } catch (error) {
      console.log("error:", error);
    }
  }

  function onEmailPreviewClicked(emailID) {
    setEmails((prevEmails) => {
      return prevEmails.map((email) => {
        if (email.id === emailID) email.isRead = true;
      });
    });
    console.log("email clicked");
  }

  if (!emails) return <div>"Loading..."</div>;
  return (
    <section className="email-index">
      <EmailList
        emails={emails}
        onRemoveEmail={onRemoveEmail}
        onEmailPreviewClicked={onEmailPreviewClicked}
      />
    </section>
  );
}
