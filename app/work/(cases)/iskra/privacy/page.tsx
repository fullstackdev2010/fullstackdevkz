// app/work/(cases)/iskra/privacy/page.tsx
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Политика конфиденциальности – Iskra Trade",
  description:
    "Политика конфиденциальности для Iskra Trade. Сбор, обработка, хранение данных, безопасность и права пользователей. / Privacy policy for Iskra Trade.",
  alternates: { canonical: "/privacy" },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default async function Page() {
  const updated = "November 6, 2025";

  return (
    <div className="relative">
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Paper panel */}
        <div className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                Политика конфиденциальности — Искра Юг
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Последнее обновление: {updated}. Русская версия — основная.
                English version is provided below for reference.
              </p>
            </header>

            <div className="mt-10 space-y-12 text-base leading-relaxed text-[var(--muted)]">
              {/* ===================== RUSSIAN VERSION (DEFAULT) ===================== */}

              <Section id="ru-what-we-collect" title="Что мы собираем">
                <p>
                  Мы собираем только минимальный объём данных, необходимый для
                  работы приложения и обработки ваших заказов.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Информация аккаунта, которую вы предоставляете (email, имя
                    пользователя, опционально — номер телефона).
                  </li>
                  <li>
                    Данные заказов, создаваемые вами в приложении (товары,
                    количество, зафиксированные цены, итоговые суммы, временные
                    метки).
                  </li>
                  <li>
                    Технические данные: базовая информация об устройстве и сети,
                    необходимая для работы приложения и защиты вашей сессии
                    (например, IP-адрес в серверных логах, логи ошибок).
                  </li>
                  <li>
                    Токены аутентификации: краткоживущий access-токен и
                    хэшированные refresh-токены на сервере.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  Что мы не собираем
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Не собираем точное местоположение, контакты, фотографии,
                    микрофон, камеру или SMS.
                  </li>
                  <li>
                    Не собираем чувствительные персональные данные (медицинские
                    данные, номера банковских счетов и т.п.).
                  </li>
                  <li>
                    Не используем рекламные SDK третьих сторон и
                    кросс-приложечное отслеживание.
                  </li>
                </ul>
              </Section>

              <Section
                id="ru-how-we-use"
                title="Как мы используем ваши данные"
              >
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Для аутентификации вашего аккаунта и поддержания активной
                    сессии.
                  </li>
                  <li>
                    Для отображения данных каталога и обработки заказов (включая
                    серверную проверку цен и итогов).
                  </li>
                  <li>
                    Для повышения надежности и безопасности (ограничение частоты
                    запросов, сбор логов ошибок).
                  </li>
                  <li>
                    Для поддержки бизнес-процессов (например, экспорт заказов в
                    бухгалтерские или BI-системы).
                  </li>
                </ul>
              </Section>

              <Section
                id="ru-storage-security"
                title="Хранение и безопасность"
              >
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    На устройстве: состояние access/refresh хранится с
                    использованием SecureStore, где доступно (с запасным
                    вариантом в виде AsyncStorage при необходимости). На
                    поддерживаемых устройствах доступ к приложению может быть
                    дополнительно защищён биометрией.
                  </li>
                  <li>
                    На сервере: пароли хэшируются с помощью bcrypt, refresh-токены
                    хранятся в виде SHA-256 хэшей. База данных защищена
                    стандартными серверными и сетевыми мерами безопасности.
                  </li>
                  <li>
                    Сроки хранения: учетные записи пользователей и данные
                    заказов хранятся для бизнес- и юридических целей. Вы можете
                    запросить удаление ваших данных там, где это применимо.
                  </li>
                </ul>
              </Section>

              <Section id="ru-data-sharing" title="Передача данных">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Мы не продаём персональные данные.</li>
                  <li>
                    Мы можем передавать данные поставщикам услуг (например,
                    хостинг-провайдерам или провайдерам баз данных) строго для
                    обеспечения работы сервиса и только при наличии договорных
                    гарантий защиты данных.
                  </li>
                  <li>
                    В случаях, предусмотренных законом, мы можем предоставить
                    данные компетентным государственным органам.
                  </li>
                </ul>
              </Section>

              <Section
                id="ru-your-rights"
                title="Ваш выбор и ваши права"
              >
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Вы можете выйти из аккаунта, отключить биометрию или
                    сбросить PIN-код в любое время.
                  </li>
                  <li>
                    Вы можете запросить доступ к вашим данным, их исправление или
                    удаление (в пределах, разрешённых законом), связавшись с
                    нами по указанным контактам.
                  </li>
                  <li>
                    Вы можете использовать приложение без выдачи
                    дополнительных/необязательных разрешений. Для базового
                    функционала такие разрешения не требуются.
                  </li>
                </ul>
              </Section>

              <Section id="ru-children" title="Дети">
                <p>
                  Приложение предназначено для бизнес-пользователей и не
                  ориентировано на детей младше 13 лет (или соответствующего
                  возраста в вашей юрисдикции).
                </p>
              </Section>

              <Section id="ru-contact" title="Контакты">
                <p>
                  По вопросам конфиденциальности или запросам, связанным с
                  обработкой данных, вы можете связаться с нами по адресу:
                  <span className="whitespace-pre"> </span>
                  <a className="underline" href="mailto:support@iskrasales.ru">
                    support@iskrasales.ru
                  </a>
                  .
                </p>
              </Section>

              <Section id="ru-updates" title="Обновления политики">
                <p>
                  Мы можем периодически обновлять настоящую политику.
                  Существенные изменения будут опубликованы в приложении или на
                  нашем сайте с обновлённой датой «последнего обновления».
                </p>
              </Section>

              {/* Divider between Russian and English versions */}
              <hr className="border-white/10" />

              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Privacy Policy — Iskra Trade (English Version)
                </h2>
                <p className="text-sm text-[var(--muted)]">
                  The English version below is provided for convenience only. In
                  case of any discrepancies, the Russian version above prevails.
                </p>
              </div>

              {/* ===================== ENGLISH VERSION (OPTIONAL) ===================== */}

              <Section id="en-what-we-collect" title="What we collect">
                <p>
                  We collect the minimum data necessary to operate the app and
                  process your orders.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Account info you provide (email, username, optional phone).
                  </li>
                  <li>
                    Order data you create in the app (items, quantities, price
                    snapshots, totals, timestamps).
                  </li>
                  <li>
                    Technical data: basic device/network information necessary
                    to operate the app and secure your session (e.g., IP
                    address in server logs, error logs).
                  </li>
                  <li>
                    Authentication tokens: short-lived access token; hashed
                    refresh tokens on the server.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  What we don&apos;t collect
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    No precise location, contacts, photos, microphone, camera,
                    or SMS.
                  </li>
                  <li>
                    No sensitive personal data (health, financial account
                    numbers, etc.).
                  </li>
                  <li>
                    No third-party advertising SDKs or cross-app tracking.
                  </li>
                </ul>
              </Section>

              <Section id="en-how-we-use" title="How we use your data">
                <ul className="list-disc pl-6 space-y-2">
                  <li>To authenticate your account and keep you signed in.</li>
                  <li>
                    To show catalog data and process orders (including
                    server-side price/total verification).
                  </li>
                  <li>
                    To improve reliability and security (rate limiting, error
                    logs).
                  </li>
                  <li>
                    To support business operations (e.g., exporting orders into
                    your accounting/BI systems).
                  </li>
                </ul>
              </Section>

              <Section
                id="en-storage-security"
                title="Storage &amp; security"
              >
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    On device: access/refresh state stored using SecureStore
                    where available (fallback to AsyncStorage if necessary).
                    Biometric checks may gate access on supported devices.
                  </li>
                  <li>
                    On server: passwords are bcrypt-hashed; refresh tokens are
                    stored as SHA-256 hashes; the database is protected by
                    standard server and network controls.
                  </li>
                  <li>
                    Retention: user accounts and order records are retained for
                    business and legal purposes. You may request deletion of
                    your account where applicable.
                  </li>
                </ul>
              </Section>

              <Section id="en-data-sharing" title="Data sharing">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not sell personal data.</li>
                  <li>
                    We may share data with service providers (e.g.,
                    hosting/database providers) strictly to operate the service,
                    under contractual safeguards.
                  </li>
                  <li>
                    If required by law, we may disclose data to competent
                    authorities.
                  </li>
                </ul>
              </Section>

              <Section
                id="en-your-rights"
                title="Your choices &amp; rights"
              >
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You can sign out, disable biometrics, or reset your PIN at
                    any time.
                  </li>
                  <li>
                    You may request access, correction, or deletion of your data
                    where legally applicable by contacting us.
                  </li>
                  <li>
                    You can use the app without granting any optional
                    permissions (none are required for core features).
                  </li>
                </ul>
              </Section>

              <Section id="en-children" title="Children">
                <p>
                  The app is intended for business users and is not directed to
                  children under 13 (or the relevant age in your region).
                </p>
              </Section>

              <Section id="en-contact" title="Contact">
                <p>
                  For privacy questions or data requests, contact:
                  <span className="whitespace-pre"> </span>
                  <a className="underline" href="mailto:support@iskrasales.ru">
                    support@iskrasales.ru
                  </a>
                  .
                </p>
              </Section>

              <Section id="en-updates" title="Policy updates">
                <p>
                  We may update this policy from time to time. Material changes
                  will be posted in-app or on our website with an updated
                  &quot;last updated&quot; date.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
