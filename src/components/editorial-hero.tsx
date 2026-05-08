import type { ReactNode } from "react";

export function EditorialHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="container-edit pt-16 md:pt-24 pb-16 md:pb-24 reveal">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow" style={{ color: "var(--teal)" }}>
            {eyebrow}
          </p>
          <h1 className="font-display mt-8 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98]">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        <div className="lg:col-span-6 relative">
          <div
            className="absolute -inset-8 rounded-2xl -z-10"
            style={{
              background:
                "linear-gradient(135deg, var(--peach), var(--blush))",
              opacity: 0.45,
            }}
          />
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto rounded-xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
