"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconRobot, IconStethoscope, IconFileReport, IconShieldLock, IconWifi, IconMoon, IconDownload, IconArrowRight } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  { icon: IconRobot, title: "AI Medical Assistant", desc: "Chat naturally to understand symptoms, get medication info and first aid guidance instantly.", color: "#00E676" },
  { icon: IconStethoscope, title: "Doctor Directory", desc: "Browse and connect with verified independent doctors for professional consultation.", color: "#00BCD4" },
  { icon: IconFileReport, title: "Health Reports", desc: "Every consultation saved. Download your complete health history as PDF anytime.", color: "#00E676" },
  { icon: IconShieldLock, title: "Personal Health ID", desc: "Your encrypted health profile — history, reports and records all secure in one place.", color: "#00BCD4" },
  { icon: IconWifi, title: "Works Offline", desc: "No internet? Access symptom checker, first aid and medicine info without connection.", color: "#00E676" },
  { icon: IconMoon, title: "Dark & Light Mode", desc: "Fully optimised for both modes — comfortable viewing in any lighting condition.", color: "#00BCD4" },
];

const MedicalCross = () => (
  <svg width="48" height="48" viewBox="0 0 44 44" fill="none">
    <rect x="19" y="4" width="6" height="36" rx="3" fill="#00E676"/>
    <rect x="4" y="19" width="36" height="6" rx="3" fill="#00E676"/>
    <circle cx="22" cy="22" r="20" stroke="#00E676" strokeWidth="0.8" strokeOpacity="0.25"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F0C] overflow-hidden">

      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,230,118,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }}/>

      {/* Top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(0,230,118,0.06) 0%, transparent 70%)"
      }}/>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "160px 24px 100px",
        maxWidth: 860,
        margin: "0 auto",
        position: "relative"
      }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <Badge variant="outline" style={{
            background: "rgba(0,230,118,0.06)",
            border: "1px solid rgba(0,230,118,0.2)",
            color: "#00E676",
            fontSize: 11,
            letterSpacing: "0.12em",
            padding: "6px 16px",
            borderRadius: 100,
            marginBottom: 40,
            display: "inline-flex",
            alignItems: "center",
            gap: 8
          }}>
            <span style={{
              width: 6, height: 6,
              borderRadius: "50%",
              background: "#00E676",
              display: "inline-block",
              animation: "pulse 2s infinite"
            }}/>
            AI POWERED MEDICAL ASSISTANT
          </Badge>
        </motion.div>

        {/* Floating Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            marginBottom: 40,
            animation: "float 4s ease-in-out infinite"
          }}>
          <div style={{
            width: 80, height: 80,
            borderRadius: 22,
            background: "linear-gradient(135deg, rgba(0,230,118,0.1), rgba(0,188,212,0.05))",
            border: "1px solid rgba(0,230,118,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto"
          }}>
            <MedicalCross />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 68px)",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            <span style={{
              background: "linear-gradient(135deg, #ffffff 30%, #4a6a4a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block"
            }}>
              Healthcare that
            </span>
            <span style={{
              background: "linear-gradient(90deg, #00E676, #69f0ae, #00bcd4, #00E676)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
              display: "block"
            }}>
              understands you
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            color: "#7A8F85",
            fontSize: 18,
            lineHeight: 1.75,
            marginBottom: 48,
            fontWeight: 300,
            maxWidth: 560,
            margin: "0 auto 48px"
          }}>
          MyCare+ combines AI intelligence with medical expertise to help
          you understand symptoms, find medications, and connect with
          real doctors — online and offline.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 56
          }}>
          <Button asChild style={{
            background: "linear-gradient(135deg, #00E676, #00C853)",
            color: "#000",
            fontWeight: 800,
            fontSize: 14,
            padding: "14px 32px",
            borderRadius: 12,
            border: "none",
            height: "auto",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(0,230,118,0.2)"
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,230,118,0.5)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,230,118,0.2)"}>
            <Link href="/register">
              Start for Free <IconArrowRight size={16} style={{ marginLeft: 6 }}/>
            </Link>
          </Button>

          <Button asChild variant="outline" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#E8F5E9",
            fontWeight: 600,
            fontSize: 14,
            padding: "14px 32px",
            borderRadius: 12,
            height: "auto",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,230,118,0.3)";
            (e.currentTarget as HTMLElement).style.color = "#00E676";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.color = "#E8F5E9";
          }}>
            <Link href="/chat">
              Try AI Assistant
            </Link>
          </Button>
        </motion.div>

        {/* APK Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <p style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#2a4a2a"
          }}>Also available on Android</p>
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 22px",
            borderRadius: 14,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: "#E8F5E9"
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,230,118,0.2)";
            (e.currentTarget as HTMLElement).style.background = "rgba(0,230,118,0.04)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
          }}>
            <IconDownload size={20} color="#00E676"/>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2a4a2a", fontWeight: 600, margin: 0 }}>Download</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>Android APK</p>
            </div>
          </button>
        </motion.div>

      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.1), transparent)" }}/>

      {/* ── PILLS ── */}
      <section style={{ padding: "52px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, maxWidth: 900, margin: "0 auto" }}>
          {[
            { icon: "🤖", label: "AI Powered" },
            { icon: "📴", label: "Works Offline" },
            { icon: "🔒", label: "Fully Secure" },
            { icon: "👨‍⚕️", label: "Real Doctors" },
            { icon: "📋", label: "Downloadable Reports" },
          ].map((pill) => (
            <div key={pill.label} style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontSize: 13,
              color: "#7A8F85"
            }}>
              <span style={{ fontSize: 15 }}>{pill.icon}</span>
              {pill.label}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.1), transparent)" }}/>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "110px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

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
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16
            }}>
              <span style={{
                background: "linear-gradient(135deg, #ffffff 30%, #4a6a4a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>Built for real </span>
              <span style={{
                background: "linear-gradient(135deg, #00E676, #00BCD4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>medical needs</span>
            </h2>
            <p style={{ color: "#7A8F85", fontSize: 15, maxWidth: 420, margin: "0 auto", lineHeight: 1.75 }}>
              Every feature designed with one goal — making healthcare accessible to everyone
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20
          }}>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${feature.color === "#00E676" ? "rgba(0,230,118,0.1)" : "rgba(0,188,212,0.1)"}`,
                  borderRadius: 20,
                  padding: 28,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  height: "100%"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.borderColor = feature.color === "#00E676" ? "rgba(0,230,118,0.25)" : "rgba(0,188,212,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${feature.color === "#00E676" ? "rgba(0,230,118,0.08)" : "rgba(0,188,212,0.08)"}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = feature.color === "#00E676" ? "rgba(0,230,118,0.1)" : "rgba(0,188,212,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}>
                  <feature.icon size={36} color={feature.color} style={{ marginBottom: 20 }}/>
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: 17,
                    marginBottom: 12,
                    color: "#E8F5E9",
                    letterSpacing: "-0.01em"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "#7A8F85" }}>
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.1), transparent)" }}/>

      {/* ── CARE+ CTA ── */}
      <section style={{ padding: "110px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
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
              gap: 2,
              padding: "20px 52px",
              borderRadius: 24,
              background: "linear-gradient(135deg, rgba(0,230,118,0.07), rgba(0,188,212,0.03))",
              border: "1px solid rgba(0,230,118,0.15)",
              marginBottom: 24
            }}>
              <span style={{
                fontSize: 56,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 1
              }}>Care</span>
              <span style={{
                fontSize: 56,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                background: "linear-gradient(135deg, #00E676, #00BCD4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>+</span>
            </div>

            <p style={{
              color: "#7A8F85",
              fontSize: 16,
              marginBottom: 44,
              lineHeight: 1.75,
              fontWeight: 300
            }}>
              Your AI-powered health companion —
              always available, always accurate
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button asChild style={{
                background: "linear-gradient(135deg, #00E676, #00C853)",
                color: "#000",
                fontWeight: 800,
                fontSize: 14,
                padding: "14px 32px",
                borderRadius: 12,
                border: "none",
                height: "auto",
                boxShadow: "0 4px 20px rgba(0,230,118,0.2)",
                transition: "all 0.3s ease"
              }}>
                <Link href="/register">Create Free Account →</Link>
              </Button>

              <Button asChild variant="outline" style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#E8F5E9",
                fontWeight: 600,
                fontSize: 14,
                padding: "14px 32px",
                borderRadius: 12,
                height: "auto",
                transition: "all 0.3s ease"
              }}>
                <Link href="/doctors">Register as Doctor</Link>
              </Button>
            </div>

          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>

    </main>
  );
}