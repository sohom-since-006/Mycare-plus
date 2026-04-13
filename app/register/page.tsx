"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMail, IconLock, IconEye, IconEyeOff,
  IconUser, IconArrowRight, IconStethoscope,
  IconUpload, IconId, IconCertificate, IconChevronDown
} from "@tabler/icons-react";

const doctorSpecializations = [
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic Surgeon",
  "Pediatrician",
  "Psychiatrist",
  "Gynecologist",
  "Ophthalmologist",
  "ENT Specialist",
  "Urologist",
  "Oncologist",
  "Endocrinologist",
  "Gastroenterologist",
  "Pulmonologist",
  "Rheumatologist",
  "Nephrologist",
  "Dentist",
  "Radiologist",
  "Anesthesiologist",
  "Emergency Medicine",
  "Ayurvedic Doctor",
  "Homeopathic Doctor",
  "Other"
];

const govIdTypes = ["Aadhaar Card", "PAN Card", "Driving Licence", "Voter ID", "Passport"];

const inputStyle = {
  width: "100%",
  padding: "13px 14px 13px 42px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  color: "#E8F5E9",
  fontSize: 14,
  outline: "none",
  transition: "all 0.3s ease",
  fontFamily: "inherit"
};

const labelStyle = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "#7A8F85",
  marginBottom: 8,
  letterSpacing: "0.04em"
} as React.CSSProperties;

