# Правила и рекомендации по лучшим практикам (Best Practices)

Этот документ содержит набор правил и рекомендаций для поддержания высокого качества кода, его читаемости, масштабируемости и надежности в проекте мобильного приложения с интеграцией RuStore (бэкенд + web-фронтенд). Рекомендации основаны на современных стандартах (2025 год), таких как ECMAScript 2023 (ES14) для JavaScript, Python 3.12, и лучших практиках сообщества (например, от Airbnb, Google, PEP 8 для Python). Они учитывают специфику проектов с монетизацией (подписки, поинты, интеграция с платежными системами вроде RuStore).

Цели:
- **Читаемость**: Код должен быть понятным для команды без лишних объяснений.
- **Масштабируемость**: Архитектура позволяет добавлять фичи без рефакторинга всего проекта.
- **Надежность**: Минимизация ошибок, обработка edge-кейсов, тестирование.
- **Качество**: Автоматизированные проверки, CI/CD.

## Общие правила (для бэкенда и фронтенда)
### 1. Стандарты кодирования
- **Язык и версии**: Использовать TypeScript (TS 5.2+) для JavaScript-проектов (фронтенд и бэкенд на Node.js) для статической типизации. Для Python — 3.12+ с type hints (PEP 484).
- **Конвенции именования**: CamelCase для переменных/функций (JS/TS), snake_case для Python. Константы — UPPER_CASE. Избегать сокращений (например, `userId` вместо `uId`).
- **Форматирование**: Prettier для автоматического форматирования (2 пробела для отступов, semi: true). Интегрировать в VS Code/IDE.
- **Линтинг**: ESLint (с плагинами для React/Next.js) для JS/TS; Ruff или Flake8 для Python. Настроить правила: no-unused-vars, consistent-return.
- **Комментарии**: Использовать JSDoc/TSdoc для функций/классов. Комментировать "почему", а не "что" (код должен быть self-explanatory). Избегать избыточных комментариев.
- **Модульность**: Разбивать код на модули/файлы: один файл — одна ответственность (Single Responsibility Principle из SOLID).

### 2. Обработка ошибок и надежность
- **Ошибки**: Использовать try-catch в асинхронном коде. Для API — стандартизированные ответы: { success: boolean, data: any, error: { code: number, message: string } }.
- **Валидация**: Zod (для TS) или Pydantic (для Python) для валидации входных данных (query, body). Никогда не доверять клиентским данным.
- **Логирование**: Winston/Sentry для бэкенда (логгировать errors, warnings). Console.log только для dev.
- **Безопасность**: HTTPS everywhere. JWT с refresh tokens. Защита от SQL-injection (ORM как Prisma/SQLAlchemy). Rate limiting (express-rate-limit или аналог).

### 3. Масштабируемость
- **Архитектура**: MVC или Clean Architecture. Разделять layers: controllers, services, repositories.
- **Кэширование**: Redis для часто запрашиваемых данных (балансы, продукты).
- **Асинхронность**: Async/await в JS/Python. Очереди (Bull/RabbitMQ) для тяжелых задач (верификация платежей).
- **Конфигурация**: Environment variables (.env) для secrets (RuStore keys). Не хардкодить.

### 4. Тестирование
- **Уровни**: Unit (Jest/Pytest, 80% coverage), Integration (API тесты с Supertest), E2E (Cypress для фронтенда).
- **Практики**: TDD/BDD где возможно. Моки для внешних API (RuStore, ИИ).
- **Инструменты**: Husky + lint-staged для pre-commit тестов/линтинга.

### 5. CI/CD и деплой
- **CI/CD**: GitHub Actions для build/test/deploy. Авто-деплой на push в main.
- **Контейнеризация**: Docker для бэкенда/фронтенда. Docker Compose для локальной разработки.
- **Мониторинг**: Prometheus/Grafana для метрик, Sentry для ошибок.
- **Версионирование**: Semantic Versioning (SemVer) для релизов.

## Рекомендации для бэкенда (Node.js/Express или Python/FastAPI)
### Современные стандарты
- Соблюдать OWASP Top 10 (защита от инъекций, XSS).
- Использовать RESTful API (HTTP статусы: 200 OK, 400 Bad Request).
- Для платежей (RuStore): Всегда верифицировать на сервере, использовать webhooks для real-time обновлений.

### Технологии
- **Фреймворк**: Express.js (с middleware) или FastAPI (для async).
- **БД**: PostgreSQL с ORM (Prisma для TS, SQLAlchemy для Python).
- **Аутентификация**: JWT (jsonwebtoken или fastapi-jwt).
- **Интеграция**: Axios/httpx для вызовов RuStore API. Webhooks с подписью для безопасности.
- **Масштабирование**: PM2/Kubernetes для продакшена.
- **Правила кода**: Избегать глобальных переменных. Использовать dependency injection (InversifyJS или аналог).

## Рекомендации для фронтенда (Next.js с shadcn/ui)
### Современные стандарты
- Соблюдать WCAG 2.2 для доступности (ARIA-labels в компонентах).
- SEO: Использовать Next.js Metadata API.
- Performance: Lighthouse score >90 (lazy loading, code splitting).

### Технологии
- **UI**: shadcn/ui для компонентов (Button, Card, Table). Tailwind CSS для стилей.
- **State Management**: React Query для API, Zustand для глобального state (если нужно).
- **Аутентификация**: NextAuth.js с providers (VK/Google).
- **Формы**: React Hook Form + Zod для валидации.
- **Анимации**: Framer Motion только для необходимого (не переусердствовать).
- **Правила кода**: Functional components с hooks. Memoization (useMemo/useCallback) для оптимизации. Server Components в Next.js для SSR.

## Дополнительные рекомендации
- **Code Review**: Обязательный PR-review (минимум 1 ревьюер). Использовать GitHub Pull Requests.
- **Документация**: Swagger/OpenAPI для бэкенд API. Storybook для фронтенд-компонентов.
- **Обновления**: Регулярно обновлять зависимости (npm audit/yarn audit). Использовать Dependabot.
- **Проекты-аналоги**: Ориентироваться на практики из open-source (например, Next.js Commerce, Supabase backend).
- **Метрики качества**: SonarQube или CodeClimate для анализа.

Соблюдение этих правил обеспечит долгосрочную поддерживаемость проекта. Документ подлежит обновлению по мере эволюции технологий.