export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  appHref: string;
  appName: string;
  category: string;
  keywords: string[];
  intro: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-expenseflow-simple-expense-tracker",
    title: "Introducing ExpenseFlow: a simple Android expense tracker",
    description:
      "A launch note for ExpenseFlow, a focused Android expense tracker for quick daily spending logs, monthly review, and category insight.",
    date: "2026-07-04",
    appHref: "/work/expense",
    appName: "ExpenseFlow Smart Tracker",
    category: "Expense tracking",
    keywords: [
      "simple expense tracker Android",
      "daily spending tracker",
      "monthly budget app",
      "offline expense tracker",
    ],
    intro:
      "ExpenseFlow was started for people who want to understand daily spending without building a spreadsheet system or connecting a bank account.",
    sections: [
      {
        title: "Why this app exists",
        body: [
          "Most personal finance tools either become too heavy or ask for too much setup before the first useful action. ExpenseFlow keeps the first step small: open the app, add an amount, choose a category, and move on.",
          "The goal is not to replace accounting software. It is to make everyday spending visible enough that users can notice patterns before the month is gone.",
        ],
      },
      {
        title: "Who it is for",
        body: [
          "ExpenseFlow is for Android users who want a private, manual expense tracker for groceries, transport, bills, shopping, health, and other recurring categories.",
          "It is especially useful for people who use cash, split spending between cards, or simply do not want to connect financial accounts to a budgeting app.",
        ],
      },
      {
        title: "What comes next",
        body: [
          "The landing page now focuses on real search intent: simple expense tracking, daily spending, category review, and local-first budget tracking.",
          "Future articles can compare manual tracking with bank-connected apps and explain how to build a low-pressure monthly budget routine.",
        ],
      },
    ],
  },
  {
    slug: "introducing-habitflow-calm-daily-habit-tracker",
    title: "Introducing HabitFlow: a calm daily habit tracker",
    description:
      "A launch note for HabitFlow, an Android habit tracker built around streaks, heatmaps, daily check-ins, and steady routines.",
    date: "2026-07-04",
    appHref: "/work/habit",
    appName: "HabitFlow Daily Habit Tracker",
    category: "Habit tracking",
    keywords: [
      "simple habit tracker Android",
      "daily routine tracker",
      "streak tracker app",
      "habit tracker with heatmap",
    ],
    intro:
      "HabitFlow was created around a quiet idea: habits should stay visible without making the user feel managed by the app.",
    sections: [
      {
        title: "Why this app exists",
        body: [
          "Many habit trackers push users toward complexity, heavy gamification, or crowded dashboards. HabitFlow keeps the loop simple: plan, act, track, repeat.",
          "The app focuses on streaks, daily completion, calendar heatmaps, and routine changes because those are the signals people return to every day.",
        ],
      },
      {
        title: "Who it is for",
        body: [
          "HabitFlow fits users building reading, workouts, hydration, study, meditation, coding practice, or other small daily routines.",
          "It is also useful for people restarting after losing momentum, because the app is built around steady progress rather than perfection.",
        ],
      },
      {
        title: "What comes next",
        body: [
          "The app page now targets long-tail searches around simple habit tracking, streaks, routines, and heatmaps.",
          "Future articles can explain how to choose the first habit, how to recover from broken streaks, and why small routines work better than oversized plans.",
        ],
      },
    ],
  },
  {
    slug: "introducing-meditationflow-calm-timer",
    title: "Introducing MeditationFlow: a quiet meditation timer",
    description:
      "A launch note for MeditationFlow, a minimal Android meditation timer with breathing practices, reminders, stats, and private journal notes.",
    date: "2026-07-04",
    appHref: "/work/meditation",
    appName: "MeditationFlow: Calm Timer",
    category: "Meditation",
    keywords: [
      "meditation timer Android",
      "simple mindfulness app",
      "breathing practice app",
      "calm timer with journal",
    ],
    intro:
      "MeditationFlow is for people who want a quieter way to practice without turning calm into another feed, subscription, or productivity task.",
    sections: [
      {
        title: "Why this app exists",
        body: [
          "A meditation app does not need to overwhelm the user with endless content. Sometimes the best tool is a clean timer, a few useful practices, and a gentle way to return tomorrow.",
          "MeditationFlow focuses on short sessions, breathing patterns, reminders, stats, and optional reflection notes.",
        ],
      },
      {
        title: "Who it is for",
        body: [
          "The app is useful for beginners, returning meditators, and anyone who wants a calm practice without an account or social layer.",
          "It supports small daily practice: sit, breathe, notice, return.",
        ],
      },
      {
        title: "What comes next",
        body: [
          "The landing page now targets searches around meditation timers, breathing practice, reminders, and private reflection.",
          "Future articles can cover meditation timer vs guided meditation apps, how to start with five minutes, and how to use notes without overthinking the practice.",
        ],
      },
    ],
  },
  {
    slug: "introducing-momentum-todo-routines-and-streaks",
    title: "Introducing Momentum TODO: tasks, routines, and streaks",
    description:
      "A launch note for Momentum TODO, a minimal productivity app for Android users who want tasks, routines, streaks, and offline storage.",
    date: "2026-07-04",
    appHref: "/work/todo",
    appName: "Momentum TODO Focus, Routines & Streaks",
    category: "Productivity",
    keywords: [
      "simple todo app Android",
      "routine planner app",
      "task app with streaks",
      "offline todo app",
    ],
    intro:
      "Momentum TODO is built for people who want a practical task and routine system without turning planning into a second job.",
    sections: [
      {
        title: "Why this app exists",
        body: [
          "A good todo app should make the next action obvious. Momentum TODO combines tasks, routines, streaks, and stats so users can manage today and keep repeated commitments visible.",
          "Offline storage keeps the experience quick and simple.",
        ],
      },
      {
        title: "Who it is for",
        body: [
          "Momentum TODO is for users who want a lightweight Android planner for daily tasks, repeated routines, and small progress signals.",
          "It suits people who dislike heavy productivity systems but still want structure.",
        ],
      },
      {
        title: "What comes next",
        body: [
          "The app page now targets searches around simple todo apps, routine planners, streaks, and offline task tracking.",
          "Future articles can compare todo lists and habit trackers, show routine planning examples, and explain how to keep a daily plan small.",
        ],
      },
    ],
  },
  {
    slug: "introducing-docs-scan-private-ocr-scanner",
    title: "Introducing Docs Scan OCR: private on-device scanning",
    description:
      "A launch note for Docs Scan OCR Encrypt & Share, an Android scanner with on-device OCR, encrypted exports, and private document workflows.",
    date: "2026-07-04",
    appHref: "/work/uniscan",
    appName: "Docs Scan OCR Encrypt & Share",
    category: "OCR scanning",
    keywords: [
      "offline OCR scanner Android",
      "private document scanner",
      "encrypted scanner app",
      "secure PDF scanner Android",
    ],
    intro:
      "Docs Scan OCR is designed for users who need scanning, recognition, and sharing without sending sensitive documents through a cloud OCR pipeline.",
    sections: [
      {
        title: "Why this app exists",
        body: [
          "Many scanner apps treat cloud processing as normal. For private documents, business records, legal files, healthcare papers, or invoices, that can be the wrong default.",
          "Docs Scan OCR focuses on on-device recognition, encrypted exports, and safer document handling.",
        ],
      },
      {
        title: "Who it is for",
        body: [
          "The app is for privacy-conscious users, field teams, SMBs, and professionals who scan sensitive documents from Android.",
          "It fits workflows where local processing and controlled sharing matter more than a cloud account.",
        ],
      },
      {
        title: "What comes next",
        body: [
          "The landing page now targets private OCR, offline scanning, encrypted scanner, and secure document workflow searches.",
          "Future articles can explain cloud OCR risks, encrypted document sharing, and how on-device OCR helps low-connectivity teams.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
