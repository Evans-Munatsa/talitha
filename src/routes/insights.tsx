import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, Section } from "@/components/page-parts";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights CiM" },
      { name: "description", content: "Articles, talks and case studies on identity, infrastructure and human development." },
    ],
  }),
  component: Insights,
});

const items = [
  { kind: "Essay", title: "Identity is the first skill", date: "2026" },
  { kind: "Talk", title: "Why public + private must build together", date: "2026" },
  { kind: "Case study", title: "A pilot in three classrooms", date: "2026" },
  { kind: "Essay", title: "The data layer is the dignity layer", date: "2026" },
  { kind: "Conversation", title: "Mental health as infrastructure", date: "2025" },
  { kind: "Essay", title: "Beyond the CV economy", date: "2025" },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Thinking out loud, in <em className="not-italic text-accent">public</em>.</>}
        intro="Essays, talks and case studies on the work of building human development infrastructure."
      />
      <Section>
        <div className="border-t">
          {items.map((i) => (
            <div key={i.title} className="grid grid-cols-12 gap-4 py-6 border-b group hover:bg-secondary/40 transition-colors px-2 cursor-pointer">
              <span className="col-span-3 md:col-span-2 eyebrow self-center">{i.kind}</span>
              <h3 className="col-span-7 md:col-span-8 font-display text-xl md:text-3xl">{i.title}</h3>
              <span className="col-span-1 md:col-span-1 text-muted-foreground self-center text-sm">{i.date}</span>
              <ArrowUpRight className="col-span-1 self-center justify-self-end opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Have a story worth telling?" primary={{ to: "/contact", label: "Pitch us" }} />
    </>
  );
}
