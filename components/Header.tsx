'use client'

import { useState } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a className="flex items-center gap-2" href="/">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground tracking-tight">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">SPORTIX</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {['Каталог', 'Про нас', 'Платформи', 'Контакти'].map((item) => (
            <a
              key={item}
              href={`#${item === 'Каталог' ? 'catalog' : item === 'Про нас' ? 'about' : item === 'Платформи' ? 'platforms' : 'contact'}`}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Пошук" className="hidden text-muted-foreground transition-colors hover:text-foreground md:block">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Кошик" className="relative text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </button>
          <button
            aria-label="Меню"
            className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {[
              { label: 'Каталог', href: '#catalog' },
              { label: 'Про нас', href: '#about' },
              { label: 'Платформи', href: '#platforms' },
              { label: 'Контакти', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
