import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails }) {
  return (
    <ul className="email-list">
      {emails.map((email) => (
        <li key={email.key}>
          <EmailPreview email={email} />;
        </li>
      ))}
    </ul>
  );
}
