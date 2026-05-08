import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import { ImageCarousel } from "@/components/image-carousel";
import partnersHero from "@/assets/cim-mission/05-opportunity.jpg";
import slide1 from "@/assets/cim-mission/06-bigger-play.jpg";
import slide2 from "@/assets/cim-mission/04-answer.jpg";
import slide3 from "@/assets/four-to-rise/04-opportunity.jpg";
import slide4 from "@/assets/four-to-rise/05-creativity.jpg";
import slide5 from "@/assets/four-to-rise/02-young.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners CiM" },
      { name: "description", content: "Corporates, government, schools, NGOs and facilitators building shared infrastructure." },
    ],
  }),
  component: Partners,
});

const groups = [
  { to: "/partners/corporates", t: "Corporates", b: "Talent, opportunity, and shared accountability." },
  { to: "/partners/government", t: "Government", b: "Policy infrastructure for the next generation." },
  { to: "/partners/schools-ngos", t: "Schools & NGOs", b: "Bring identity-first development to your learners." },
  { to: "/partners/facilitators", t: "Facilitators", b: "Lead Worth in Motion in your community." },
  { to: "/partners/pilots", t: "Pilot Programmes", b: "Co-design the first wave with us." },
];

function Partners() {
  return (
    <>
      <EditorialHero
        eyebrow="Partners"
        title={<>Build the <em className="not-italic" style={{ color: "var(--warm-brown)" }}>shared infrastructure</em>.</>}
        intro="No single sector can do this alone. We bring partners into a system designed for accountability, data sharing and measurable human outcomes."
        image={partnersHero}
        imageAlt="From self expression to opportunity. Partners across the ecosystem."
      />
      <Section eyebrow="Why partnership matters" title={<>Different mandates. <em className="not-italic text-accent">Same generation.</em></>}>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { t: "What you bring", b: "Mandate, capital, talent, classrooms, lived expertise." },
            { t: "What we bring", b: "Identity-first methodology, platform, data layer, network." },
            { t: "What we share", b: "Outcomes, accountability, infrastructure, trust." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Partner pathways">
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {groups.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/60 transition-colors flex justify-between gap-6 items-start"
            >
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{g.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{g.b}</p>
              </div>
              <ArrowUpRight className="size-5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </Section>
      <ImageCarousel
        eyebrow="Partners in motion"
        title={<>Where the <em className="not-italic" style={{ color: "var(--warm-brown)" }}>work</em> happens.</>}
        slides={[
          { src: slide1, alt: "Orchestration layer", caption: "Infrastructure" },
          { src: slide2, alt: "Confidence first", caption: "Confidence" },
          { src: slide3, alt: "Opportunity is uneven", caption: "Opportunity" },
          { src: slide4, alt: "Creativity is intelligence in motion", caption: "Creativity" },
          { src: slide5, alt: "Africa is young", caption: "Generation" },
        ]}
      />
      <Outlet />
    </>
  );
}
