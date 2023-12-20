import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails, onRemoveEmail, onEmailPreviewClicked }) {
  return (
    <ul className="email-list">
      {emails.map((email) => (
        <li key={email.key}>
          <EmailPreview email={email} onRemoveEmail={onRemoveEmail} onEmailPreviewClicked={onEmailPreviewClicked}/>
        </li>
      ))}
    </ul>
  );
}
