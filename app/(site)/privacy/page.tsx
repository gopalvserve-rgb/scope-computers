export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-wrap max-w-3xl prose-scope">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p>
          Computer Institute respects your privacy. We collect the information you voluntarily provide via admission,
          contact, inquiry, and resume-upload forms to process your request and communicate with you about our
          programs and services.
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Name, email, phone, and postal address from forms you submit.</li>
          <li>Educational background and course preferences from admission forms.</li>
          <li>Resume content (if uploaded on the placement page).</li>
        </ul>
        <h2>How We Use It</h2>
        <p>We use your information to respond to inquiries, enroll you in courses, share placement opportunities, and send important updates. We never sell personal data.</p>
        <h2>Data Retention</h2>
        <p>We retain form submissions for as long as needed to provide services and fulfill legal obligations.</p>
        <h2>Your Rights</h2>
        <p>Email <a href="mailto:jodhpurscope@gmail.com">jodhpurscope@gmail.com</a> to request access, correction, or deletion of your data.</p>
      </div>
    </section>
  );
}
