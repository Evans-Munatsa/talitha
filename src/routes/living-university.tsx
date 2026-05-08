import { createFileRoute } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import heroImg from "@/assets/four-to-rise/05-creativity.jpg";

export const Route = createFileRoute("/living-university")({
  head: () => ({
    meta: [
      { title: "Living University CiM" },
      { name: "description", content: "Learn by doing. Mentored by humans. Pathways from training to employment." },
    ],
  }),
  component: LU,
});

function LU() {
  return (
    <>
      <EditorialHero
        eyebrow="Living University"
        title={<>Education that <em className="not-italic text-accent">moves</em>.</>}
        intro="A learn-by-doing model where mentorship, real-world projects and employer pathways replace lecture halls."
        image={heroImg}
        imageAlt="CiM editorial"
      />
      <Section>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "Learn by doing", b: "Skill is built through real work, with real stakes." },
            { t: "Mentorship", b: "Every learner walks beside someone further along the path." },
            { t: "Internship → Employment", b: "Pathways designed with the partners who will hire." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-3xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand
        title="Help us build the curriculum."
        primary={{ to: "/contact", label: "Partner on Living University" }}
      />
    </>
  );
}
