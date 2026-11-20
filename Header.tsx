import { useEffect, useRef, useState } from "react";
import { formatBRL, SEARCH_SUGGESTIONS, type Product } from "../data/shop";
import {
  BagLogo,
  BellIcon,
  CameraIcon,
  CartIcon,
  ChevronDown,
  QuestionIcon,
  SearchIcon,
  TrashIcon,
} from "./Icons";

export interface CartLine {
  product: Product;
  qty: number;
}

interface HeaderProps {
  query: string;
  onQuery: (q: string) => void;
  cart: CartLine[];
  cartCount: number;
  onOpenCart: () => void;
  onRemove: (id: string) => void;
  onSearch: () => void;
}

function TopBar() {
  return (
    <div className="hidden border-b border-sp-line bg-sp-card text-[13px] text-sp-sub md:block">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-1.5">
        <div className="flex items-center gap-2">
          {["Baixe o App", "Conecte-se"].map((label, i) => (
            <span key={label} className="flex items-center gap-2">
              {i > 0 && <span className="h-3.5 w-px bg-sp-line" />}
              <button className="flex items-center gap-1 font-semibold transition-colors hover:text-sp-orange">
                {label}
                {label === "Conecte-se" && <ChevronDown className="h-3 w-3" />}
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 font-semibold transition-colors hover:text-sp-orange">
            <BellIcon className="h-3.5 w-3.5" /> Notificações
          </button>
          <span className="h-3.5 w-px bg-sp-line" />
          <button className="flex items-center gap-1.5 font-semibold transition-colors hover:text-sp-orange">
            <QuestionIcon className="h-3.5 w-3.5" /> Ajuda
          </button>
          <span className="h-3.5 w-px bg-sp-line" />
          <span className="font-semibold">PT-BR</span>
          <span className="h-3.5 w-px bg-sp-line" />
          <button className="font-bold transition-colors hover:text-sp-orange">Cadastre-se</button>
          <span className="text-sp-faint">|</span>
          <button className="font-bold transition-colors hover:text-sp-orange">Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default function Header({ query, onQuery, cart, cartCount, onOpenCart, onRemove, onSearch }: HeaderProps) {
  const [focused, setFocused] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const cartTotal = cart.reduce((s, l) => s + l.product.price * l.qty, 0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const suggestions = SEARCH_SUGGESTIONS.filter((s) =>
    query ? s.toLowerCase().includes(query.toLowerCase()) : true
  );

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 border-b border-sp-line bg-sp-orange shadow-[0_2px_12px_rgb(179_47_16/0.25)]">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3 lg:gap-8">
          {/* logo */}
          <a href="#inicio" className="flex shrink-0 items-center gap-1.5 text-white" aria-label="Início">
            <BagLogo className="h-10 w-10 transition-transform duration-300 hover:-rotate-6" />
            <span className="hidden font-display text-3xl font-extrabold lowercase tracking-tight sm:block">
              shopee
            </span>
          </a>

          {/* search */}
          <div ref={boxRef} className="relative min-w-0 flex-1">
            <div className="flex items-stretch rounded-sm bg-white p-[3px] shadow-[0_2px_8px_rgb(0_0_0/0.12)]">
              <input
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
                placeholder="Buscar produtos, marcas e muito mais…"
                className="min-w-0 flex-1 bg-transparent px-3 font-body text-sm text-sp-ink outline-none placeholder:text-sp-faint"
                aria-label="Buscar produtos"
              />
              <button
                className="mr-8 hidden p-2 text-sp-faint transition-colors hover:text-sp-orange sm:block"
                aria-label="Busca por imagem"
                onClick={() => onSearch()}
              >
                <CameraIcon className="h-5 w-5" />
              </button>
              <button
                onClick={onSearch}
                className="flex w-16 items-center justify-center rounded-sm bg-sp-orange text-white transition-colors hover:bg-sp-deep sm:w-20"
                aria-label="Buscar"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>

            {/* suggestions */}
            {focused && suggestions.length > 0 && (
              <div className="absolute inset-x-0 top-full z-50 mt-1 overflow-hidden rounded-sm border border-sp-line bg-white py-1 shadow-[0_10px_34px_rgb(38_32_29/0.16)]">
                <p className="px-4 pb-1 pt-2 font-body text-[11px] font-extrabold uppercase tracking-[0.14em] text-sp-faint">
                  {query ? "Sugestões" : "Buscas populares"}
                </p>
                {suggestions.slice(0, 6).map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      onQuery(s);
                      setFocused(false);
                      onSearch();
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left font-body text-sm text-sp-ink transition-colors hover:bg-sp-cream hover:text-sp-orange"
                  >
                    <SearchIcon className="h-3.5 w-3.5 text-sp-faint" />
                    {s}
                  </button>
                ))}
              </div>
            )}

            <p className="mt-1 hidden truncate font-body text-[11px] text-white/85 md:block">
              {SEARCH_SUGGESTIONS.slice(0, 5).map((s, i) => (
                <span key={s}>
                  {i > 0 && <span className="mx-1.5 opacity-50">·</span>}
                  <button onClick={() => onQuery(s)} className="transition-colors hover:text-sp-yellow">
                    {s}
                  </button>
                </span>
              ))}
            </p>
          </div>

          {/* cart */}
          <div className="group relative shrink-0">
            <button
              onClick={onOpenCart}
              className="group relative p-2 text-white"
              aria-label={`Abrir carrinho com ${cartCount} itens`}
            >
              <CartIcon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              {cartCount > 0 && (
                <span
                  key={cartCount}
                  className="badge-pop absolute -right-0.5 -top-0.5 grid min-w-[20px] place-items-center rounded-full border-2 border-sp-orange bg-white px-1 font-display text-[11px] font-bold text-sp-orange"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* hover preview */}
            <div className="invisible absolute right-0 top-full z-50 w-80 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100">
              <div className="overflow-hidden rounded-sm border border-sp-line bg-white shadow-[0_14px_40px_rgb(38_32_29/0.18)]">
                <p className="border-b border-sp-line px-4 py-2.5 font-body text-[11px] font-extrabold uppercase tracking-[0.16em] text-sp-faint">
                  Adicionados recentemente
                </p>
                {cart.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <CartIcon className="mx-auto h-10 w-10 text-sp-line" />
                    <p className="mt-3 font-body text-sm font-semibold text-sp-sub">Seu carrinho está vazio</p>
                  </div>
                ) : (
                  <>
                    <ul className="max-h-64 overflow-y-auto">
                      {cart.slice(0, 4).map(({ product, qty }) => (
                        <li key={product.id} className="flex items-center gap-3 border-b border-sp-line/60 px-4 py-2.5 last:border-0">
                          <img src={product.image} alt="" className="h-11 w-11 rounded-sm object-cover" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-body text-[13px] font-semibold text-sp-ink">{product.name}</p>
                            <p className="font-body text-[13px] font-extrabold text-sp-orange">
                              {qty}× {formatBRL(product.price)}
                            </p>
                          </div>
                          <button onClick={() => onRemove(product.id)} className="p-1 text-sp-faint transition-colors hover:text-sp-orange" aria-label="Remover">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between gap-3 bg-sp-cream px-4 py-3">
                      <span className="font-body text-[12px] font-semibold text-sp-sub">
                        {cart.length} {cart.length === 1 ? "item" : "itens"} · {formatBRL(cartTotal)}
                      </span>
                      <button
                        onClick={onOpenCart}
                        className="rounded-sm bg-sp-orange px-4 py-1.5 font-body text-[13px] font-extrabold text-white transition-colors hover:bg-sp-deep"
                      >
                        Ver carrinho
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
