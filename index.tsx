import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, NumberedList, Section } from "@/components/page-parts";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/heromain.png";
import slideImage1 from "@/assets/talita.jpeg";
import slideImage2 from "@/assets/talita2.jpeg";
import slideImage3 from "@/assets/talita3.jpeg";
import slideImage4 from "@/assets/talita4.jpeg";



import { ImageCarousel } from "@/components/image-carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CiM Identity before opportunity" },
      {
        name: "description",
        content:
          "A human development and infrastructure movement helping young people know who they are, build skills, and connect to real-world opportunity.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-edit pt-16 md:pt-24 pb-20 md:pb-28 reveal">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow" style={{ color: "var(--teal)" }}>A movement. A platform. An infrastructure.</p>
            <h1 className="font-display mt-8 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[0.98]">
              Identity before opportunity.
              <br />
              <em className="not-italic" style={{ color: "var(--warm-brown)" }}>Infrastructure</em> before impact.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We help young people know who they are, build real skills, and connect to real-world
              opportunity through a data-led ecosystem built for Africa and the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/ecosystem" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:opacity-90">
                Explore the Ecosystem <ArrowUpRight className="size-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-background hover:opacity-90" style={{ background: "var(--teal)" }}>
                Partner with us
              </Link>
              <Link to="/worth-in-motion" className="inline-flex items-center gap-2 text-sm px-6 py-3 underline underline-offset-4 hover:text-accent">
                Join Worth in Motion
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-8 rounded-2xl -z-10" style={{ background: "linear-gradient(135deg, var(--peach), var(--blush))", opacity: 0.45 }} />
            <img
              src={heroImage}
              alt="A poised young African leader holding ledgers and a vintage telephone, framed by the African continent symbolising identity, voice, and beauty from ashes."
              className="w-full h-auto rounded-xl shadow-2xl lg:scale-110 lg:origin-right"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y py-6 bg-secondary/40">
        <div className="flex gap-16 marquee-track whitespace-nowrap font-display text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>Identity</span>
              <span className="text-accent">·</span>
              <span>Skill</span>
              <span className="text-accent">·</span>
              <span>Mentorship</span>
              <span className="text-accent">·</span>
              <span>Opportunity</span>
              <span className="text-accent">·</span>
              <span>Data</span>
              <span className="text-accent">·</span>
              <span>Dignity</span>
              <span className="text-accent">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* CRISIS */}
      <Section eyebrow="01 The Crisis" title={<>A generation full of <em className="text-accent not-italic">potential</em>, navigating broken systems.</>}>
        <div className="grid md:grid-cols-3 gap-10 mt-4">
          {[
            { t: "Identity Crisis", b: "Young people are told what to do before they ever discover who they are." },
            { t: "Mental Health", b: "Anxiety, disconnection and burnout are rising before adulthood begins." },
            { t: "Fragmented Systems", b: "Education, employment and policy don't speak the same language or share the same data." },
          ].map((c) => (
            <div key={c.t} className="border-t pt-6">
              <h3 className="font-display text-2xl md:text-3xl">{c.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CAROUSEL Faces of the movement */}
      <ImageCarousel
        eyebrow="Faces of the movement"
        title={<>The young people <em className="text-accent not-italic">we build for</em>.</>}
        slides={[
          { src: slideImage1, alt: "Young African woman smiling", caption: "Identity" },
          { src: slideImage2, alt: "Young person studying outdoors", caption: "Learning" },
          { src: slideImage3, alt: "Group collaborating", caption: "Belonging" },
          { src: slideImage4, alt: "Confident young woman", caption: "Voice" },
        ]}
      />

      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container-edit grid md:grid-cols-12 gap-10">
          <p className="eyebrow md:col-span-3 text-background/60">02 Why now</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              No single sector can solve this. <em className="text-ochre not-italic">Public + private must build together.</em>
            </h2>
            <p className="mt-8 text-background/70 max-w-2xl text-lg">
              Governments hold the mandate. Corporates hold the opportunity. Schools hold the
              talent. We build the shared infrastructure between them measurable, ethical, owned
              by the people it serves.
            </p>
          </div>
        </div>
      </section>

      {/* WORTH IN MOTION */}
      <Section eyebrow="03 The Entry Point" title={<>Worth in Motion identity-first development.</>}>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <p className="md:col-span-6 text-lg text-muted-foreground leading-relaxed">
            A nine-module journey that helps young people answer the questions schools never asked:
            <em className="text-foreground not-italic"> Who am I? What do I value? Where do I belong?</em>
            Delivered through app, web and live experiences with an AI companion that walks
            alongside.
          </p>
          <div className="md:col-span-6 grid grid-cols-3 gap-4">
            {["App", "Web", "Live"].map((f) => (
              <div key={f} className="aspect-square border rounded-md flex items-center justify-center font-display text-3xl bg-secondary/40">
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <Link to="/worth-in-motion" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-accent">
            See the journey <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* LMS / MIRROR */}
      <Section eyebrow="04 The Digital Layer" title={<>The Mirror a human development platform.</>}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An LMS unlike any other. The Mirror remembers your story, tracks your becoming, and
              gives <em className="text-foreground not-italic">you</em> the data not the institution.
            </p>
            <Link to="/lms" className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-accent">
              Explore the platform <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <NumberedList
            items={[
              { n: "01", title: "AI Companion", body: "A thoughtful guide trained on growth, not engagement." },
              { n: "02", title: "Progress, not points", body: "Track identity, skill and contribution together." },
              { n: "03", title: "User-owned data", body: "Your story belongs to you. Always." },
              { n: "04", title: "Dashboards", body: "Insights for learners, schools and partners." },
            ]}
          />
        </div>
      </Section>

      {/* ECOSYSTEM */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="container-edit">
          <p className="eyebrow">05 The Ecosystem</p>
          <h2 className="font-display text-4xl md:text-6xl mt-6 max-w-4xl leading-[1.05]">
            Four layers. One <em className="text-accent not-italic">connected</em> system.
          </h2>
          <div className="mt-16 grid md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {[
              { n: "I", t: "Worth in Motion", b: "Discover identity & purpose." },
              { n: "II", t: "Living University", b: "Learn by doing, with mentors." },
              { n: "III", t: "Marketplace", b: "Connect skill with opportunity." },
              { n: "IV", t: "Platform", b: "The data + tools beneath it all." },
            ].map((l) => (
              <div key={l.n} className="bg-background p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
                <span className="font-display text-accent text-3xl">{l.n}</span>
                <div>
                  <h3 className="font-display text-2xl">{l.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{l.b}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/ecosystem" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-accent">
              See the full ecosystem <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DATA */}
      <Section eyebrow="06 Data & Impact" title={<>What we measure becomes what we <em className="text-accent not-italic">build</em>.</>}>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { n: "9", l: "Modules of identity & skill development" },
            { n: "100%", l: "Of personal data owned by the learner" },
            { n: "∞", l: "Pathways from school to opportunity" },
          ].map((s) => (
            <div key={s.l} className="border-t pt-8">
              <p className="font-display text-6xl md:text-7xl">{s.n}</p>
              <p className="mt-4 text-muted-foreground max-w-xs">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FUTURE */}
      <section className="container-edit py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <p className="eyebrow md:col-span-3">07 The Future</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-7xl leading-[1.02]">
              A <em className="text-accent not-italic">Living University</em> and a Marketplace where worth moves freely.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Beyond classrooms. Beyond CVs. A continent-scale system where identity, learning and
              opportunity are one continuous motion.
            </p>
          </div>
        </div>
      </section>

      {/* CAROUSEL Across the continent */}
      <div className="bg-secondary/40">
        <ImageCarousel
          eyebrow="Across the continent"
          title={<>Built for <em className="text-accent not-italic">African realities</em>, designed for the world.</>}
          slides={[
            { src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80", alt: "African cityscape at dusk", caption: "Cities" },
            { src: "https://images.unsplash.com/photo-1580974511187-fae3a02b4d3a?auto=format&fit=crop&w=900&q=80", alt: "Classroom in Africa", caption: "Classrooms" },
            { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80", alt: "Market and community", caption: "Markets" },
            { src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80", alt: "Workspace and laptop", caption: "Workplaces" },
            { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80", alt: "Data and infrastructure", caption: "Infrastructure" },
            { src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80", alt: "Landscape of Africa", caption: "Land" },
          ]}
        />
      </div>

      <CTABand
        title="Build the infrastructure with us."
        blurb="Corporates, governments, schools and facilitators there is a seat for you in this movement."
        primary={{ to: "/contact", label: "Partner with us" }}
        secondary={{ to: "/ecosystem", label: "Explore Ecosystem" }}
      />
    </>
  );
}
