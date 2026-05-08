import { createFileRoute } from "@tanstack/react-router";
import { CTABand, PageHero, Section } from "@/components/page-parts";
import { ImageCarousel } from "@/components/image-carousel";
import heroImg from "@/assets/cim/hero.jpg";
import styleMovesImg from "@/assets/cim/style-moves.jpg";
import workImg from "@/assets/cim/work.jpg";
import dinnerImg from "@/assets/cim/dinner.jpg";
import coreImg from "@/assets/cim/core.jpg";
import identityImg from "@/assets/cim/identity-motion.jpg";
import missionWhy from "@/assets/cim-mission/02-why.jpg";
import missionProblem from "@/assets/cim-mission/03-problem.jpg";
import missionAnswer from "@/assets/cim-mission/04-answer.jpg";
import missionOpportunity from "@/assets/cim-mission/05-opportunity.jpg";
import missionBigger from "@/assets/cim-mission/06-bigger-play.jpg";
import missionGreater from "@/assets/cim-mission/07-greater.jpg";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "CiM Marketplace. Couture in Motion." },
      {
        name: "description",
        content:
          "Couture in Motion: not just fashion, it is a feeling. Style that moves with life rooted identity, flexible expression.",
      },
      { property: "og:title", content: "CiM Couture in Motion" },
      { property: "og:description", content: "When your style reflects your identity, every occasion can still feel like you." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: MP,
});

