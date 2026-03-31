"use client";
import Header from '@/components/Header'
import ProductCatalog from '@/components/ProductCatalog'
import { Award, Truck, Shield, Clock, Monitor, Smartphone, Globe, MapPin, Phone, Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <img
            src="/images/hero-bg.jpg"
            alt="Спортсмен у русі"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e: any) => { e.target.src = 'https://placehold.co/1920x1080/111/222?text=SPORTIX' }}
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Інтернет-магазин спортивного одягу</p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
              РУХАЙСЯ<br />
              <span className="text-primary">ВІЛЬНО</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Професійний спортивний одяг для тих, хто обирає активний спосіб життя. Доставка по всій Україні.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                Переглянути каталог
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
              >
                Дізнатися більше
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-1.5">
              <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/60" />
            </div>
          </div>
        </section>

        {/* Catalog */}
        <ProductCatalog />

        {/* About */}
        <section id="about" className="bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">Про нас</p>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Чому обирають SPORTIX</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Інтернет-магазин спортивного одягу з офісом у Львові. Власник —{' '}
                <strong className="text-foreground">Варварич Роман Миколайович</strong>. Ми спеціалізуємось на
                кросплатформних рішеннях, що дозволяють нашим клієнтам здійснювати покупки з будь-якого пристрою.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Award, title: '3 роки досвіду', desc: 'Працюємо на ринку спортивного одягу з 2023 року, знаємо потреби наших клієнтів.' },
                { icon: Truck, title: 'Доставка по Україні', desc: 'Швидка доставка Новою Поштою та кур\'єром по Львову. Безкоштовна доставка від 2000 ₴.' },
                { icon: Shield, title: 'Гарантія якості', desc: 'Працюємо лише з перевіреними брендами та матеріалами преміум-класу.' },
                { icon: Clock, title: 'Підтримка 24/7', desc: 'Наша команда завжди готова допомогти з вибором та консультацією.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section id="platforms" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">Платформи</p>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Кросплатформні рішення</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Наш магазин побудований на кросплатформних рішеннях з залученням технологій веб-розробки. Один додаток
                працює на всіх платформах — у браузері, на Android та iOS.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Monitor className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Веб-браузер</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Повнофункціональний веб-додаток, доступний з будь-якого браузера на комп'ютері чи планшеті.
                  Адаптивний дизайн для всіх розмірів екранів.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-primary bg-primary/5 p-8 ring-1 ring-primary/20 transition-all duration-300">
                <div className="absolute right-4 top-4 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Рекомендовано
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Smartphone className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Мобільні додатки</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Один додаток, написаний на JS фреймворку, може бути запущений як у браузері, так і на Android та iOS.
                  Єдина архітектура для усіх платформ.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Backend сервіси</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Мобільні додатки з'єднані з бекенд сервісом через REST/GraphQL API. Це забезпечує синхронізацію
                  даних між усіма платформами.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">Контакти</p>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Зв'яжіться з нами</h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-8">
                {[
                  { icon: MapPin, title: 'Адреса', lines: ['м. Львів, вул. Городоцька, 42', 'Україна, 79000'] },
                  { icon: Phone, title: 'Телефон', lines: ['+380 (32) 245-67-89', '+380 (67) 123-45-67'] },
                  { icon: Mail, title: 'Email', lines: ['info@sportix.ua', 'support@sportix.ua'] },
                  { icon: Clock, title: 'Графік роботи', lines: ['Пн-Пт: 09:00 — 19:00', 'Сб: 10:00 — 16:00', 'Нд: Вихідний'] },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {lines.map((line, i) => (
                          <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border bg-background p-8">
                <h3 className="mb-6 text-lg font-bold text-foreground">Напишіть нам</h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Ваше ім'я
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Іван Петренко"
                      className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Повідомлення
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Ваше повідомлення..."
                      className="w-full resize-none rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-lg bg-primary py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Надіслати
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground tracking-tight">S</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">SPORTIX</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Інтернет-магазин спортивного одягу. Офіс у Львові.</p>
              <p className="mt-2 text-xs text-muted-foreground">Власник: Варварич Роман Миколайович</p>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">Каталог</h4>
              <nav className="flex flex-col gap-2.5">
                {['Куртки', 'Штани', 'Футболки', 'Взуття', 'Аксесуари'].map((item) => (
                  <a key={item} href="#catalog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item}</a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">Інформація</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: 'Про нас', href: '#about' },
                  { label: 'Контакти', href: '#contact' },
                  { label: 'Доставка', href: '#' },
                  { label: 'Повернення', href: '#' },
                  { label: 'Оплата', href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">Підписка</h4>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">Отримуйте інформацію про новинки та акції.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="shrink-0 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90">
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
            <p className="text-xs text-muted-foreground">
              © 2023–2026 SPORTIX. Усі права захищені. Власник — Варварич Роман Миколайович.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Політика конфіденційності</a>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Умови використання</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
