import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";
import { VOUCHERS, type Voucher } from "../data/shop";
import { cn } from "../utils/cn";
import { BoltIcon, CheckIcon, CoinIcon, LiveIcon, ReturnIcon, ShieldIcon, TicketIcon, TruckIcon, PixIcon } from "./Icons";

/* ---------- quick services ---------- */
interface Service {
  label: string;
  icon: ReactNode;
  color: string;
}

const SERVICES: Service[] = [
  { label: "Frete Grátis", icon: <TruckIcon className="h-6 w-6" />, color: "text-sp-green bg-sp-green-soft" },
  { label: "Cupons", icon: <TicketIcon className="h-6 w-6" />, color: "text-sp-orange bg-sp-cream" },
  { label: "Moedas", icon: <CoinIcon className="h-6 w-6" />, color: "text-sp-amber bg-sp-cream" },
  { label: "Oferta Relâmpago", icon: <BoltIcon className="h-6 w-6" />, color: "text-sp-orange bg-sp-cream" },
  { label: "Devolução Grátis", icon: <ReturnIcon className="h-6 w-6" />, color: "text-sp-green bg-sp-green-soft" },
  { label: "Pague com Pix", icon: <PixIcon className="h-6 w-6" />, color: "text-sp-green bg-sp-green-soft" },
  { label: "Compra Segura", icon: <ShieldIcon className="h-6 w-6" />, color: "text-sp-orange bg-sp-cream" },
  { label: "Shopee Live", icon: <LiveIcon className="h-6 w-6" />, color: "text-sp-deep bg-sp-cream" },
];

export function ServiceRow() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-4">
      <Reveal>
        <div className="dots-bg grid grid-cols-4 rounded-sm border border-sp-line bg-sp-card px-2 py-4 shadow-[0_2px_10px_rgb(38_32_29/0.05)] md:grid-cols-8">
          {SERVICES.map((s) => (
            <button
              key={s.label}
              className="group flex flex-col items-center gap-2 px-1 py-1.5"
            >
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_18px_rgb(238_77_45/0.25)]",
                  s.color
                )}
              >
                {s.icon}
              </span>
              <span className="text-center font-body text-[11px] font-bold leading-tight text-sp-sub transition-colors group-hover:text-sp-orange">
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- vouchers ---------- */
const accentMap = {
  orange: { text: "text-sp-orange", bar: "bg-sp-orange", chip: "bg-sp-orange text-white" },
  green: { text: "text-sp-green", bar: "bg-sp-green", chip: "bg-sp-green text-white" },
  amber: { text: "text-sp-deep", bar: "bg-sp-amber", chip: "bg-sp-amber text-sp-ink" },
};

function VoucherCard({ v, delay, onClaim, claimed }: { v: Voucher; delay: number; onClaim: () => void; claimed: boolean }) {
  const a = accentMap[v.accent];
  return (
    <Reveal delay={delay} className="h-full">
      <div className="coupon-cut relative flex h-full overflow-hidden rounded-sm border border-sp-line bg-sp-card shadow-[0_2px_10px_rgb(38_32_29/0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgb(238_77_45/0.18)]">
        <div className={cn("w-1.5 shrink-0", a.bar)} />
        <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
          <div>
            <p className={cn("font-display text-xl font-black leading-none", a.text)}>{v.title}</p>
            <p className="mt-1.5 truncate font-body text-[12px] font-semibold text-sp-sub">{v.subtitle}</p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="truncate rounded-sm border border-dashed border-sp-faint/60 bg-sp-bg px-2 py-0.5 font-body text-[10px] font-extrabold tracking-[0.08em] text-sp-sub">
              {v.code}
            </span>
            <button
              onClick={onClaim}
              disabled={claimed}
              className={cn(
                "shrink-0 rounded-sm px-3.5 py-1.5 font-body text-[11px] font-extrabold uppercase tracking-wide transition-all duration-200",
                claimed ? "cursor-default bg-sp-green-soft text-sp-green" : cn(a.chip, "hover:-translate-y-0.5 hover:shadow-md active:translate-y-0")
              )}
            >
              {claimed ? (
                <span className="flex items-center gap-1">
                  <CheckIcon className="h-3.5 w-3.5" /> Resgatado
                </span>
              ) : (
                "Resgatar"
              )}
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function VoucherStrip({ onToast }: { onToast: (msg: string) => void }) {
  const [claimed, setClaimed] = useState<Set<string>>(new Set());

  const claim = (v: Voucher) => {
    if (claimed.has(v.id)) return;
    setClaimed((prev) => new Set(prev).add(v.id));
    onToast(`Cupom ${v.code} resgatado! Aplique no checkout.`);
  };

  return (
    <section id="cupons" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 py-4">
      <Reveal className="mb-4 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-sp-orange text-white">
            <TicketIcon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-black uppercase leading-none text-sp-ink">Cupons de hoje</h2>
            <p className="mt-1 font-body text-[12px] font-semibold text-sp-sub">Resgate antes que acabe — válido até 23h59</p>
          </div>
        </div>
        <span className="hidden font-body text-[11px] font-extrabold uppercase tracking-[0.16em] text-sp-orange sm:block">
          {claimed.size}/{VOUCHERS.length} resgatados
        </span>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {VOUCHERS.map((v, i) => (
          <VoucherCard key={v.id} v={v} delay={i * 80} claimed={claimed.has(v.id)} onClaim={() => claim(v)} />
        ))}
      </div>
    </section>
  );
}
