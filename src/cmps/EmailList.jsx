export function EmailList({ emails }) {
  return (
    <>
      {emails.map((email) => {
        <li>{email.title} | email.time </li>;
      })}
    </>
  );
}
