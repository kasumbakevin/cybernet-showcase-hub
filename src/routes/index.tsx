import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Mail, Phone, MapPin, ArrowUpRight, Code2, Palette, Network,
  Database, Server, Shield, Cpu, Sparkles, GraduationCap,
  Youtube, BookOpen, Search, Github, Linkedin, Menu, X, Award,
  Star, GitFork, Music2,
} from "lucide-react";
import portraitAsset from "@/assets/kevin-portrait.jpg.asset.json";
import gradAsset from "@/assets/kevin-graduation.jpg.asset.json";
import cctvAsset from "@/assets/kevin-cctv.jpg.asset.json";
import ciscoCert from "@/assets/cert-cisco.pdf.asset.json";
import bmCert from "@/assets/cert-brightermonday.pdf.asset.json";
import graphics1 from "@/assets/graphics-1.jpg.asset.json";
import graphics2 from "@/assets/graphics-2.jpg.asset.json";
import graphics3 from "@/assets/graphics-3.jpg.asset.json";
import graphics4 from "@/assets/graphics-4.jpg.asset.json";
import gal1 from "@/assets/gallery-20260625_103851.jpg.asset.json";
import gal2 from "@/assets/gallery-20260706_100309.jpg.asset.json";
import gal3 from "@/assets/gallery-20260706_100634.jpg.asset.json";
import gal4 from "@/assets/gallery-20260706_100650.jpg.asset.json";
import gal5 from "@/assets/gallery-20260712_100234.jpg.asset.json";
import gal6 from "@/assets/gallery-20260712_100302.jpg.asset.json";
import gal7 from "@/assets/gallery-20260712_100317.jpg.asset.json";
import gal8 from "@/assets/gallery-20260622_231353.jpg.asset.json";

const gallery = [
  { src: gal6.url, title: "CCTV Camera Setup", tag: "Cybernet Internship" },
  { src: gal2.url, title: "Rack & Switch Wiring", tag: "Network Infrastructure" },
  { src: gal4.url, title: "LAN Cable Testing", tag: "Cable Certification" },
  { src: gal3.url, title: "Signal Diagnostics", tag: "Field Service" },
  { src: gal5.url, title: "Spy Device Inspection", tag: "Security Hardware" },
  { src: gal1.url, title: "Laptop Repair Bench", tag: "Hardware Support" },
  { src: gal7.url, title: "Team Session", tag: "Behind the Scenes" },
  { src: gal8.url, title: "APN Tutorial Thumbnail", tag: "YouTube · TechKevin" },
];

const socials = {
  github: "https://github.com/kasumbakevin",
  youtube: "https://www.youtube.com/@techkevin256",
  tiktok: "https://www.tiktok.com/@entertianment256",
  email: "mailto:kasumbakevin123@gmail.com",
};

const certifications = [
  { title: "Computer Hardware Basics", issuer: "Cisco Networking Academy", date: "18 Mar 2025", url: ciscoCert.url },
  { title: "Soft Skills Certificate", issuer: "BrighterMonday Uganda · Mastercard Foundation", date: "16 Apr 2026", url: bmCert.url },
  { title: "Hikvision Certification", issuer: "Hikvision E-Learning", date: "Completed", url: "https://elearning-assets.hikvision.com/image/784a3a90-1007-4af8-b1c5-2aeb53495000.pdf" },
  { title: "Hikvision Certification", issuer: "Hikvision E-Learning", date: "Completed", url: "https://elearning-assets.hikvision.com/image/5aa4cf4f-6e6f-4843-a0c8-cfe5ca238d33.pdf" },
];

