import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/four-to-rise/04-opportunity.jpg";

export const Route = createFileRoute("/partners/corporates")({
  head: () => ({
    meta: [
      { title: "Corporates Partners CiM" },
      { name: "description", content: "Build a future workforce through identity-first development." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Corporates"
        title={<>A future workforce, <em className="not-italic text-accent">built with you</em>.</>}
        intro="Move beyond CSR pageantry. Co-build pipelines of talent who know themselves, can do the work, and stay."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "Talent pipelines", b: "Pre-screened, identity-anchored, work-ready." },
            { t: "Shared dashboards", b: "Outcomes you can show your board and your country." },
            { t: "ESG with substance", b: "Measurable human outcomes, not photo ops." },
            { t: "Pilot first", b: "Start with one cohort. Scale on what works." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Co-build a cohort with us." primary={{ to: "/contact", label: "Start a conversation" }} />
    </>
  );
}
