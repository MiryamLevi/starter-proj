// •  Present an email preview
// • Renders the subject (with text size limit)
// • Gives visual indication for read/unread 
// • Support hover state

export function EmailPreview({email}) {
    return (
    <section className="email-preview">
        <h1> {email.subject}</h1>
    </section>
    );
}