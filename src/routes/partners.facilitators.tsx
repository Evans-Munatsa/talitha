import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/cim-mission/04-answer.jpg";

export const Route = createFileRoute("/partners/facilitators")({
  head: () => ({
    meta: [
      { title: "Facilitators Partners CiM" },
      { name: "description", content: "Lead Worth in Motion in your community." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Facilitators"
        title={<>Lead the work in your <em className="not-italic text-accent">community</em>.</>}
        intro="We train, certify and equip facilitators to deliver Worth in Motion in classrooms, township halls, refugee centres and corporate spaces."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "Training pathway", b: "From foundation to lead-facilitator." },
            { t: "Toolkits", b: "Everything you need to run a cohort, in print and digital." },
            { t: "Income", b: "Paid pathways for certified facilitators." },
            { t: "Community", b: "A continent-wide network of practitioners." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Become a facilitator." primary={{ to: "/contact", label: "Apply now" }} />
    </>
  );
}
