import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/cim-mission/05-opportunity.jpg";

export const Route = createFileRoute("/partners/pilots")({
  head: () => ({
    meta: [
      { title: "Pilot Programmes Partners CiM" },
      { name: "description", content: "Co-design the first wave of programmes with us." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Pilot Programmes"
        title={<>Co-design the <em className="not-italic text-accent">first wave</em>.</>}
        intro="A small number of partner organisations are invited to shape the founding pilots across schools, corporates and municipalities."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "Limited cohorts", b: "Six to ten partner pilots in the founding year." },
            { t: "Co-design", b: "Build the model with your context, not against it." },
            { t: "Founding partner status", b: "Permanent recognition as a builder of the system." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Apply to pilot." primary={{ to: "/contact", label: "Express interest" }} />
    </>
  );
}
