import {
  BagLogo,
  FacebookIcon,
  InstagramIcon,
  PixIcon,
  ShieldIcon,
  TruckIcon,
  YoutubeIcon,
} from "./Icons";

const COLS: { title: string; links: string[] }[] = [
  {
    title: "Atendimento ao Cliente",
    links: ["Central de Ajuda", "Como Comprar", "Métodos de Pagamento", "Prazo de Entrega", "Devolução e Reembolso", "Fale Conosco"],
  },
  {
    title: "Sobre a Loja",
    links: ["Quem Somos", "Políticas da Plataforma", "Privacidade", "Programa de Afiliados", "Imprensa", "Carreiras"],
  },
  {
    title: "Pagamento",
    links: [],
  },
  {
    title: "Entrega",
    links: [],
  },
];

const PAYMENTS = ["Pix", "Visa", "Master", "Elo", "Boleto", "Hiper"];
const CARRIERS = ["Correios", "Loggi", "Jadlog", "Total Express", "Sequoia", "Kangu"];

function Badge({ label }: { label: string }) {
  return (
    <span className="grid h-9 min-w-[52px] place-items-center rounded-sm border border-sp-line bg-white px-2 font-display text-[11px] font-bold uppercase tracking-wide text-sp-sub shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sp-orange hover:text-sp-orange">
      {label}
    </span>
  );
}

function FakeQR() {
  const cells = [
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,
    1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,
    1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,
    1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,
    1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,
    1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,
    1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,
    0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,
    1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,
    0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,
    1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,
    1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,
    1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,
    1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,
    1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,
    1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,
    1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,
  ];
  return (
    <svg viewBox="0 0 19 19" className="h-24 w-24 rounded-sm border-4 border-white bg-white shadow-md" aria-label="QR code ilustrativo para baixar o app">
      {cells.map((c, i) =>
        c ? (
          <rect key={i} x={i % 19} y={Math.floor(i / 19)} width="1" height="1" fill="#26201d" />
        ) : null
      )}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10 border-t-4 border-sp-orange bg-sp-card">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[13px] font-black uppercase tracking-[0.12em] text-sp-ink">
                {col.title}
              </h4>
              {col.links.length > 0 ? (
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#inicio" className="font-body text-[13px] font-semibold text-sp-sub transition-colors hover:text-sp-orange">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : col.title === "Pagamento" ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {PAYMENTS.map((p) => (
                    <Badge key={p} label={p} />
                  ))}
                </div>
              ) : (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {CARRIERS.map((p) => (
                    <Badge key={p} label={p} />
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* app column */}
          <div>
            <h4 className="font-display text-[13px] font-black uppercase tracking-[0.12em] text-sp-ink">
              Baixe o App
            </h4>
            <div className="mt-4 flex items-start gap-4">
              <FakeQR />
              <div className="flex flex-col gap-2">
                {["App Store", "Google Play", "AppGallery"].map((store) => (
                  <a
                    key={store}
                    href="#inicio"
                    className="flex items-center gap-2 rounded-sm border border-sp-line bg-sp-bg px-3 py-1.5 font-body text-[11px] font-extrabold text-sp-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-sp-orange hover:text-sp-orange"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sp-orange" />
                    {store}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: YoutubeIcon, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#inicio"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-sp-line bg-sp-bg text-sp-sub transition-all duration-200 hover:-translate-y-1 hover:border-sp-orange hover:bg-sp-orange hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-sp-line pt-8">
          {[
            { icon: ShieldIcon, text: "Compra 100% protegida" },
            { icon: TruckIcon, text: "Entrega para todo o Brasil" },
            { icon: PixIcon, text: "5% OFF pagando com Pix" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 font-body text-[13px] font-extrabold text-sp-sub">
              <Icon className="h-5 w-5 text-sp-orange" />
              {text}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-sp-line pt-6 text-center">
          <a href="#inicio" className="flex items-center gap-2 text-sp-orange">
            <BagLogo className="h-9 w-9" />
            <span className="font-display text-2xl font-extrabold lowercase tracking-tight">shopee</span>
          </a>
          <p className="max-w-2xl font-body text-[12px] leading-relaxed text-sp-faint">
            Site demonstrativo criado por fã, inspirado no visual de marketplaces. Não é afiliado à Shopee ou à Sea
            Group. Todos os produtos, preços e avaliações são fictícios; imagens de produtos via Pexels e artes
            geradas para fins de ilustração.
          </p>
          <p className="font-body text-[12px] font-bold text-sp-sub">
            © 2026 — Feito com <span className="text-sp-orange">laranja</span> e muitas ofertas.
          </p>
        </div>
      </div>
    </footer>
  );
}
