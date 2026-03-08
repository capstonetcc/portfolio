import { useState, useEffect, useRef } from "react";

const SECTIONS = ["hello", "projects", "contact"];

const PROJECTS = [
  {
    title: "Michael Ho Events",
    subtitle: "Styling & Coordination Platform",
    year: "2025",
    desc: "Dynamic web app for a professional event coordinator — portfolio showcasing event packages and a management system with automated SMS & Email notifications for real-time status updates.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    link: "https://michaelho-esc.com/",
    linkLabel: "Live Site",
  },
  {
    title: "Jeffrey Dental Lab",
    subtitle: "Management System",
    year: "2025",
    desc: "Comprehensive dental laboratory operations platform — case management from start to finish, appointment scheduling for pickups and deliveries, and real-time delivery tracking with dedicated rider logistics.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    link: "https://www.jeffreydentallab.com/",
    linkLabel: "Live Site",
  },
  {
    title: "Public Market Stall Renting",
    subtitle: "Full-Stack MERN Application",
    year: "2024",
    desc: "Streamlined stall, vendor, and rental payment management for a local public market. Includes a React Native companion app for on-site payment collection with mobile receipt printing.",
    stack: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
    link: "https://github.com/JayMarPabayo/tagoloanpublicmarketstall",
    linkLabel: "GitHub",
  },
  {
    title: "Cafe Leone HRIS",
    subtitle: "Employee Management System",
    year: "2024",
    desc: "Laravel application for managing employee schedules and leave requests in a restaurant. Features schedule exchange requests between colleagues and an admin portal for approvals.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    link: "https://github.com/JayMarPabayo/hris-app",
    linkLabel: "GitHub",
  },
  {
    title: "Financial Assistance DMS",
    subtitle: "Document Management System",
    year: "2024",
    desc: "Streamlined application process for various assistance types — burial, medical billing, and more. Online document submission with email updates and staff verification portal.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    link: "https://github.com/JayMarPabayo/financial-assistance-dms",
    linkLabel: "GitHub",
  },
  {
    title: "Wādoru",
    subtitle: "Anime Guessing Game",
    year: "2023",
    desc: "React-based anime guessing game inspired by NBA Poeltl. Fetches titles from the MyAnimeList API with Framer Motion animations and Firebase backend ensuring global synchronization.",
    stack: ["React", "Firebase", "Framer Motion", "Tailwind"],
    link: "https://anime-wadoru.web.app",
    linkLabel: "Play",
  },
];

const TECH = [
  { name: "React", cat: "frontend" },
  { name: "Tailwind CSS", cat: "frontend" },
  { name: "Laravel", cat: "backend" },
  { name: "PHP", cat: "backend" },
  { name: "Node.js", cat: "backend" },
  { name: "Express", cat: "backend" },
  { name: "MongoDB", cat: "database" },
  { name: "MySQL", cat: "database" },
  { name: "Firebase", cat: "database" },
  { name: "SAP ERP", cat: "tools" },
  { name: "Figma", cat: "tools" },
  { name: "Photoshop", cat: "tools" },
  { name: "Git", cat: "tools" },
];

