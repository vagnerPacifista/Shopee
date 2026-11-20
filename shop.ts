export type CategoryId = "eletronicos" | "moda" | "beleza" | "casa" | "acessorios";

export interface Product {
  id: string;
  name: string;
  price: number;
  original: number;
  rating: number;
  sold: string;
  image: string;
  category: CategoryId;
  freeShipping?: boolean;
  location: string;
  mall?: boolean;
  ad?: boolean;
  flash?: { pct: number };
}

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const img = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

export const PRODUCTS: Product[] = [
  // ---------- OFERTAS RELÂMPAGO ----------
  {
    id: "fone-tws",
    name: "Fone de Ouvido Bluetooth TWS Pro com Case Carregador, Cancelamento de Ruído",
    price: 59.9,
    original: 129.9,
    rating: 4.9,
    sold: "12,4 mil",
    image: img(10029870),
    category: "eletronicos",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
    flash: { pct: 87 },
  },
  {
    id: "tenis-rosa",
    name: "Tênis Feminino Casual Rosa Chiclete Confortável para Academia e Dia a Dia",
    price: 89.9,
    original: 199.9,
    rating: 4.8,
    sold: "8,1 mil",
    image: img(27008326),
    category: "moda",
    freeShipping: true,
    location: "Franca, SP",
    flash: { pct: 72 },
  },
  {
    id: "kit-skincare",
    name: "Kit Skincare Facial Completo: Limpeza, Hidratação e Proteção 3 Passos",
    price: 74.5,
    original: 159.0,
    rating: 4.9,
    sold: "5,7 mil",
    image: img(34159010),
    category: "beleza",
    freeShipping: true,
    location: "Rio de Janeiro",
    mall: true,
    flash: { pct: 91 },
  },
  {
    id: "smartwatch-a5",
    name: "Smartwatch A5 Tela AMOLED, Monitor Cardíaco, GPS Integrado, 10 Dias de Bateria",
    price: 149.9,
    original: 349.9,
    rating: 4.7,
    sold: "15,9 mil",
    image: img(10357016),
    category: "eletronicos",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
    flash: { pct: 64 },
  },
  {
    id: "torradeira-retro",
    name: "Torradeira Elétrica Retrô 2 Fatias com 6 Níveis de Tostagem 850W",
    price: 119.0,
    original: 249.0,
    rating: 4.8,
    sold: "3,2 mil",
    image: img(33588627),
    category: "casa",
    freeShipping: true,
    location: "Joinville, SC",
    flash: { pct: 58 },
  },
  {
    id: "oculos-kit",
    name: "Kit Masculino Premium: Óculos de Sol + Relógio + Carteira de Couro",
    price: 99.9,
    original: 219.9,
    rating: 4.6,
    sold: "4,4 mil",
    image: img(34479698),
    category: "acessorios",
    location: "Belo Horizonte",
    flash: { pct: 80 },
  },

  // ---------- ELETRÔNICOS ----------
  {
    id: "combo-tech",
    name: "Combo Tech: Smartwatch + Fones Sem Fio + Suporte para Notebook",
    price: 189.9,
    original: 399.9,
    rating: 4.8,
    sold: "6,3 mil",
    image: img(13364791),
    category: "eletronicos",
    freeShipping: true,
    location: "Curitiba",
    mall: true,
  },
  {
    id: "watch-dark",
    name: "Relógio Inteligente Série Dark com Pulseira Magnética e NFC",
    price: 219.0,
    original: 459.0,
    rating: 4.9,
    sold: "9,8 mil",
    image: img(12877873),
    category: "eletronicos",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
  },
  {
    id: "kit-flatlay",
    name: "Kit Home Office: Smartwatch, Fone TWS e Carregador por Indução 3 em 1",
    price: 159.9,
    original: 320.0,
    rating: 4.7,
    sold: "2,9 mil",
    image: img(10703306),
    category: "eletronicos",
    location: "Florianópolis",
    freeShipping: true,
  },
  {
    id: "fone-red",
    name: "Fone Bluetooth Intra-auricular Vermelho com Estojo de Carga Rápida",
    price: 49.9,
    original: 119.9,
    rating: 4.5,
    sold: "18,2 mil",
    image: img(9741348),
    category: "eletronicos",
    location: "São Paulo",
    ad: true,
  },
  {
    id: "watch-sport",
    name: "Smartwatch Sport com Pulseira Rosa e Fones Case Incluso",
    price: 179.9,
    original: 349.0,
    rating: 4.8,
    sold: "4,1 mil",
    image: img(10357011),
    category: "eletronicos",
    freeShipping: true,
    location: "Barueri, SP",
    mall: true,
  },

  // ---------- MODA ----------
  {
    id: "tenis-vermelho",
    name: "Tênis Cano Alto Vermelho Street Style Unissex com Cadarço Reforçado",
    price: 119.9,
    original: 259.9,
    rating: 4.7,
    sold: "5,5 mil",
    image: img(26852497),
    category: "moda",
    freeShipping: true,
    location: "Franca, SP",
  },
  {
    id: "tenis-branco",
    name: "Tênis Branco Minimalista Feminino Leve e Respirável para o Verão",
    price: 79.9,
    original: 169.9,
    rating: 4.6,
    sold: "11,3 mil",
    image: img(27008322),
    category: "moda",
    location: "Novo Hamburgo, RS",
    ad: true,
  },
  {
    id: "tenis-roxo",
    name: "Tênis Roxo Ultraleve com Amortecimento em Gel — Edição Limitada",
    price: 139.0,
    original: 289.0,
    rating: 4.9,
    sold: "3,8 mil",
    image: img(27113467),
    category: "moda",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
  },
  {
    id: "tenis-nike-like",
    name: "Tênis Esportivo Premium Branco com Solado Elevado Anti-impacto",
    price: 199.9,
    original: 449.9,
    rating: 4.8,
    sold: "7,6 mil",
    image: img(12628400),
    category: "moda",
    freeShipping: true,
    location: "Rio de Janeiro",
    mall: true,
  },
  {
    id: "tenis-laranja",
    name: "Tênis Laranja Coral para Corrida Leve com Malha Knit Respirável",
    price: 99.9,
    original: 229.9,
    rating: 4.5,
    sold: "2,2 mil",
    image: img(27113455),
    category: "moda",
    location: "Campinas, SP",
  },
  {
    id: "meias-kit",
    name: "Tênis Lilás + Kit 3 Pares de Meias Divertidas Listradas",
    price: 109.9,
    original: 199.0,
    rating: 4.7,
    sold: "6,9 mil",
    image: img(27008331),
    category: "moda",
    freeShipping: true,
    location: "Blumenau, SC",
  },

  // ---------- BELEZA ----------
  {
    id: "creme-espuma",
    name: "Sabonete Facial em Espuma Sem Sulfato, Pele Sensível 150ml (kit com 2)",
    price: 45.9,
    original: 98.0,
    rating: 4.8,
    sold: "14,7 mil",
    image: img(16008945),
    category: "beleza",
    location: "São Paulo",
    mall: true,
  },
  {
    id: "kit-basics",
    name: "Kit Básicos de Skincare: Tônico + Sérum + Hidratante Vegano",
    price: 89.0,
    original: 179.9,
    rating: 4.7,
    sold: "5,2 mil",
    image: img(11753640),
    category: "beleza",
    freeShipping: true,
    location: "Porto Alegre",
  },
  {
    id: "dermo-line",
    name: "Linha Dermocosmética Completa para Rotina Noturna Anti-idade",
    price: 129.9,
    original: 289.9,
    rating: 4.9,
    sold: "8,8 mil",
    image: img(6496457),
    category: "beleza",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
  },
  {
    id: "serum-gold",
    name: "Sérum Facial Iluminador com Vitamina C 10% e Ácido Hialurônico 30ml",
    price: 68.5,
    original: 139.0,
    rating: 4.8,
    sold: "21,5 mil",
    image: img(16233812),
    category: "beleza",
    freeShipping: true,
    location: "Rio de Janeiro",
    ad: true,
  },
  {
    id: "oleos-luxo",
    name: "Óleo Corporal de Luxo com Esqualano e Ceramidas, Toque Seco",
    price: 84.9,
    original: 169.0,
    rating: 4.6,
    sold: "3,1 mil",
    image: img(16372665),
    category: "beleza",
    location: "Curitiba",
  },

  // ---------- CASA & COZINHA ----------
  {
    id: "kit-cozinha-retro",
    name: "Kit Cozinha Retrô Creme: Batedeira + Torradeira + Chaleira Elétrica",
    price: 449.0,
    original: 899.0,
    rating: 4.9,
    sold: "1,9 mil",
    image: img(30946798),
    category: "casa",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
  },
  {
    id: "jogo-panelas",
    name: "Jogo de Panelas Antiaderente 5 Peças + Liquidificador 900W",
    price: 289.9,
    original: 559.9,
    rating: 4.7,
    sold: "4,6 mil",
    image: img(19599328),
    category: "casa",
    freeShipping: true,
    location: "Recife",
  },
  {
    id: "processador-inox",
    name: "Processador de Alimentos Inox 1000W com Tigela de Vidro 2,5L",
    price: 259.0,
    original: 499.0,
    rating: 4.8,
    sold: "2,7 mil",
    image: img(30238394),
    category: "casa",
    freeShipping: true,
    location: "Manaus",
    mall: true,
  },
  {
    id: "chaleira-eletrica",
    name: "Chaleira Elétrica Inox 1,8L com Desligamento Automático e Base 360°",
    price: 94.9,
    original: 189.0,
    rating: 4.6,
    sold: "9,4 mil",
    image: img(39338456),
    category: "casa",
    location: "São Paulo",
  },

  // ---------- ACESSÓRIOS ----------
  {
    id: "kit-executivo",
    name: "Kit Executivo: Sapato Social + Relógio Clássico + Óculos + Perfume",
    price: 329.9,
    original: 699.0,
    rating: 4.8,
    sold: "1,4 mil",
    image: img(37008332),
    category: "acessorios",
    freeShipping: true,
    location: "São Paulo",
    mall: true,
  },
  {
    id: "kit-aventura",
    name: "Kit Aventura: Mochila Cargueira 40L + Bastão + Lanterna Tática",
    price: 189.9,
    original: 399.9,
    rating: 4.7,
    sold: "3,5 mil",
    image: img(18447532),
    category: "acessorios",
    freeShipping: true,
    location: "Gramado, RS",
  },
  {
    id: "kit-dourado",
    name: "Relógio Dourado + Óculos Aviador + Fone com Fio — Combo Estilo",
    price: 149.9,
    original: 319.9,
    rating: 4.5,
    sold: "6,1 mil",
    image: img(1619651),
    category: "acessorios",
    location: "Goiânia",
    ad: true,
  },
  {
    id: "kit-picnic",
    name: "Mochila Térmica para Piquenique + Garrafa Inox 1L + Toalha",
    price: 119.9,
    original: 239.0,
    rating: 4.6,
    sold: "2,8 mil",
    image: img(13024620),
    category: "acessorios",
    freeShipping: true,
    location: "Brotas, SP",
  },
];