const projects = [
  {
    name: "Cybernet Showcase Hub",
    description: "Showcase site for Cybernet Computer and Security LTD services.",
    language: "TypeScript",
    url: "https://github.com/kasumbakevin/cybernet-showcase-hub",
  },
  {
    name: "Jeff Collection Clothings",
    description: "Online catalogue for Jeff Clothes showing different styles and collections — HTML, CSS and JavaScript.",
    language: "HTML",
    url: "https://github.com/kasumbakevin/jeffCollectionClothingsWebiste",
  },
  {
    name: "Choose Your Adventure",
    description: "Interactive text adventure game where every choice shapes your path through mystery and puzzles.",
    language: "Python",
    url: "https://github.com/kasumbakevin/ChooseYourAdventureWay",
  },
  {
    name: "Computer Quiz Game",
    description: "A random computer quiz that asks about CPU, RAM and hardware, then scores you at the end.",
    language: "Python",
    url: "https://github.com/kasumbakevin/ComputerQuizGame",
  },
  {
    name: "Rock Paper Scissors",
    description: "A simple rock–paper–scissors game written in Python.",
    language: "Python",
    url: "https://github.com/kasumbakevin/RockPaperScissorsGame",
  },
  {
    name: "GitHub Profile",
    description: "All repositories and config files — the full open-source workspace.",
    language: "Profile",
    url: "https://github.com/kasumbakevin",
  },
];

const graphics = [
  { src: graphics1.url, title: "Brand Identity", tag: "Logo · Stationery" },
  { src: graphics2.url, title: "Event Poster", tag: "Social Media" },
  { src: graphics3.url, title: "IT Services Flyer", tag: "Print Design" },
  { src: graphics4.url, title: "Merch Mockup", tag: "Apparel Branding" },
];

export const Route = createFileRoute("/")({ component: Portfolio });

const skills = [
  { icon: Code2, label: "Programming", detail: "C++, Visual Basic" },
  { icon: Network, label: "Networking", detail: "Install & maintain" },
  { icon: Server, label: "System Admin", detail: "Windows / Linux" },
  { icon: Database, label: "Databases", detail: "Design & manage" },
  { icon: Palette, label: "Graphics Design", detail: "Brand & visuals" },
  { icon: Shield, label: "Cybersecurity", detail: "Basics & practice" },
];

const services = [
  { title: "Software Development", body: "Building reliable, purpose-built applications for daily business use." },
  { title: "Web Design & Development", body: "Modern, responsive websites that represent your brand well online." },
  { title: "IT Support & System Admin", body: "Hands-on support that keeps teams and machines running smoothly." },
  { title: "Networks", body: "Installation and maintenance of small-to-medium office networks." },
  { title: "Database Management", body: "Structured, secure data foundations for your growing organisation." },
  { title: "Cybersecurity", body: "Practical protections against everyday digital threats and risks." },
];

const timeline = [
  { period: "2024 — Present", title: "IT & Security Intern", org: "Cybernet Computer and Security LTD", body: "Practical exposure to system administration, networking, and IT security operations. Supporting real client environments while sharpening technical craft." },
  { period: "In progress", title: "Bachelor of Information Technology", org: "Muteesa I Royal University, Uganda", body: "Building a rigorous foundation in programming, databases, networks and modern IT systems." },
  { period: "Ongoing", title: "Online Certifications", org: "Self-directed learning", body: "Multiple certifications strengthening technical and professional skills across the IT stack." },
];

