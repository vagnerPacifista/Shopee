import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { FLASH_PRODUCTS, formatBRL, type Product } from "../data/shop";
import { BoltIcon, ChevronLeft, ChevronRight, FlameIcon } from "./Icons";

function endOfToday() {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d.getTime();
}

function useCountdown() {
  const [left, setLeft] = useState(endOfToday() - Date.now());
  useEffect(() => {
    const id = setInterval(() => {
      const diff = endOfToday() - Date.now();
      setLeft(diff > 0 ? diff : endOfToday() + 86400000 - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const total = Math.floor(left / 1000);
  return {
    h: Math.floor(total / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
}

function TimeCell({ value }: { value: number }) {
  const v = String(value).padStart(2, "0");
  return (
    <span className="relative grid h-9 w-8 place-items-center overflow-hidden rounded-sm bg-sp-ink font-display text-lg font-bold text-white shadow-sm">
      <span key={v} className="flip-num">{v}</span>
    </span>
  );
}

function FlashCard({ p, onAdd }: { p: Product; onAdd: (p: Product) => void }) {
  const pct = p.flash?.pct ?? 0;
  const almost = pct >= 80;
  return (
    <div className="card-lift group relative w-[168px] shrink-0 cursor-pointer rounded-sm border border-sp-line bg-sp-card p-2.5 sm:w-[188px]">
      <div className="product-img-zoom relative overflow-hidden rounded-sm bg-sp-bg">
        <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
        <span className="clip-tag absolute left-0 top-0 bg-sp-orange px-2 py-0.5 font-display text-[13px] font-black text-white">
          -{Math.round((1 - p.price / p.original) * 100)}%
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(p);
          }}
          className="action-slide absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-sp-orange/95 py-2 font-body text-[12px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-sp-deep"
        >
          <BoltIcon className="h-3.5 w-3.5" /> Comprar
        </button>
      </div>

      <p className="mt-2.5 line-clamp-2 min-h-[34px] font-body text-[13px] font-semibold leading-snug text-sp-ink">
        {p.name}
      </p>

      <div className="mt-1.5 flex items-baseline gap-1.5">
        <span className="font-display text-xl font-black text-sp-orange">{formatBRL(p.price)}</span>
        <span className="font-body text-[11px] font-semibold text-sp-faint line-through">{formatBRL(p.original)}</span>
      </div>

      {/* progress */}
      <div className="shimmer-bar relative mt-2.5 h-[18px] overflow-hidden rounded-full bg-[#ffd9cf]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sp-orange to-sp-amber transition-[width] duration-700"
          style={{ width: `${pct}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-body text-[10px] font-extrabold uppercase tracking-wide text-sp-dark">
          {almost && <FlameIcon className="mr-1 h-3 w-3" />}
          {pct}% vendido
        </span>
      </div>
    </div>
  );
}

export default function FlashSale({ onAdd }: { onAdd: (p: Product) => void }) {
  const { h, m, s } = useCountdown();
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="flash" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 py-4">
      <Reveal>
        <div className="overflow-hidden rounded-sm border border-sp-line bg-sp-card shadow-[0_2px_10px_rgb(38_32_29/0.05)]">
          {/* header */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-sp-line bg-gradient-to-r from-sp-orange to-sp-amber px-4 py-3 sm:px-5">
            <div className="halftone-orange pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative flex items-center gap-3">
              <h2 className="flex items-center gap-1 font-display text-2xl font-black italic tracking-tight text-white drop-shadow-[0_2px_0_rgb(179_47_16/0.5)] sm:text-3xl">
                OFERTA RELÂMPAGO
                <BoltIcon className="anim-wiggle ml-1 h-6 w-6 text-sp-yellow" />
              </h2>
              <div className="flex items-center gap-1" aria-label="Tempo restante">
                <TimeCell value={h} />
                <span className="font-display text-lg font-bold text-white">:</span>
                <TimeCell value={m} />
                <span className="font-display text-lg font-bold text-white">:</span>
                <TimeCell value={s} />
              </div>
            </div>
            <div className="relative flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sp-orange"
                aria-label="Rolar para a esquerda"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-sp-orange"
                aria-label="Rolar para a direita"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* products */}
          <div
            ref={scroller}
            className="no-scrollbar flex gap-3 overflow-x-auto px-4 py-4 sm:px-5"
          >
            {FLASH_PRODUCTS.map((p) => (
              <FlashCard key={p.id} p={p} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
