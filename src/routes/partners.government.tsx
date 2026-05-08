import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/cim-mission/06-bigger-play.jpg";

export const Route = createFileRoute("/partners/government")({
  head: () => ({
    meta: [
      { title: "Government Partners CiM" },
      { name: "description", content: "Public infrastructure for human development at scale." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Government"
        title={<>Public infrastructure for the <em className="not-italic text-accent">next generation</em>.</>}
        intro="A platform built for ministries, departments and national programmes interoperable, accountable, sovereign."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "National scale", b: "Designed for millions, not thousands." },
            { t: "Data sovereignty", b: "Hosted to meet national requirements." },
            { t: "Cross-ministry", b: "Bridges education, employment, social development." },
            { t: "Measurable", b: "Outcomes reportable to citizens, not buried." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Bring this to your country." primary={{ to: "/contact", label: "Request a briefing" }} />
    </>
  );
}
