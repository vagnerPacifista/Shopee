import { BoltIcon } from "./Icons";

const ITEMS = [
  "FRETE GRÁTIS EM PEDIDOS ACIMA DE R$ 19",
  "CUPOM BEMVINDO10: 10% OFF NA PRIMEIRA COMPRA",
  "ATÉ 70% OFF EM ELETRÔNICOS — SÓ HOJE",
  "PAGUE COM PIX E GANHE 5% OFF EXTRA",
  "DEVOLUÇÃO GRÁTIS EM ATÉ 7 DIAS",
  "OFERTA RELÂMPAGO: NOVAS OFERTAS A CADA 6 HORAS",
];

export default function Ticker() {
  const row = (key: string, hidden: boolean) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={hidden}>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <BoltIcon className="mx-4 h-3 w-3 text-sp-yellow" />
          <span className="whitespace-nowrap font-body text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            {item}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="tick-wrap overflow-hidden bg-sp-deep">
      <div className="tick-track flex w-max py-1.5">
        {row("a", false)}
        {row("b", true)}
      </div>
    </div>
  );
}
