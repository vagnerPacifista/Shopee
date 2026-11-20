import { useCallback, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { SLIDES, SIDE_BANNERS } from "../data/shop";
import { ChevronLeft, ChevronRight, PixIcon, ReturnIcon } from "./Icons";

const sideIcons = { pix: PixIcon, return: ReturnIcon } as const;

export default function HeroCarousel({ onGoFlash, onGoDiscover }: { onGoFlash: () => void; onGoDiscover: () => void }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const goTo = (id: string) => {
    const slide = SLIDES[index];
    if (id === "cupom") {
      document.getElementById("cupons")?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (id === "frete") {
      onGoDiscover();
    } else {
      onGoFlash();
    }
    void slide;
  };

  return (
    <section id="inicio" className="mx-auto max-w-[1200px] px-4 pb-4 pt-4">
      <div className="grid gap-2 lg:grid-cols-[2fr_1fr]">
        {/* main carousel */}
        <div
          className="group/car relative aspect-[16/7.5] overflow-hidden rounded-sm bg-sp-orange shadow-[0_4px_18px_rgb(38_32_29/0.1)] sm:aspect-[16/6.5] lg:aspect-auto lg:min-h-[280px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                i === index ? "z-10 translate-x-0 opacity-100" : i < index ? "-translate-x-6 opacity-0" : "translate-x-6 opacity-0"
              )}
              aria-hidden={i !== index}
            >
              <img src={s.image} alt="" className="h-full w-full object-cover object-right" />
              <div className="absolute inset-0 bg-gradient-to-r from-sp-deep/85 via-sp-orange/45 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
                <span className="clip-tag w-fit bg-sp-yellow px-3 py-1 font-body text-[10px] font-extrabold uppercase tracking-[0.22em] text-sp-ink sm:text-[11px]">
                  {s.kicker}
                </span>
                <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] text-white sm:text-6xl">
                  {s.title}{" "}
                  <span className="text-sp-yellow drop-shadow-[0_4px_0_rgb(179_47_16/0.55)]">{s.highlight}</span>
                </h2>
                <p className="mt-2.5 max-w-xs font-body text-sm font-semibold text-white/90 sm:max-w-sm sm:text-base">
                  {s.subtitle}
                </p>
                <button
                  onClick={() => goTo(s.id)}
                  className="mt-5 w-fit rounded-sm bg-white px-6 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-sp-orange shadow-[0_6px_18px_rgb(0_0_0/0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sp-yellow hover:text-sp-ink"
                >
                  {s.cta}
                </button>
              </div>
            </div>
          ))}

          {/* arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-sp-ink/30 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-sp-ink/60 group-hover/car:opacity-100"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-sp-ink/30 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-sp-ink/60 group-hover/car:opacity-100"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* dots */}
          <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </div>

        {/* side banners */}
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {SIDE_BANNERS.map((b) => {
            const Icon = sideIcons[b.icon];
            return (
              <button
                key={b.id}
                onClick={b.icon === "pix" ? onGoDiscover : onGoFlash}
                className={cn(
                  "group/side relative flex min-h-[110px] items-center justify-between overflow-hidden rounded-sm bg-gradient-to-br p-5 text-left shadow-[0_4px_18px_rgb(38_32_29/0.1)] transition-transform duration-300 hover:-translate-y-1 lg:min-h-0",
                  b.bg
                )}
              >
                <div className="halftone-orange pointer-events-none absolute inset-0 opacity-40" />
                <div className="relative">
                  <p className="font-display text-xl font-black leading-tight text-white sm:text-2xl">{b.title}</p>
                  <p className="mt-1 font-body text-[12px] font-bold text-white/90">{b.subtitle}</p>
                  <span className="mt-2.5 inline-block rounded-sm bg-white/20 px-2.5 py-1 font-body text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors group-hover/side:bg-white group-hover/side:text-sp-ink">
                    Saiba mais
                  </span>
                </div>
                <Icon className="relative h-12 w-12 shrink-0 text-white/90 transition-transform duration-500 group-hover/side:rotate-12 group-hover/side:scale-110" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
