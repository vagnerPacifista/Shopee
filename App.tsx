import { useCallback, useEffect, useRef, useState } from "react";
import Ticker from "./components/Ticker";
import Header, { type CartLine } from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import { ServiceRow, VoucherStrip } from "./components/PromoStrips";
import FlashSale from "./components/FlashSale";
import Categories from "./components/Categories";
import Discover from "./components/Discover";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import { PRODUCTS, type CategoryId, type Product } from "./data/shop";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function App() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2400);
  }, []);

  const addToCart = useCallback(
    (p: Product, silent = false) => {
      setCart((c) => ({ ...c, [p.id]: (c[p.id] ?? 0) + 1 }));
      if (!silent) showToast("Produto adicionado ao carrinho!");
    },
    [showToast]
  );

  const toggleFav = useCallback(
    (p: Product) => {
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(p.id)) {
          next.delete(p.id);
          showToast("Removido dos favoritos");
        } else {
          next.add(p.id);
          showToast("Adicionado aos favoritos!");
        }
        return next;
      });
    },
    [showToast]
  );

  const inc = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const dec = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      if ((next[id] ?? 0) <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });
  const remove = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });

  const checkout = () => {
    setDrawerOpen(false);
    setCart({});
    showToast("Pedido realizado com sucesso! (demonstração)");
  };

  const cartLines: CartLine[] = Object.entries(cart)
    .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === id)!, qty }))
    .filter((l) => l.product);
  const cartCount = cartLines.reduce((s, l) => s + l.qty, 0);

  const pickCategory = useCallback((c: CategoryId | "all") => {
    setCategory(c);
    requestAnimationFrame(() => scrollTo("descobertas"));
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-sp-bg font-body text-sp-ink">
      <Ticker />
      <Header
        query={query}
        onQuery={setQuery}
        cart={cartLines}
        cartCount={cartCount}
        onOpenCart={() => setDrawerOpen(true)}
        onRemove={remove}
        onSearch={() => scrollTo("descobertas")}
      />

      <main>
        <HeroCarousel onGoFlash={() => scrollTo("flash")} onGoDiscover={() => scrollTo("descobertas")} />
        <ServiceRow />
        <VoucherStrip onToast={showToast} />
        <FlashSale onAdd={addToCart} />
        <Categories active={category} onSelect={pickCategory} />
        <Discover
          query={query}
          activeCategory={category}
          onCategory={setCategory}
          favorites={favorites}
          onToggleFav={toggleFav}
          onAdd={addToCart}
        />
      </main>

      <Footer />

      <CartDrawer
        open={drawerOpen}
        cart={cartLines}
        onClose={() => setDrawerOpen(false)}
        onInc={inc}
        onDec={dec}
        onRemove={remove}
        onCheckout={checkout}
      />
      <Toast message={toast} />
    </div>
  );
}
