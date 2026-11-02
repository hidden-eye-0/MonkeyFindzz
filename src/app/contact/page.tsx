export default function Contact() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <div className="text-center">
          <p className="text-sm font-bold text-pink-400">GET IN TOUCH</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Contact MonkeyFindzz
          </h1>
          <p className="mt-4 text-[#756a70]">
            Have a question, suggestion or product idea? We would love to hear
            from you.
          </p>
        </div>

        <div className="card mt-10 p-6 md:p-8">
          <label className="text-sm font-semibold">Name</label>
          <input
            className="mt-2 mb-5 w-full rounded-2xl border border-pink-100 p-3 outline-none"
            placeholder="Your name"
          />

          <label className="text-sm font-semibold">Email</label>
          <input
            className="mt-2 mb-5 w-full rounded-2xl border border-pink-100 p-3 outline-none"
            placeholder="you@example.com"
            type="email"
          />

          <label className="text-sm font-semibold">Message</label>
          <textarea
            className="mt-2 mb-5 min-h-32 w-full rounded-2xl border border-pink-100 p-3 outline-none"
            placeholder="Your message"
          />

          <button className="btn btn-primary w-full" type="button">
            Send message
          </button>
          <p className="mt-3 text-center text-xs text-[#756a70]">
            Demo contact form — connect your preferred form service before
            launch.
          </p>
        </div>
      </div>
    </section>
  );
}
