import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles,
  Layout,
  Globe,
  User2,
  RefreshCw,
  Smartphone,
  Search,
  Bot,
  CheckCircle2,
  ChevronUp,
  MapPin,
  Star,
  Compass,
  ClipboardList,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import projPhysc from "@/assets/project-physc.png";
import projVishal from "@/assets/project-vishal.png";
import projWellness from "@/assets/project-wellness.jpg";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shreyash Umesh Yadav",
          jobTitle:
            "AI Website Designer, Landing Page Specialist & Frontend Developer",
          email: "mailto:shreyashy657@gmail.com",
          telephone: "+91 9890397802",
          url: "/",
          sameAs: [],
        }),
      },
    ],
  }),
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="size-1.5 rounded-full gradient-primary" />
      {children}
    </span>
  );
}

function PortfolioPage() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Work />
        <Process />
        <Skills />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left gradient-primary"
      aria-hidden
    />
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-container">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6 ${
            scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <span className="grid size-8 place-items-center rounded-lg gradient-primary text-primary-foreground">
              S
            </span>
            <span className="hidden sm:inline">Shreyash</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                    active === n.id
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90 sm:inline-flex"
          >
            Hire me <ArrowRight className="size-4" />
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full glass md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 glass-strong rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm ${
                      active === n.id ? "bg-white/10" : "text-muted-foreground"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Hire me <ArrowRight className="size-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative isolate pt-36 sm:pt-44">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 -z-10 h-[110%] w-full object-cover opacity-50"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background"
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-40 -z-10 size-72 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-16 top-64 -z-10 size-80 rounded-full bg-accent/25 blur-3xl"
      />

      <div className="section-container">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <SectionEyebrow>
              Available for freelance projects
            </SectionEyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            I build websites that turn
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">visitors into customers.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm <span className="text-foreground font-medium">Shreyash Yadav</span> — an AI website designer, landing page specialist, and frontend developer crafting modern, fast, responsive experiences for growing businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              View my work
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "20+", v: "Projects shipped" },
              { k: "100%", v: "Responsive & fast" },
              { k: "3+", v: "Years designing" },
              { k: "5.0★", v: "Client rating" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold gradient-text">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["React", "Framer", "Bolt", "Lovable", "Tailwind CSS", "Figma", "Netlify", "GitHub"];
  return (
    <div className="section-container mt-20">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Tools & platforms I work with
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-foreground/70">
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] gradient-primary opacity-40 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] glass-strong">
              <img
                src={portrait}
                alt="Portrait of Shreyash Umesh Yadav"
                width={900}
                height={1100}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 glass-strong rounded-2xl px-4 py-3 text-sm shadow-[var(--shadow-elevated)]">
              <div className="flex items-center gap-2 font-semibold">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400" />
                Available now
              </div>
              <div className="text-xs text-muted-foreground">Kolhapur, India</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionEyebrow>About me</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            I turn ideas into <span className="gradient-text">websites that sell.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            I'm Shreyash — a frontend developer and AI-powered website designer helping founders, coaches, and small businesses launch beautiful, high-performing sites in days, not months. My focus is clarity, conversion, and craft.
          </p>
          <p className="mt-4 text-muted-foreground">
            From landing pages that convert cold traffic to full business websites and portfolio experiences — I combine strong UI/UX fundamentals with modern AI tools to ship polished work fast.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Conversion-focused design",
              "Pixel-perfect responsive builds",
              "SEO & performance baked in",
              "Fast delivery with AI workflows",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              Let's work together <ArrowRight className="size-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              See case studies
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  {
    icon: Layout,
    title: "Landing Page Design",
    desc: "High-converting landing pages engineered for ads, launches, and lead capture.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Modern multi-page websites that showcase your brand and generate inquiries.",
  },
  {
    icon: User2,
    title: "Portfolio Websites",
    desc: "Premium personal & agency portfolios that earn trust and win projects.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Refresh outdated sites with modern UI, faster load times, and better UX.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect layouts optimized for mobile, tablet, and desktop.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Websites",
    desc: "Semantic HTML, clean URLs, meta & structured data ready to rank.",
  },
  {
    icon: Bot,
    title: "AI-Powered Websites",
    desc: "Ship polished websites in days using AI-assisted design & development.",
  },
  {
    icon: Sparkles,
    title: "Micro-interactions",
    desc: "Delightful animations and motion that make your product feel premium.",
  },
];

function Services() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow>Services</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          What I <span className="gradient-text">build for you</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          End-to-end web design & development focused on business outcomes.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: (i % 4) * 0.05 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 hover-lift"
          >
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
            <div className="grid size-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
              <s.icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- WORK ---------------- */
