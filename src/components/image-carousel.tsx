import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageCarousel({
  eyebrow,
  title,
  slides,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  slides: CarouselSlide[];
}) {
  return (
    <section className="container-edit py-20 md:py-28">
      {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
      {title && (
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mb-10 leading-[1.05]">
          {title}
        </h2>
      )}
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {slides.map((s, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <figure className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {s.caption && (
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-background bg-gradient-to-t from-foreground/80 to-transparent">
                    <p className="font-display text-lg">{s.caption}</p>
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
