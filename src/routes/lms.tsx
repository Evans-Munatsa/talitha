import { createFileRoute } from "@tanstack/react-router";
import { CTABand, NumberedList, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/cim-mission/04-answer.jpg";

export const Route = createFileRoute("/lms")({
  head: () => ({
    meta: [
      { title: "The Mirror A human development platform" },
      { name: "description", content: "The Mirror is an AI-powered LMS designed for becoming, not credentialing." },
    ],
  }),
  component: LMS,
});

function LMS() {
  return (
    <>
      <EditorialHero
        eyebrow="LMS / The Mirror"
        title={<>A human development <em className="not-italic text-accent">platform</em>.</>}
        intro="More than a learning system. The Mirror is where identity, growth and skill live in one place owned by the learner."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <NumberedList
          items={[
            { n: "01", title: "App experience", body: "Designed for daily, intimate use. Quiet, unhurried, beautiful." },
            { n: "02", title: "AI companion", body: "Trained on growth and reflection never on engagement metrics." },
            { n: "03", title: "Progress tracking", body: "Identity, skill and contribution measured together." },
            { n: "04", title: "Dashboards", body: "Insights for learners, schools, partners privacy-first by design." },
            { n: "05", title: "User-owned data", body: "You own your story. Export, delete, share on your terms." },
            { n: "06", title: "Privacy", body: "Encryption at rest and in transit. No selling. Ever." },
          ]}
        />
      </Section>
      <CTABand
        title="See The Mirror in motion."
        primary={{ to: "/contact", label: "Request a demo" }}
        secondary={{ to: "/ecosystem", label: "How it connects" }}
      />
    </>
  );
}
