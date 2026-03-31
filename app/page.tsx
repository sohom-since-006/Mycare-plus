"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const MedicalCross = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <rect x="19" y="4" width="6" height="36" rx="3" fill="#00E676"/>
    <rect x="4" y="19" width="36" height="6" rx="3" fill="#00E676"/>
    <circle cx="22" cy="22" r="20" stroke="#00E676" strokeWidth="1" strokeOpacity="0.2"/>
  </svg>
);

const features = [
  { icon: "🤖", title: "AI Medical Assistant", desc: "Chat naturally to understand symptoms, get medication info and first aid guidance instantly.", teal: false },
  { icon: "👨‍⚕️", title: "Doctor Directory", desc: "Browse and connect with verified independent doctors for professional consultation.", teal: true },
  { icon: "📋", title: "Health Reports", desc: "Every consultation saved. Download your complete health history as PDF anytime.", teal: false },
  { icon: "🔒", title: "Personal Health ID", desc: "Your encrypted health profile — history, reports and records all secure in one place.", teal: true },
  { icon: "📴", title: "Works Offline", desc: "No internet? Access symptom checker, first aid and medicine info without connection.", teal: false },
  { icon: "🌙", title: "Dark & Light Mode", desc: "Fully optimised for both modes — comfortable viewing in any lighting condition.", teal: true },
];

const pills = [
  { icon: "🤖", label: "AI Powered" },
  { icon: "📴", label: "Works Offline" },
  { icon: "🔒", label: "Fully Secure" },
  { icon: "👨‍⚕️", label: "Real Doctors" },
  { icon: "📋", label: "Downloadable Reports" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F0C] overflow-hidden">

      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700, height: 350,
          background: "radial-gradient(ellipse, rgba(0,230,118,0.06) 0%, transparent 70%)"
        }} />

      {/* ── HERO ── */}
      <section style={{
        textAlign: "center",
        padding: "160px 20px 100px",
        maxWidth: 900,
        margin: "0 auto",
        position: "relative"
      }}>

        {/* Badge + Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}>

          <div style={{
            display: "inline-block",
            padding: "7px 16px",
            borderRadius: 100,
            background: "rgba(0,230,118,0.07)",
            border: "1px solid rgba(0,230,118,0.18)",
            color: "#00E676",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 28
          }}>
            <span style={{
              display: "inline-block",
              width: 6, height: 6,
              borderRadius: "50%",
              background: "#00E676",
              marginRight: 8,
              verticalAlign: "middle",
              animation: "pulse-dot 2s infinite"
            }} />
            AI Powered Medical Assistant
          </div>

          <div style={{ marginTop: 8 }}>
            <div style={{
              width: 72, height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, rgba(0,230,118,0.1), rgba(0,188,212,0.05))",
              border: "1px solid rgba(0,230,118,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto"
            }}>
              <MedicalCross size={40} />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            color: "#E8F5E9"
          }}>
          <span style={{
            background: "linear-gradient(135deg, #ffffff 30%, #7A8F85)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Healthcare that
          </span>
          <br />
          <span style={{
            background: "linear-gradient(90deg, #00E676, #69f0ae, #00bcd4, #00E676)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite"
          }}>
            understands you
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            color: "#7A8F85",
            fontSize: 18,
            lineHeight: 1.7,
            marginBottom: 48,
            fontWeight: 300,
            maxWidth: 580,
            margin: "0 auto 48px"
          }}>
          MyCare+ combines AI intelligence with medical expertise to help you
          understand symptoms, find medications, and connect with real doctors.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 60
          }}>
          <Link href="/register" className="btn-primary">
            Start for Free →
          </Link>
          <Link href="/chat" className="btn-ghost">
            Try AI Assistant
          </Link>
        </motion.div>

        {/* APK Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <p style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#2a4a2a"
          }}>
            Also available on Android
          </p>
          <button className="glass-card" style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 20px",
            cursor: "pointer"
          }}>
            <span style={{ fontSize: 20 }}>📱</span>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2a4a2a", fontWeight: 600 }}>Download</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Android APK</p>
            </div>
          </button>
        </motion.div>

      </section>

      {/* ── DIVIDER ── */}
      <div className="divider" />

      {/* ── PILLS SECTION ── */}
      <section style={{ padding: "48px 20px" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {pills.map((pill) => (
              <div key={pill.label} className="glass-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 100,
                  fontSize: 12,
                  color: "#7A8F85"
                }}>
                <span style={{ fontSize: 14 }}>{pill.icon}</span>
                {pill.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px 20px" }}>
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#00E676",
              marginBottom: 16
            }}>Features</p>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: 16,
              lineHeight: 1.1
            }}>
              <span className="gradient-text-white">Built for real</span>
              <br />
              <span className="gradient-text-green">medical needs</span>
            </h2>
            <p style={{ color: "#7A8F85", fontSize: 15, maxWidth: 420, margin: "0 auto", lineHeight: 1.7 }}>
              Every feature designed with one goal — making healthcare accessible to everyone, everywhere
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20
          }}>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={feature.teal ? "glass-card-teal" : "glass-card"}
                style={{ padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>{feature.icon}</div>
                <h3 style={{
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 12,
                  color: "#E8F5E9",
                  letterSpacing: "-0.01em"
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#7A8F85" }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <div className="divider" />

      {/* ── CARE+ CTA ── */}
      <section style={{ padding: "100px 20px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <p style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#2a4a2a",
              marginBottom: 32
            }}>Powered by</p>

            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "20px 48px",
              borderRadius: 24,
              background: "linear-gradient(135deg, rgba(0,230,118,0.07), rgba(0,188,212,0.03))",
              border: "1px solid rgba(0,230,118,0.15)",
              marginBottom: 20
            }}>
              <span style={{ fontSize: 52, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}>Care</span>
              <span className="gradient-text-green" style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.04em" }}>+</span>
            </div>

            <p style={{ color: "#7A8F85", fontSize: 15, marginBottom: 40, lineHeight: 1.7 }}>
              Your AI-powered health companion — always available, always accurate
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/register" className="btn-primary">
                Create Free Account →
              </Link>
              <Link href="/doctors" className="btn-ghost">
                Register as Doctor
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}