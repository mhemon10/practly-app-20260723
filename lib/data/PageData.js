export const pageData = {
  brand: {
    name: "Practly",
    copyright: "© 2026 Practly. Appointment booking that runs itself.",
  },
  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Who it's for", href: "#who" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: {
      login: "Log in",
      trial: "Start Free Trial",
    },
  },
  railTicks: [
    { time: "09:00", id: "hero" },
    { time: "09:20", id: "features" },
    { time: "09:40", id: "how" },
    { time: "10:00", id: "who" },
    { time: "10:20", id: "demo" },
    { time: "10:40", id: "integrations" },
    { time: "11:00", id: "testimonials" },
    { time: "11:20", id: "pricing" },
    { time: "11:40", id: "faq" },
    { time: "12:00", id: "final" },
  ],
  hero: {
    eyebrow: "Appointment booking, on autopilot",
    title: "Let customers book you, automatically",
    subtitle:
      "Stop playing phone tag over scheduling. Practly gives customers a link to book a slot on your calendar 24/7, then handles confirmations, reminders, and rescheduling on its own — so your team spends less time on the phone and more time on the actual work.",
    ctas: [
      { label: "Start Free Trial", primary: true, href: "#signup" },
      { label: "▶ Watch Demo", primary: false, href: "#demo" },
    ],
    trust: ["NO CREDIT CARD REQUIRED", "SETUP IN 10 MIN"],
  },
  features: {
    eyebrow: "Everything scheduling needs",
    title: "Eight small tools that add up to no more phone tag",
    items: [
      {
        icon: "Calendar",
        title: "Online booking page",
        desc: "Share one link and let customers pick a time that works, from any device, without calling or messaging back and forth.",
      },
      {
        icon: "Bell",
        title: "Automatic reminders",
        desc: "SMS and email reminders go out before every appointment on their own, cutting down no-shows without your team lifting a finger.",
      },
      {
        icon: "Clock",
        title: "Staff calendar sync",
        desc: "Each team member's availability syncs with their own calendar in real time, so double-bookings don't happen.",
      },
      {
        icon: "CreditCard",
        title: "Online payments & deposits",
        desc: "Collect a deposit or full payment at the time of booking, cutting down no-shows even further where it matters.",
      },
      {
        icon: "Shield",
        title: "Buffer time & availability rules",
        desc: "Set gaps between appointments, block off lunch or prep time, and control how far ahead customers can book.",
      },
      {
        icon: "RefreshCw",
        title: "Easy rescheduling & cancellations",
        desc: "Customers reschedule or cancel through a self-serve link, instead of tying up your front desk.",
      },
      {
        icon: "BarChart",
        title: "No-show tracking",
        desc: "See who's missed appointments over time, so you can follow up or adjust your reminder timing.",
      },
      {
        icon: "MapPin",
        title: "Multi-location support",
        desc: "Run booking calendars for multiple branches from a single account, with location-specific availability.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Three steps, once",
    title: "How it works",
    steps: [
      {
        num: "01",
        title: "Set your availability",
        desc: "Define your working hours, staff schedules, and buffer time once — Practly handles the rest going forward.",
      },
      {
        num: "02",
        title: "Share your booking link",
        desc: "Add it to your website, social bio, or send it directly, and customers book a slot without a single phone call.",
      },
      {
        num: "03",
        title: "Show up, no chasing required",
        desc: "Confirmations and reminders go out automatically, and every booking updates your calendar and CRM record in real time.",
      },
    ],
  },
  whoItsFor: {
    eyebrow: "Built for appointment-based work",
    title: "Who it's for",
    tabs: [
      {
        label: "Clinics",
        title: "Booking system for clinics",
        desc: "Let patients book consultations online instead of calling the front desk, with automatic reminders that reduce missed appointments and keep the day's schedule predictable.",
        icon: "Plus",
      },
      {
        label: "Salons & spas",
        title: "Online booking for salons & spas",
        desc: "Give clients a booking page for specific services and stylists, with buffer time built in between appointments so the day doesn't run long.",
        icon: "Scissors",
      },
      {
        label: "Consultants & coaches",
        title: "Scheduling for consultants & coaches",
        desc: "Share a booking link for discovery calls or sessions, with payment collection built in if you charge upfront.",
        icon: "User",
      },
      {
        label: "Service businesses",
        title: "Booking for service businesses",
        desc: "Home repair, tutoring, fitness — any business that runs on appointments can replace back-and-forth scheduling messages with a single link.",
        icon: "Wrench",
      },
    ],
  },
  integrations: {
    eyebrow: "Fits into what you already use",
    title: "Integrations",
    desc: "Practly syncs with the calendars you already run and connects natively with Practly CRM and Practly Website, so a booking updates a customer's record automatically.",
    list: [
      "Google Calendar",
      "Outlook",
      "SMS Gateway",
      "Card & bKash Payments",
      "Practly CRM",
      "Practly Website",
    ],
  },
  testimonials: {
    eyebrow: "From people who stopped answering the phone",
    title: "What teams are saying",
    items: [
      {
        stat: "No-shows ↓",
        text: "Patients book directly now instead of calling in, and our no-show rate dropped noticeably once reminders started going out automatically.",
        avatar: "IC",
        name: "Dr. Imran Chowdhury",
        role: "Founder, CarePoint Clinic",
      },
      {
        stat: "Bookings ↑ 40%",
        text: "We used to lose an hour a day just confirming appointments over the phone. Now that time goes into actually seeing clients.",
        avatar: "FR",
        name: "Farzana Rahman",
        role: "Owner, GlowSpace Studio",
      },
    ],
  },
  pricing: {
    eyebrow: "Start free, upgrade when it pays for itself",
    title: "Pricing",
    plans: [
      {
        name: "Starter",
        price: "Free",
        isPopular: false,
        features: [
          "1 staff calendar",
          "Online booking page",
          "Email & SMS reminders",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Growth",
        price: "$19",
        unit: "/month",
        isPopular: true,
        features: [
          "Multiple staff calendars",
          "Online payments & deposits",
          "SMS reminders",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Team",
        price: "$49",
        unit: "/month",
        isPopular: false,
        features: [
          "Multi-location support",
          "Advanced reporting",
          "Everything in Growth",
        ],
        cta: "Start Free Trial",
      },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    title: "FAQ",
    items: [
      {
        q: "What is the best online appointment booking software?",
        a: "The best option depends on your business, but strong booking software should let customers book without calling in, send automatic reminders to cut no-shows, and sync with your existing calendar. Practly covers all three, and connects directly to a CRM and website if you need those too.",
      },
      {
        q: "How can I reduce no-shows with booking software?",
        a: "Automatic SMS and email reminders sent before an appointment are the single biggest factor in reducing no-shows, since most missed appointments happen because a customer simply forgot. Practly sends these automatically without any manual follow-up.",
      },
      {
        q: "Does Practly Appointment Booking send SMS reminders?",
        a: "Yes. Practly can send SMS and email reminders automatically ahead of a scheduled appointment, with timing you control.",
      },
      {
        q: "Can multiple staff members have their own booking calendars?",
        a: "Yes. Each staff member can have their own availability, and customers can book a specific provider or the next available slot.",
      },
      {
        q: "Is Practly Appointment Booking suitable for clinics in Bangladesh?",
        a: "Yes. Clinics use Practly to let patients book online instead of calling in, with SMS reminders to reduce missed appointments and support for local payment methods for deposits or consultation fees.",
      },
    ],
  },
};
