import { createFileRoute } from "@tanstack/react-router";
import { CTABand, NumberedList, PageHero, Section } from "@/components/page-parts";
import { ImageCarousel } from "@/components/image-carousel";
import cover from "@/assets/four-to-rise/01-cover.jpg";
import young from "@/assets/four-to-rise/02-young.jpg";
import mind from "@/assets/four-to-rise/03-mind.jpg";
import opportunity from "@/assets/four-to-rise/04-opportunity.jpg";
import creativity from "@/assets/four-to-rise/05-creativity.jpg";
import support from "@/assets/four-to-rise/06-support.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact & Data CiM" },
      { name: "description", content: "What we measure. How we share it. Who owns it." },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact & Data"
        title={<>What we measure becomes what we <em className="not-italic text-accent">build</em>.</>}
        intro="Every dashboard is designed for three audiences at once the learner, the partner, and the country."
      />
      <Section eyebrow="What we measure">
        <NumberedList
          items={[
            { n: "01", title: "Identity progression", body: "Self-knowledge, values clarity, sense of belonging." },
            { n: "02", title: "Skill acquisition", body: "Demonstrated capability across modules and projects." },
            { n: "03", title: "Wellbeing", body: "Mental health indicators, with consent and care." },
            { n: "04", title: "Pathways", body: "From learning to internship, to employment, to contribution." },
          ]}
        />
      </Section>
      <Section eyebrow="Inclusion & Human Dignity" title={<>Designed for every kind of mind.</>}>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "Mental health", b: "A baseline, not an add-on." },
            { t: "Neurodiversity", b: "Multiple learning rhythms, by design." },
            { t: "Accessibility", b: "Language, disability, geography." },
            { t: "Identity & dignity", b: "No learner is reduced to a metric." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="The vision">
        <h3 className="font-display text-4xl md:text-6xl max-w-4xl leading-[1.05]">
          From a single cohort to <em className="not-italic text-accent">national infrastructure</em>. From one country to a continent.
        </h3>
      </Section>

      {/* FOUR TO RISE: data led carousel */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-edit">
          <p className="eyebrow">A data led series</p>
          <h2 className="font-display mt-6 text-4xl md:text-6xl max-w-4xl leading-[1.05]">
            Why Africa&rsquo;s youth need all <em className="not-italic text-accent">four</em> to rise.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Identity, opportunity, creativity, and intelligence. The four pillars behind everything
            we build, told through the numbers shaping the continent.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                img: young,
                eyebrow: "Africa is young",
                title: "Over 60% under 25.",
                body: "Youth identity, wellbeing, education, creativity and opportunity will shape the continent&rsquo;s future. Source: African Development Bank.",
              },
              {
                img: mind,
                eyebrow: "The mind shapes the future",
                title: "37M adolescents. 50% anxiety and depression.",
                body: "Nearly 37 million adolescents aged 10 to 19 live with a mental disorder in Africa. Anxiety and depression account for almost 50% of those cases. Annual loss of human capital from mental disorders: US$30.3B. Source: UNICEF Africa.",
              },
              {
                img: opportunity,
                eyebrow: "Opportunity is uneven",
                title: "8.9% unemployed. 21.9% NEET. 71.7% in insecure work.",
                body: "Youth unemployment in sub Saharan Africa in 2023. When opportunity is unstable, identity and mental health carry extra weight. Source: ILO Global Employment Trends for Youth 2024.",
              },
              {
                img: creativity,
                eyebrow: "Creativity is intelligence in motion",
                title: "30M jobs in cultural and creative sectors.",
                body: "When young people are safe enough to explore identity, creativity becomes a bridge to confidence, learning, innovation, and opportunity. Source: UNESCO.",
              },
              {
                img: support,
                eyebrow: "Support systems still fall short",
                title: "Only 49%. US$0.46 spent. US$2.00 needed.",
                body: "Just 49% of Member States in the African Region had mental health legislation. Average government mental health spending was US$0.46 per capita in 2020 against a recommended US$2.00 for low income countries. Source: WHO African Region 2022.",
              },
              {
                img: cover,
                eyebrow: "All four, together",
                title: "Identity, opportunity, creativity, intelligence.",
                body: "If they are all connected, then support for young minds cannot be optional. This is the work CiM is built for.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="bg-background rounded-xl overflow-hidden border grid grid-cols-12 gap-0"
              >
                <div className="col-span-12 sm:col-span-5 bg-secondary">
                  <img
                    src={c.img}
                    alt={c.eyebrow}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                </div>
                <div className="col-span-12 sm:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                  <p className="eyebrow" style={{ color: "var(--teal)" }}>{c.eyebrow}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 leading-[1.1]">{c.title}</h3>
                  <p
                    className="mt-4 text-muted-foreground leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImageCarousel
        eyebrow="The series at a glance"
        title={<>A continent in <em className="not-italic text-accent">motion</em>.</>}
        slides={[
          { src: cover, alt: "Why Africa's youth need all four to rise", caption: "Cover" },
          { src: young, alt: "Africa is young", caption: "Africa" },
          { src: mind, alt: "The mind shapes the future", caption: "Mind" },
          { src: opportunity, alt: "Opportunity is uneven", caption: "Opportunity" },
          { src: creativity, alt: "Creativity is intelligence in motion", caption: "Creativity" },
          { src: support, alt: "Support systems still fall short", caption: "Support" },
        ]}
      />

      <CTABand title="See the impact for yourself." primary={{ to: "/contact", label: "Request the report" }} />
    </>
  );
}