const PROJECTS = [
  {
    title: "Physc Gym — Landing Page",
    tag: "Landing Page",
    image: projPhysc,
    url: "https://physc-gym-landing-pa-uv9h.bolt.host",
    tech: ["HTML", "CSS", "JavaScript", "Bolt"],
    challenge:
      "A local premium gym needed a bold landing page to convert cold ad traffic into free trial bookings.",
    solution:
      "Designed a full-screen cinematic hero with trust stats, membership plans, and a sticky CTA to book a trial.",
    features: [
      "Cinematic hero with clear headline",
      "Trust stats & memberships",
      "Sticky book-a-trial CTA",
      "Fully responsive on mobile",
    ],
    outcome:
      "Delivered a high-impact landing page that positions Physc Gym as a premium fitness brand and drives bookings.",
  },
  {
    title: "Vishal Real Estate — Kolhapur",
    tag: "Business Website",
    image: projVishal,
    url: "https://vishal-real-estate-k-stho.bolt.host",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    challenge:
      "A real-estate agency needed a trust-building website with property search, listings, and lead capture.",
    solution:
      "Built an elegant editorial-style site with a search widget, property cards, reviews, and multiple CTAs.",
    features: [
      "Hero search with type/location/budget",
      "Curated property listings",
      "Client reviews & FAQ",
      "WhatsApp + call CTAs",
    ],
    outcome:
      "A premium presence that positions the agency as Kolhapur's #1 trusted real-estate partner.",
  },
  {
    title: "Wellness Zenith",
    tag: "Portfolio / Brand",
    image: projWellness,
    url: "https://wellness-zenith-verse.lovable.app",
    tech: ["React", "Tailwind CSS", "Lovable"],
    challenge:
      "A wellness coach wanted a calm, editorial site to share their story and attract clients.",
    solution:
      "Created a serene brand experience with soft palette, big typography, and a clear path to booking.",
    features: [
      "Editorial hero with warm palette",
      "Programs & offerings",
      "About & testimonials",
      "Contact & booking CTA",
    ],
    outcome:
      "A calming, premium brand presence that reflects the coach's philosophy and drives inquiries.",
  },
];