const iconStyle = (extra = {}) => ({
  position: "absolute" as const,
  left: 14,
  top: "50%",
  transform: "translateY(-50%)",
  ...extra
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<"patient" | "doctor">("patient");
  const [loading, setLoading] = useState(false);
  const [govIdType, setGovIdType] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [govIdFile, setGovIdFile] = useState<File | null>(null);
  const [certFile, setCertFile] = useState<File | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const FileUpload = ({
    label, icon: Icon, file, onChange, accept, hint
  }: {
    label: string;
    icon: any;
    file: File | null;
    onChange: (f: File) => void;
    accept: string;
    hint: string;
  }) => (
    <div style={{ marginBottom: 14 }}>
      <label style={labelStyle}>{label}</label>
      <label style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "13px 16px",
        background: file ? "rgba(0,230,118,0.05)" : "rgba(255,255,255,0.03)",
        border: `1px dashed ${file ? "rgba(0,230,118,0.35)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 12,
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}>
        <input
          type="file"
          accept={accept}
          style={{ display: "none" }}
          onChange={e => e.target.files?.[0] && onChange(e.target.files[0])}
        />
        <Icon size={18} color={file ? "#00E676" : "#4a6a4a"}/>
        <div>
          <p style={{
            fontSize: 13,
            fontWeight: 600,
            color: file ? "#00E676" : "#7A8F85",
            margin: 0
          }}>
            {file ? file.name : `Upload ${label}`}
          </p>
          <p style={{ fontSize: 11, color: "#2a4a2a", margin: 0, marginTop: 2 }}>
            {hint}
          </p>
        </div>
        {!file && (
          <IconUpload size={14} color="#2a4a2a" style={{ marginLeft: "auto" }}/>
        )}
        {file && (
          <span style={{
            marginLeft: "auto",
            fontSize: 10,
            background: "rgba(0,230,118,0.1)",
            color: "#00E676",
            padding: "3px 8px",
            borderRadius: 6,
            fontWeight: 700
          }}>✓ Uploaded</span>
        )}
      </label>
    </div>
  );

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0B0F0C",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Grid Background */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,230,118,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      }}/>

      {/* Glow */}
      <div style={{
        position: "fixed", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(0,230,118,0.06) 0%, transparent 70%)",
        pointerEvents: "none"
      }}/>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", maxWidth: 460, position: "relative" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center",
            gap: 10, textDecoration: "none"
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg, rgba(0,230,118,0.15), rgba(0,188,212,0.08))",
              border: "1px solid rgba(0,230,118,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 16px rgba(0,230,118,0.15)"
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <defs>
                  <linearGradient id="plusGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00E676"/>
                    <stop offset="100%" stopColor="#00BCD4"/>
                  </linearGradient>
                </defs>
                <rect x="8.5" y="1" width="3" height="18" rx="1.5" fill="url(#plusGrad)"/>
                <rect x="1" y="8.5" width="18" height="3" rx="1.5" fill="url(#plusGrad)"/>
              </svg>
            </div>
            <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em", color: "#fff" }}>
              MyCare
              <span style={{
                background: "linear-gradient(135deg, #00E676, #00BCD4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>+</span>
            </span>
          </Link>
          <p style={{ marginTop: 8, fontSize: 13, color: "#4a6a4a" }}>
            Create your free account
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: "rgba(255,255,255,0.025)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,230,118,0.1)",
          borderRadius: 24, padding: 36,
          position: "relative", overflow: "hidden"
        }}>

          {/* Top shine */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.2), transparent)"
          }}/>

          <h1 style={{
            fontSize: 24, fontWeight: 900,
            letterSpacing: "-0.02em", marginBottom: 6, color: "#E8F5E9"
          }}>
            Get started free
          </h1>
          <p style={{ fontSize: 13, color: "#4a6a4a", marginBottom: 24 }}>
            Join MyCare+ and take control of your health
          </p>

          {/* Account Type Toggle */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 8, marginBottom: 28, padding: 6,
            background: "rgba(255,255,255,0.03)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.06)"
          }}>
            {[
              { type: "patient", label: "Patient", icon: IconUser },
              { type: "doctor", label: "Doctor", icon: IconStethoscope }
            ].map(({ type, label, icon: Icon }) => (
              <button key={type}
                onClick={() => setAccountType(type as "patient" | "doctor")}
                style={{
                  padding: "10px 16px", borderRadius: 10,
                  border: "none", cursor: "pointer",
                  fontSize: 13, fontWeight: 700,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 6,
                  transition: "all 0.3s ease", fontFamily: "inherit",
                  background: accountType === type
                    ? "linear-gradient(135deg, #00E676, #00C853)"
                    : "transparent",
                  color: accountType === type ? "#000" : "#4a6a4a",
                  boxShadow: accountType === type
                    ? "0 4px 12px rgba(0,230,118,0.2)" : "none"
                }}>
                <Icon size={15}/>{label}
              </button>
            ))}
          </div>

          <form onSubmit={handleRegister}>

            {/* Full Name */}
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>FULL NAME</label>
              <div style={{ position: "relative" }}>
                <IconUser size={16} color="#4a6a4a" style={iconStyle()}/>
                <input type="text" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder={accountType === "doctor" ? "Dr. Full Name" : "Full Name"}
                  required style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(0,230,118,0.4)"; e.target.style.background = "rgba(0,230,118,0.04)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>EMAIL ADDRESS</label>
              <div style={{ position: "relative" }}>
                <IconMail size={16} color="#4a6a4a" style={iconStyle()}/>
                <input type="email" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(0,230,118,0.4)"; e.target.style.background = "rgba(0,230,118,0.04)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>PASSWORD</label>
              <div style={{ position: "relative" }}>
                <IconLock size={16} color="#4a6a4a" style={iconStyle()}/>
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="Min. 8 characters"
                  required style={{ ...inputStyle, paddingRight: 44 }}
                  onFocus={e => { e.target.style.borderColor = "rgba(0,230,118,0.4)"; e.target.style.background = "rgba(0,230,118,0.04)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute", right: 14, top: "50%",
                    transform: "translateY(-50%)",
                    background: "none", border: "none",
                    cursor: "pointer", padding: 0, color: "#4a6a4a"
                  }}>
                  {showPassword ? <IconEyeOff size={16}/> : <IconEye size={16}/>}
                </button>
              </div>
            </div>

            {/* ── DOCTOR ONLY FIELDS ── */}
            <AnimatePresence>
              {accountType === "doctor" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}>

                  {/* Divider */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    gap: 10, margin: "20px 0 20px"
                  }}>
                    <div style={{ flex: 1, height: 1, background: "rgba(0,230,118,0.1)" }}/>
                    <span style={{
                      fontSize: 10, color: "#00E676",
                      fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase"
                    }}>Doctor Verification</span>
                    <div style={{ flex: 1, height: 1, background: "rgba(0,230,118,0.1)" }}/>
                  </div>

                  {/* Specialization */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={labelStyle}>SPECIALIZATION</label>
                    <div style={{ position: "relative" }}>
                      <IconStethoscope size={16} color="#4a6a4a" style={iconStyle()}/>
                      <select
                        value={specialization}
                        onChange={e => setSpecialization(e.target.value)}
                        required={accountType === "doctor"}
                        style={{
                          ...inputStyle,
                          paddingRight: 40,
                          appearance: "none",
                          WebkitAppearance: "none",
                          cursor: "pointer"
                        }}
                        onFocus={e => { e.target.style.borderColor = "rgba(0,230,118,0.4)"; e.target.style.background = "rgba(0,230,118,0.04)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}>
                        <option value="" style={{ background: "#0B0F0C" }}>Select your specialization</option>
                        {doctorSpecializations.map(s => (
                          <option key={s} value={s} style={{ background: "#0B0F0C" }}>{s}</option>
                        ))}
                      </select>
                      <IconChevronDown size={14} color="#4a6a4a" style={{
                        position: "absolute", right: 14,
                        top: "50%", transform: "translateY(-50%)",
                        pointerEvents: "none"
                      }}/>
                    </div>
                  </div>

                  {/* Govt ID Type */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={labelStyle}>GOVERNMENT ID TYPE</label>
                    <div style={{ position: "relative" }}>
                      <IconId size={16} color="#4a6a4a" style={iconStyle()}/>
                      <select
                        value={govIdType}
                        onChange={e => setGovIdType(e.target.value)}
                        required={accountType === "doctor"}
                        style={{
                          ...inputStyle,
                          paddingRight: 40,
                          appearance: "none",
                          WebkitAppearance: "none",
                          cursor: "pointer"
                        }}
                        onFocus={e => { e.target.style.borderColor = "rgba(0,230,118,0.4)"; e.target.style.background = "rgba(0,230,118,0.04)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}>
                        <option value="" style={{ background: "#0B0F0C" }}>Select ID type</option>
                        {govIdTypes.map(id => (
                          <option key={id} value={id} style={{ background: "#0B0F0C" }}>{id}</option>
                        ))}
                      </select>
                      <IconChevronDown size={14} color="#4a6a4a" style={{
                        position: "absolute", right: 14,
                        top: "50%", transform: "translateY(-50%)",
                        pointerEvents: "none"
                      }}/>
                    </div>
                  </div>

                  {/* Upload Govt ID */}
                  <FileUpload
                    label="GOVERNMENT ID PROOF"
                    icon={IconId}
                    file={govIdFile}
                    onChange={(file) => {
                      if (file.size > 200 * 1024) {alert("File size must be under 200KB! Please compress your file.");
                         return;
                        }
                         setGovIdFile(file);
                        }}
                    accept="image/*,.pdf"
                    hint="JPG or PDF — Max 200 KB"
                  />

                  {/* Upload Certificate */}
                  <FileUpload
                    label="MEDICAL CERTIFICATE / DEGREE"
                    icon={IconCertificate}
                    file={certFile}
                    onChange={(file) => {
                      if (file.size > 200 * 1024) {
                      alert("File size must be under 200KB! Please compress your file.");
                      return;
                    }
                    setCertFile(file);
                  }}
                    accept="image/*,.pdf"
                    hint="Medical degree or registration certificate"
                  />

                  {/* Verification Note */}
                  <div style={{
                    padding: "12px 16px",
                    background: "rgba(0,230,118,0.04)",
                    border: "1px solid rgba(0,230,118,0.12)",
                    borderRadius: 10,
                    marginBottom: 20
                  }}>
                    <p style={{ fontSize: 12, color: "#4a6a4a", lineHeight: 1.6, margin: 0 }}>
                      🔒 Your documents are encrypted and reviewed within <span style={{ color: "#00E676", fontWeight: 600 }}>24–48 hours</span>. Your profile will be visible to patients after verification.
                    </p>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button type="submit" disabled={loading}
              style={{
                width: "100%", padding: "14px",
                background: loading
                  ? "rgba(0,230,118,0.4)"
                  : "linear-gradient(135deg, #00E676, #00C853)",
                color: "#000", fontWeight: 800,
                fontSize: 14, borderRadius: 12, border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: 8,
                boxShadow: loading ? "none" : "0 4px 20px rgba(0,230,118,0.25)",
                fontFamily: "inherit", marginBottom: 20
              }}>
              {loading ? "Creating account..." : (
                <>
                  Create Free Account
                  <IconArrowRight size={16}/>
                </>
              )}
            </button>

          </form>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: 12, marginBottom: 16
          }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }}/>
            <span style={{ fontSize: 12, color: "#2a4a2a" }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }}/>
          </div>

          {/* Google */}
          <button style={{
            width: "100%", padding: "13px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, color: "#E8F5E9",
            fontSize: 14, fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: 10,
            transition: "all 0.3s ease", fontFamily: "inherit"
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"/>
            </svg>
            Continue with Google
          </button>

          {/* Terms */}
          <p style={{
            fontSize: 11, color: "#2a4a2a",
            textAlign: "center", marginTop: 20, lineHeight: 1.6
          }}>
            By creating an account you agree to our{" "}
            <Link href="/terms" style={{ color: "#00E676", textDecoration: "none" }}>Terms</Link>
            {" "}and{" "}
            <Link href="/privacy" style={{ color: "#00E676", textDecoration: "none" }}>Privacy Policy</Link>
          </p>

        </div>

        {/* Login Link */}
        <p style={{
          textAlign: "center", marginTop: 24,
          fontSize: 13, color: "#4a6a4a"
        }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#00E676", fontWeight: 600, textDecoration: "none" }}>
            Sign in
          </Link>
        </p>

      </motion.div>
    </main>
  );
}