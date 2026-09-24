export type SolutionLink = {
  href: string;
  title: string;
  description: string;
};

export type SolutionSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SolutionPageData = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  hubDescription: string;
  questions: string[];
  frameworkTitle: string;
  frameworkIntro: string;
  framework: { title: string; body: string }[];
  sections: SolutionSection[];
  prepareTitle: string;
  prepareIntro: string;
  prepare: string[];
  work: SolutionLink[];
  services: SolutionLink[];
  article?: SolutionLink;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  contactIntent: string;
};

export const solutionPages: SolutionPageData[] = [
  {
    slug: "build-an-app-for-my-business",
    navLabel: "Build an App for Your Business",
    title: "Build an App for Your Business",
    description: "Understand what kind of business app to build, which workflows and platforms matter, and what to decide before mobile, web, or backend development begins.",
    eyebrow: "From business need to software shape",
    h1: "Build a custom app for your business",
    intro: "A business app should make a specific customer or operational journey easier. The first decision is not which framework to use. It is who needs the software, what they must accomplish, and whether the right product is a mobile app, web application, internal system, SaaS platform, or a connected combination.",
    hubDescription: "Choose the right shape for a customer app, internal workflow, mobile companion, or software product.",
    questions: [
      "Who will use the application and in what situation?",
      "What is the one workflow that must become simpler?",
      "Does the product need mobile, web, or both?",
      "Which existing systems, data, and integrations can be reused?",
    ],
    frameworkTitle: "Four common types of business application",
    frameworkIntro: "The same phrase, business app, can describe very different products. Classifying the product early prevents a useful idea from turning into an unfocused feature list.",
    framework: [
      { title: "Customer-facing application", body: "Customers or members manage an account, make bookings, receive information, or use the business service directly. Ease of access, account recovery, trust, and support workflows matter." },
      { title: "Internal business application", body: "Staff manage customers, jobs, schedules, documents, approvals, or operational records. Permissions, data quality, fast repeated use, and administration are usually central." },
      { title: "Mobile companion", body: "An existing web platform or business system gains a focused mobile experience. The project depends on API readiness, shared accounts, mobile navigation, notifications, and synchronization." },
      { title: "SaaS or software product", body: "The application itself is sold or offered to multiple organizations or users. Tenant separation, subscriptions, onboarding, support, administration, and product operations shape the architecture." },
    ],
    sections: [
      {
        title: "Start with the main user journey",
        paragraphs: [
          "Describe the trigger, the user, the action, and the result. For an internal job app, that might be: a customer requests work, staff create a job, schedule it, prepare a quote, complete the work, invoice it, and record payment. For a club platform, it might be: an organizer publishes an event, a member books, capacity changes, and attendance is recorded.",
          "This journey reveals the records and rules the software must support. Secondary features can then be tested against it: do they make the core journey possible, safer, or meaningfully faster? If not, they may belong in a later release.",
        ],
        bullets: ["Primary user and their environment", "Core action and successful outcome", "Information created or changed at each step", "Exceptions that cannot be handled manually"],
      },
      {
        title: "Decide where each part belongs",
        paragraphs: [
          "A mobile app is useful for work in the field, device notifications, quick capture, and frequent personal access. A web application can suit larger forms, administration, reporting, and work across many desktop users. A backend stores shared data, enforces business rules, authenticates users, and connects the interfaces.",
          "Not every project needs every surface. A focused internal app may begin with Android and an API. A customer platform may need web first. A commercial product may need mobile, web administration, and backend services from the outset. The choice should follow use, not fashion.",
        ],
      },
      {
        title: "Account, role, integration, and offline decisions",
        paragraphs: [
          "User accounts are required when information belongs to a person or organization, must synchronize between devices, or needs controlled access. Different roles are valuable only when different people truly need different permissions or workflows. Payments and subscriptions introduce product, billing, support, and store considerations beyond a checkout button.",
          "Existing accounting, CRM, membership, or operational systems may be reusable through APIs. Offline support can range from keeping a small local cache to supporting full work creation and later synchronization. Those are materially different commitments, so the expected network environment should be discussed early.",
        ],
      },
    ],
    prepareTitle: "What should you decide before building your business app?",
    prepareIntro: "You do not need to arrive with technical answers. A useful discovery conversation starts with business context and turns it into product and architecture decisions.",
    prepare: ["Users, roles, and the main workflow", "Mobile, web, and administration needs", "Existing backend, data, or software", "Required integrations, payments, or subscriptions", "Offline or unreliable-network expectations", "Whether the software is internal or a commercial product"],
    work: [
      { href: "/work/tradesmate", title: "TradesMate", description: "Shows customers, jobs, scheduling, quotes, invoices, payments, expenses, reporting, roles, and reminders as one connected operational product." },
      { href: "/work/come-together", title: "Come Together", description: "Shows a public web and Android platform joining organizers, members, bookings, attendance, and backend data." },
      { href: "/work/pubplay", title: "PubPlay", description: "Shows an Android host, QR player web experience, live scoring, TV display, and backend working as one system." },
    ],
    services: [
      { href: "/services/custom-business-software", title: "Custom Business Software", description: "Connected workflow software for operations, records, roles, and reporting." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Android and iOS product delivery with backend integration and release preparation." },
      { href: "/services/web-app-development", title: "Web Application Development", description: "Customer portals, operational tools, dashboards, and administration interfaces." },
      { href: "/services/saas-development", title: "SaaS Development", description: "Multi-user software products with accounts, subscriptions, backend services, and administration." },
    ],
    article: { href: "/blog/introducing-tradesmate-business-admin-for-tradespeople", title: "Introducing TradesMate", description: "Read the product-origin story behind the connected business workflow used as evidence on this page." },
    faqs: [
      { question: "Do I need a mobile app or a web app?", answer: "It depends on where the workflow happens. Mobile is strong for field use, notifications, and repeated personal access; web is often strong for administration, reporting, and desktop work. Some products need both, sharing one backend." },
      { question: "Does my business app need a backend?", answer: "A backend is normally needed when users share data, sign in across devices, need roles, or connect to business systems. A focused local-only utility can sometimes work without one." },
      { question: "Can it connect to software we already use?", answer: "Often, if the existing system provides a suitable API or integration method. Its authentication, data model, limits, and documentation must be assessed before integration scope is confirmed." },
      { question: "Can we start with one workflow?", answer: "Yes. Beginning with one complete, valuable workflow is often clearer than launching many incomplete modules. The data model should still leave sensible room for planned expansion." },
    ],
    ctaTitle: "Turn the business need into a buildable product",
    ctaText: "Share the users, current process, systems already in place, and the result the application should create. We can identify the appropriate product shape and a practical first scope.",
    ctaLabel: "Discuss Your Business App",
    contactIntent: "custom-business-software",
  },
  {
    slug: "replace-spreadsheets-with-custom-software",
    navLabel: "Replace Spreadsheets with Custom Software",
    title: "Replace Spreadsheets with Custom Software",
    description: "Learn when spreadsheet-based workflows should stay as they are, be improved with automation, or move into purpose-built custom business software.",
    eyebrow: "A balanced workflow decision",
    h1: "Replace spreadsheets with custom software when the workflow demands it",
    intro: "Spreadsheets are excellent tools for calculation, exploration, and many stable processes. The question is not whether spreadsheets are modern enough. It is whether a growing operational workflow now needs shared status, controlled access, connected records, mobile use, or rules that are becoming difficult to manage safely in files.",
    hubDescription: "Assess whether to keep a spreadsheet, improve existing tools, or build a connected operational system.",
    questions: ["Are several people editing or exchanging versions?", "Is the same information entered in more than one place?", "Is current status difficult to trust?", "Do staff need a better mobile workflow?"],
    frameworkTitle: "Three reasonable paths beyond spreadsheet friction",
    frameworkIntro: "Custom development is one option, not the automatic answer. The right choice depends on how stable, important, repeated, and interconnected the process has become.",
    framework: [
      { title: "Keep the spreadsheet", body: "A clear file can remain the best answer for a simple, low-risk process with one owner, modest data, and little need for workflow control or integration." },
      { title: "Improve existing tools", body: "Better templates, validation, permissions, automation, forms, or integration may remove the pain without creating and operating a new application." },
      { title: "Build custom software", body: "Purpose-built software may fit when the process is repeated, multi-user, operationally important, permission-sensitive, integrated, or difficult to represent in generic tools." },
    ],
    sections: [
      {
        title: "Signals that deserve investigation",
        paragraphs: [
          "Multiple file versions, duplicate entry, fragile formulas, emailed attachments, and manual report consolidation increase the effort required to know what is current. Customer information, job status, documents, and financial records can also become fragmented across separate files and inboxes.",
          "No single symptom proves that custom software is justified. A short-lived report and a business-critical multi-user operation are not the same problem. The first task is to map where information originates, who changes it, what decisions depend on it, and which errors create meaningful cost or risk.",
        ],
        bullets: ["Unclear ownership or workflow status", "Repeated copying between files and systems", "Permissions that are too broad or too difficult", "Operational work that is awkward on mobile", "Documents separated from the records they belong to"],
      },
      {
        title: "Model the workflow, not the spreadsheet layout",
        paragraphs: [
          "A replacement should not merely reproduce columns as form fields. It should represent the real concepts and relationships: a customer has jobs; a job has appointments and documents; a quote can become an invoice; payments and expenses change financial status. Clear records make permissions, validation, search, notifications, and reporting possible.",
          "TradesMate demonstrates this connected approach. Its customer, job, schedule, quote, invoice, payment, and expense records form a workflow. That is evidence of workflow engineering, not a claim that the product was created to replace a particular customer's spreadsheets.",
        ],
      },
      {
        title: "Plan transition and exports",
        paragraphs: [
          "Existing spreadsheet data may be reusable, but migration quality depends on consistency. Duplicate customers, mixed formats, missing identifiers, and values embedded in free text need rules before import. A staged migration can begin with active records while retaining archived files for reference.",
          "Exports can remain valuable after launch. Teams may still need Excel or CSV for analysis, accounting handoff, or regulatory work. The goal is to put operational truth and workflow control in the right place, not to prohibit flexible tools.",
        ],
      },
    ],
    prepareTitle: "Prepare a workflow assessment",
    prepareIntro: "Bring examples of the real process rather than a polished specification. They reveal where software can help and where a simpler change may be enough.",
    prepare: ["The files and systems currently used", "People who create, approve, and consume information", "A typical workflow from start to finish", "Common exceptions and corrections", "Reports, exports, and integrations still required", "Data volume, quality, and migration priorities"],
    work: [
      { href: "/work/tradesmate", title: "TradesMate", description: "Demonstrates a connected customer-to-payment workflow with jobs, scheduling, documents, costs, and financial status." },
      { href: "/work/iskra", title: "Iskra Trading", description: "Demonstrates a mobile catalogue and ordering workflow with offline cart behavior, order validation, history, and backend exports." },
    ],
    services: [
      { href: "/services/custom-business-software", title: "Custom Business Software", description: "Operational systems designed around repeated business rules and connected records." },
      { href: "/services/web-app-development", title: "Web Application Development", description: "Shared portals, administration tools, and browser-based workflows." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Field and staff workflows designed for phones and tablets." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "Data models, permissions, integrations, and business rules behind the interfaces." },
    ],
    article: { href: "/blog/introducing-tradesmate-business-admin-for-tradespeople", title: "How TradesMate frames connected trade work", description: "See the product introduction for more context on the customer, job, document, payment, and cost workflow." },
    faqs: [
      { question: "When should a business move beyond spreadsheets?", answer: "Consider an assessment when the process becomes multi-user, repeated, operationally important, difficult to secure, or dependent on connected status and integrations. That does not automatically mean a custom build is the best option." },
      { question: "Do we need to replace every spreadsheet?", answer: "No. Keep spreadsheets where they remain effective. A new system can focus on the operational workflow while exports and analytical files continue to serve appropriate tasks." },
      { question: "Can existing spreadsheet data be migrated?", answer: "Often, but the data first needs to be reviewed for duplicates, missing values, inconsistent formats, and relationships. Migration scope depends on quality and how much history is genuinely useful." },
      { question: "Can users still export data to Excel?", answer: "Exports can be included when the workflow requires them. The format and fields should be defined around the people or systems that consume the exported data." },
    ],
    ctaTitle: "Map the workflow before choosing the replacement",
    ctaText: "Show us the current files, users, repeated steps, and points where status becomes unclear. We can assess whether improvement, integration, or custom software is the proportionate next step.",
    ctaLabel: "Discuss Your Business Workflow",
    contactIntent: "custom-business-software",
  },
  {
    slug: "mobile-app-for-existing-web-platform",
    navLabel: "Mobile App for an Existing Web Platform",
    title: "Mobile App for an Existing Web Platform",
    description: "Plan a mobile companion for an existing web application, SaaS product, portal, or business platform by assessing APIs, accounts, workflows, and mobile requirements.",
    eyebrow: "Extend an existing product",
    h1: "Add a mobile app to your existing web platform",
    intro: "A mobile companion is not simply the current website placed inside a phone shell. It should use the existing product's accounts, permissions, data, and business rules while adapting the most valuable journeys to mobile contexts. The readiness of the backend and API determines how directly that work can begin.",
    hubDescription: "Assess API readiness, shared accounts, mobile workflows, notifications, and synchronization.",
    questions: ["Does the platform already expose a documented API?", "Which web workflows truly belong on mobile?", "Can users share the same account and permissions?", "What must work with unreliable connectivity?"],
    frameworkTitle: "Three backend starting points",
    frameworkIntro: "The existing system may be ready for a mobile client, partly ready, or designed only for its current web interface. Each case changes scope.",
    framework: [
      { title: "Existing API is ready", body: "The mobile application can use supported authentication and endpoints. Work can concentrate on mobile product design, client state, device behavior, testing, and store release." },
      { title: "Backend exists, API needs extending", body: "Core data may be available while mobile workflows require new endpoints, notification support, upload handling, or more suitable response shapes and permissions." },
      { title: "No suitable external API", body: "An API layer may need to be designed around the existing business rules and data. A mobile application should not connect directly to a production database." },
    ],
    sections: [
      {
        title: "Select mobile journeys rather than copying every page",
        paragraphs: [
          "Mobile users may need to check a booking, receive an alert, capture a photo, update job status, join an event, or complete a short repeated task. Large administration tables, infrequent configuration, and complex reporting may remain better on web.",
          "Prioritizing these moments gives the app a clear reason to exist and reduces duplication. Shared business rules can remain in the backend, while navigation, interaction, local state, and device behavior are designed specifically for mobile.",
        ],
      },
      {
        title: "Share identity and authorization safely",
        paragraphs: [
          "Users usually expect the same account on web and mobile. The backend must issue suitable tokens or sessions, enforce authorization on every request, and support account recovery and lifecycle rules. The mobile app stores credentials using platform-appropriate secure storage rather than treating the device as trusted.",
          "Roles should come from the server's source of truth. Hiding a screen in the app is not sufficient access control. API responses and actions must enforce what each user or organization is permitted to see and change.",
        ],
      },
      {
        title: "Account for mobile-only requirements",
        paragraphs: [
          "Push notifications, deep links, camera or file access, local caching, offline behavior, synchronization, and store review can add requirements that do not exist in the web product. They should be included only when they support a real journey.",
          "PubPlay demonstrates multiple interfaces around the same live event: an Android host, player web join experience, TV display, and backend. Come Together demonstrates public web and Android surfaces around club, booking, and attendance workflows. Both show why shared data and interface-specific design matter.",
        ],
        bullets: ["Authentication and shared account state", "Mobile navigation and deep links", "Notifications and device permissions", "Uploads, caching, and synchronization", "Backend changes and app-store delivery"],
      },
    ],
    prepareTitle: "Prepare for a mobile companion assessment",
    prepareIntro: "A concise technical and product inventory helps determine whether the work is mostly mobile delivery or a combined client-and-backend project.",
    prepare: ["Current web journeys and highest-value mobile use cases", "Backend and API documentation", "Authentication and role model", "Staging or test environment availability", "Notification, upload, and offline expectations", "Android, iOS, and release priorities"],
    work: [
      { href: "/work/pubplay", title: "PubPlay", description: "An Android host, player web app, TV display, and backend share live event, fixture, and scoring data." },
      { href: "/work/come-together", title: "Come Together", description: "A public web and Android platform shares accounts, clubs, events, bookings, capacity, and attendance workflows." },
    ],
    services: [
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Focused mobile product design, client implementation, testing, and release." },
      { href: "/services/react-native-development", title: "React Native Development", description: "Shared TypeScript mobile delivery when it suits product and platform requirements." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "API assessment, endpoint extension, authentication, permissions, and integration work." },
      { href: "/services/saas-development", title: "SaaS Development", description: "Connected product delivery across accounts, subscriptions, web, mobile, and operations." },
    ],
    faqs: [
      { question: "Can a mobile app use our current backend?", answer: "Yes, if the backend exposes suitable authenticated APIs for the required workflows. API behavior, permissions, documentation, stability, and test access should be assessed first." },
      { question: "Can users use the same account on web and mobile?", answer: "Usually. The existing identity system must support an appropriate mobile authentication flow and enforce the same account and role rules through the API." },
      { question: "Does the backend need to change?", answer: "Not always. It may already support the mobile workflows, need a few endpoints, or require a proper external API layer. The answer follows an architecture and workflow review." },
      { question: "Do Android and iOS require separate backends?", answer: "Normally both clients can use the same backend and business rules. The client implementations and platform integrations may differ, but the server API should remain shared." },
    ],
    ctaTitle: "Find the shortest safe path from web to mobile",
    ctaText: "Share the current platform, API documentation, account model, and mobile journeys you want to support. We can assess what is reusable and what needs extending.",
    ctaLabel: "Discuss Your Mobile Companion App",
    contactIntent: "mobile-app-development",
  },
  {
    slug: "build-an-mvp",
    navLabel: "Build the Right MVP",
    title: "How to Build an MVP",
    description: "Define the smallest useful software product, separate essential workflow from later features, and choose a practical mobile, web, SaaS, or shared-backend MVP path.",
    eyebrow: "A first product with a complete purpose",
    h1: "How to build the right MVP for your product",
    intro: "An MVP is not a careless or disposable version of a larger idea. It is the smallest reliable product that lets the primary user complete the core journey and gives the business something real to operate, test, and learn from. Scope discipline comes from identifying that journey before choosing features.",
    hubDescription: "Define the smallest useful product, select the first platform, and separate launch scope from later options.",
    questions: ["Who is the first primary user?", "Which problem must the first release solve completely?", "What data and administration are required?", "Which assumptions need real product use to test?"],
    frameworkTitle: "Choose the first delivery shape",
    frameworkIntro: "The MVP platform should follow where the core journey happens and what must be operated behind it.",
    framework: [
      { title: "Mobile-first MVP", body: "Appropriate when the value depends on personal access, field work, notifications, device capabilities, or frequent phone use." },
      { title: "Web-first MVP", body: "Useful for portals, dashboards, administration-heavy products, desktop workflows, and broad access without store installation." },
      { title: "SaaS MVP", body: "Requires product thinking beyond screens: organizations or users, permissions, plans, administration, onboarding, and reliable backend operations." },
      { title: "Mobile + web MVP", body: "Justified when different users genuinely need different interfaces. A shared backend can support both, but each surface increases design, testing, and release scope." },
    ],
    sections: [
      {
        title: "What is the smallest useful product?",
        paragraphs: [
          "Write the core journey as a short sequence. A venue host creates an event, players join, matches are organized, scores are recorded, and a leaderboard updates. If the product cannot complete that loop, it may be a prototype rather than a useful MVP.",
          "The journey identifies essential accounts, data, backend rules, administration, and integrations. It also gives acceptance criteria: a test user should be able to reach the intended outcome without manual intervention hiding a missing product capability.",
        ],
      },
      {
        title: "What belongs now, and what can wait?",
        paragraphs: [
          "Account creation, the core workflow, necessary storage, basic administration, and a critical integration may belong in the MVP. Advanced reporting, many secondary roles, extensive customization, broad integration lists, and nonessential display options can often wait until the main journey is proven.",
          "Security, testing, recovery from expected failures, and basic product quality are not later-phase luxuries. A narrow product can still use production-minded architecture and release practices. Cutting scope should remove optional breadth, not the foundations required to use the product responsibly.",
        ],
      },
      {
        title: "Plan for learning without pretending the roadmap is certain",
        paragraphs: [
          "Decide what the first release should help you learn: whether users complete the workflow, which step creates friction, which role needs administration, or whether an integration is essential. Product analytics, support feedback, and operational observation can then inform the next scope.",
          "Avoid building speculative flexibility for every imagined future. Preserve clean ownership boundaries and data models, document deliberate constraints, and expand when actual use provides evidence. That is different from building a throwaway system.",
        ],
      },
    ],
    prepareTitle: "Prepare an MVP scope conversation",
    prepareIntro: "A short, concrete product outline is more useful than an exhaustive feature backlog.",
    prepare: ["Primary user and core problem", "Start-to-finish core journey", "Required accounts, roles, and administration", "Critical integrations and existing systems", "First platform and release audience", "What the initial release should help the business learn"],
    work: [
      { href: "/work/pubplay", title: "PubPlay", description: "Shows a focused venue journey across host, player, TV, and backend interfaces rather than an isolated screen set." },
      { href: "/work/come-together", title: "Come Together", description: "Shows a platform product joining public discovery, organizer operations, bookings, and attendance." },
      { href: "/work/studyflow", title: "StudyFlow", description: "Shows a focused Android product built around one repeated learning loop with local state, reminders, statistics, and billing." },
    ],
    services: [
      { href: "/services/mvp-development", title: "MVP Development", description: "Commercial delivery from scope and architecture through implementation, testing, and release." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "A mobile-first path for products whose core journey belongs on a phone or tablet." },
      { href: "/services/web-app-development", title: "Web Application Development", description: "A web-first path for portals, operations, dashboards, and administration." },
      { href: "/services/saas-development", title: "SaaS Development", description: "Product delivery across accounts, organizations, subscriptions, and backend operations." },
    ],
    faqs: [
      { question: "What should an MVP include?", answer: "It should include everything required for the primary user to complete the core journey reliably: necessary accounts, data, business rules, administration, and critical integrations." },
      { question: "Can an MVP become the full product?", answer: "Yes. A focused MVP can use maintainable production architecture and grow through evidence-led releases. It should avoid both premature complexity and knowingly disposable foundations." },
      { question: "Should an MVP use production architecture?", answer: "It should use architecture appropriate to the product's real first users and risk. That does not mean building for hypothetical massive scale, but security, data integrity, testing, and operability still matter." },
      { question: "Can an MVP include web and mobile?", answer: "Yes, when separate interfaces are essential to the core journey. Because each surface adds design and testing scope, the reason for both should be explicit." },
    ],
    ctaTitle: "Define a first release people can genuinely use",
    ctaText: "Bring the product idea, primary user, core journey, existing assets, and launch goal. We can turn them into a focused MVP scope and delivery path.",
    ctaLabel: "Discuss Your MVP Idea",
    contactIntent: "mvp-development",
  },
  {
    slug: "modernize-existing-software",
    navLabel: "Modernize Existing Software",
    title: "Modernize Existing Business Software",
    description: "Compare incremental improvement, component replacement, and full rebuild options for existing software without assuming that a rewrite is automatically necessary.",
    eyebrow: "Preserve what works, change what blocks progress",
    h1: "Modernize existing software with proportionate change",
    intro: "Working software contains business knowledge, user habits, data, and integrations that may still be valuable. Modernization should begin by identifying the constraint that prevents the next useful change. A new frontend, mobile client, API layer, deployment process, or focused backend replacement may solve the problem without rebuilding the whole system.",
    hubDescription: "Choose between incremental improvement, component replacement, and a justified rebuild.",
    questions: ["Which change is currently difficult or risky?", "What parts still serve users well?", "Which dependencies or interfaces limit progress?", "Can migration happen while the system remains in use?"],
    frameworkTitle: "Three modernization strategies",
    frameworkIntro: "A full rewrite should not be the default recommendation. The strategy should match the constraint, risk, and ability to transition safely.",
    framework: [
      { title: "Incremental modernization", body: "Improve testing, dependencies, deployment, performance, or selected modules while preserving the functioning product and releasing changes in controlled steps." },
      { title: "Replace a component", body: "Introduce a new frontend, mobile client, API, backend service, or administration interface behind a clear boundary while the rest of the system remains." },
      { title: "Rebuild with a migration plan", body: "Appropriate when the architecture fundamentally prevents required workflows or safe change, provided data, integrations, cutover, and operational continuity are planned explicitly." },
    ],
    sections: [
      {
        title: "Identify the constraint before selecting technology",
        paragraphs: [
          "Signals may include difficult feature development, unsupported dependencies, poor mobile use, fragile deployments, integration limits, performance problems, or architecture that cannot represent a required workflow. These are prompts for investigation, not diagnoses made from outside.",
          "Trace one blocked business change through the system. Which interface, data model, service, deployment step, or dependency makes it difficult? The answer provides a more useful modernization boundary than a general desire to make the stack newer.",
        ],
      },
      {
        title: "Separate product change from technical change",
        paragraphs: [
          "A refreshed interface may also require workflow and information-architecture decisions. A mobile app may expose missing API and permission capabilities. Replacing a backend can affect reporting, integrations, and data semantics. Treating modernization as only a visual redesign or dependency update can hide the real scope.",
          "Conversely, a technical improvement does not always require visible product change. Dependency upgrades, deployment automation, observability, and focused performance work can reduce risk while keeping familiar workflows intact.",
        ],
      },
      {
        title: "Plan coexistence, migration, and rollback",
        paragraphs: [
          "Incremental work may require old and new components to operate together. Define the source of truth, interfaces between them, synchronization rules, and how users move from one path to another. For data changes, rehearse migration against realistic copies and verify counts, relationships, and business invariants.",
          "Release planning should include monitoring, rollback options, and support for users during transition. These operational details are part of modernization quality, especially when the existing system already supports daily work.",
        ],
      },
    ],
    prepareTitle: "Prepare a modernization assessment",
    prepareIntro: "The best starting material shows both what the system does and where change has become difficult.",
    prepare: ["Current architecture and deployment process", "The feature or business change being blocked", "Critical data, integrations, and user roles", "Unsupported or high-risk dependencies", "Availability and acceptable downtime", "Testing, staging, monitoring, and rollback capabilities"],
    work: [
      { href: "/work/come-together", title: "Come Together", description: "Shows a contemporary web, Android, API, and database platform separated into clear product surfaces." },
      { href: "/work/pubplay", title: "PubPlay", description: "Shows multiple interfaces sharing live backend state, useful evidence for component and API boundaries." },
    ],
    services: [
      { href: "/services/web-app-development", title: "Web Application Development", description: "Frontend, portal, dashboard, and administration modernization." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "API layers, service changes, data models, authentication, and integrations." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "A modern mobile client for an existing or extended platform." },
      { href: "/services/custom-business-software", title: "Custom Business Software", description: "Workflow redesign and connected operational software where requirements have changed." },
    ],
    faqs: [
      { question: "Do we need to rewrite the whole application?", answer: "Usually not by default. A focused change may remove the main constraint with less migration risk. A full rebuild should be justified by requirements and architecture evidence." },
      { question: "Can modernization happen in stages?", answer: "Yes. Clear boundaries, interfaces, testing, and migration rules can allow components to be improved or replaced incrementally while the product remains available." },
      { question: "Can an existing backend remain?", answer: "Yes, if it still enforces the required workflows and can support new interfaces safely. It may remain unchanged, receive new endpoints, or sit behind a new API layer." },
      { question: "How should data migration be approached?", answer: "Inventory the data, define mappings and invariants, test against realistic copies, reconcile results, plan cutover and rollback, and preserve only the history that is genuinely required." },
    ],
    ctaTitle: "Start with the constraint, not a rewrite assumption",
    ctaText: "Share the current architecture, the change you need to make, and the risks that matter. We can examine incremental, component, and rebuild options before defining scope.",
    ctaLabel: "Discuss Your Existing Software",
    contactIntent: "custom-business-software",
  },
  {
    slug: "connect-mobile-app-to-existing-backend",
    navLabel: "Connect Mobile to an Existing Backend",
    title: "Connect a Mobile App to an Existing Backend",
    description: "Assess an existing API, authentication, workflows, uploads, notifications, and mobile state before building Android or iOS clients against a current backend.",
    eyebrow: "Use the platform you already have",
    h1: "Connect a mobile app to your existing backend",
    intro: "An existing backend can shorten mobile delivery when it already exposes the workflows, permissions, and data the app needs. The practical first step is a readiness assessment: not merely whether an API exists, but whether it supports the mobile journeys safely, predictably, and in a testable environment.",
    hubDescription: "Assess API coverage, authentication, permissions, mobile state, and backend extension needs.",
    questions: ["Which mobile workflows does the API already support?", "How are authentication and authorization enforced?", "Are uploads, notifications, or realtime updates required?", "Is there a stable test environment and API contract?"],
    frameworkTitle: "Classify backend readiness",
    frameworkIntro: "The result determines whether the engagement is primarily a mobile client project or combined mobile and backend work.",
    framework: [
      { title: "API supports the workflows", body: "Focus can remain on mobile navigation, client state, secure authentication persistence, device integrations, testing, and release." },
      { title: "API supports part of the product", body: "Existing endpoints can be reused while missing workflow actions, permissions, upload support, or notification behavior are added deliberately." },
      { title: "No appropriate client API", body: "A suitable API layer may need to be designed around the backend and business rules before the mobile client can operate safely." },
    ],
    sections: [
      {
        title: "Assess more than endpoint availability",
        paragraphs: [
          "Review API documentation, versioning, authentication, authorization, workflow coverage, file handling, error behavior, paging, and rate limits. Mobile clients also need predictable responses when a token expires, a network request is repeated, or connectivity disappears midway through an action.",
          "A staging environment and test accounts allow client work to progress without experimenting against production data. Contract examples and realistic error responses reduce ambiguity between mobile and backend development.",
        ],
      },
      {
        title: "Design mobile state around unreliable networks",
        paragraphs: [
          "Authentication state, cached records, optimistic updates, retry behavior, and synchronization need explicit rules. Offline operation is not one checkbox: reading previously loaded data, queueing updates, resolving conflicts, and creating complete records offline are different levels of support.",
          "The product should communicate what is current, pending, or failed. Silent data loss and duplicate actions are more damaging than a clear message that the network is unavailable.",
        ],
      },
      {
        title: "Add mobile capabilities only where they serve the workflow",
        paragraphs: [
          "Push notifications may require backend events and device-token management. File and photo uploads need size, format, storage, permission, and retry decisions. Realtime updates need an actual timing requirement before websockets or similar infrastructure are introduced.",
          "React Native can provide a shared Android and iOS codebase for many products, while native modules or separate platform work may be appropriate for specialized requirements. The choice follows device capabilities, performance, release scope, and team constraints.",
        ],
        bullets: ["Android and iOS release scope", "Secure token and account lifecycle", "Cache, offline, retry, and conflict behavior", "Files, photos, deep links, and notifications", "Store policies, test tracks, and release ownership"],
      },
    ],
    prepareTitle: "Prepare an API and mobile readiness review",
    prepareIntro: "A useful assessment combines technical access with the actual product journeys the client must complete.",
    prepare: ["API specification and representative responses", "Authentication and authorization flows", "Required mobile journeys and user roles", "Staging environment and test credentials", "Uploads, notifications, and realtime expectations", "Offline behavior and supported platforms"],
    work: [
      { href: "/work/tradesmate", title: "TradesMate", description: "An Android business client backed by authenticated FastAPI services and business-scoped operational records." },
      { href: "/work/pubplay", title: "PubPlay", description: "Multiple client surfaces use shared backend state for venue events, players, fixtures, scores, and displays." },
      { href: "/work/come-together", title: "Come Together", description: "Web and Android interfaces connect to shared accounts, club, event, booking, and attendance data." },
    ],
    services: [
      { href: "/services/react-native-development", title: "React Native Development", description: "Cross-platform mobile client work with native integrations where required." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Mobile product delivery from workflow design to store release." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "API assessment, extensions, authentication, authorization, integrations, and data work." },
    ],
    faqs: [
      { question: "Can you build against our existing API?", answer: "Yes, after confirming that its authentication, permissions, endpoints, stability, and test environment support the required mobile journeys." },
      { question: "What API documentation is required?", answer: "An OpenAPI specification or equivalent contract is ideal. Representative requests, responses, errors, authentication details, workflow notes, and test credentials are also valuable." },
      { question: "Can endpoints be added during development?", answer: "Yes. Mobile and backend work can be coordinated, but ownership, contract changes, environments, and release timing need to be clear." },
      { question: "Can one API support web and mobile?", answer: "Usually. Shared business rules and data can serve both, while endpoints or response shapes may sometimes be adapted to different client journeys." },
    ],
    ctaTitle: "Confirm backend readiness before mobile scope hardens",
    ctaText: "Share the API documentation, test environment, authentication model, and required mobile journeys. We can identify what is reusable and where backend work is needed.",
    ctaLabel: "Discuss Your Mobile Integration",
    contactIntent: "backend-api-development",
  },
  {
    slug: "custom-software-cost",
    navLabel: "Custom Software Cost",
    title: "Custom Software Development Cost",
    description: "Understand the product surfaces, workflows, roles, backend work, integrations, offline needs, and release responsibilities that determine custom software scope and cost.",
    eyebrow: "Estimate from scope, not a generic average",
    h1: "What determines custom software development cost?",
    intro: "A useful estimate comes from the product being built, the systems it must connect to, and the level of operational responsibility required. A single-interface utility, a mobile client using a ready API, and a multi-role SaaS platform are all custom software, but they contain very different work. This page explains the drivers without inventing a universal price.",
    hubDescription: "Understand the scope drivers behind mobile, web, SaaS, backend, integration, and release estimates.",
    questions: ["How many product surfaces are required?", "Does a backend already exist and support the workflow?", "How many roles, rules, and integrations are involved?", "What must be operated, migrated, and released?"],
    frameworkTitle: "A practical scope framework",
    frameworkIntro: "These categories describe shape and complexity, not fixed price bands. A short discovery step is still required for a defensible estimate.",
    framework: [
      { title: "Smaller scoped product", body: "One primary interface, a focused workflow, a straightforward data model, few roles, and limited integrations. Quality and security still apply even when breadth is narrow." },
      { title: "Mid-complexity product", body: "Mobile plus backend or web plus backend, several connected workflows, administration, external integration, documents, and multiple user roles." },
      { title: "Complex platform", body: "Web and mobile clients, substantial backend rules, organizations and roles, subscriptions, integrations, administration, migration, and operational workflows." },
    ],
    sections: [
      {
        title: "Product surfaces and users",
        paragraphs: [
          "Each mobile application, web application, administration interface, and backend/API surface requires design, implementation, testing, and release work. Shared business rules can reduce duplication, but every interface still needs an appropriate user experience and quality process.",
          "Roles add more than screens. They affect authorization, navigation, data visibility, actions, testing, and support. Organization-level separation or staff administration can be important product capabilities with meaningful backend implications.",
        ],
      },
      {
        title: "Workflow, backend, and integration complexity",
        paragraphs: [
          "Simple record management differs from a connected workflow in which status changes trigger calculations, documents, notifications, permissions, or downstream actions. An existing backend may reduce scope if it already supports the required journey through a stable API; an unsuitable backend can instead require extension or an API layer.",
          "Payments, email, push notifications, maps, external APIs, and existing business systems introduce third-party behavior, credentials, failure modes, test environments, and ongoing changes. Count integrations by their real operational role, not only by the number of SDK calls.",
        ],
      },
      {
        title: "Offline, files, data, and release",
        paragraphs: [
          "Offline and synchronization requirements can materially change client and backend design. Photos, uploads, PDFs, scanning, and OCR add device, storage, processing, privacy, and failure-handling decisions. Existing data may need cleaning, mapping, migration, and reconciliation.",
          "Web deployment and mobile store delivery have different preparation, review, signing, rollout, monitoring, and support responsibilities. Clarifying who owns accounts, infrastructure, content, store listings, and post-launch maintenance makes the estimate more complete.",
        ],
        bullets: ["Mobile, web, admin, and backend surfaces", "Accounts, organizations, roles, and permissions", "Business rules and connected workflows", "External services and existing-system integration", "Offline, synchronization, files, and migration", "Testing, deployment, stores, monitoring, and support"],
      },
    ],
    prepareTitle: "How to get a more accurate estimate",
    prepareIntro: "The estimate improves when the product journey and existing technical context are concrete. A complete specification is not required to begin.",
    prepare: ["Target users and primary workflow", "Must-have functionality and launch priorities", "Mobile, web, and administration requirements", "Existing backend, data, and API status", "Integrations and reference applications", "Roles, offline behavior, files, and migration needs"],
    work: [
      { href: "/work/tradesmate", title: "TradesMate", description: "Shows how multiple operational workflows, documents, roles, billing, Android, API, and database work combine into product scope." },
      { href: "/work/pubplay", title: "PubPlay", description: "Shows how Android, player web, TV display, live backend state, subscriptions, and event operations create several delivery surfaces." },
      { href: "/work/studyflow", title: "StudyFlow", description: "Shows a narrower mobile product with local-first state, reminders, study logic, statistics, and in-app billing." },
    ],
    services: [
      { href: "/services/mvp-development", title: "MVP Development", description: "Scope and delivery for a focused first product release." },
      { href: "/services/custom-business-software", title: "Custom Business Software", description: "Connected operational workflow and business system development." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Android and iOS product scope, backend integration, and store delivery." },
      { href: "/services/saas-development", title: "SaaS Development", description: "Multi-user platforms with subscriptions, operations, backend services, and administration." },
    ],
    faqs: [
      { question: "What affects custom software development cost?", answer: "The strongest drivers are product surfaces, workflow and data complexity, accounts and roles, backend readiness, integrations, offline behavior, files, migration, testing, and release responsibilities." },
      { question: "Does an existing backend reduce scope?", answer: "It can, when a stable authenticated API already supports the required workflows. If endpoints, permissions, documentation, or environments are missing, backend work may still be needed." },
      { question: "Why do integrations increase development effort?", answer: "They introduce external contracts, authentication, test environments, rate limits, failure handling, reconciliation, security, and dependency on another system's behavior." },
      { question: "How can we get a more accurate estimate?", answer: "Describe the primary user journey, required surfaces, existing systems, roles, integrations, must-have launch features, and important nonfunctional requirements. A scoped discovery can resolve remaining uncertainty." },
    ],
    ctaTitle: "Turn broad requirements into an estimate-ready scope",
    ctaText: "Share the users, core workflow, existing systems, required platforms, and launch priorities. We can identify the main scope drivers before proposing delivery.",
    ctaLabel: "Discuss Your Project Scope",
    contactIntent: "custom-business-software",
  },
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((solution) => solution.slug === slug);
}

export const serviceSolutionLinks: Record<string, SolutionLink[]> = {
  "mobile-app-development": [
    { href: "/solutions/build-an-app-for-my-business", title: "Build an App for Your Business", description: "Decide whether the product should be mobile, web, internal, or a connected platform." },
    { href: "/solutions/mobile-app-for-existing-web-platform", title: "Add Mobile to a Web Platform", description: "Assess API, account, workflow, and mobile companion requirements." },
    { href: "/solutions/connect-mobile-app-to-existing-backend", title: "Connect Mobile to an Existing Backend", description: "Review API readiness before mobile client scope is fixed." },
  ],
  "custom-business-software": [
    { href: "/solutions/replace-spreadsheets-with-custom-software", title: "Move Beyond Spreadsheet Workflows", description: "Compare keeping, improving, and replacing existing operational tools." },
    { href: "/solutions/modernize-existing-software", title: "Modernize Existing Software", description: "Choose incremental improvement, component replacement, or a justified rebuild." },
    { href: "/solutions/custom-software-cost", title: "Understand Custom Software Cost", description: "See which product and technical decisions drive scope." },
  ],
  "mvp-development": [
    { href: "/solutions/build-an-mvp", title: "Define the Right MVP", description: "Identify the smallest useful product and what belongs after launch." },
    { href: "/solutions/custom-software-cost", title: "Understand Custom Software Cost", description: "Prepare the scope information needed for a more useful estimate." },
  ],
  "backend-api-development": [
    { href: "/solutions/connect-mobile-app-to-existing-backend", title: "Connect Mobile to an Existing Backend", description: "Assess API coverage, authentication, and backend extension needs." },
    { href: "/solutions/modernize-existing-software", title: "Modernize Existing Software", description: "Find the smallest technical change that removes a product constraint." },
  ],
  "saas-development": [
    { href: "/solutions/mobile-app-for-existing-web-platform", title: "Add Mobile to a Web Platform", description: "Plan a companion app around an existing SaaS backend and account model." },
    { href: "/solutions/build-an-mvp", title: "Define the Right MVP", description: "Separate the core SaaS journey from later product breadth." },
    { href: "/solutions/custom-software-cost", title: "Understand Custom Software Cost", description: "Review how surfaces, roles, subscriptions, and integrations affect scope." },
  ],
  "react-native-development": [
    { href: "/solutions/connect-mobile-app-to-existing-backend", title: "Connect Mobile to an Existing Backend", description: "Plan client state, API integration, and backend readiness." },
    { href: "/solutions/mobile-app-for-existing-web-platform", title: "Add Mobile to a Web Platform", description: "Identify the web workflows that deserve a dedicated mobile experience." },
  ],
  "web-app-development": [
    { href: "/solutions/build-an-app-for-my-business", title: "Build an App for Your Business", description: "Choose between web, mobile, internal, and product application shapes." },
    { href: "/solutions/replace-spreadsheets-with-custom-software", title: "Move Beyond Spreadsheet Workflows", description: "Assess when shared operational software is proportionate." },
  ],
};