// TikTok icon (lucide has no TikTok — inline SVG)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.9a5.7 5.7 0 0 1-3.3-1.1 5.7 5.7 0 0 1-2.2-3.3h-3.3v13.1a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .8.1V9.6a6 6 0 0 0-.8-.1 6 6 0 1 0 6 6V9.2a9 9 0 0 0 5.5 1.9V7.8c-.1 0-.1-.1 0-.9z"/>
    </svg>
  );
}

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero heroRef={heroRef} y={y} opacity={opacity} />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Graphics />
      <Gallery />
      <Projects />
      <Services />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "about"], ["Skills", "skills"], ["Graphics", "graphics"],
    ["Gallery", "gallery"], ["Projects", "projects"], ["Contact", "contact"],
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold">
          <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm">KK</span>
          <span className="hidden sm:block">Kasumba Kevin</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-foreground transition-colors">{label}</a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-surface" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ heroRef, y, opacity }: { heroRef: React.RefObject<HTMLDivElement | null>; y: any; opacity: any; }) {
  return (
    <section id="top" ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities · Kampala, Uganda
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Kasumba <span className="text-primary">Kevin.</span><br />
            <span className="text-muted-foreground">IT specialist &</span><br />
            graphics designer.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            IT graduate building practical systems, clean interfaces and secure networks — currently interning at{" "}
            <span className="text-foreground font-medium">Cybernet Computer and Security LTD</span>.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition glow-ring">
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-surface transition">
              View projects
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex items-center gap-3">
            <SocialButton href={socials.github} label="GitHub"><Github className="w-4 h-4" /></SocialButton>
            <SocialButton href={socials.youtube} label="YouTube"><Youtube className="w-4 h-4" /></SocialButton>
            <SocialButton href={socials.tiktok} label="TikTok"><TikTokIcon className="w-4 h-4" /></SocialButton>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />kasumbakevin123@gmail.com</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />+256 751 761 977</span>
          </motion.div>
        </div>
        <HeroCard />
      </motion.div>
    </section>
  );
}

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="w-10 h-10 rounded-full border border-border bg-surface/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition">
      {children}
    </a>
  );
}