function MP() {
  return (
    <>
      {/* HERO editorial split */}
      <section className="container-edit pt-16 md:pt-24 pb-16 md:pb-24 reveal">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow" style={{ color: "var(--teal)" }}>CiM Couture in Motion</p>
            <h1 className="font-display mt-8 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98]">
              Not just fashion.
              <br />
              <em className="not-italic" style={{ color: "var(--warm-brown)" }}>It is a feeling.</em>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              When your style reflects your identity, every occasion can still feel like you. That
              is the heart behind CiM find your authentic style in motion.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <div
              className="absolute -inset-8 rounded-2xl -z-10"
              style={{ background: "linear-gradient(135deg, var(--peach), var(--blush))", opacity: 0.45 }}
            />
            <img
              src={heroImg}
              alt="A woman in a peach gown seated by an illuminated map of Africa identity in motion."
              className="w-full h-auto rounded-xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* STYLE THAT MOVES */}
      <Section eyebrow="01 Style that moves with life" title={<>Build a wardrobe language that reflects your <em className="not-italic text-accent">real life</em>.</>}>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <img src={styleMovesImg} alt="A woman in a flowing peach dress in front of a mirror with a wardrobe palette tablet." className="w-full rounded-xl shadow-xl" loading="lazy" />
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From boardrooms to dinner tables, from gym sessions to soft everyday moments your
              style can still feel like you.
            </p>
            <p className="mt-6 font-display text-2xl md:text-3xl">
              Rooted identity. <em className="not-italic" style={{ color: "var(--warm-brown)" }}>Flexible expression.</em>
            </p>
          </div>
        </div>
      </Section>

      {/* ONE IDENTITY, MANY OCCASIONS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-edit">
          <p className="eyebrow">02 One identity. Many occasions.</p>
          <h2 className="font-display text-4xl md:text-6xl mt-6 max-w-3xl leading-[1.05]">
            Same essence. <em className="not-italic text-accent">Different expression.</em>
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: workImg, label: "Work" },
              { src: dinnerImg, label: "Dinner" },
              { src: workImg, label: "Gym" },
              { src: dinnerImg, label: "Casual" },
            ].map((it) => (
              <figure key={it.label} className="relative overflow-hidden rounded-xl group">
                <div className="aspect-[3/4] bg-muted">
                  <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="absolute bottom-0 inset-x-0 p-4 text-background bg-gradient-to-t from-foreground/80 to-transparent font-display tracking-widest text-sm uppercase">
                  {it.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-muted-foreground max-w-xl">
            Work. Dinner. Gym. Casual your style can adapt without losing you.
          </p>
        </div>
      </section>

      {/* COME BACK TO YOUR CORE */}
      <Section eyebrow="03 Come back to your core" title={<>CiM helps you reconnect with the <em className="not-italic text-accent">heart of who you are</em>.</>}>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Authentic style is not about becoming someone else. It is about expressing yourself
              more clearly.
            </p>
            <p className="mt-6 font-display text-2xl md:text-3xl">
              <em className="not-italic" style={{ color: "var(--warm-brown)" }}>Authenticity</em> over trend-chasing.
            </p>
          </div>
          <div className="md:col-span-6">
            <img src={coreImg} alt="A woman looking at her reflection, wearing an elegant peach gown." className="w-full rounded-xl shadow-xl" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* FASHION HOLDS MEMORY */}
      <section className="py-24 md:py-32" style={{ background: "var(--foreground)", color: "var(--background)" }}>
        <div className="container-edit grid md:grid-cols-12 gap-10">
          <p className="eyebrow md:col-span-3" style={{ color: "color-mix(in oklab, var(--background) 60%, transparent)" }}>
            04 Fashion holds memory
          </p>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Identity and fashion have <em className="not-italic" style={{ color: "var(--peach)" }}>always been connected</em>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg" style={{ color: "color-mix(in oklab, var(--background) 70%, transparent)" }}>
              Through generations, people have often been separated by race, culture, class and
              expectation. What we wear has long shaped who feels seen, safe and included.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Wax Prints", "Heritage Textiles", "Fashion Archives"].map((t) => (
                <span
                  key={t}
                  className="px-5 py-2 rounded-full text-sm border"
                  style={{ borderColor: "color-mix(in oklab, var(--background) 30%, transparent)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <ImageCarousel
        eyebrow="A carousel on style, identity & authenticity"
        title={<>Identity in <em className="not-italic text-accent">motion</em>.</>}
        slides={[
          { src: heroImg, alt: "Identity in Motion hero", caption: "Identity" },
          { src: styleMovesImg, alt: "Style that moves with life", caption: "Style" },
          { src: workImg, alt: "Work look", caption: "Work" },
          { src: dinnerImg, alt: "Dinner look", caption: "Dinner" },
          { src: coreImg, alt: "Come back to your core", caption: "Core" },
          { src: identityImg, alt: "Identity in motion editorial", caption: "Motion" },
        ]}
      />

      {/* THE GREATER MISSION */}
      <section
        className="py-24 md:py-32"
        style={{ background: "var(--deep-blue)", color: "var(--cream)" }}
      >
        <div className="container-edit">
          <p
            className="eyebrow"
            style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
          >
            05 The Greater Mission
          </p>
          <h2 className="font-display mt-6 text-4xl md:text-6xl max-w-4xl leading-[1.05]">
            Africa does not lack creativity, talent, or demand.{" "}
            <em className="not-italic" style={{ color: "var(--peach)" }}>
              It lacks orchestration.
            </em>
          </h2>
          <p
            className="mt-8 max-w-2xl text-lg"
            style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
          >
            CiM exists to connect identity, creativity, confidence, and opportunity into one
            growing ecosystem. Not just fashion. It is a feeling.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-px" style={{ background: "color-mix(in oklab, var(--cream) 18%, transparent)" }}>
            {[
              {
                n: "01",
                t: "Why this matters",
                b: "People do not only buy clothes. They chase confidence, belonging, identity, and expression. Fashion is never only practical. It is deeply personal.",
                img: missionWhy,
              },
              {
                n: "02",
                t: "The problem",
                b: "In the digital age, fashion decisions are shaped by comparison culture, body image anxiety, and the pressure to keep up. What should feel expressive often starts to feel heavy.",
                img: missionProblem,
              },
              {
                n: "03",
                t: "Our answer",
                b: "CiM offers a safer, more grounded path to self expression through avatar try on, digital styling, and identity led closet tools. A digital first experience designed to build confidence, not insecurity.",
                img: missionAnswer,
              },
              {
                n: "04",
                t: "From self expression to opportunity",
                b: "Over time, CiM becomes the bridge between consumers, stylists, designers, brands, and service providers. Confidence grows into discovery, access, and real world connection.",
                img: missionOpportunity,
              },
              {
                n: "05",
                t: "The bigger play",
                b: "CiM is building the orchestration layer. A trusted ecosystem with better visibility, better data, and better growth outcomes. Not just a fashion platform. A new layer of infrastructure.",
                img: missionBigger,
              },
              {
                n: "06",
                t: "The greater mission",
                b: "One growing ecosystem where identity, creativity, confidence, and opportunity move together. Built in Africa, designed for the world.",
                img: missionGreater,
              },
            ].map((c) => (
              <article
                key={c.n}
                className="p-8 md:p-10 grid grid-cols-12 gap-6"
                style={{ background: "var(--deep-blue)" }}
              >
                <div className="col-span-12 sm:col-span-4">
                  <div
                    className="aspect-[3/4] rounded-md overflow-hidden"
                    style={{ background: "color-mix(in oklab, var(--cream) 8%, transparent)" }}
                  >
                    <img
                      src={c.img}
                      alt={c.t}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <span className="font-display text-2xl" style={{ color: "var(--peach)" }}>
                    {c.n}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl mt-2">{c.t}</h3>
                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
                  >
                    {c.b}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Find your authentic style in motion."
        blurb="Step into CiM and bring your full self to every occasion."
        primary={{ to: "/contact", label: "Talk to us" }}
        secondary={{ to: "/ecosystem", label: "Explore Ecosystem" }}
      />
    </>
  );
}
