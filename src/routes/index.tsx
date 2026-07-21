import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Mail, Phone, MapPin, ArrowUpRight, Code2, Palette, Network,
  Database, Server, Shield, Cpu, Sparkles, GraduationCap,
  Youtube, BookOpen, Search, Github, Linkedin, Menu, X, Award,
} from "lucide-react";
import portraitAsset from "@/assets/kevin-portrait.jpg.asset.json";
import ciscoCert from "@/assets/cert-cisco.pdf.asset.json";
import bmCert from "@/assets/cert-brightermonday.pdf.asset.json";

const certifications = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    date: "18 Mar 2025",
    url: ciscoCert.url,
  },
  {
    title: "Soft Skills Certificate",
    issuer: "BrighterMonday Uganda · Mastercard Foundation",
    date: "16 Apr 2026",
    url: bmCert.url,
  },
  {
    title: "Hikvision Certification",
    issuer: "Hikvision E-Learning",
    date: "Completed",
    url: "https://elearning-assets.hikvision.com/image/784a3a90-1007-4af8-b1c5-2aeb53495000.pdf",
  },
  {
    title: "Hikvision Certification",
    issuer: "Hikvision E-Learning",
    date: "Completed",
    url: "https://elearning-assets.hikvision.com/image/5aa4cf4f-6e6f-4843-a0c8-cfe5ca238d33.pdf",
  },
];

export const Route = createFileRoute("/")({
  component: Portfolio,
});

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
  {
    period: "2024 — Present",
    title: "IT & Security Intern",
    org: "Cybernet Computer and Security LTD",
    body: "Practical exposure to system administration, networking, and IT security operations. Supporting real client environments while sharpening technical craft.",
  },
  {
    period: "In progress",
    title: "Bachelor of Information Technology",
    org: "Muteesa I Royal University, Uganda",
    body: "Building a rigorous foundation in programming, databases, networks and modern IT systems.",
  },
  {
    period: "Ongoing",
    title: "Online Certifications",
    org: "Self-directed learning",
    body: "Multiple certifications strengthening technical and professional skills across the IT stack.",
  },
];

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
    ["About", "about"], ["Skills", "skills"], ["Experience", "experience"],
    ["Services", "services"], ["Contact", "contact"],
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
            <a key={id} href={`#${id}`} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({
  heroRef, y, opacity,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
  y: any; opacity: any;
}) {
  return (
    <section id="top" ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs font-mono text-muted-foreground mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities · Kampala, Uganda
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]"
          >
            Kasumba <span className="text-primary">Kevin.</span>
            <br />
            <span className="text-muted-foreground">IT specialist &</span>
            <br />
            graphics designer.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            IT graduate building practical systems, clean interfaces and secure
            networks — currently interning at{" "}
            <span className="text-foreground font-medium">Cybernet Computer and Security LTD</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition glow-ring">
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-surface transition">
              View experience
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-muted-foreground"
          >
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />kasumbakevin123@gmail.com</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />+256 751 761 977</span>
          </motion.div>
        </div>
        <HeroCard />
      </motion.div>
    </section>
  );
}

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative aspect-[4/5] rounded-3xl border border-border bg-surface/80 backdrop-blur overflow-hidden glow-ring"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-xs">
        <span className="text-muted-foreground">~/portfolio</span>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50"
        >
          <img
            src={portraitAsset.url}
            alt="Kasumba Kevin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 font-mono text-xs space-y-1.5">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
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
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="lg:col-span-2 text-xl leading-relaxed text-muted-foreground"
        >
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
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface/50 px-4 py-3"
            >
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
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-border bg-surface/60 p-6 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <s.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-1">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.detail}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {["Microsoft Word", "Excel", "PowerPoint", "Internet Research", "IT Support", "Brand Design"].map((t) => (
          <span key={t} className="rounded-full border border-border bg-surface/40 px-4 py-1.5 text-sm text-muted-foreground font-mono">
            {t}
          </span>
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
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>*:first-child]:col-start-2" : ""}`}
            >
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
          <motion.a
            key={c.title + i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-surface/60 p-6 overflow-hidden flex items-start gap-4"
          >
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

function Services() {
  return (
    <Section id="services" eyebrow="05 · Services" title={<>What I can help <span className="text-primary">deliver.</span></>}>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10 -mt-8">
        Trained through study and internship — services aligned with Cybernet Computer and Security LTD's practice.
      </p>
      <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ backgroundColor: "var(--color-surface-2)" }}
            className="bg-surface p-8 group cursor-default"
          >
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
    <Section id="goals" eyebrow="06 · Objectives" title={<>Where I'm <span className="text-primary">heading.</span></>}>
      <div className="grid lg:grid-cols-3 gap-4 mb-16">
        {items.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-3xl border border-border p-8 bg-gradient-to-br from-surface to-surface-2"
          >
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
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-border bg-gradient-to-br from-surface via-surface to-primary/10 p-10 sm:p-16 overflow-hidden glow-ring"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">06 · Contact</div>
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
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kasumba Kevin · Built with care in Kampala
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="mailto:kasumbakevin123@gmail.com" className="hover:text-primary transition"><Mail className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition"><Github className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
