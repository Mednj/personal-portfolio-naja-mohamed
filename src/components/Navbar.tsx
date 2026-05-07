import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { type Language, navItems } from "../data/portfolio";

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="font-semibold tracking-tight text-slate-950 dark:text-white">
          Mohamed NAJA
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems[language].map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-electric dark:text-slate-300 dark:hover:text-mint">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 items-center rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold shadow-sm dark:border-white/10 dark:bg-white/5">
            {(["fr", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onLanguageChange(item)}
                className={`h-8 rounded-full px-3 transition ${
                  language === item
                    ? "bg-slate-950 text-white dark:bg-white dark:text-ink"
                    : "text-slate-500 hover:text-electric dark:text-slate-300 dark:hover:text-mint"
                }`}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-mint dark:hover:text-mint"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden dark:border-white/10 dark:bg-ink-2">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems[language].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
