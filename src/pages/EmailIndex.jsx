import { useEffect, useState } from "react";
import { emilService } from "../services/emails.service";
import { EmailList } from "../cmps/EmailList";

export function EmailIndex() {
  const [emails, setEmails] = useState(null);
  useEffect(() => {
    loadEmails();
  }, []);

  async function loadEmails() {
    const allEmails = await emilService.query();
    setEmails(allEmails);
    console.log(allEmails);
  }
  if (!emails) return <div>"Loading..."</div>;
  return (
    <section className="email-index">
      <EmailList emails={emails} />
    </section>
  );
}
