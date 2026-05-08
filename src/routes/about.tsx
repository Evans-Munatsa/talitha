import { createFileRoute } from "@tanstack/react-router";
import { CTABand, NumberedList, PageHero, Section } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CiM" },
      { name: "description", content: "A bridge-builder movement for identity, inclusion, youth and mental health." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A bridge-builder for the <em className="not-italic text-accent">next generation</em>.</>}
        intro="CiM was born from a single conviction: young people deserve to know who they are before the world tells them who to become."
      />
      <Section eyebrow="Founder note" title={<>This is not a CV. It is a calling.</>}>
        <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-muted-foreground">
          <p>
            For years I sat between worlds corporate boardrooms, government halls, township
            classrooms, refugee centres. I kept hearing the same silence: a generation full of
            potential, surrounded by systems that could not see them.
          </p>
          <p>
            CiM is the answer I wish I had been given. A movement. A platform. An
            infrastructure built so identity, dignity and opportunity finally move together.
          </p>
        </div>
      </Section>
      <Section eyebrow="What we stand for">
        <NumberedList
          items={[
            { n: "01", title: "Identity", body: "Self-knowledge is the first skill. Everything else builds on it." },
            { n: "02", title: "Inclusion", body: "Neurodiversity, language, gender, ability designed in, never bolted on." },
            { n: "03", title: "Youth", body: "Built with young people, not for them." },
            { n: "04", title: "Mental health", body: "Wellbeing is infrastructure, not a workshop." },
          ]}
        />
      </Section>
      <CTABand
        title="Walk the journey with us."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/ecosystem", label: "See the ecosystem" }}
      />
    </>
  );
}
