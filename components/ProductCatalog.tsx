'use client'

import { useState } from 'react'
import { ShoppingBag, Eye } from 'lucide-react'
import Image from 'next/image'

const products = [
  { id: 1, name: 'Бігова куртка Pro', category: 'Куртки', price: 3200, image: '/images/product-jacket.jpg', isNew: true },
  { id: 2, name: 'Тренувальні штани Flex', category: 'Штани', price: 1800, image: '/images/product-pants.jpg', isNew: false },
  { id: 3, name: 'Спортивна футболка Air', category: 'Футболки', price: 950, image: '/images/product-tshirt.jpg', isNew: true },
  { id: 4, name: 'Бігові кросівки Speed', category: 'Взуття', price: 4500, image: '/images/product-shoes.jpg', isNew: false },
  { id: 5, name: 'Худі Comfort', category: 'Худі', price: 2100, image: '/images/product-hoodie.jpg', isNew: true },
  { id: 6, name: 'Шорти Training', category: 'Шорти', price: 1100, image: '/images/product-shorts.jpg', isNew: false },
  { id: 7, name: 'Майка Compression', category: 'Футболки', price: 850, image: '/images/product-tank.jpg', isNew: false },
  { id: 8, name: 'Вітровка Ultralight', category: 'Куртки', price: 2800, image: '/images/product-jacket.jpg', isNew: true },
    { id: 9, name: 'Майка Compression', category: 'Футболки', price: 850, image: '/images/product-tank.jpg', isNew: false },
]

const categories = ['Все', 'Куртки', 'Штани', 'Футболки', 'Взуття', 'Худі', 'Шорти']

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filtered = activeCategory === 'Все'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="catalog" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">Каталог</p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Наші товари</h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl bg-card transition-all duration-300 hover:ring-1 hover:ring-primary/30"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/1a1a1a/ff6b00?text=' + encodeURIComponent(product.name)
                  }}
                />
                {product.isNew && (
                  <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    New
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    aria-label="Додати до кошика"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Переглянути"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
                <h3 className="mt-1 text-sm font-semibold text-foreground">{product.name}</h3>
                <p className="mt-2 text-lg font-bold text-primary">{product.price.toLocaleString('uk-UA')} ₴</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
