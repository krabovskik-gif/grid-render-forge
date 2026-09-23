import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BlueprintMark } from "./technical-art";

const nav = [
  ["/", "Головна"], ["/about", "Про бюро"], ["/services", "Послуги"], ["/projects", "Проєкти"], ["/contact", "Контакти"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 36);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={compact ? "site-header site-header--compact" : "site-header"}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="shell flex h-full items-center justify-between gap-6">
        <Link to="/" className="brand" aria-label="Інженерне бюро проєктів — головна"><small>ІБП</small><span><em>Engineering Design Bureau</em>Інженерне бюро проєктів</span></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Головна навігація">
          {nav.map(([to, label]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "nav-link nav-link--active" }} className="nav-link">{label}</Link>)}
        </nav>
        <Button asChild variant="technical" className="hidden lg:inline-flex"><Link to="/contact">Замовити проєкт <ArrowUpRight /></Link></Button>
        <Button variant="icon" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Закрити меню" : "Відкрити меню"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Мобільна навігація">{nav.map(([to, label], i) => <Link key={to} to={to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</Link>)}<Button asChild variant="technical"><Link to="/contact" onClick={() => setOpen(false)}>Замовити проєкт <ArrowUpRight /></Link></Button></nav>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid"><div><div className="brand"><BlueprintMark className="size-9"/><span>ІБП</span></div><p>Інженерне проєктування зовнішніх та внутрішніх мереж.</p></div><nav>{nav.map(([to,label])=><Link key={to} to={to}>{label}</Link>)}</nav><div className="footer-contact"><a href="tel:+380993173009">+380 99 317 30 09</a><a href="mailto:profipro@ukr.net">profipro@ukr.net</a><a href="https://t.me/GIP100" target="_blank" rel="noreferrer">Telegram @GIP100</a></div></div><div className="shell footer-bottom"><span>© 2026 Інженерне бюро проєктів</span><span>Київ / Україна</span></div></footer>;
}

export function PageIntro({ code, title, children }: { code: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro grid-surface"><div className="shell relative z-10"><div className="section-code">{code} / ІБП</div><h1>{title}</h1><div className="page-lead">{children}</div></div><BlueprintMark className="page-intro-mark"/></section>;
}
