import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/cim-mission/06-bigger-play.jpg";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "CiM Platform CiM" },
      { name: "description", content: "The shared infrastructure beneath the ecosystem." },
    ],
  }),
  component: P,
});

function P() {
  return (
    <>
      <EditorialHero
        eyebrow="CiM Platform"
        title={<>The <em className="not-italic text-accent">infrastructure</em> beneath the movement.</>}
        intro="APIs, identity, data ownership, accountability. The technical layer that lets every part of the ecosystem speak the same language."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "Shared identity", b: "One trusted record across schools, partners and programmes." },
            { t: "Data ownership", b: "Learner-owned by default. Auditable. Portable." },
            { t: "Open partnerships", b: "Integrations with public and private systems alike." },
            { t: "Accountability", b: "Outcomes measured publicly, not buried in PDFs." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-3xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Build on the platform." primary={{ to: "/contact", label: "Get integration access" }} />
    </>
  );
}
