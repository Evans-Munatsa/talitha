import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, Section } from "@/components/page-parts";
import { EditorialHero } from "@/components/editorial-hero";
import { ImageCarousel } from "@/components/image-carousel";
import ecoHero from "@/assets/cim-mission/06-bigger-play.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "The Ecosystem CiM" },
      { name: "description", content: "Four connected layers Worth in Motion, Living University, Marketplace, Platform." },
    ],
  }),
  component: Eco,
});

const layers = [
  { n: "I", t: "Worth in Motion", b: "The entry point. Identity & purpose.", to: "/worth-in-motion" },
  { n: "II", t: "Living University", b: "Skill-building through real work & mentors.", to: "/living-university" },
  { n: "III", t: "CiM Marketplace", b: "Where worth meets opportunity.", to: "/marketplace" },
  { n: "IV", t: "CiM Platform", b: "The shared data infrastructure.", to: "/platform" },
];

function Eco() {
  return (
    <>
      <EditorialHero
        eyebrow="The Ecosystem"
        title={<>Four layers. One <em className="not-italic" style={{ color: "var(--warm-brown)" }}>connected</em> system.</>}
        intro="Each part stands alone. Together, they form an infrastructure for human development at continental scale."
        image={ecoHero}
        imageAlt="The bigger play. CiM as the orchestration layer."
      />
      <Section>
        <div className="grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-2">
          {layers.map((l) => (
            <Link
              to={l.to}
              key={l.n}
              className="bg-background p-10 md:p-14 min-h-[280px] flex flex-col justify-between group hover:bg-secondary/60 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-accent text-3xl">{l.n}</span>
                <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl">{l.t}</h3>
                <p className="mt-4 text-muted-foreground">{l.b}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <ImageCarousel
        eyebrow="In motion"
        title={<>What the ecosystem looks like <em className="text-accent not-italic">in practice</em>.</>}
        slides={[
          { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80", alt: "Workshop circle", caption: "Worth in Motion" },
          { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80", alt: "Mentor and student", caption: "Living University" },
          { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80", alt: "Marketplace meeting", caption: "Marketplace" },
          { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", alt: "Data dashboard", caption: "Platform" },
          { src: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=80", alt: "Young professionals", caption: "Outcomes" },
        ]}
      />
      <Section eyebrow="The data layer" title={<>What connects it all is the <em className="not-italic text-accent">data</em>.</>}>
        <p className="text-lg max-w-2xl text-muted-foreground leading-relaxed">
          Identity moves with the learner. Outcomes are visible to those who need them. Privacy is
          architecture, not policy.
        </p>
      </Section>
      <CTABand title="Bring this ecosystem to your country." primary={{ to: "/contact", label: "Partner with us" }} />
    </>
  );
}
