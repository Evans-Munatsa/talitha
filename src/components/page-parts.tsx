import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="container-edit pt-20 md:pt-32 pb-16 md:pb-24 reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-6 max-w-5xl leading-[1.02]">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
      <div className="rule mt-16" />
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-edit py-20 md:py-28 ${className}`}>
      {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
      {title && (
        <h2 className="font-display text-4xl md:text-6xl max-w-4xl mb-12 leading-[1.05]">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export function CTABand({
  title,
  blurb,
  primary,
  secondary,
}: {
  title: string;
  blurb?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="container-edit my-20">
      <div className="rounded-lg bg-foreground text-background p-10 md:p-16 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <h3 className="font-display text-3xl md:text-5xl leading-[1.05]">{title}</h3>
          {blurb && <p className="mt-4 text-background/70 max-w-md">{blurb}</p>}
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            to={primary.to}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm hover:opacity-90"
          >
            {primary.label} →
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex items-center gap-2 border border-background/30 px-6 py-3 rounded-full text-sm hover:bg-background hover:text-foreground transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function NumberedList({ items }: { items: { n: string; title: string; body: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
      {items.map((it) => (
        <div key={it.n} className="border-t pt-6">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-2xl text-accent">{it.n}</span>
            <h3 className="font-display text-2xl md:text-3xl">{it.title}</h3>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
