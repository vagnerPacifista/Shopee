import Reveal from "./Reveal";
import { CATEGORY_TILES, type CategoryId } from "../data/shop";
import { CatIcons } from "./Icons";

interface Props {
  active: CategoryId | "all";
  onSelect: (match: CategoryId | "all") => void;
}

export default function Categories({ active, onSelect }: Props) {
  return (
    <section id="categorias" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 py-4">
      <Reveal>
        <div className="overflow-hidden rounded-sm border border-sp-line bg-sp-card shadow-[0_2px_10px_rgb(38_32_29/0.05)]">
          <h2 className="border-b border-sp-line px-5 py-3.5 font-display text-xl font-black uppercase tracking-wide text-sp-sub">
            Categorias
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {CATEGORY_TILES.map((c, i) => {
              const Icon = CatIcons[c.icon];
              const isActive = c.match !== "all" && active === c.match && i < 5;
              return (
                <button
                  key={c.id}
                  onClick={() => onSelect(c.match)}
                  className="group flex flex-col items-center gap-3 border-b border-r border-sp-line/70 px-3 py-6 transition-colors last:border-r-0 hover:bg-sp-cream sm:[&:nth-child(5n)]:border-r-0"
                  aria-pressed={isActive}
                >
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-full border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_22px_rgb(238_77_45/0.22)] ${
                      isActive
                        ? "hot-ring relative border-sp-orange bg-sp-orange text-white"
                        : "border-sp-line bg-sp-card text-sp-sub group-hover:border-sp-orange group-hover:text-sp-orange"
                    }`}
                  >
                    {Icon && <Icon className="h-8 w-8" />}
                  </span>
                  <span
                    className={`text-center font-body text-[13px] font-bold leading-tight transition-colors ${
                      isActive ? "text-sp-orange" : "text-sp-ink group-hover:text-sp-orange"
                    }`}
                  >
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