function Work() {
  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionEyebrow>Selected work</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
            Recent projects & <span className="gradient-text">case studies</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
        >
          Have a project? <ArrowRight className="size-4" />
        </a>
      </div>

      <div className="mt-14 space-y-8">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="group grid gap-6 rounded-3xl glass p-4 sm:p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`relative overflow-hidden rounded-2xl border border-white/5 ${i % 2 ? "lg:order-2" : ""}`}
            >
              <img
                src={p.image}
                alt={`${p.title} website screenshot`}
                loading="lazy"
                width={1920}
                height={1200}
                className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
              <div className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-semibold">
                {p.tag}
              </div>
            </a>

            <div className={`flex flex-col justify-center p-2 sm:p-4 ${i % 2 ? "lg:order-1" : ""}`}>
              <h3 className="text-2xl font-bold sm:text-3xl">{p.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Challenge</dt>
                  <dd className="text-muted-foreground">{p.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Solution</dt>
                  <dd className="text-muted-foreground">{p.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Outcome</dt>
                  <dd className="text-muted-foreground">{p.outcome}</dd>
                </div>
              </dl>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  Live demo <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-white/5"
                >
                  Request similar
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  { icon: Compass, title: "Discovery", desc: "Understand your business, users, and goals." },
  { icon: ClipboardList, title: "Planning", desc: "Sitemap, content strategy, and success metrics." },
  { icon: PenTool, title: "Design", desc: "Wireframes and premium UI in Figma / AI tools." },
  { icon: Code2, title: "Development", desc: "Clean, responsive, SEO-ready frontend build." },
  { icon: TestTube2, title: "Testing", desc: "Cross-device QA, performance & accessibility." },
  { icon: Rocket, title: "Launch", desc: "Deploy fast on Netlify, Vercel, or your host." },
  { icon: LifeBuoy, title: "Support", desc: "Post-launch tweaks, iterations, and growth." },
];

function Process() {
  return (
    <Section id="process">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow>Process</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          A calm, proven <span className="gradient-text">7-step workflow</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Clear checkpoints so you always know what's happening next.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: (i % 4) * 0.04 }}
            className="relative rounded-3xl glass p-6 hover-lift"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <s.icon className="size-5" />
              </div>
              <span className="font-display text-3xl font-bold text-white/10">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- SKILLS + TIMELINE ---------------- */
const SKILLS = [
  { name: "Framer", level: 90 },
  { name: "Bolt", level: 92 },
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 92 },
  { name: "JavaScript", level: 80 },
  { name: "Responsive Design", level: 95 },
  { name: "UI / UX Design", level: 88 },
  { name: "AI Tools", level: 94 },
  { name: "SEO Basics", level: 82 },
  { name: "GitHub", level: 78 },
  { name: "Netlify", level: 85 },
];

function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionEyebrow>Skills</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Tools I've <span className="gradient-text">mastered</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A modern toolkit that lets me design, build, and ship polished websites at speed.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s.name}
                className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-medium"
              >
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <ul className="space-y-4">
            {SKILLS.map((s, i) => (
              <li key={s.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full gradient-primary"
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

const TIMELINE = [
  { year: "2023", title: "Started my design journey", desc: "Learned HTML, CSS & responsive design fundamentals." },
  { year: "2024", title: "Shipped first client sites", desc: "Landing pages & portfolio builds using modern AI workflows." },
  { year: "2024", title: "Adopted Framer & Bolt", desc: "Level-up in UI craft, motion, and rapid prototyping." },
  { year: "2025", title: "Freelance web designer", desc: "Focused on high-converting sites for growing brands." },
  { year: "2026", title: "20+ projects delivered", desc: "Working with founders, coaches, and small businesses." },
];

function Timeline() {
  return (
    <Section id="timeline">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow>Journey</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          My path so <span className="gradient-text">far</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
        <ul className="space-y-8">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className={`relative pl-12 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0 ${i % 2 ? "sm:pl-8" : ""}`}
            >
              <span className="absolute left-2 top-1.5 grid size-5 place-items-center rounded-full gradient-primary sm:left-1/2 sm:-translate-x-1/2">
                <span className="size-2 rounded-full bg-background" />
              </span>
              <div className={`glass rounded-2xl p-5 ${i % 2 ? "sm:col-start-2" : "sm:col-start-1 sm:text-right"}`}>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
                  {t.year}
                </div>
                <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  {
    quote:
      "Shreyash delivered our landing page in under a week and it looked like something a top agency would build. Bookings went up almost immediately.",
    name: "Rahul S.",
    role: "Owner, Premium Fitness Studio",
  },
  {
    quote:
      "Clean design, fast turnaround, and he actually understood our business goals. Our new site finally reflects the quality of our work.",
    name: "Neha P.",
    role: "Founder, Boutique Real Estate",
  },
  {
    quote:
      "He balances beautiful UI with real conversion thinking. Communicated clearly the whole way and shipped on time.",
    name: "Aditya K.",
    role: "Wellness Coach",
  },
];

function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow>Testimonials · Sample</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          What clients <span className="gradient-text">say</span>
        </h2>
        <p className="mt-3 text-xs text-muted-foreground">
          Sample testimonials shown for design purposes — will be replaced with real client reviews.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-3xl p-6 hover-lift"
          >
            <div className="flex gap-0.5 text-primary-glow">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full gradient-primary font-display font-bold text-primary-foreground">
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-10 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 size-80 rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-accent/25 blur-3xl"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Let's build your next <span className="gradient-text">website.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Have a project in mind? Tell me about your business and goals — I'll get back within 24 hours.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:shreyashy657@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full glass px-4 py-3 hover:bg-white/10"
                >
                  <Mail className="size-4 text-primary-glow" />
                  shreyashy657@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919890397802"
                  className="group inline-flex items-center gap-3 rounded-full glass px-4 py-3 hover:bg-white/10"
                >
                  <Phone className="size-4 text-primary-glow" />
                  +91 98903 97802
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919890397802"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full gradient-primary px-4 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> Kolhapur, India · Working worldwide
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full glass transition hover:bg-white/10"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            {submitted ? (
              <div className="grid min-h-[320px] place-items-center text-center">
                <div>
                  <div className="mx-auto grid size-14 place-items-center rounded-full gradient-primary">
                    <CheckCircle2 className="size-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Message received!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks — I'll reply within 24 hours. For urgent projects, ping me on WhatsApp.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" id="name" required placeholder="Jane Doe" />
                  <Field label="Email" id="email" type="email" required placeholder="you@company.com" />
                </div>
                <Field label="Project type" id="type" placeholder="Landing page, business site, redesign…" />
                <div>
                  <label htmlFor="msg" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Project details
                  </label>
                  <textarea
                    id="msg"
                    required
                    rows={5}
                    placeholder="Tell me about your business, goals & timeline…"
                    className="w-full resize-none rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-white/10"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
                >
                  Send message <ArrowRight className="size-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Or email me directly at{" "}
                  <a className="underline hover:text-foreground" href="mailto:shreyashy657@gmail.com">
                    shreyashy657@gmail.com
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-white/10"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 pt-16">
      <div className="section-container">
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid size-9 place-items-center rounded-lg gradient-primary text-primary-foreground">
                S
              </span>
              Shreyash Yadav
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI website designer & frontend developer building modern, fast, high-converting websites for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:shreyashy657@gmail.com" className="hover:text-foreground">
                  shreyashy657@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919890397802" className="hover:text-foreground">
                  +91 98903 97802
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919890397802"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-full glass hover:bg-white/10"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Shreyash Umesh Yadav. All rights reserved.</p>
          <p>Designed & built with craft in Kolhapur, India.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- BACK TO TOP ---------------- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full gradient-primary text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
    >
      <ChevronUp className="size-5" />
    </button>
  );
}
