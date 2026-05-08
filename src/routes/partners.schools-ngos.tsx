import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/four-to-rise/02-young.jpg";

export const Route = createFileRoute("/partners/schools-ngos")({
  head: () => ({
    meta: [
      { title: "Schools & NGOs Partners CiM" },
      { name: "description", content: "Bring identity-first development to your learners and communities." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Schools & NGOs"
        title={<>Bring this to your <em className="not-italic text-accent">learners</em>.</>}
        intro="Worth in Motion and The Mirror are designed to slot into existing programmes extending what you already do, not replacing it."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "Plug-in curriculum", b: "Use as a 9-week module, a year-long thread, or a full programme." },
            { t: "Train your team", b: "Facilitator certification included." },
            { t: "Funded pathways", b: "We help connect funders to your cohorts." },
            { t: "Inclusion-first", b: "Designed for diverse classrooms and contexts." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Bring Worth in Motion to your school." primary={{ to: "/contact", label: "Get the curriculum" }} />
    </>
  );
}