export const FLASH_PRODUCTS = PRODUCTS.filter((p) => p.flash);

export interface CategoryTile {
  id: string;
  label: string;
  match: CategoryId | "all";
  icon: string;
}

export const CATEGORY_TILES: CategoryTile[] = [
  { id: "eletronicos", label: "Eletrônicos", match: "eletronicos", icon: "plug" },
  { id: "moda", label: "Moda", match: "moda", icon: "shirt" },
  { id: "beleza", label: "Beleza", match: "beleza", icon: "sparkle" },
  { id: "casa", label: "Casa & Cozinha", match: "casa", icon: "pan" },
  { id: "acessorios", label: "Acessórios", match: "acessorios", icon: "watch" },
  { id: "calcados", label: "Calçados", match: "moda", icon: "shoe" },
  { id: "celulares", label: "Celulares", match: "eletronicos", icon: "phone" },
  { id: "relogios", label: "Relógios", match: "acessorios", icon: "clock" },
  { id: "cuidados", label: "Cuidados Pessoais", match: "beleza", icon: "drop" },
  { id: "decoracao", label: "Decoração", match: "casa", icon: "lamp" },
];

export interface Voucher {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  accent: "orange" | "green" | "amber";
}

export const VOUCHERS: Voucher[] = [
  { id: "v1", title: "R$ 10 OFF", subtitle: "em compras acima de R$ 50", code: "BEMVINDO10", accent: "orange" },
  { id: "v2", title: "FRETE GRÁTIS", subtitle: "sem valor mínimo", code: "FRETEGRATIS", accent: "green" },
  { id: "v3", title: "15% OFF", subtitle: "desconto limitado a R$ 30", code: "OFERTA15", accent: "amber" },
  { id: "v4", title: "R$ 25 OFF", subtitle: "em compras acima de R$ 150", code: "MEGA25", accent: "orange" },
];

