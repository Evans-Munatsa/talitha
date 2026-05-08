import { createFileRoute } from "@tanstack/react-router";
import { CTABand, NumberedList, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/four-to-rise/03-mind.jpg";

export const Route = createFileRoute("/worth-in-motion")({
  head: () => ({
    meta: [
      { title: "Worth in Motion CiM" },
      { name: "description", content: "The entry point into the ecosystem. Identity-first development through nine modules." },
    ],
  }),
  component: WIM,
});

const modules = [
  ["01", "Self", "Who am I, beneath the noise?"],
  ["02", "Story", "The narratives I inherited and the ones I choose."],
  ["03", "Values", "What I will and will not negotiate."],
  ["04", "Voice", "Speaking what is true, with care."],
  ["05", "Skill", "What I can offer the world today."],
  ["06", "Mind", "How I think, learn, and recover."],
  ["07", "People", "The circle that shapes me."],
  ["08", "Purpose", "The work that asks for me."],
  ["09", "Motion", "The first step into the ecosystem."],
] as const;

function WIM() {
  return (
    <>
      <EditorialHero
        eyebrow="Core Programme"
        title={<>Worth in Motion.</>}
        intro="The doorway into the ecosystem. A nine-module journey that puts identity before opportunity delivered through app, web and live experiences, with The Mirror AI companion alongside."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section eyebrow="Three formats. One journey.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "App", b: "Daily, intimate. In your pocket." },
            { t: "Web", b: "Deep work in the browser." },
            { t: "Live", b: "In a room, with humans." },
          ].map((f) => (
            <div key={f.t} className="border rounded-md p-10 bg-secondary/40">
              <p className="font-display text-5xl">{f.t}</p>
              <p className="mt-4 text-muted-foreground">{f.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="The 9-Module Journey" title={<>From <em className="not-italic text-accent">self</em> to motion.</>}>
        <NumberedList
          items={modules.map(([n, title, body]) => ({ n, title, body }))}
        />
      </Section>
      <Section eyebrow="The Mirror" title={<>An AI companion that <em className="not-italic text-accent">remembers you</em>.</>}>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Not a chatbot. A companion. The Mirror reflects your becoming back to you privately,
          honestly, with patience.
        </p>
      </Section>
      <CTABand
        title="Begin your motion."
        primary={{ to: "/contact", label: "Join the waitlist" }}
        secondary={{ to: "/lms", label: "Meet The Mirror" }}
      />
    </>
  );
}