function HeroCard() {
  const images = [
    { src: portraitAsset.url, alt: "Kasumba Kevin portrait" },
    { src: gradAsset.url, alt: "Kasumba Kevin graduation" },
    { src: cctvAsset.url, alt: "Kevin installing a CCTV camera at Cybernet" },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 3500);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative aspect-[4/5] rounded-3xl border border-border bg-surface/80 backdrop-blur overflow-hidden glow-ring"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between font-mono text-xs">
        <span className="text-muted-foreground">~/portfolio</span>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>
      </div>
      <div className="absolute inset-0 p-10 sm:p-12">
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50">
          {images.map((img, i) => (
            <motion.img key={img.src} src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover"
              initial={false} animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
      </div>
      <button aria-label="Previous image" onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition">
        <ArrowUpRight className="w-4 h-4 -rotate-[135deg]" />
      </button>
      <button aria-label="Next image" onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition">
        <ArrowUpRight className="w-4 h-4 rotate-45" />
      </button>
      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} aria-label={`Show image ${i + 1}`} onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"}`} />
        ))}
      </div>
      <div className="absolute bottom-6 left-6 right-6 z-20 font-mono text-xs space-y-1.5">
        <div className="flex justify-between"><span className="text-muted-foreground">role</span><span>Intern · Cybernet</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">focus</span><span>IT + Design</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">status</span><span className="text-primary">● online</span></div>
      </div>
    </motion.div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{eyebrow}</div>
          <h2 className="text-4xl sm:text-5xl font-semibold">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="01 · About" title={<>Curious mind, <span className="text-muted-foreground">grounded in craft.</span></>}>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="lg:col-span-2 text-xl leading-relaxed text-muted-foreground">
          I'm an IT student at Muteesa I Royal University with a love for the point where
          <span className="text-foreground"> systems meet design</span>. My days are split between writing code,
          configuring networks and creating visuals that communicate clearly. Right now I'm applying it all as
          an intern at <span className="text-foreground">Cybernet Computer and Security LTD</span>, where I get
          to solve real problems for real clients.
        </motion.p>
        <div className="space-y-3">
          {[
            { icon: MapPin, label: "Kampala, Uganda" },
            { icon: GraduationCap, label: "BSc Information Technology" },
            { icon: Sparkles, label: "English · Luganda" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface/50 px-4 py-3">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title={<>The toolkit I <span className="text-primary">actually use.</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-border bg-surface/60 p-6 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <s.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-1">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.detail}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {["Microsoft Word", "Excel", "PowerPoint", "Internet Research", "IT Support", "Brand Design"].map((t) => (
          <span key={t} className="rounded-full border border-border bg-surface/40 px-4 py-1.5 text-sm text-muted-foreground font-mono">{t}</span>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Journey" title={<>Where I'm <span className="text-muted-foreground">learning & building.</span></>}>
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-12">
          {timeline.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>*:first-child]:col-start-2" : ""}`}>
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background`} />
                <div className="font-mono text-xs text-primary mb-2">{t.period}</div>
                <h3 className="text-2xl font-semibold mb-1">{t.title}</h3>
                <div className="text-muted-foreground mb-3">{t.org}</div>
                <p className="text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="04 · Certifications" title={<>Credentials I've <span className="text-primary">earned.</span></>}>
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((c, i) => (
          <motion.a key={c.title + i} href={c.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-surface/60 p-6 overflow-hidden flex items-start gap-4">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-xs text-muted-foreground mb-1">{c.date}</div>
              <h3 className="text-lg font-semibold mb-1 leading-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Graphics() {
  return (
    <Section id="graphics" eyebrow="05 · Graphics" title={<>Design work with <span className="text-primary">intent.</span></>}>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 -mt-8">
        A selection of brand, poster and print pieces — combining clean layout, bold typography and purposeful color.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {graphics.map((g, i) => (
          <motion.figure key={g.src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-border bg-surface/60 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img src={g.src} alt={g.title} loading="lazy" width={1024} height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <figcaption className="p-4">
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-1">{g.tag}</div>
              <div className="text-sm font-semibold">{g.title}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={socials.tiktok} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-primary hover:text-primary transition">
          <TikTokIcon className="w-4 h-4" /> More on TikTok
        </a>
        <a href={socials.youtube} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-primary hover:text-primary transition">
          <Youtube className="w-4 h-4" /> Watch on YouTube
        </a>
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section id="gallery" eyebrow="06 · Gallery" title={<>Moments from the <span className="text-primary">field.</span></>}>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 -mt-8">
        Snapshots from my internship at Cybernet Computer and Security LTD — CCTV installs, network rack wiring, cable testing and hardware diagnostics.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {gallery.map((g, i) => (
          <motion.figure key={g.src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className={`group relative rounded-2xl border border-border bg-surface/60 overflow-hidden ${i % 5 === 0 ? "md:row-span-2 md:col-span-1" : ""}`}>
            <div className={`overflow-hidden ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
              <img src={g.src} alt={g.title} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-widest mb-0.5">{g.tag}</div>
              <div className="text-xs sm:text-sm font-semibold">{g.title}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="07 · Projects" title={<>Things I've <span className="text-primary">built.</span></>}>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 -mt-8">
        Selected repositories from{" "}
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary">
          github.com/kasumbakevin
        </a>{" "}— code, games and web experiments.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-border bg-surface/60 p-6 overflow-hidden flex flex-col">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-lg font-semibold mb-2 leading-tight">{p.name}</h3>
            <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{p.description}</p>
            <div className="mt-5 flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" /> {p.language}
              </span>
              <span className="inline-flex items-center gap-1"><Star className="w-3 h-3" /> repo</span>
              <span className="inline-flex items-center gap-1"><GitFork className="w-3 h-3" /> open</span>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="mt-8">
        <a href={socials.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface hover:border-primary transition">
          <Github className="w-4 h-4" /> See all repositories <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="08 · Services" title={<>What I can help <span className="text-primary">deliver.</span></>}>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 -mt-8">
        Trained through study and internship — services aligned with Cybernet Computer and Security LTD's practice.
      </p>
      <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ backgroundColor: "var(--color-surface-2)" }} className="bg-surface p-8 group cursor-default">
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Goals() {
  const items = [
    { icon: Cpu, tag: "Short-term", title: "Grow through real work.", body: "Gain practical experience through internships and hands-on IT projects." },
    { icon: Sparkles, tag: "Long-term", title: "Become an expert.", body: "Deepen mastery in software development and system administration." },
    { icon: BookOpen, tag: "Vision", title: "Innovate for Uganda.", body: "Contribute to technological innovation locally and across the region." },
  ];
  const hobbies = [
    { icon: Youtube, label: "Creating YouTube shorts" },
    { icon: Cpu, label: "Learning new software tools" },
    { icon: Search, label: "Internet research" },
    { icon: BookOpen, label: "Watching technology videos" },
  ];
  return (
    <Section id="goals" eyebrow="09 · Objectives" title={<>Where I'm <span className="text-primary">heading.</span></>}>
      <div className="grid lg:grid-cols-3 gap-4 mb-16">
        {items.map((g, i) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-3xl border border-border p-8 bg-gradient-to-br from-surface to-surface-2">
            <g.icon className="w-10 h-10 text-primary mb-6" />
            <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">{g.tag}</div>
            <h3 className="text-2xl font-semibold mb-3">{g.title}</h3>
            <p className="text-muted-foreground">{g.body}</p>
          </motion.div>
        ))}
      </div>
      <div>
        <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Off the clock</div>
        <div className="flex flex-wrap gap-3">
          {hobbies.map((h) => (
            <div key={h.label} className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2">
              <h.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-border bg-gradient-to-br from-surface via-surface to-primary/10 p-10 sm:p-16 overflow-hidden glow-ring">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">10 · Contact</div>
            <h2 className="text-4xl sm:text-6xl font-semibold mb-6 leading-tight">
              Let's build <span className="text-primary">something useful.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Open to internships, freelance design and IT projects. Reach out — I reply quickly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a href="mailto:kasumbakevin123@gmail.com" className="flex items-center gap-4 rounded-2xl border border-border bg-background/50 backdrop-blur p-5 hover:border-primary transition group">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Email</div>
                  <div className="font-medium">kasumbakevin123@gmail.com</div>
                </div>
                <ArrowUpRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
              </a>
              <a href="tel:+256751761977" className="flex items-center gap-4 rounded-2xl border border-border bg-background/50 backdrop-blur p-5 hover:border-primary transition group">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Phone</div>
                  <div className="font-medium">+256 751 761 977</div>
                </div>
                <ArrowUpRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <SocialButton href={socials.github} label="GitHub"><Github className="w-4 h-4" /></SocialButton>
              <SocialButton href={socials.youtube} label="YouTube"><Youtube className="w-4 h-4" /></SocialButton>
              <SocialButton href={socials.tiktok} label="TikTok"><TikTokIcon className="w-4 h-4" /></SocialButton>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <MapPin className="w-4 h-4" /> Kampala, Uganda
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    {
      title: "Navigate",
      links: [
        ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
        ["Certifications", "#certifications"],
      ],
    },
    {
      title: "Work",
      links: [
        ["Graphics", "#graphics"], ["Projects", "#projects"], ["Services", "#services"], ["Contact", "#contact"],
      ],
    },
    {
      title: "Elsewhere",
      links: [
        ["GitHub", socials.github], ["YouTube", socials.youtube], ["TikTok", socials.tiktok],
        ["Email", socials.email],
      ],
    },
  ];
  return (
    <footer className="border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] mb-12">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">KK</span>
              Kasumba Kevin
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              IT specialist and graphics designer based in Kampala, Uganda. Currently interning at Cybernet Computer and Security LTD.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialButton href={socials.github} label="GitHub"><Github className="w-4 h-4" /></SocialButton>
              <SocialButton href={socials.youtube} label="YouTube"><Youtube className="w-4 h-4" /></SocialButton>
              <SocialButton href={socials.tiktok} label="TikTok"><TikTokIcon className="w-4 h-4" /></SocialButton>
              <SocialButton href={socials.email} label="Email"><Mail className="w-4 h-4" /></SocialButton>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">{c.title}</div>
              <ul className="space-y-2 text-sm">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                      {label}
                      {href.startsWith("http") && <ArrowUpRight className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>© {year} Kasumba Kevin · Built with care in Kampala.</div>
          <div className="flex items-center gap-2">
            <Music2 className="w-3 h-3" /> Available for freelance & full-time roles.
          </div>
        </div>
      </div>
    </footer>
  );
}