export interface Slide {
  id: string;
  image: string;
  kicker: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
}

export const SLIDES: Slide[] = [
  {
    id: "mega",
    image: "/images/banner-main.jpg",
    kicker: "Mega oferta da semana",
    title: "ATÉ",
    highlight: "70% OFF",
    subtitle: "em eletrônicos, moda e casa. Só até domingo!",
    cta: "Aproveitar agora",
  },
  {
    id: "cupom",
    image: "/images/banner-cupom.jpg",
    kicker: "Chegou cupom novo",
    title: "GANHE",
    highlight: "R$ 25 OFF",
    subtitle: "na primeira compra com o cupom MEGA25.",
    cta: "Resgatar cupom",
  },
  {
    id: "frete",
    image: "/images/banner-frete.jpg",
    kicker: "Semana do frete grátis",
    title: "FRETE",
    highlight: "GRÁTIS",
    subtitle: "para todo o Brasil em milhares de produtos.",
    cta: "Ver produtos",
  },
];

export const SIDE_BANNERS = [
  {
    id: "pix",
    title: "5% OFF extra",
    subtitle: "pagando com Pix",
    bg: "from-sp-green to-[#00796b]",
    icon: "pix" as const,
  },
  {
    id: "devolucao",
    title: "Devolução grátis",
    subtitle: "em até 7 dias, sem burocracia",
    bg: "from-sp-orange to-sp-amber",
    icon: "return" as const,
  },
];

export const SEARCH_SUGGESTIONS = [
  "fone bluetooth",
  "air fryer",
  "tênis feminino",
  "smartwatch",
  "kit skincare",
  "torradeira retrô",
  "mochila",
  "sérum vitamina c",
];

export const FREE_SHIPPING_THRESHOLD = 99;
