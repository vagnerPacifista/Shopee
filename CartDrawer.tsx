import { useEffect } from "react";
import { cn } from "../utils/cn";
import { formatBRL, FREE_SHIPPING_THRESHOLD } from "../data/shop";
import type { CartLine } from "./Header";
import { CartIcon, CheckIcon, CloseIcon, MinusIcon, PlusIcon, TrashIcon, TicketIcon } from "./Icons";

interface Props {
  open: boolean;
  cart: CartLine[];
  onClose: () => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ open, cart, onClose, onInc, onDec, onRemove, onCheckout }: Props) {
  const subtotal = cart.reduce((s, l) => s + l.product.price * l.qty, 0);
  const missing = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shipPct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-sp-ink/45 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden
      />
      {/* panel */}
      <aside
        className={cn(
          "drawer-panel fixed inset-y-0 right-0 z-[65] flex w-full max-w-md flex-col bg-sp-card shadow-[-12px_0_40px_rgb(38_32_29/0.2)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Carrinho de compras"
      >
        <header className="flex items-center justify-between bg-sp-orange px-5 py-4 text-white">
          <h2 className="flex items-center gap-2.5 font-display text-xl font-black uppercase tracking-wide">
            <CartIcon className="h-6 w-6" />
            Meu carrinho
            <span className="rounded-full bg-white/25 px-2 py-0.5 font-body text-[12px] font-extrabold">
              {cart.reduce((s, l) => s + l.qty, 0)}
            </span>
          </h2>
          <button onClick={onClose} className="p-1.5 transition-transform hover:rotate-90" aria-label="Fechar carrinho">
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        {/* free shipping meter */}
        <div className="border-b border-sp-line bg-sp-cream px-5 py-3">
          <div className="flex items-center justify-between font-body text-[12px] font-bold">
            <span className={missing > 0 ? "text-sp-sub" : "text-sp-green"}>
              {missing > 0 ? (
                <>
                  Faltam <span className="text-sp-orange">{formatBRL(missing)}</span> para ganhar FRETE GRÁTIS
                </>
              ) : (
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-sp-green" /> Você ganhou frete grátis!
                </span>
              )}
            </span>
            <span className="text-sp-faint">{formatBRL(FREE_SHIPPING_THRESHOLD)}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-sp-line">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                missing > 0 ? "bg-gradient-to-r from-sp-orange to-sp-amber" : "bg-sp-green"
              )}
              style={{ width: `${shipPct}%` }}
            />
          </div>
        </div>

        {/* items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sp-cream">
                <CartIcon className="h-10 w-10 text-sp-orange/60" />
              </span>
              <p className="mt-4 font-display text-lg font-black uppercase text-sp-sub">Carrinho vazio</p>
              <p className="mt-1 max-w-[220px] font-body text-[13px] font-semibold text-sp-faint">
                Suas futuras compras (e arrependimentos) aparecem aqui.
              </p>
              <button
                onClick={onClose}
                className="mt-5 rounded-sm bg-sp-orange px-8 py-2.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-sp-deep"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {cart.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 rounded-sm border border-sp-line bg-white p-3">
                  <img src={product.image} alt="" className="h-16 w-16 shrink-0 rounded-sm object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 font-body text-[13px] font-semibold leading-snug text-sp-ink">
                      {product.name}
                    </p>
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="font-display text-base font-black text-sp-orange">
                        {formatBRL(product.price)}
                      </span>
                      <span className="font-body text-[11px] font-semibold text-sp-faint line-through">
                        {formatBRL(product.original)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-sm border border-sp-line">
                        <button
                          onClick={() => onDec(product.id)}
                          className="grid h-7 w-7 place-items-center text-sp-sub transition-colors hover:bg-sp-cream hover:text-sp-orange"
                          aria-label="Diminuir quantidade"
                        >
                          <MinusIcon className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center font-body text-[13px] font-extrabold text-sp-ink">{qty}</span>
                        <button
                          onClick={() => onInc(product.id)}
                          className="grid h-7 w-7 place-items-center text-sp-sub transition-colors hover:bg-sp-cream hover:text-sp-orange"
                          aria-label="Aumentar quantidade"
                        >
                          <PlusIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(product.id)}
                        className="p-1.5 text-sp-faint transition-colors hover:text-sp-orange"
                        aria-label="Remover item"
                      >
                        <TrashIcon className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* summary */}
        {cart.length > 0 && (
          <footer className="border-t border-sp-line bg-sp-cream px-5 py-4">
            <div className="flex items-center justify-between font-body text-[13px] font-bold text-sp-sub">
              <span className="flex items-center gap-1.5">
                <TicketIcon className="h-4 w-4 text-sp-orange" /> Cupom
              </span>
              <span className="text-sp-green">BEMVINDO10 aplicado</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-body text-sm font-bold text-sp-sub">Subtotal</span>
              <span className="font-display text-2xl font-black text-sp-orange">{formatBRL(subtotal)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="mt-3 w-full rounded-sm bg-sp-orange py-3.5 font-display text-base font-extrabold uppercase tracking-wide text-white shadow-[0_8px_22px_rgb(238_77_45/0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sp-deep active:translate-y-0"
            >
              Finalizar compra
            </button>
            <p className="mt-2 text-center font-body text-[11px] font-semibold text-sp-faint">
              Compra 100% protegida · Devolução grátis em 7 dias
            </p>
          </footer>
        )}
      </aside>
    </>
  );
}
