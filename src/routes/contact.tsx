import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/page-parts";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CiM" },
      { name: "description", content: "Partner with us, book a workshop, join the waitlist, or become a facilitator." },
    ],
  }),
  component: Contact,
});

const ctas = [
  { t: "Partner with us", b: "Corporates, government, schools, NGOs.", to: "/partners" },
  { t: "Book a workshop", b: "Bring Worth in Motion to your team.", to: "/worth-in-motion" },
  { t: "Join the waitlist", b: "Be first in line for the next cohort.", to: "/worth-in-motion" },
  { t: "Become a facilitator", b: "Lead the work in your community.", to: "/partners/facilitators" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Choose the door that's <em className="not-italic text-accent">yours</em>.</>}
        intro="There is more than one way in. Tell us who you are we'll meet you there."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-16">
          {ctas.map((c) => (
            <Link
              key={c.t}
              to={c.to}
              className="bg-background p-10 hover:bg-secondary/60 transition-colors"
            >
              <h3 className="font-display text-3xl">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.b}</p>
              <span className="mt-6 inline-block text-sm underline underline-offset-4 text-accent">
                Continue →
              </span>
            </Link>
          ))}
        </div>

        <form className="grid md:grid-cols-2 gap-6 max-w-3xl" onSubmit={(e) => e.preventDefault()}>
          <Field label="Name" />
          <Field label="Organisation" />
          <Field label="Email" type="email" />
          <Field label="Country" />
          <div className="md:col-span-2">
            <label className="eyebrow block mb-2">How can we help?</label>
            <textarea
              rows={5}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3 resize-none"
            />
          </div>
          <button className="md:col-span-2 justify-self-start mt-4 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm">
            Send →
          </button>
        </form>
      </Section>
    </>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        type={type}
        className="w-full bg-transparent border-b border-foreground/30 focus:border-accent outline-none py-3"
      />
    </div>
  );
}
