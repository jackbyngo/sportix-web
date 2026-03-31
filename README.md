# SPORTIX — Інтернет-магазин спортивного одягу

## Запуск локально

### 1. Встановити залежності
```bash
npm install
```

### 2. Запустити dev-сервер
```bash
npm run dev
```

Відкрий браузер: http://localhost:3000

### 3. Продакшн білд
```bash
npm run build
npm start
```

---

## Структура проєкту
```
sportix/
├── app/
│   ├── globals.css       # Глобальні стилі + CSS змінні (кольори)
│   ├── layout.tsx        # Root layout (шрифти, meta)
│   └── page.tsx          # Головна сторінка (Hero, About, Platforms, Contact, Footer)
├── components/
│   ├── Header.tsx        # Хедер з мобільним меню
│   └── ProductCatalog.tsx # Каталог з фільтрацією за категорією
├── public/
│   └── images/           # Сюди помісти свої зображення:
│                           hero-bg.jpg
│                           product-jacket.jpg
│                           product-pants.jpg
│                           product-tshirt.jpg
│                           product-shoes.jpg
│                           product-hoodie.jpg
│                           product-shorts.jpg
│                           product-tank.jpg
└── README.md
```

## Зображення
Якщо у тебе є оригінальні зображення з Vercel-деплою, завантаж їх у папку `public/images/`.
Якщо немає — замінники підставляться автоматично (placeholder).

## Технології
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (іконки)
