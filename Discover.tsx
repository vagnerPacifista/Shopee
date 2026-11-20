import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { CATEGORY_TILES, formatBRL, PRODUCTS, type CategoryId, type Product } from "../data/shop";
import { cn } from "../utils/cn";
import { CartIcon, HeartIcon, StarIcon, TruckIcon } from "./Icons";

interface Props {
  query: string;
  activeCategory: CategoryId | "all";
  onCategory: (c: CategoryId | "all") => void;
  favorites: Set<string>;
  onToggleFav: (p: Product) => void;
  onAdd: (p: Product) => void;
}

const PAGE = 12;

function ProductCard({
  p,
  fav,
  onToggleFav,
  onAdd,
  delay,
}: {
  p: Product;
  fav: boolean;
  onToggleFav: () => void;
  onAdd: () => void;
  delay: number;
}) {
  const [pop, setPop] = useState(false);
  const discount = Math.round((1 - p.price / p.original) * 100);

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group/card card-lift relative flex h-full cursor-pointer flex-col overflow-hidden rounded-sm border border-sp-line bg-sp-card">
        {/* image */}
        <div className="product-img-zoom relative overflow-hidden bg-sp-bg">
          <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />

          {/* badges */}
          <div className="absolute left-0 top-0 flex flex-col items-start gap-1">
            {p.mall && (
              <span className="bg-sp-orange px-1.5 py-0.5 font-display text-[10px] font-black uppercase tracking-wide text-white">
                Mall
              </span>
            )}
            {p.ad && (
              <span className="border border-sp-faint/50 bg-sp-card/90 px-1.5 py-0.5 font-body text-[9px] font-extrabold uppercase tracking-wide text-sp-sub">
                Anúncio
              </span>
            )}
          </div>

          <span className="clip-tag absolute right-0 top-0 bg-sp-yellow px-2 py-1 text-right font-display text-sm font-black text-sp-orange">
            <span className="block text-[9px] font-extrabold uppercase leading-none text-sp-ink/70">off</span>
            {discount}%
          </span>

          {p.freeShipping && (
            <span className="absolute bottom-2 left-0 flex items-center gap-1 rounded-r-sm bg-sp-green px-2 py-0.5 font-body text-[9px] font-extrabold uppercase tracking-wide text-white">
              <TruckIcon className="h-3 w-3" /> Frete grátis
            </span>
          )}

          {/* favorite */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPop(true);
              onToggleFav();
              setTimeout(() => setPop(false), 450);
            }}
            className={cn(
              "absolute right-2 top-9 grid h-8 w-8 place-items-center rounded-full bg-sp-card/95 shadow-md transition-colors",
              fav ? "text-sp-orange" : "text-sp-faint hover:text-sp-orange"
            )}
            aria-label={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            aria-pressed={fav}
          >
            <HeartIcon filled={fav} className={cn("h-4.5 w-4.5", pop && "heart-pop")} />
          </button>

          {/* hover action */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdd();
            }}
            className="action-slide absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-sp-orange/95 py-2.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-sp-deep"
          >
            <CartIcon className="h-4.5 w-4.5" /> Adicionar ao carrinho
          </button>
        </div>

        {/* info */}
        <div className="flex flex-1 flex-col p-2.5">
          <h3 className="line-clamp-2 min-h-[36px] font-body text-[13px] font-semibold leading-snug text-sp-ink">
            {p.name}
          </h3>
          <div className="mt-auto pt-2">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg font-black text-sp-orange">{formatBRL(p.price)}</span>
              <span className="font-body text-[11px] font-semibold text-sp-faint line-through">
                {formatBRL(p.original)}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between font-body text-[11px] font-semibold text-sp-sub">
              <span className="flex items-center gap-1">
                <StarIcon className="h-3.5 w-3.5 text-sp-star" />
                {p.rating.toLocaleString("pt-BR")}
              </span>
              <span>{p.sold} vendidos</span>
            </div>
            <p className="mt-0.5 font-body text-[10px] text-sp-faint">{p.location}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Discover({ query, activeCategory, onCategory, favorites, onToggleFav, onAdd }: Props) {
  const [visible, setVisible] = useState(PAGE);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          CATEGORY_TILES.some((c) => c.match === p.category && c.label.toLowerCase().includes(q))
      );
    }
    return list;
  }, [query, activeCategory]);

  const shown = filtered.slice(0, visible);
  const activeLabel =
    activeCategory === "all" ? null : CATEGORY_TILES.find((c) => c.match === activeCategory)?.label;

  return (
    <section id="descobertas" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 py-6">
      {/* heading */}
      <Reveal>
        <div className="relative flex flex-wrap items-center justify-center gap-3 border-b-4 border-sp-orange pb-4">
          <span className="h-px flex-1 bg-sp-line" />
          <h2 className="font-display text-2xl font-black uppercase tracking-wide text-sp-orange sm:text-3xl">
            Descobertas do Dia
          </h2>
          <span className="h-px flex-1 bg-sp-line" />
        </div>
      </Reveal>

      {/* chips */}
      <Reveal delay={80} className="mt-5 flex flex-wrap items-center gap-2">
        <button
          onClick={() => onCategory("all")}
          className={cn(
            "rounded-full px-4 py-1.5 font-body text-[13px] font-extrabold transition-all duration-200",
            activeCategory === "all"
              ? "bg-sp-orange text-white shadow-[0_4px_14px_rgb(238_77_45/0.4)]"
              : "border border-sp-line bg-sp-card text-sp-sub hover:border-sp-orange hover:text-sp-orange"
          )}
        >
          Todas
        </button>
        {CATEGORY_TILES.slice(0, 5).map((c) => (
          <button
            key={c.id}
            onClick={() => onCategory(c.match as CategoryId | "all")}
            className={cn(
              "rounded-full px-4 py-1.5 font-body text-[13px] font-extrabold transition-all duration-200",
              activeCategory === c.match
                ? "bg-sp-orange text-white shadow-[0_4px_14px_rgb(238_77_45/0.4)]"
                : "border border-sp-line bg-sp-card text-sp-sub hover:border-sp-orange hover:text-sp-orange"
            )}
          >
            {c.label}
          </button>
        ))}
        <span className="ml-auto font-body text-[12px] font-bold text-sp-sub">
          {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </span>
      </Reveal>

      {(query.trim() || activeLabel) && (
        <p className="mt-3 font-body text-[13px] font-semibold text-sp-sub">
          {query.trim() && (
            <>
              Buscando por <span className="font-extrabold text-sp-orange">“{query.trim()}”</span>
            </>
          )}
          {query.trim() && activeLabel && " em "}
          {activeLabel && <span className="font-extrabold text-sp-orange">{activeLabel}</span>}
        </p>
      )}

      {/* grid */}
      {shown.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {shown.map((p, i) => (
            <ProductCard
              key={p.id}
              p={p}
              delay={(i % 6) * 50}
              fav={favorites.has(p.id)}
              onToggleFav={() => onToggleFav(p)}
              onAdd={() => onAdd(p)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-sm border border-dashed border-sp-line bg-sp-card px-6 py-16 text-center">
          <p className="font-display text-2xl font-black uppercase text-sp-faint">Nada por aqui…</p>
          <p className="mt-2 font-body text-sm font-semibold text-sp-sub">
            Tente buscar por outro termo ou explore outra categoria.
          </p>
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE)}
            className="rounded-sm border border-sp-orange bg-sp-card px-14 py-3 font-body text-sm font-extrabold uppercase tracking-wide text-sp-orange transition-all duration-200 hover:-translate-y-0.5 hover:bg-sp-orange hover:text-white hover:shadow-[0_10px_26px_rgb(238_77_45/0.35)]"
          >
            Carregar mais
          </button>
        </div>
      )}
    </section>
  );
}
