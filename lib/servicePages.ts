export type ServiceLink = {
  slug: string;
  title: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  idealFor: string[];
  problemTitle: string;
  problemCopy: string[];
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: { title: string; body: string }[];
  processTitle: string;
  processIntro: string;
  process: { title: string; body: string }[];
  guidanceTitle: string;
  guidanceCopy: string[];
  guidanceColumns: { title: string; items: string[] }[];
  work: { href: string; title: string; description: string }[];
  related: ServiceLink[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  contactIntent: string;
};

export const servicePages: ServicePageData[] = [
  {
    slug: "mobile-app-development",
    navLabel: "Mobile App Development",
    title: "Mobile App Development Company",
    description:
      "Custom mobile app development for Android and iOS, covering product scope, React Native delivery, backend integration, testing, and store-ready release.",
    eyebrow: "Custom mobile application development",
    h1: "Custom mobile app development for iOS and Android",
    intro:
      "FullStack Dev KZ designs and builds production mobile applications for businesses, founders, and software teams. We connect the visible app experience to the less visible work that makes it dependable: authentication, application data, APIs, notifications, subscriptions, offline behavior, administration, and release preparation.",
    idealFor: [
      "Businesses creating a customer-facing or staff mobile application",
      "Founders turning a product concept into a working mobile release",
      "Software companies adding a mobile companion to an existing platform",
      "Teams replacing a fragile prototype or extending an existing application",
    ],
    problemTitle: "A mobile product is more than a set of screens",
    problemCopy: [
      "A useful mobile application has to fit the moments in which people actually use it. A field-service app may need quick access to jobs and customer records with unreliable connectivity. A membership app may need accounts, bookings, reminders, and a web administration surface. A consumer product may need subscriptions, local data, notifications, and clear recovery when a request fails.",
      "The project therefore starts with the user journey and business rules rather than a list of fashionable features. We identify what belongs on the phone, what belongs in the backend, what can be reused from an existing system, and what has to be operated after release. That keeps the mobile experience focused while giving the product a realistic technical foundation.",
    ],
    capabilitiesTitle: "Mobile applications we can build",
    capabilitiesIntro:
      "The implementation can be a standalone app or one part of a larger web and backend platform. The exact combination follows the product requirements.",
    capabilities: [
      { title: "Customer and membership apps", body: "Account-based products for booking, participation, content, reminders, payments, and ongoing customer access." },
      { title: "Business and field apps", body: "Mobile workflows for jobs, customers, documents, catalogues, orders, staff activity, and work away from a desk." },
      { title: "SaaS companion apps", body: "Mobile access connected to an existing or new SaaS platform, sharing accounts, permissions, data, and notifications." },
      { title: "Focused utility products", body: "Purpose-built apps using on-device storage, OCR, reminders, subscriptions, or secure document handling where those capabilities are useful." },
    ],
    processTitle: "From product scope to store-ready release",
    processIntro:
      "The delivery path is adapted to the project, but the core decisions happen in a deliberate order so design, backend, and release work stay aligned.",
    process: [
      { title: "Define the product", body: "Clarify users, essential journeys, commercial model, existing systems, and the outcome the first release must support." },
      { title: "Choose the architecture", body: "Decide how mobile, backend, web administration, local storage, integrations, and authentication should work together." },
      { title: "Build the core journeys", body: "Implement the interface and application behavior in working increments, using real data flows rather than disconnected mock screens." },
      { title: "Integrate and test", body: "Connect APIs, notifications, purchases, device capabilities, and error handling, then test the important paths on representative devices." },
      { title: "Prepare release", body: "Produce store-ready builds, required app information, privacy links, and a practical handover for the next development phase." },
    ],
    guidanceTitle: "Decisions that shape mobile scope",
    guidanceCopy: [
      "Mobile cost and delivery depend on the number of workflows, platforms, backend requirements, device integrations, administration needs, offline expectations, and store-release obligations. An app that displays existing account data is different from a new product that also needs user management, billing, and an operational dashboard.",
      "React Native is often a strong fit when Android and iOS should share product logic and interface work. It is not treated as an automatic answer: unusual native requirements, existing code, performance constraints, and long-term ownership should influence the decision.",
    ],
    guidanceColumns: [
      { title: "Useful before we start", items: ["Who will use the app and in what setting", "The essential task users must complete", "Existing APIs, databases, or web products", "Required mobile platforms and target release"] },
      { title: "Common connected work", items: ["Authentication and user accounts", "Backend APIs and business data", "Push notifications and reminders", "Subscriptions, local storage, and admin tools"] },
    ],
    work: [
      { href: "/work/tradesmate", title: "TradesMate", description: "A mobile business workflow connecting jobs, customers, quotes, invoices, payments, and expenses." },
      { href: "/work/come-together", title: "Come Together", description: "An Android companion within a wider club events, attendance, and community platform." },
      { href: "/work/uniscan", title: "Docs Scan OCR", description: "A focused Android product using on-device OCR and encrypted document workflows." },
    ],
    related: [
      { slug: "react-native-development", title: "React Native Development", description: "Shared Android and iOS application architecture." },
      { slug: "backend-api-development", title: "Backend & API Development", description: "Accounts, data, integrations, and mobile synchronization." },
      { slug: "mvp-development", title: "MVP Development", description: "Define and build the first usable product release." },
    ],
    faqs: [
      { question: "Can you build for both Android and iOS?", answer: "Yes. React Native and Expo can support a shared application for Android and iOS when the product requirements suit a cross-platform approach. Platform-specific behavior is assessed during scope and architecture work." },
      { question: "Does every mobile app need a backend?", answer: "No. Some focused apps can keep their data on the device. Products with accounts, shared data, administration, subscriptions, synchronization, or web access usually need a backend or an integration with an existing one." },
      { question: "Can you work with an existing backend?", answer: "Yes, provided the current APIs, authentication model, documentation, and access can support the mobile workflows. An integration review normally identifies gaps before implementation." },
      { question: "Can you help prepare the app for store release?", answer: "Yes. Delivery can include release builds, store-facing information, privacy and account-deletion links where required, and technical preparation for Google Play and App Store submission. Store approval remains controlled by the platform." },
    ],
    ctaTitle: "Turn your mobile requirement into a buildable product",
    ctaText: "Share the users, core workflow, existing systems, required platforms, and target release. We can identify the right mobile, backend, and delivery scope.",
    ctaLabel: "Discuss Your Mobile App",
    contactIntent: "mobile-app-development",
  },
  {
    slug: "react-native-development",
    navLabel: "React Native Development",
    title: "React Native App Development",
    description:
      "React Native development for shared Android and iOS products, including native integrations, backend APIs, authentication, notifications, and production delivery.",
    eyebrow: "Cross-platform mobile engineering",
    h1: "React Native app development",
    intro:
      "React Native can give one product team a shared foundation for Android and iOS without treating the two platforms as identical. FullStack Dev KZ uses React Native and Expo to build maintainable mobile products, integrate device capabilities, connect production APIs, and prepare releases while preserving platform-specific decisions where they matter.",
    idealFor: [
      "Teams planning one product for both Android and iOS",
      "Businesses that want shared product logic without a generic web wrapper",
      "Existing React Native applications needing new features or backend work",
      "SaaS companies adding a maintained mobile companion",
    ],
    problemTitle: "Is React Native right for your application?",
    problemCopy: [
      "React Native is a practical choice when the product journeys, business logic, and visual system can be shared across mobile platforms. It can reduce duplicated implementation and make coordinated feature delivery easier, while still allowing access to cameras, notifications, secure storage, purchases, files, biometrics, and other platform capabilities.",
      "It is not automatically the best choice for every app. A product dominated by highly specialised native graphics, unusual hardware, or a large existing native codebase may need a different approach. The decision should follow user experience, technical constraints, team ownership, and release plans rather than a framework preference.",
    ],
    capabilitiesTitle: "What React Native delivery includes",
    capabilitiesIntro:
      "The work covers application architecture and the connected product surface, not only component implementation.",
    capabilities: [
      { title: "Shared application architecture", body: "Typed navigation, state, data access, error handling, design tokens, and feature boundaries that can be maintained across platforms." },
      { title: "Native platform integration", body: "Notifications, cameras, files, secure storage, biometrics, purchases, deep links, and native modules where the product requires them." },
      { title: "Backend-connected behavior", body: "Authentication, API clients, token handling, synchronization, permissions, caching, offline hints, and resilient request states." },
      { title: "Production delivery", body: "Build configuration, environment handling, app identifiers, store assets, privacy requirements, and release-focused testing." },
    ],
    processTitle: "A shared codebase still needs platform judgment",
    processIntro:
      "Good cross-platform delivery shares the right things and keeps platform differences explicit. The process protects that boundary from the beginning.",
    process: [
      { title: "Requirement and code review", body: "For a new product we review workflows and integrations; for an existing app we also inspect architecture, dependencies, build health, and release configuration." },
      { title: "Platform plan", body: "Identify shared journeys, native integrations, permission flows, operating-system differences, and any device-specific testing needs." },
      { title: "Incremental implementation", body: "Build features as complete vertical slices that include interface, data, API behavior, errors, and analytics or notifications where genuinely required." },
      { title: "Device and release validation", body: "Verify responsive layouts, platform permissions, lifecycle behavior, production configuration, and store-ready builds on the target platforms." },
    ],
    guidanceTitle: "Maintaining a React Native product",
    guidanceCopy: [
      "A shared codebase reduces some duplication, but it does not remove maintenance. React Native, Expo, Android, iOS, native dependencies, and store requirements continue to evolve. Dependency choices, upgrade discipline, automated checks, and clear feature boundaries matter to long-term ownership.",
      "For an existing application, the first useful step may be a production audit rather than immediate feature work. Build failures, outdated native dependencies, unclear API contracts, or tightly coupled screens can make small changes risky. A focused review makes the next release plan more predictable.",
    ],
    guidanceColumns: [
      { title: "Strong fit", items: ["Shared customer journeys on Android and iOS", "API-driven business or consumer products", "SaaS companions and account-based apps", "Products that benefit from coordinated releases"] },
      { title: "Assess carefully", items: ["Specialised graphics or real-time processing", "Deep dependence on unusual hardware", "Large mature native codebases", "Requirements that differ heavily by platform"] },
    ],
    work: [
      { href: "/work/studyflow", title: "StudyFlow", description: "A local-first flashcard application with review state, reminders, purchases, and Android delivery." },
      { href: "/work/tradesmate", title: "TradesMate", description: "A React Native field product connected to authentication, business records, notifications, and subscriptions." },
      { href: "/work/iskra", title: "Iskra Trading", description: "A mobile catalogue and ordering workflow backed by FastAPI and business data." },
    ],
    related: [
      { slug: "mobile-app-development", title: "Mobile App Development", description: "Broader product planning and mobile delivery." },
      { slug: "backend-api-development", title: "Backend & API Development", description: "Production services for account-based mobile apps." },
      { slug: "saas-development", title: "SaaS Development", description: "Web platforms with a connected mobile product." },
    ],
    faqs: [
      { question: "Is React Native suitable for both iOS and Android?", answer: "Yes, for many account-based, workflow, utility, commerce, and companion applications. Platform requirements are still reviewed individually so shared code does not hide important Android or iOS differences." },
      { question: "When should I choose React Native instead of native development?", answer: "It is often appropriate when both platforms share product journeys and a coordinated team will maintain them. Highly specialised platform behavior or an established native codebase may justify native development instead." },
      { question: "Can React Native integrate with native device features?", answer: "Yes. Existing projects use capabilities such as notifications, secure storage, files, cameras, biometrics, purchases, and on-device processing. Feasibility depends on the exact device or operating-system requirement." },
      { question: "Can you continue development of an existing React Native app?", answer: "Yes. We first assess its dependency health, build setup, navigation, state, API contracts, native modules, and release configuration before proposing feature or modernization work." },
    ],
    ctaTitle: "Choose the mobile architecture from the product requirements",
    ctaText: "Bring the intended platforms, important device features, current code or backend constraints, and the next release goal.",
    ctaLabel: "Discuss a React Native Project",
    contactIntent: "react-native-development",
  },
  {
    slug: "web-app-development",
    navLabel: "Web Application Development",
    title: "Custom Web Application Development",
    description:
      "Custom web application development for portals, dashboards, administration systems, booking workflows, and data-driven business products.",
    eyebrow: "Functional web software",
    h1: "Custom web application development",
    intro:
      "FullStack Dev KZ builds web software that people sign into and use to complete real work: customer portals, operational dashboards, administration systems, booking and membership products, SaaS frontends, and data-driven workflows. This is application development rather than a basic brochure website.",
    idealFor: [
      "Businesses moving an important workflow out of spreadsheets and email",
      "Software products needing a responsive customer or administration interface",
      "Teams connecting users to existing data and business systems",
      "Platforms that need web and mobile experiences around one backend",
    ],
    problemTitle: "A web application has behavior, state, and responsibility",
    problemCopy: [
      "A marketing website mainly explains and publishes. A web application authenticates users, applies permissions, stores and changes data, enforces business rules, and helps someone complete a task. That distinction changes architecture, security, testing, accessibility, and the work required after launch.",
      "The interface must make complex behavior understandable without exposing backend complexity to the user. At the same time, administration, auditability, error states, responsive use, and integration boundaries need deliberate treatment. We design the web surface and the API contract together so the product behaves as one system.",
    ],
    capabilitiesTitle: "Web systems built around actual workflows",
    capabilitiesIntro:
      "A web project can start from a new product idea or extend an existing backend, database, or mobile application.",
    capabilities: [
      { title: "Customer portals", body: "Secure account areas for bookings, documents, subscriptions, profile data, requests, and service history." },
      { title: "Dashboards and administration", body: "Operational views for teams to manage users, content, events, transactions, records, and exceptions." },
      { title: "Booking and membership systems", body: "Availability, registration, attendance, waitlists, reminders, roles, and organiser workflows." },
      { title: "Data-driven business applications", body: "Responsive tools that connect databases, APIs, reporting, and multi-step business rules in one usable interface." },
    ],
    processTitle: "Building the product behind the browser",
    processIntro:
      "The process starts with roles and tasks, then works inward toward data and integration decisions.",
    process: [
      { title: "Map users and permissions", body: "Define who can see, create, approve, change, or export each type of information." },
      { title: "Model workflows and data", body: "Turn business rules into clear states, records, validation, and API responsibilities." },
      { title: "Design responsive interaction", body: "Build key journeys for desktop and mobile browsers with accessible controls and useful loading, empty, and error states." },
      { title: "Connect and validate", body: "Integrate authentication, backend services, third parties, notifications, and deployment environments, then test complete workflows." },
    ],
    guidanceTitle: "Web frontend, backend, or both",
    guidanceCopy: [
      "Some teams already have a stable API and need a stronger customer or administration experience. Others need the application and backend designed together. We can work with an existing service when its contracts and access model are suitable, or build a FastAPI and SQL foundation for the new product.",
      "Scope is influenced by roles, workflow depth, integrations, reporting, migration, administration, and deployment needs. A portal with two account journeys is materially different from a multi-role platform with approvals, billing, and operational tools.",
    ],
    guidanceColumns: [
      { title: "Application concerns", items: ["Authentication and role-based access", "Responsive and accessible workflows", "Forms, validation, tables, and dashboards", "Deployment and environment configuration"] },
      { title: "Connected system concerns", items: ["API contracts and business rules", "Database design and migration", "External service integrations", "Administration and operational visibility"] },
    ],
    work: [
      { href: "/work/come-together", title: "Come Together", description: "A club platform combining public discovery, organiser workflows, bookings, waitlists, and companion mobile access." },
      { href: "/work/pubplay", title: "PubPlay", description: "A mobile web join experience and live display connected to an Android host application." },
      { href: "/work/tradesmate", title: "TradesMate", description: "A connected business product with mobile workflows and supporting backend services." },
    ],
    related: [
      { slug: "saas-development", title: "SaaS Development", description: "Multi-user and subscription-oriented web products." },
      { slug: "backend-api-development", title: "Backend & API Development", description: "Business logic, data, authentication, and integrations." },
      { slug: "custom-business-software", title: "Custom Business Software", description: "Web systems shaped around operational workflows." },
    ],
    faqs: [
      { question: "How is a web application different from a website?", answer: "A web application lets authenticated or public users complete functional workflows and change application data. A website primarily publishes information. Some products include both, but their engineering needs differ." },
      { question: "Can you build on an existing backend or database?", answer: "Yes, after reviewing API quality, authentication, permissions, data ownership, and deployment access. Where gaps exist, the project can include extending or stabilising the backend." },
      { question: "Can the same system support web and mobile apps?", answer: "Yes. A shared backend and API can serve web, Android, and iOS experiences while each interface remains appropriate to its users and context." },
      { question: "Do you build administration tools as part of the application?", answer: "Yes when the product needs them. User management, records, content, configuration, support actions, and reporting should be scoped as real workflows rather than assumed to appear automatically." },
    ],
    ctaTitle: "Define the web workflow before choosing the screens",
    ctaText: "Tell us who uses the application, what they need to complete, what data already exists, and which systems must connect.",
    ctaLabel: "Discuss Your Web Application",
    contactIntent: "web-app-development",
  },
  {
    slug: "saas-development",
    navLabel: "SaaS Development",
    title: "Custom SaaS Development",
    description:
      "Custom SaaS platform development for account-based web products, mobile companions, subscriptions, roles, administration, APIs, and product growth.",
    eyebrow: "Subscription and multi-user products",
    h1: "Custom SaaS platform development",
    intro:
      "FullStack Dev KZ builds connected software products that combine customer-facing web applications, mobile companions, accounts, roles, backend APIs, business data, administration, notifications, and subscription-aware architecture. The goal is a usable production platform with room for informed product growth, not a collection of disconnected features.",
    idealFor: [
      "Founders validating a subscription software proposition",
      "Businesses turning an internal workflow into a customer product",
      "Existing platforms adding mobile access or new operational modules",
      "Teams replacing a prototype with a maintainable production foundation",
    ],
    problemTitle: "From SaaS idea to production platform",
    problemCopy: [
      "A SaaS product has at least two experiences: the customer experience and the operational experience required to run it. Accounts, permissions, plan status, support actions, configuration, data boundaries, and administration matter even when the first release keeps them deliberately small.",
      "The product also needs a clear path through acquisition, activation, repeated use, and account management. We translate that path into explicit workflows and data rules before choosing architecture. This helps the first version stay focused without hiding requirements that would be expensive to discover after customers arrive.",
    ],
    capabilitiesTitle: "The connected parts of a SaaS product",
    capabilitiesIntro:
      "Not every platform needs every capability on day one. The architecture should support the business model while the release scope stays disciplined.",
    capabilities: [
      { title: "Accounts, organisations, and roles", body: "Authentication, ownership boundaries, team access, permissions, profile data, and account lifecycle." },
      { title: "Customer and operational applications", body: "Responsive customer workflows plus the administration and support tools needed to operate the service." },
      { title: "Subscription-aware architecture", body: "Plan and entitlement concepts, purchase validation, account status, and integration with supported billing services where required." },
      { title: "APIs, data, and integrations", body: "FastAPI services, SQL models, notifications, external systems, mobile synchronization, and product-specific business rules." },
    ],
    processTitle: "Build the smallest coherent platform",
    processIntro:
      "A SaaS MVP should test the product proposition while preserving the account and data boundaries the business will rely on.",
    process: [
      { title: "Clarify the commercial model", body: "Define the customer, recurring value, account structure, essential usage loop, and what will be operated manually at first." },
      { title: "Design product boundaries", body: "Separate customer, team, administration, subscription, notification, and integration responsibilities." },
      { title: "Deliver one complete value loop", body: "Build the journey that lets a real customer sign in, complete the core task, and return to useful saved state." },
      { title: "Prepare operations and release", body: "Add the minimum support, configuration, visibility, deployment, and account controls needed to run the first production version." },
      { title: "Use evidence for the next phase", body: "Prioritise later modules from observed use and commercial learning instead of filling the roadmap with assumptions." },
    ],
    guidanceTitle: "Web platform plus mobile companion",
    guidanceCopy: [
      "A SaaS product may work best when complex configuration and administration stay on the web while frequent, contextual actions move to mobile. Building both around one backend keeps accounts, permissions, data, and notifications consistent while allowing each interface to serve its setting.",
      "Future growth comes from clear boundaries rather than promises of unlimited scale. Typed API contracts, explicit permissions, sensible data models, repeatable deployments, and observable failure states make it easier to add new workflows once the product has evidence for them.",
    ],
    guidanceColumns: [
      { title: "First platform questions", items: ["Who pays and who uses the product", "What repeated value keeps an account active", "Which roles and data boundaries are essential", "What administrators need to operate the service"] },
      { title: "Growth-ready foundations", items: ["Clear API and feature boundaries", "Account and permission models", "Deployment environments and migrations", "Supportable integrations and notifications"] },
    ],
    work: [
      { href: "/work/come-together", title: "Come Together", description: "A multi-user clubs platform with organisers, guests, events, bookings, waitlists, and Android access." },
      { href: "/work/pubplay", title: "PubPlay", description: "A venue subscription product connecting a host tablet, player web journey, live display, and backend." },
      { href: "/work/tradesmate", title: "TradesMate", description: "An account-based business application with operational records, subscriptions, and backend services." },
    ],
    related: [
      { slug: "mvp-development", title: "MVP Development", description: "Define the first commercially useful SaaS release." },
      { slug: "web-app-development", title: "Web Application Development", description: "Customer portals and operational interfaces." },
      { slug: "mobile-app-development", title: "Mobile App Development", description: "Add a connected mobile companion experience." },
    ],
    faqs: [
      { question: "Can a SaaS platform include both web and mobile applications?", answer: "Yes. One backend can support a web product, administration tools, and a mobile companion while keeping accounts, permissions, and business data consistent." },
      { question: "Can you build a SaaS MVP first?", answer: "Yes. The MVP should deliver one complete customer value loop and enough account, data, and operational structure to run it with real users." },
      { question: "Can you integrate subscriptions or existing business systems?", answer: "Yes where supported APIs and access are available. Existing work includes Google Play and RevenueCat entitlement flows plus custom backend integrations. Exact billing and system requirements are assessed during scope." },
      { question: "Can an internal application become a SaaS product?", answer: "Potentially. The review needs to examine account separation, permissions, configuration, data ownership, security, support, and the customer experience rather than simply exposing the internal interface." },
    ],
    ctaTitle: "Shape the first coherent version of your SaaS product",
    ctaText: "Share the customer, recurring value, account model, essential workflow, existing systems, and whether web, mobile, or both are required.",
    ctaLabel: "Discuss Your SaaS Product",
    contactIntent: "saas-development",
  },
  {
    slug: "mvp-development",
    navLabel: "MVP Development",
    title: "MVP Development for Startups",
    description:
      "MVP development for startups and new software products, from essential user journeys and architecture through production release and the next evidence-led phase.",
    eyebrow: "First usable product releases",
    h1: "MVP development for startups and new products",
    intro:
      "An MVP should be the smallest coherent product that lets real users experience the core value proposition. It is not a cheap unfinished application. FullStack Dev KZ helps founders and businesses define the essential journey, choose a credible technical foundation, build the first production release, and leave nonessential assumptions for later evidence.",
    idealFor: [
      "Founders with a product idea but an unclear first release",
      "Businesses testing a new customer or operational software model",
      "Teams replacing a clickable prototype with working production software",
      "Product owners who need mobile, web, backend, or a combination",
    ],
    problemTitle: "What should an MVP accomplish?",
    problemCopy: [
      "The first release should prove that a defined user can complete a meaningful task and receive the value the product promises. That may require authentication, data persistence, administration, notifications, or a backend even when the visible feature set is intentionally narrow.",
      "Scope discipline comes from connecting every feature to a learning objective or essential operational need. If a feature does not help the core journey work, make the product safe to operate, or answer an important product question, it may be better placed in a later phase.",
    ],
    capabilitiesTitle: "A complete first product, not a feature sample",
    capabilitiesIntro:
      "The MVP can be mobile, web, SaaS, or a connected system. What matters is that the release can be used, observed, and improved.",
    capabilities: [
      { title: "Product and scope definition", body: "Clarify target users, business objective, core proposition, critical assumptions, and the journey the first release must complete." },
      { title: "UX and technical architecture", body: "Choose the interface, data, backend, authentication, integrations, and deployment approach needed for the essential flow." },
      { title: "Production implementation", body: "Build working mobile or web software against real data behavior, including validation, errors, loading states, and operational needs." },
      { title: "Release and next-phase planning", body: "Prepare deployment or store builds, verify the product, and organise later ideas around what real use reveals." },
    ],
    processTitle: "A practical MVP development process",
    processIntro:
      "Each step reduces uncertainty before adding implementation weight.",
    process: [
      { title: "1. Understand the objective", body: "Define the business problem, intended user, buying context, and what success for the first release would make possible." },
      { title: "2. Map essential journeys", body: "Describe the few tasks users must complete from entry through a useful result." },
      { title: "3. Set the boundary", body: "Separate launch requirements from attractive but unproven features, and identify any manual operations that are acceptable initially." },
      { title: "4. Select architecture", body: "Choose mobile, web, backend, data, authentication, and integration decisions that fit the first release and plausible next phase." },
      { title: "5. Build core product", body: "Implement complete vertical journeys with real data and enough administration to operate them." },
      { title: "6. Test important paths", body: "Verify expected use, failures, permissions, responsive behavior, and release configuration." },
      { title: "7. Prepare production release", body: "Deploy the web product or create store-ready mobile builds with required support and policy surfaces." },
      { title: "8. Plan from feedback", body: "Use observed behavior, support needs, and commercial learning to decide the next development phase." },
    ],
    guidanceTitle: "What belongs now and what can wait",
    guidanceCopy: [
      "An MVP still needs quality in the areas users depend on: the core workflow, data integrity, privacy, authentication where needed, understandable errors, and a release that can be operated. Cutting scope should remove breadth, not basic responsibility.",
      "Universal timelines and fixed prices are rarely honest because a single-user local app and a multi-role SaaS platform have different foundations. Existing service engagement options provide context, but the useful estimate follows a defined product boundary.",
    ],
    guidanceColumns: [
      { title: "Usually belongs in the MVP", items: ["One complete core user journey", "Essential data and business rules", "Required account and permission behavior", "Minimum operational and release support"] },
      { title: "Often waits for evidence", items: ["Secondary user roles and edge modules", "Advanced reporting and extensive customisation", "Multiple speculative integrations", "Automation for low-volume manual tasks"] },
    ],
    work: [
      { href: "/work/pubplay", title: "PubPlay", description: "A focused venue system joining an Android host, QR registration, live fixtures, and display workflows." },
      { href: "/work/studyflow", title: "StudyFlow", description: "A tightly scoped mobile product around decks, spaced review, reminders, and progress." },
      { href: "/work/come-together", title: "Come Together", description: "A platform shaped around one community loop: publish events, join, attend, and return." },
    ],
    related: [
      { slug: "mobile-app-development", title: "Mobile App Development", description: "For a mobile-first MVP." },
      { slug: "web-app-development", title: "Web Application Development", description: "For browser-based products and portals." },
      { slug: "saas-development", title: "SaaS Development", description: "For account-based recurring software products." },
    ],
    faqs: [
      { question: "What should an MVP include?", answer: "It should include the smallest complete journey that delivers the proposition, plus the data, security, administration, and release work required to operate it responsibly." },
      { question: "Does an MVP need a backend?", answer: "Only when the product requires accounts, shared or remote data, administration, synchronization, integrations, or business rules that should not live solely on a device." },
      { question: "Can an MVP later become the full product?", answer: "Yes when its architecture reflects plausible next steps and the first release is maintained. That does not mean building every future capability in advance." },
      { question: "How is MVP scope decided?", answer: "We connect features to the core user journey, launch operations, risk, and the assumptions the release needs to test. Items without a clear first-release purpose are candidates for later phases." },
    ],
    ctaTitle: "Define the product before expanding the roadmap",
    ctaText: "Bring the user, problem, core proposition, current prototype or research, and any fixed integration or release constraints.",
    ctaLabel: "Discuss Your MVP",
    contactIntent: "mvp-development",
  },
  {
    slug: "backend-api-development",
    navLabel: "Backend & API Development",
    title: "Backend & API Development",
    description:
      "Backend and API development for mobile apps, web applications, SaaS products, system integrations, authentication, business data, and synchronization.",
    eyebrow: "Application services and system integration",
    h1: "Backend and API development",
    intro:
      "A backend gives mobile and web products a reliable place for accounts, application data, permissions, business rules, notifications, administration, and integrations. FullStack Dev KZ builds FastAPI and SQL services as part of complete products or as focused backend work for an existing application.",
    idealFor: [
      "Mobile products that need accounts, shared data, or administration",
      "Web and SaaS applications requiring secure business logic",
      "Companies connecting existing systems through a defined API",
      "Teams extending or replacing a fragile application backend",
    ],
    problemTitle: "The backend is where product rules become enforceable",
    problemCopy: [
      "Interfaces can hide or disable controls, but the backend must decide what a user is allowed to do, validate data, apply calculations, manage ownership, and keep records consistent. It also creates the contract that lets mobile, web, administration, and external systems work with the same source of truth.",
      "A useful API is designed around product behavior rather than database tables alone. Clear request and response models, authentication, permissions, errors, idempotency where required, and migration discipline make integrations easier to maintain and failures easier to understand.",
    ],
    capabilitiesTitle: "Backend responsibilities we can deliver",
    capabilitiesIntro:
      "The service can support a new product, extend an existing platform, or create a controlled bridge between systems.",
    capabilities: [
      { title: "Accounts and permissions", body: "User registration, authentication, token handling, organisation boundaries, roles, and access to protected records." },
      { title: "Application data and rules", body: "Typed models, validation, calculations, workflow states, history, and server-authoritative behavior." },
      { title: "APIs and synchronization", body: "Interfaces used by mobile, web, administration, and approved external services, including resilient update flows." },
      { title: "Integrations and operations", body: "Notifications, subscriptions, file workflows, third-party APIs, data import or export, deployment, and operational diagnostics." },
    ],
    processTitle: "Backend work starts with contracts and ownership",
    processIntro:
      "Before writing endpoints, we define the actors, data boundaries, business rules, and systems that will depend on the API.",
    process: [
      { title: "Audit the current environment", body: "Review existing clients, data, APIs, integrations, infrastructure, security assumptions, and known failure points." },
      { title: "Define domain and API contracts", body: "Model records, states, permissions, validation, requests, responses, and error behavior around the product workflows." },
      { title: "Implement secure services", body: "Build FastAPI routes, SQL models, migrations, authentication, integrations, and automated checks for important rules." },
      { title: "Connect real clients", body: "Validate the API through the mobile or web journeys that consume it rather than testing endpoints only in isolation." },
      { title: "Deploy and hand over", body: "Configure environments, secrets, migrations, logs, recovery expectations, and documentation needed for continued development." },
    ],
    guidanceTitle: "Extend, integrate, or replace",
    guidanceCopy: [
      "An existing backend does not always need replacement. If its data model and authentication remain sound, focused endpoints, improved contracts, or an integration layer may solve the product need with less risk. Replacement is considered when the current service cannot safely support essential workflows or ownership boundaries.",
      "Integration scope depends on the external system's API, authentication, rate limits, data quality, and operational responsibility. We avoid promising a connection before those constraints are visible. Where manual imports remain appropriate at low volume, they can be an intentional first phase rather than hidden technical debt.",
    ],
    guidanceColumns: [
      { title: "Common API clients", items: ["React Native mobile applications", "Next.js web applications", "Administration and reporting tools", "Approved third-party services"] },
      { title: "Useful review material", items: ["Current API documentation or code", "Data model and integration list", "Authentication and permission rules", "Failure, migration, and deployment constraints"] },
    ],
    work: [
      { href: "/work/tradesmate", title: "TradesMate backend", description: "FastAPI, SQLAlchemy, PostgreSQL, authentication, business-scoped records, and subscription-aware access." },
      { href: "/work/pubplay", title: "PubPlay live services", description: "Shared venue, event, player, fixture, score, leaderboard, and display data across multiple clients." },
      { href: "/work/iskra", title: "Iskra Trading API", description: "A FastAPI service supporting catalogue, account, ordering, and business integration workflows." },
    ],
    related: [
      { slug: "mobile-app-development", title: "Mobile App Development", description: "Connect the API to a production mobile product." },
      { slug: "web-app-development", title: "Web Application Development", description: "Build customer and administration clients." },
      { slug: "saas-development", title: "SaaS Development", description: "Combine accounts, data, subscriptions, and product interfaces." },
    ],
    faqs: [
      { question: "Can you build a backend for an existing mobile app?", answer: "Yes. We review the current client behavior, data assumptions, authentication, and release constraints before defining a compatible API and migration path." },
      { question: "Can you integrate with an existing API?", answer: "Yes when the service exposes suitable, documented access. We assess authentication, contracts, limits, errors, and data ownership before estimating integration work." },
      { question: "Can one API support both web and mobile apps?", answer: "Yes. Shared domain rules and data can serve multiple clients while responses and workflows remain appropriate to each interface." },
      { question: "Can you replace or extend an existing backend?", answer: "Both are possible. Extending is often lower risk when the current foundation is sound. Replacement requires a clear migration, compatibility, data, and deployment plan." },
    ],
    ctaTitle: "Make the system responsibilities explicit",
    ctaText: "Share the current clients, data, integrations, authentication model, business rules, and the backend problem that is blocking the product.",
    ctaLabel: "Discuss Your Backend",
    contactIntent: "backend-api-development",
  },
  {
    slug: "custom-business-software",
    navLabel: "Custom Business Software",
    title: "Custom Business Software Development",
    description:
      "Custom business software for customer management, scheduling, jobs, documents, reporting, field operations, and connected internal workflows.",
    eyebrow: "Software shaped around operations",
    h1: "Custom business software development",
    intro:
      "When an important workflow is spread across spreadsheets, messages, generic tools, and repeated manual entry, custom software can create one clearer operational record. FullStack Dev KZ builds mobile and web business applications around the way teams schedule work, manage customers, create documents, track activity, and connect existing systems.",
    idealFor: [
      "Businesses with a valuable workflow that generic tools fit poorly",
      "Teams repeating data entry between spreadsheets and disconnected systems",
      "Field operations needing mobile access to jobs, customers, or records",
      "Companies adding a customer portal or operational dashboard",
    ],
    problemTitle: "Custom software should solve a workflow problem",
    problemCopy: [
      "The starting point is not a preferred framework. It is the movement of work: who receives a request, what information they need, which decisions happen next, what documents or records are created, and where delays or errors appear. Mapping that flow reveals whether a focused integration, a small internal tool, or a larger custom application is justified.",
      "Off-the-shelf software remains the right choice when it fits the process and the cost of adaptation is reasonable. Custom development becomes more compelling when the workflow creates real differentiation, requires unusual connections, involves repeated manual work, or forces the business to maintain important truth in several places.",
    ],
    capabilitiesTitle: "Operational systems built around connected records",
    capabilitiesIntro:
      "The application can support staff, customers, managers, and field users through the interfaces that suit their work.",
    capabilities: [
      { title: "Customer and job management", body: "Customer records, appointments, jobs, status, notes, communications, assigned staff, and service history." },
      { title: "Documents and financial workflow", body: "Quotes, invoices, payments, expenses, approvals, exports, and links between operational and financial records." },
      { title: "Portals and dashboards", body: "Customer self-service, staff administration, reporting, exceptions, configuration, and operational visibility." },
      { title: "Field and inventory workflows", body: "Mobile access, catalogues, orders, files, notifications, offline-aware behavior, and integration with backend systems." },
    ],
    processTitle: "Translate the current operation into a better system",
    processIntro:
      "Discovery focuses on real records and handoffs so the software removes friction instead of digitising it unchanged.",
    process: [
      { title: "Observe the workflow", body: "Identify actors, inputs, decisions, repeated entry, exceptions, current tools, and the records the business relies on." },
      { title: "Choose the highest-value boundary", body: "Define which process belongs in the first release and which existing tools should remain connected rather than replaced." },
      { title: "Design roles and data", body: "Model customers, jobs, documents, statuses, permissions, history, and reporting around the selected workflow." },
      { title: "Build web, mobile, and backend parts", body: "Deliver the interfaces and API services needed by office, field, management, or customer users." },
      { title: "Introduce the system safely", body: "Plan imports, validation, release, staff guidance, and continued development around operational reality." },
    ],
    guidanceTitle: "When custom software makes commercial sense",
    guidanceCopy: [
      "A custom system has an initial build cost and an ongoing ownership responsibility. The case is strongest when it reduces a persistent operational burden, supports a distinctive service, connects important systems, or gives customers and staff a workflow that generic software cannot provide cleanly.",
      "Scope should account for exceptions, administration, permissions, data migration, reports, integrations, and support - not only the happy-path interface. Starting with one valuable process often creates a more useful foundation than attempting to replace every tool at once.",
    ],
    guidanceColumns: [
      { title: "Signals worth investigating", items: ["Repeated entry of the same information", "Important status hidden in messages or spreadsheets", "Generic tools requiring constant workarounds", "Customers or field staff lacking useful access"] },
      { title: "Scope questions", items: ["Which system remains the source of truth", "What data must be imported or integrated", "Which roles need web or mobile access", "How exceptions and approvals are handled"] },
    ],
    work: [
      { href: "/work/tradesmate", title: "TradesMate", description: "Customer, job, quote, invoice, payment, expense, and team records connected in a mobile business workflow." },
      { href: "/work/iskra", title: "Iskra Trading", description: "A mobile catalogue and ordering application linked to account, product, and backend business data." },
      { href: "/work/pubplay", title: "PubPlay", description: "A venue workflow connecting event setup, player registration, fixtures, scores, subscriptions, and displays." },
    ],
    related: [
      { slug: "web-app-development", title: "Web Application Development", description: "Portals, dashboards, and staff systems." },
      { slug: "mobile-app-development", title: "Mobile App Development", description: "Field and customer-facing mobile workflows." },
      { slug: "backend-api-development", title: "Backend & API Development", description: "Connect data, rules, and existing systems." },
    ],
    faqs: [
      { question: "When is custom software better than off-the-shelf software?", answer: "When a valuable workflow does not fit available products, requires significant repeated workarounds, or depends on integrations and business rules that generic tools cannot support cleanly." },
      { question: "Can custom software replace spreadsheet-based workflows?", answer: "Yes, when the spreadsheet represents structured records and repeatable actions. The project should first identify formulas, exceptions, ownership, imports, and reports that the current sheet quietly handles." },
      { question: "Can the software integrate with existing systems?", answer: "Often yes, if those systems provide suitable APIs, exports, or controlled database access. Integration feasibility and responsibility are reviewed before scope is committed." },
      { question: "Can the system include both web and mobile interfaces?", answer: "Yes. Office and administration workflows can live on the web while customers or field staff use a mobile application, all connected to shared backend rules and data." },
    ],
    ctaTitle: "Start with the workflow that costs the most attention",
    ctaText: "Describe the current process, users, records, workarounds, integrations, and the point where information or momentum is usually lost.",
    ctaLabel: "Discuss Your Business Software",
    contactIntent: "custom-business-software",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
