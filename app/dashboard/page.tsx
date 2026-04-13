"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconRobot, IconFileReport, IconStethoscope,
  IconUser, IconShieldLock, IconBell,
  IconDownload, IconArrowRight, IconActivity,
  IconPill, IconHeartbeat, IconLogout
} from "@tabler/icons-react";

const recentChats = [
  { id: 1, title: "Headache and fever symptoms", date: "Today, 2:30 PM", status: "Completed" },
  { id: 2, title: "Back pain consultation", date: "Yesterday, 11:00 AM", status: "Completed" },
  { id: 3, title: "Skin rash identification", date: "2 days ago", status: "Completed" },
];

const quickActions = [
  { icon: IconRobot, label: "Ask AI Assistant", href: "/chat", color: "#00E676" },
  { icon: IconStethoscope, label: "Find a Doctor", href: "/doctors", color: "#00BCD4" },
  { icon: IconFileReport, label: "My Reports", href: "/reports", color: "#00E676" },
  { icon: IconPill, label: "Medicine Info", href: "/chat", color: "#00BCD4" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "reports">("overview");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0B0F0C",
      paddingTop: 80,
      position: "relative"
    }}>

      {/* Grid Background */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,230,118,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      }}/>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>

        {/* ── TOP HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16
          }}>

          <div>
            <p style={{ fontSize: 12, color: "#4a6a4a", letterSpacing: "0.08em", marginBottom: 4 }}>
              Welcome back 👋
            </p>
            <h1 style={{
              fontSize: 28, fontWeight: 900,
              letterSpacing: "-0.02em", color: "#E8F5E9"
            }}>
              Sohom's Dashboard
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button style={{
              width: 38, height: 38, borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer"
            }}>
              <IconBell size={16} color="#4a6a4a"/>
            </button>
            <Link href="/profile" style={{
              width: 38, height: 38, borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer",
              textDecoration: "none"
            }}>
              <IconUser size={16} color="#4a6a4a"/>
            </Link>
            <button style={{
              width: 38, height: 38, borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer"
            }}>
              <IconLogout size={16} color="#4a6a4a"/>
            </button>
          </div>
        </motion.div>

        {/* ── HEALTH ID CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: "linear-gradient(135deg, rgba(0,230,118,0.08), rgba(0,188,212,0.04))",
            border: "1px solid rgba(0,230,118,0.15)",
            borderRadius: 24,
            padding: 28,
            marginBottom: 24,
            position: "relative",
            overflow: "hidden"
          }}>

          {/* Shine */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.3), transparent)"
          }}/>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", gap: 16
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Avatar */}
              <div style={{
                width: 60, height: 60, borderRadius: 18,
                background: "linear-gradient(135deg, #00E676, #00C853)",
                display: "flex", alignItems: "center",
                justifyContent: "center",
                fontSize: 22, fontWeight: 900, color: "#000"
              }}>S</div>

              <div>
                <p style={{ fontSize: 10, color: "#4a6a4a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>
                  Health ID
                </p>
                <p style={{ fontSize: 18, fontWeight: 900, color: "#E8F5E9", letterSpacing: "-0.01em" }}>
                  MCR-2024-00142
                </p>
                <p style={{ fontSize: 13, color: "#4a6a4a", marginTop: 2 }}>
                  Sohom • Patient
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "6px 12px", borderRadius: 8,
                background: "rgba(0,230,118,0.08)",
                border: "1px solid rgba(0,230,118,0.15)"
              }}>
                <IconShieldLock size={13} color="#00E676"/>
                <span style={{ fontSize: 11, color: "#00E676", fontWeight: 600 }}>Verified</span>
              </div>
              <button style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "6px 12px", borderRadius: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer", color: "#7A8F85",
                fontSize: 11, fontWeight: 600
              }}>
                <IconDownload size={13}/>
                Download ID
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 12, marginTop: 24,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.05)"
          }}>
            {[
              { icon: IconActivity, label: "Consultations", value: "12" },
              { icon: IconFileReport, label: "Reports", value: "8" },
              { icon: IconHeartbeat, label: "Health Score", value: "Good" },
              { icon: IconPill, label: "Medicines Tracked", value: "3" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <stat.icon size={18} color="#4a6a4a" style={{ marginBottom: 6 }}/>
                <p style={{ fontSize: 18, fontWeight: 900, color: "#E8F5E9" }}>{stat.value}</p>
                <p style={{ fontSize: 11, color: "#4a6a4a" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── QUICK ACTIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: 24 }}>

          <p style={{
            fontSize: 11, color: "#4a6a4a",
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontWeight: 600, marginBottom: 14
          }}>Quick Actions</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12
          }}>
            {quickActions.map((action, i) => (
              <motion.div key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}>
                <Link href={action.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    padding: "20px 16px",
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${action.color === "#00E676" ? "rgba(0,230,118,0.1)" : "rgba(0,188,212,0.1)"}`,
                    borderRadius: 16,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = action.color === "#00E676" ? "rgba(0,230,118,0.3)" : "rgba(0,188,212,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${action.color === "#00E676" ? "rgba(0,230,118,0.08)" : "rgba(0,188,212,0.08)"}`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = action.color === "#00E676" ? "rgba(0,230,118,0.1)" : "rgba(0,188,212,0.1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}>
                    <action.icon size={24} color={action.color} style={{ marginBottom: 10 }}/>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#7A8F85" }}>
                      {action.label}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>

          {/* Tab Buttons */}
          <div style={{
            display: "flex", gap: 4,
            marginBottom: 20, padding: 4,
            background: "rgba(255,255,255,0.02)",
            borderRadius: 12, width: "fit-content",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            {[
              { key: "overview", label: "Overview" },
              { key: "history", label: "Chat History" },
              { key: "reports", label: "Reports" }
            ].map(tab => (
              <button key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                style={{
                  padding: "8px 18px", borderRadius: 9,
                  border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 700,
                  transition: "all 0.3s ease", fontFamily: "inherit",
                  background: activeTab === tab.key
                    ? "linear-gradient(135deg, #00E676, #00C853)"
                    : "transparent",
                  color: activeTab === tab.key ? "#000" : "#4a6a4a",
                  boxShadow: activeTab === tab.key
                    ? "0 2px 8px rgba(0,230,118,0.2)" : "none"
                }}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}>
              <div style={{
                padding: 28,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20
              }}>
                <p style={{ fontSize: 13, color: "#4a6a4a", lineHeight: 1.8 }}>
                  👋 Welcome to your MyCare+ dashboard! Here you can manage your health profile,
                  chat with our AI medical assistant, view your consultation history,
                  and download your health reports.
                </p>
                <div style={{ marginTop: 20 }}>
                  <Link href="/chat" style={{ textDecoration: "none" }}>
                    <button style={{
                      padding: "12px 24px",
                      background: "linear-gradient(135deg, #00E676, #00C853)",
                      color: "#000", fontWeight: 800,
                      fontSize: 13, borderRadius: 10,
                      border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center",
                      gap: 8, fontFamily: "inherit"
                    }}>
                      Start AI Consultation
                      <IconArrowRight size={14}/>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* History Tab */}
          {activeTab === "history" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {recentChats.map((chat) => (
                  <div key={chat.id} style={{
                    padding: "18px 20px",
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,230,118,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: "rgba(0,230,118,0.08)",
                        border: "1px solid rgba(0,230,118,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <IconRobot size={16} color="#00E676"/>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#E8F5E9", margin: 0 }}>
                          {chat.title}
                        </p>
                        <p style={{ fontSize: 11, color: "#4a6a4a", margin: 0, marginTop: 3 }}>
                          {chat.date}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        padding: "3px 8px", borderRadius: 6,
                        background: "rgba(0,230,118,0.08)",
                        color: "#00E676",
                        border: "1px solid rgba(0,230,118,0.15)"
                      }}>
                        {chat.status}
                      </span>
                      <IconArrowRight size={14} color="#4a6a4a"/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}>
              <div style={{
                padding: 40,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                textAlign: "center"
              }}>
                <IconFileReport size={40} color="#2a4a2a" style={{ marginBottom: 16 }}/>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#4a6a4a", marginBottom: 8 }}>
                  No reports yet
                </p>
                <p style={{ fontSize: 13, color: "#2a4a2a", marginBottom: 20 }}>
                  Your consultation reports will appear here
                </p>
                <Link href="/chat" style={{ textDecoration: "none" }}>
                  <button style={{
                    padding: "11px 22px",
                    background: "linear-gradient(135deg, #00E676, #00C853)",
                    color: "#000", fontWeight: 800,
                    fontSize: 13, borderRadius: 10,
                    border: "none", cursor: "pointer",
                    fontFamily: "inherit"
                  }}>
                    Start First Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          )}

        </motion.div>

      </div>
    </main>
  );
}