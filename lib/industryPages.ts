export type IndustryLink = {
  href: string;
  title: string;
  description: string;
};

export type IndustrySection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type IndustryPageData = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  fit: string[];
  sections: IndustrySection[];
  workflowTitle: string;
  workflowIntro: string;
  workflow: string[];
  architectureTitle: string;
  architectureIntro: string;
  architecture: string[];
  product: {
    name: string;
    href: string;
    summary: string;
    screens: { src: string; alt: string; orientation: "portrait" | "landscape" }[];
  };
  paths: { title: string; paragraphs: string[]; href: string; label: string }[];
  solutions: IndustryLink[];
  services: IndustryLink[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  contactIntent: string;
};

export const industryPages: IndustryPageData[] = [
  {
    slug: "trades-service-businesses",
    navLabel: "Trades & Service Businesses",
    title: "Software Development for Trades & Service Businesses",
    description: "Explore custom software for trades and service businesses, connecting customers, job scheduling, quotes, invoices, costs, payments, and mobile work.",
    eyebrow: "Connected operational software",
    h1: "Software for Trades & Service Businesses",
    intro: "Service businesses often begin with a practical collection of tools: a calendar for appointments, contacts on a phone, quote documents, invoice software, and a spreadsheet that tries to explain what has been paid. Custom software becomes useful when those records need to behave as one workflow instead of several disconnected copies. Fullstack Dev KZ has built this kind of operational product in TradesMate, while also helping teams decide when a tailored system is the better path.",
    fit: [
      "Independent tradespeople coordinating customers, work, and documents",
      "Small service teams that need shared operational visibility",
      "Businesses replacing spreadsheet-led job administration",
      "Existing platforms adding a practical field or mobile experience",
    ],
    sections: [
      {
        eyebrow: "Where the friction appears",
        title: "One job can create records in five different places",
        paragraphs: [
          "A customer request can start in a call or message, become a diary entry, produce a quote, turn into scheduled work, and finish as an invoice and payment. When each step lives in a separate tool, names, addresses, dates, totals, and status changes are copied repeatedly. The problem is not that every spreadsheet is bad. It is that the business has no dependable connection between the customer, the work, and the money.",
          "A service business management system can give these records a shared structure. A customer record can lead to a job. The job can carry its schedule and status. A quote can use the same customer and work context, then become an invoice without rebuilding the document. Payments and costs can update the operational view without another reconciliation sheet. The result is not automation for its own sake; it is less duplicated administration and clearer responsibility.",
        ],
        bullets: [
          "Customer details remain beside the relevant work",
          "Scheduled jobs have a visible status and accountable owner",
          "Quotes, invoices, costs, and payments retain their relationships",
          "Documents can be produced from structured business records",
        ],
      },
      {
        eyebrow: "Work away from the desk",
        title: "Mobile software should support the moment the work happens",
        paragraphs: [
          "Trades and service work rarely stays behind a desktop. A useful mobile application can show the next jobs, provide customer contact details, expose the current schedule, and keep quote or invoice information available when someone is with the customer. The interface should prioritize quick operational actions rather than reproduce a large office dashboard on a small screen.",
          "TradesMate demonstrates that approach with Android workflows for jobs, customers, documents, payments, expenses, reminders, and business reporting. The exact requirements differ by business. Some teams may need job photos, specialist forms, approval steps, or an integration with an established accounting system. Those are assessment questions, not features to assume. A custom job management application should be scoped around the actual work pattern and the existing systems that must remain authoritative.",
        ],
        bullets: [
          "View upcoming and completed jobs",
          "Reach customers through the contact record",
          "Access quote and invoice information in context",
          "Record operational updates while the details are current",
        ],
      },
      {
        eyebrow: "Shared business foundation",
        title: "The backend turns useful screens into an operational system",
        paragraphs: [
          "A mobile screen is only one surface. Account access, team roles, customer and job records, document numbering, calculations, subscriptions, notifications, exports, and reporting need consistent rules. A backend and API provide that shared foundation, whether the business uses only a mobile app today or later adds web administration and customer access.",
          "The architecture should keep financial and operational rules authoritative while giving the mobile product fast, understandable states. It should also leave clear boundaries for integrations. An accounting connection, payment service, or existing CRM may be valuable, but its feasibility depends on available APIs, data ownership, security, and the direction in which records should synchronize. That evaluation belongs in discovery rather than in a blanket integration promise.",
        ],
      },
    ],
    workflowTitle: "A connected customer-to-payment workflow",
    workflowIntro: "The strongest opportunity is often the relationship between records. Each step can use information established earlier while still allowing the business to control approvals and exceptions.",
    workflow: [
      "Create or select the customer and keep the contact context in one place.",
      "Create the job, assign its date and status, and make the schedule visible.",
      "Prepare a structured quote using the customer and work details.",
      "Turn approved work into an invoice without rebuilding the record.",
      "Record payments and costs so outstanding balances and performance remain clear.",
    ],
    architectureTitle: "A practical system can grow without becoming one giant screen",
    architectureIntro: "The product can separate focused interfaces while sharing the same business rules and data.",
    architecture: ["Mobile field workflow", "Shared backend and API", "Business records and documents", "Optional web administration and integrations"],
    product: {
      name: "TradesMate",
      href: "/work/tradesmate",
      summary: "TradesMate is the real product evidence behind this industry page. It connects customers, scheduled jobs, quotes, invoices, payments, expenses, reminders, team access, and reporting in an Android business application backed by shared services.",
      screens: [
        { src: "/demos/tradesmate/tradesmate-dashboard.jpg", alt: "TradesMate dashboard with paid revenue, outstanding balances, profit, and next jobs", orientation: "portrait" },
        { src: "/demos/tradesmate/tradesmate-jobs.jpg", alt: "TradesMate job management screen with scheduled and completed work", orientation: "portrait" },
        { src: "/demos/tradesmate/tradesmate-finance.jpg", alt: "TradesMate finance screen with quotes, invoices, costs, and overdue work", orientation: "portrait" },
      ],
    },
    paths: [
      {
        title: "Use the existing TradesMate product",
        paragraphs: ["For a small trade or service business whose needs match the product, the internal TradesMate case study explains the current workflows and links onward to the official product destination for product-specific information."],
        href: "/work/tradesmate",
        label: "Explore TradesMate",
      },
      {
        title: "Build around a different operating model",
        paragraphs: ["A business with specialist documents, different roles, legacy data, approvals, or existing integrations may need custom software. The first step is to map what is genuinely distinctive and which commodity functions should remain with established tools."],
        href: "/services/custom-business-software",
        label: "Explore custom business software",
      },
    ],
    solutions: [
      { href: "/solutions/replace-spreadsheets-with-custom-software", title: "Replace spreadsheets with custom software", description: "Decide when a connected workflow is justified and what should move first." },
      { href: "/solutions/build-an-app-for-my-business", title: "Build an app for your business", description: "Shape users, workflows, product surfaces, and the first practical release." },
    ],
    services: [
      { href: "/services/custom-business-software", title: "Custom Business Software", description: "Operational systems shaped around real records and rules." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Field-friendly Android and iOS product delivery." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "Accounts, business data, documents, and integrations." },
    ],
    faqs: [
      { question: "What software can be customized for a trades business?", answer: "Customer records, job scheduling, statuses, quotes, invoices, costs, payments, documents, reminders, team access, and reporting can be connected where the business case supports it. Scope should follow the actual workflow rather than a generic feature checklist." },
      { question: "Can job, customer, and invoice workflows be connected?", answer: "Yes. A shared data model can relate the customer to the job and its documents, reducing repeated entry. Approval rules, document states, and accounting responsibilities still need to be defined during discovery." },
      { question: "Can field staff use the system from mobile devices?", answer: "Yes. Mobile applications can expose the focused tasks staff need away from a desk, such as schedules, customer contact, job details, status updates, and documents. The exact offline and device requirements should be assessed." },
      { question: "Can custom software integrate with existing accounting or business systems?", answer: "Potentially. Integration depends on the existing system's API, authentication, supported data operations, rate limits, and ownership rules. Those constraints should be reviewed before an integration is promised or estimated." },
    ],
    ctaTitle: "Connect the workflow that makes your service business run",
    ctaText: "Share how customers, jobs, schedules, documents, payments, staff, and current tools work today. We can identify whether an existing product, focused integration, or custom system is the sensible next step.",
    ctaLabel: "Discuss Software for Your Service Business",
    contactIntent: "custom-business-software",
  },
  {
    slug: "pubs-entertainment-venues",
    navLabel: "Pubs & Entertainment Venues",
    title: "Software for Pubs & Entertainment Venues",
    description: "Explore pub entertainment software spanning venue control, QR player web access, fixtures, scoring, live leaderboards, TV displays, and shared backend services.",
    eyebrow: "Multi-screen venue products",
    h1: "Digital Platforms for Pubs & Entertainment Venues",
    intro: "Venue entertainment software has to work in a live room, not only in a product demo. Staff need a dependable control surface, customers need a low-friction way to join, and the shared display needs to keep the event understandable. PubPlay is Fullstack Dev KZ's evidence for this kind of synchronized platform: an Android host, QR-based player web experience, public TV display, tournament state, subscriptions, and a shared backend working as one product.",
    fit: [
      "Pubs running recurring darts, pool, bingo, quiz, or custom games nights",
      "Entertainment venues coordinating customers across several screens",
      "Existing venue platforms adding player web or mobile experiences",
      "Product teams designing real-time event and display workflows",
    ],
    sections: [
      {
        eyebrow: "A live operational setting",
        title: "The host must stay in control while players see what matters",
        paragraphs: [
          "A games night includes several concurrent journeys. Staff configure the event, open registration, check names, create fixtures, enter official scores, handle the competition format, and archive the completed night. Players need a simple path into the event and clear confirmation. The room needs a visible source for the join code, next matches, latest results, and standings.",
          "Trying to put every responsibility on one device makes the experience harder. PubPlay divides the work deliberately. The landscape Android host gives venue staff the operational workspace. Players scan a QR code and join through a responsive web page without installing an app or creating an account. A browser-based TV view communicates the state of the event to the room. The interfaces remain different because their users and distances are different, but they depend on the same event record.",
        ],
        bullets: [
          "Venue setup and authenticated owner access",
          "QR registration without a player-app installation queue",
          "Round-robin or knockout fixtures and official score entry",
          "Live standings, next fixtures, and archived event results",
        ],
      },
      {
        eyebrow: "Multi-screen engineering",
        title: "One platform can support tablet, phone browser, and venue display",
        paragraphs: [
          "A multi-screen venue platform is more than the same responsive page shown at three sizes. The host interface is interactive and privileged. The player interface is personal, simple, and designed for quick entry. The TV interface must be legible at distance and update without someone repeatedly refreshing it. Permissions, event state, and presentation rules need to reflect those roles.",
          "The shared backend coordinates registration, fixtures, results, standings, and display state. That avoids separate versions of the event drifting apart. It also creates an architectural path for subscriptions, event archives, venue accounts, and future game formats without exposing sensitive implementation details to public clients. Reliability still depends on sensible connection handling and clear recovery states because a venue network is not a controlled office environment.",
        ],
      },
      {
        eyebrow: "Repeatable venue experience",
        title: "Digital entertainment should support the event, not distract from it",
        paragraphs: [
          "Good venue engagement software reduces explanation at the beginning and keeps the room oriented as play continues. A visible QR code shortens registration. A fixture list answers who plays next. The leaderboard gives each result context. An archive preserves the outcome after the event closes. These functions can help staff run a consistent weekly format without turning the evening into administration.",
          "Another venue model may need different games, branded presentation, ticketing, membership, content moderation, hardware, or an existing customer database. Those requirements move the work from adopting PubPlay toward custom SaaS, web, mobile, and backend development. The industry page documents the relevant product pattern; it does not replace the official PubPlay sales path for venues interested in that product itself.",
        ],
      },
    ],
    workflowTitle: "From registration to a final leaderboard",
    workflowIntro: "The interfaces share one event lifecycle while giving each participant only the controls and information they need.",
    workflow: [
      "The venue creates the games night and chooses its format on the host tablet.",
      "Registration opens and a QR or join code appears for players in the room.",
      "Staff confirm participants and generate round-robin or knockout fixtures.",
      "Official scores entered by the host update player views and the TV display.",
      "The completed event becomes a read-only archive with results and standings.",
    ],
    architectureTitle: "One event state, three purpose-built interfaces",
    architectureIntro: "The product is coordinated through a shared platform rather than direct device-to-device control.",
    architecture: ["Shared backend and event state", "Venue host tablet", "QR player web experience", "Public TV browser display"],
    product: {
      name: "PubPlay",
      href: "/work/pubplay",
      summary: "PubPlay demonstrates a real venue entertainment platform across an authenticated Android host, player mobile web page, live TV experience, competition formats, score entry, standings, subscriptions, and event archives.",
      screens: [
        { src: "/demos/pubplay/general-features.png", alt: "PubPlay host tablet, player phone, and live TV leaderboard working together", orientation: "landscape" },
        { src: "/demos/pubplay/05.jpg", alt: "PubPlay host screen showing players, fixtures, and score entry", orientation: "landscape" },
        { src: "/demos/pubplay/08.png", alt: "PubPlay mobile web experience with player check-in and leaderboard", orientation: "portrait" },
      ],
    },
    paths: [
      { title: "Run games nights with PubPlay", paragraphs: ["The PubPlay case study documents the actual product, its host and player journeys, TV mode, game formats, guide, and official product destination. That remains the right path for venues evaluating PubPlay itself."], href: "/work/pubplay", label: "Explore PubPlay" },
      { title: "Build a different venue platform", paragraphs: ["A venue group or entertainment concept with a different operating model may need custom workflows, roles, branding, integrations, or content. That work should begin with the live event journey and shared platform responsibilities."], href: "/services/saas-development", label: "Explore SaaS development" },
    ],
    solutions: [
      { href: "/solutions/mobile-app-for-existing-web-platform", title: "Add mobile to an existing web platform", description: "Plan shared accounts, APIs, permissions, and the boundary between interfaces." },
    ],
    services: [
      { href: "/services/saas-development", title: "SaaS Development", description: "Account-based platforms, roles, subscriptions, and operations." },
      { href: "/services/web-app-development", title: "Web Application Development", description: "Player, customer, administration, and display interfaces." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Operational or customer-facing venue applications." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "Shared event state, accounts, and synchronized clients." },
    ],
    faqs: [
      { question: "Can one platform support mobile, web, and venue displays?", answer: "Yes. PubPlay demonstrates an Android host, mobile player web experience, and browser-based TV view around shared event data. Each interface should still be designed for its own user, permissions, and viewing context." },
      { question: "Can an existing venue system gain a mobile experience?", answer: "Potentially. The existing backend must expose suitable authentication, data, permissions, and event operations. A technical review can identify whether to integrate directly, extend the API, or introduce a separate service boundary." },
      { question: "Can entertainment software be customized for a particular venue model?", answer: "Yes, but scope depends on game rules, venue roles, customer entry, displays, subscriptions, branding, and integrations. Custom work should not assume PubPlay's model fits every entertainment concept." },
      { question: "Does a multi-screen platform require a shared backend?", answer: "Usually, when registration, scores, fixtures, and displays must stay aligned across devices. The backend provides authoritative state and access rules while each interface presents the subset it needs." },
    ],
    ctaTitle: "Design the venue experience as one connected platform",
    ctaText: "Share the live event, staff controls, customer entry, display requirements, existing systems, and commercial model. We can map the web, mobile, display, and backend responsibilities before development starts.",
    ctaLabel: "Discuss Your Venue Platform",
    contactIntent: "saas-development",
  },
  {
    slug: "clubs-member-organizations",
    navLabel: "Clubs & Member Organizations",
    title: "Club & Membership Software Development",
    description: "Explore software for clubs and member organizations, including public event discovery, bookings, capacity, waitlists, attendance, organizer tools, and mobile companions.",
    eyebrow: "Two-sided community platforms",
    h1: "Software for Clubs & Member Organizations",
    intro: "A club platform serves at least two perspectives. Members need to understand what the organization offers, find an event, and manage participation. Organizers need to publish accurate information, control capacity, review bookings, handle waitlists, and know who attended. Come Together is Fullstack Dev KZ's real product evidence for this architecture: public web discovery and booking, organizer administration, notifications, and an Android companion connected through one service.",
    fit: [
      "Independent clubs and recurring community event organizers",
      "Member organizations replacing fragmented booking administration",
      "Platforms combining public discovery with organizer operations",
      "Existing web products adding an organizer or member mobile companion",
    ],
    sections: [
      {
        eyebrow: "Two audiences, one event record",
        title: "Members and organizers should not manage separate versions of the truth",
        paragraphs: [
          "Public pages need to explain the club, location, date, price, and event experience clearly enough for someone to book. Organizer tools need more detail: event configuration, capacity, booking status, waitlist position, attendance, imagery, and communication. If those sides are maintained independently, changes and cancellations create avoidable confusion.",
          "A shared club and event model lets the public experience and organizer workflow stay aligned. The organizer publishes an event once. Members see the current details and submit a booking. The platform applies capacity rules, places later bookings on an ordered waitlist, and can support promotion after a cancellation. On the day, the organizer opens the same event in the mobile companion to review guests and record attendance.",
        ],
        bullets: [
          "Public club profiles and event pages",
          "Bookings governed by event capacity",
          "Ordered waitlists and cancellation handling",
          "Guest lists and attendance for organizers",
        ],
      },
      {
        eyebrow: "Organizer and member experience",
        title: "Each side needs an interface designed for its job",
        paragraphs: [
          "Members benefit from a responsive web experience when the first action is discovery: they may arrive from search, a shared link, or a club's own promotion. Requiring an app before someone can read an event or make a first booking can add unnecessary friction. A future member app may be justified when repeat participation, profiles, notifications, or richer community journeys make ongoing installation valuable.",
          "Organizers have a different pattern. They already have an account and return repeatedly to manage clubs and events. Come Together gives them a web administration experience and an Android companion for upcoming events, guest status, and attendance at the venue. This is a useful example of choosing mobile for a focused operational context rather than making every platform function available everywhere.",
        ],
      },
      {
        eyebrow: "Platform responsibilities",
        title: "Capacity, attendance, and communication belong to the backend",
        paragraphs: [
          "Bookings are not only form submissions. The platform has to decide whether a place is confirmed, preserve waitlist order, handle cancellation, and keep organizer and member views consistent. Attendance adds another state after booking. Notifications for confirmation, reminders, promotion, or cancellation depend on those authoritative states and should not be implemented independently in each interface.",
          "The same foundation can hold organization information, events, users, media, localization, time zones, currencies, and retention-oriented insight. Payment checkout is outside the current Come Together pilot, so it should not be presented as existing evidence. A custom club management platform may add payments, membership tiers, renewals, access control, or third-party integrations only after those requirements and responsibilities are properly assessed.",
          "Roles also need deliberate boundaries. A club owner, event host, volunteer, and member may each need different visibility and authority. The platform should define who can publish information, change capacity, inspect guest data, record attendance, or contact participants. Clear permissions protect member information and keep day-of-event actions available to the people responsible for them without turning every user into a system administrator.",
        ],
      },
    ],
    workflowTitle: "A complete club-event loop",
    workflowIntro: "The public and organizer journeys remain connected from publication through attendance instead of handing records between unrelated tools.",
    workflow: [
      "Create the club profile with its location, time zone, currency, description, and imagery.",
      "Publish an event with its venue, local schedule, capacity, and booking information.",
      "Let members book while confirmed places and the ordered waitlist remain accurate.",
      "Use the Android organizer companion to review guests and record attendance.",
      "Use participation history to understand returning activity and plan the next event.",
    ],
    architectureTitle: "Public discovery and organizer operations can share one platform",
    architectureIntro: "The web and mobile surfaces use the same backend records while serving different moments in the event lifecycle.",
    architecture: ["Shared backend and API", "Public club and event web experience", "Organizer web administration", "Android organizer companion"],
    product: {
      name: "Come Together",
      href: "/work/come-together",
      summary: "Come Together is the local-clubs platform behind this industry evidence. It connects public club and event pages, booking, capacity, ordered waitlists, organizer workflows, attendance, notifications, localization, and an Android companion.",
      screens: [
        { src: "/demos/come-together/web.png", alt: "Come Together website for discovering local clubs and events", orientation: "landscape" },
        { src: "/demos/come-together/02.jpg", alt: "Come Together Android organizer dashboard with an upcoming club event", orientation: "portrait" },
        { src: "/demos/come-together/03.jpg", alt: "Come Together Android guest list with attendance status", orientation: "portrait" },
      ],
    },
    paths: [
      { title: "Explore the Come Together platform", paragraphs: ["The internal case study documents the product's actual public, organizer, booking, waitlist, attendance, and mobile workflows and links to its legitimate external product destination."], href: "/work/come-together", label: "Explore Come Together" },
      { title: "Build for a different membership model", paragraphs: ["Another organization may require formal memberships, renewals, chapters, permissions, documents, payments, or integrations. Those differences should shape a custom SaaS platform rather than being forced into an unrelated club product."], href: "/services/saas-development", label: "Explore SaaS development" },
    ],
    solutions: [
      { href: "/solutions/mobile-app-for-existing-web-platform", title: "Add mobile to an existing web platform", description: "Decide what belongs in a companion app and what should remain on the web." },
    ],
    services: [
      { href: "/services/saas-development", title: "SaaS Development", description: "Multi-role products, subscriptions, operations, and platform delivery." },
      { href: "/services/web-app-development", title: "Web Application Development", description: "Public discovery, booking, portals, and organizer administration." },
      { href: "/services/mobile-app-development", title: "Mobile App Development", description: "Focused organizer or member experiences on mobile." },
      { href: "/services/backend-api-development", title: "Backend & API Development", description: "Accounts, events, bookings, capacity, notifications, and shared data." },
    ],
    faqs: [
      { question: "Can club software support both organizers and members?", answer: "Yes. A shared platform can provide public or member-facing discovery and booking while giving organizers authenticated tools for club information, events, capacity, guest status, and attendance." },
      { question: "Can members book events from a mobile app?", answer: "Yes, when a member app is part of the product. Come Together currently demonstrates responsive web booking for guests and an Android companion for organizers, which avoids requiring an installation for a first booking." },
      { question: "Can capacity and waitlists be managed digitally?", answer: "Yes. Come Together demonstrates confirmed capacity and an ordered waitlist, with later promotion after a cancellation. Exact reservation, expiry, and notification rules should match the organization's operating model." },
      { question: "Can a web platform and mobile app use the same backend?", answer: "Yes. Sharing authentication, roles, club records, events, bookings, and attendance through an API helps the interfaces remain consistent. Each client should still expose only the functions appropriate to its users." },
    ],
    ctaTitle: "Connect member discovery with organizer operations",
    ctaText: "Share the organization model, member journey, events, booking rules, capacity, administration, mobile context, and existing systems. We can define a web, mobile, and backend scope around the real participation lifecycle.",
    ctaLabel: "Discuss Your Membership Platform",
    contactIntent: "saas-development",
  },
];

export function getIndustryPage(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export const serviceIndustryLinks: Record<string, IndustryLink[]> = {
  "custom-business-software": [
    { href: "/industries/trades-service-businesses", title: "Trades & Service Businesses", description: "Customers, jobs, scheduling, documents, costs, and payments as one workflow." },
  ],
  "saas-development": [
    { href: "/industries/pubs-entertainment-venues", title: "Pubs & Entertainment Venues", description: "Host, player, display, and backend experiences around live events." },
    { href: "/industries/clubs-member-organizations", title: "Clubs & Member Organizations", description: "Public discovery, bookings, capacity, attendance, and organizer operations." },
  ],
  "mobile-app-development": [
    { href: "/industries/trades-service-businesses", title: "Trades & Service Businesses", description: "Focused mobile work for jobs, customers, and business documents." },
    { href: "/industries/clubs-member-organizations", title: "Clubs & Member Organizations", description: "A mobile companion connected to a wider web platform." },
  ],
};

export const solutionIndustryLinks: Record<string, IndustryLink[]> = {
  "replace-spreadsheets-with-custom-software": [
    { href: "/industries/trades-service-businesses", title: "Trades & Service Businesses", description: "See how customer, job, document, and payment records can form one workflow." },
  ],
  "mobile-app-for-existing-web-platform": [
    { href: "/industries/clubs-member-organizations", title: "Clubs & Member Organizations", description: "See a web platform with a focused Android organizer companion." },
    { href: "/industries/pubs-entertainment-venues", title: "Pubs & Entertainment Venues", description: "See a shared platform spanning host tablet, player web, and TV display." },
  ],
};