const LINKS = [
  { name: "GitHub", url: "https://github.com/JayMarPabayo" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jay-mar-pabayo-072312104/" },
  { name: "Upwork", url: "https://www.upwork.com/freelancers/~0157212890211f4c38" },
  { name: "Freelancer", url: "https://www.freelancer.com/u/greensparks17" },
  { name: "OnlineJobs.ph", url: "https://www.onlinejobs.ph/jobseekers/info/2056208" },
];

// Intersection observer hook
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, isVisible] = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(48px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        {/* Top separator */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "32px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr auto",
            gap: "32px",
            alignItems: "start",
            padding: "0 0 40px 0",
            cursor: "pointer",
          }}
        >
          {/* Year */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
              fontSize: "13px",
              color: hovered ? "#5eead4" : "rgba(255,255,255,0.3)",
              letterSpacing: "0.05em",
              paddingTop: "6px",
              transition: "color 0.4s ease",
            }}
          >
            {project.year}
          </span>

          {/* Content */}
          <div>
            <h3
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
                transition: "color 0.4s ease",
                lineHeight: 1.2,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: hovered ? "#5eead4" : "rgba(255,255,255,0.35)",
                marginTop: "4px",
                fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                fontWeight: 400,
                letterSpacing: "0.02em",
                transition: "color 0.4s ease",
              }}
            >
              {project.subtitle}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.45)",
                marginTop: "12px",
                lineHeight: 1.65,
                maxWidth: "560px",
              }}
            >
              {project.desc}
            </p>

            {/* Stack pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
              {project.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: hovered ? "rgba(94,234,212,0.08)" : "rgba(255,255,255,0.04)",
                    color: hovered ? "#5eead4" : "rgba(255,255,255,0.35)",
                    border: `1px solid ${hovered ? "rgba(94,234,212,0.15)" : "rgba(255,255,255,0.06)"}`,
                    letterSpacing: "0.04em",
                    transition: "all 0.4s ease",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              paddingTop: "6px",
              transform: hovered ? "translate(4px, -4px)" : "translate(0, 0)",
              transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={hovered ? "#5eead4" : "rgba(255,255,255,0.2)"}
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transition: "stroke 0.4s ease" }}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hello");
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = SECTIONS.map((s) => document.getElementById(s));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top < 300) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0b",
        color: "rgba(255,255,255,0.8)",
        fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Ambient gradient blob that follows mouse subtly */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(94,234,212,0.03) 0%, transparent 70%)",
            left: mousePos.x - 400,
            top: mousePos.y - 400,
            transition: "left 1.2s ease-out, top 1.2s ease-out",
          }}
        />
      </div>

      {/* Noise overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.025,
          pointerEvents: "none",
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* NAV — fixed left side */}
      <nav
        style={{
          position: "fixed",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "4px 0",
              group: true,
            }}
          >
            <div
              style={{
                width: activeSection === s ? "32px" : "16px",
                height: "1px",
                background: activeSection === s ? "#5eead4" : "rgba(255,255,255,0.15)",
                transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: activeSection === s ? "#5eead4" : "rgba(255,255,255,0.2)",
                transition: "color 0.5s ease",
              }}
            >
              {s}
            </span>
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 80px 0 160px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* ============ HERO / HELLO ============ */}
        <section
          id="hello"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "60px",
          }}
        >
          {/* Top bar */}
          <FadeIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "80px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#fff",
                }}
              >
                Jay <span style={{ color: "#5eead4" }}>M</span>.
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.05em",
                }}
              >
                {time.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Asia/Manila",
                })}{" "}
                PHT
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: "#5eead4",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Full-Stack Developer & SAP Admin
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              Building digital
              <br />
              products that{" "}
              <em style={{ fontStyle: "italic", color: "#5eead4" }}>work</em>.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "480px",
                marginTop: "32px",
              }}
            >
              I'm Jay — a Filipino developer and SAP admin crafting web
              applications with Laravel, React, and the MERN stack. I turn
              complex business logic into clean, functional software.
            </p>
          </FadeIn>

          {/* Tech grid */}
          <FadeIn delay={0.5}>
            <div style={{ marginTop: "64px" }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.2)",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Technologies
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {TECH.map((t, i) => (
                  <span
                    key={t.name}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      padding: "6px 14px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.4)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={0.7}>
            <div
              style={{
                marginTop: "80px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "1px",
                  height: "48px",
                  background: "linear-gradient(to bottom, rgba(94,234,212,0.4), transparent)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.15)",
                  textTransform: "uppercase",
                }}
              >
                Scroll
              </span>
            </div>
          </FadeIn>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
          <FadeIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "64px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                Selected Work
              </h2>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                {PROJECTS.length} projects
              </span>
            </div>
          </FadeIn>

          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" style={{ paddingTop: "80px", paddingBottom: "160px" }}>
          <FadeIn>
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                marginBottom: "80px",
              }}
            />
          </FadeIn>

          <FadeIn>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Get in Touch
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#fff",
                lineHeight: 1.15,
              }}
            >
              Let's build something
              <br />
              <em style={{ fontStyle: "italic", color: "#5eead4" }}>together</em>.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Email */}
              <a
                href="mailto:jaymarpabayo@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5eead4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                jaymarpabayo@gmail.com
              </a>

              {/* Phone */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "16px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +63 915 279 6976
              </div>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "16px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Philippines
              </div>
            </div>
          </FadeIn>

          {/* Social links */}
          <FadeIn delay={0.35}>
            <div style={{ marginTop: "64px" }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.15)",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Elsewhere
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {LINKS.map((l) => (
                  <a
                    key={l.name}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      padding: "8px 16px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      transition: "all 0.4s ease",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(94,234,212,0.3)";
                      e.currentTarget.style.color = "#5eead4";
                      e.currentTarget.style.background = "rgba(94,234,212,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {l.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Footer */}
          <FadeIn delay={0.5}>
            <div
              style={{
                marginTop: "120px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.04)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                Jay <span style={{ color: "rgba(94,234,212,0.4)" }}>M</span>.
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.12)",
                  letterSpacing: "0.1em",
                }}
              >
                © {new Date().getFullYear()}
              </span>
            </div>
          </FadeIn>
        </section>
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(94,234,212,0.2); color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          nav { display: none !important; }
          section > div { padding: 0 !important; }
          div[style*="maxWidth: 900px"] {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
