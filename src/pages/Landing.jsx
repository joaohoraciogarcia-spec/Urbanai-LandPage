"use client";

/**
 * UrbanAI — Fluxo de Autenticação
 * 
 * Duas telas: Login (/login) e Cadastro (/cadastro)
 * 
 * Dependências: framer-motion, lucide-react
 * Após integrar seu backend/auth, substitua as funções
 * handleLogin() e handleRegister() pelas chamadas reais.
 * 
 * Para Next.js App Router:
 *   - Salve LoginPage em: app/login/page.jsx
 *   - Salve RegisterPage em: app/cadastro/page.jsx
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Zap, CheckCircle, AlertCircle } from "lucide-react";

const APP_URL = "https://urbanai-glr8-8zop0xt3x-joaohoraciogarcia-7675s-projects.vercel.app/";
const LANDING_URL = "/";

// ─── ESTILOS BASE ─────────────────────────────────────────────────
const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0f172a; font-family: 'Inter', system-ui, sans-serif; }
  ::placeholder { color: #64748b; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #1e293b inset !important;
    -webkit-text-fill-color: #f1f5f9 !important;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

// ─── GOOGLE ICON ─────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
    </svg>
  );
}

// ─── BACKGROUND DECORATIVO ───────────────────────────────────────
function AuthBackground() {
  return (
    <>
      <div style={{ position: "fixed", inset: 0, background: "linear-gradient(160deg, #0f172a 0%, #0a1628 50%, #0f172a 100%)", zIndex: 0 }} />
      <div style={{ position: "fixed", top: "-10%", left: "-5%", width: 500, height: 500, background: "rgba(37,99,235,0.1)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-10%", right: "-5%", width: 400, height: 400, background: "rgba(124,58,237,0.08)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    </>
  );
}

// ─── CAMPO DE INPUT ───────────────────────────────────────────────
function InputField({ icon: Icon, label, type = "text", value, onChange, error, placeholder, rightElement }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#94a3b8", marginBottom: 6, letterSpacing: "0.03em" }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: error ? "#f87171" : "#475569", pointerEvents: "none" }}>
          <Icon size={16} />
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            width: "100%", background: "#1e293b",
            border: `1px solid ${error ? "#f87171" : "#334155"}`,
            borderRadius: 12, padding: "12px 44px 12px 42px",
            color: "#f1f5f9", fontSize: 14, outline: "none",
            transition: "border-color 0.2s, box-shadow 0.2s",
            fontFamily: "inherit",
          }}
          onFocus={e => {
            e.target.style.borderColor = error ? "#f87171" : "#3b82f6";
            e.target.style.boxShadow = `0 0 0 3px ${error ? "rgba(248,113,113,0.15)" : "rgba(59,130,246,0.15)"}`;
          }}
          onBlur={e => {
            e.target.style.borderColor = error ? "#f87171" : "#334155";
            e.target.style.boxShadow = "none";
          }}
        />
        {rightElement && (
          <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)" }}>
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
          <AlertCircle size={12} style={{ color: "#f87171", flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: "#f87171" }}>{error}</span>
        </div>
      )}
    </div>
  );
}

// ─── LOGO ─────────────────────────────────────────────────────────
function Logo({ size = "md" }) {
  const sizes = { sm: { box: 28, font: 13, text: 15 }, md: { box: 40, font: 18, text: 20 } };
  const s = sizes[size];
  return (
    <a href={LANDING_URL} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <div style={{ width: s.box, height: s.box, borderRadius: 10, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,99,235,0.4)" }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: s.font }}>U</span>
      </div>
      <span style={{ fontWeight: 800, fontSize: s.text, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
        UrbanAI <span style={{ color: "#3b82f6" }}>Intel</span>
      </span>
    </a>
  );
}

// ─── PÁGINA DE LOGIN ──────────────────────────────────────────────
export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    if (!password) e.password = "Senha é obrigatória";
    return e;
  };

  const handleLogin = async (e) => {
    e?.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setApiError("");
    try {
      // ─── INTEGRE SEU BACKEND AQUI ───────────────────────
      // Exemplo com fetch:
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password })
      // });
      // if (!res.ok) throw new Error("Credenciais inválidas");
      // const { token } = await res.json();
      // localStorage.setItem("token", token);
      // ─────────────────────────────────────────────────────
      await new Promise(r => setTimeout(r, 1200)); // simula request
      window.location.href = APP_URL;
    } catch {
      setApiError("Email ou senha incorretos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    // ─── INTEGRE GOOGLE OAUTH AQUI ───────────────────────
    // window.location.href = "/api/auth/google";
    alert("Configure o Google OAuth no seu backend.");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>{baseStyles}</style>
      <AuthBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", maxWidth: 440, position: "relative", zIndex: 1 }}
      >
        {/* Card */}
        <div style={{ background: "rgba(15,23,42,0.95)", border: "1px solid #1e293b", borderRadius: 24, padding: "40px 36px", boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)" }}>

          {/* Logo */}
          <div style={{ marginBottom: 32 }}>
            <Logo />
          </div>

          {/* Header */}
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 6 }}>Bem-vindo de volta</h1>
            <p style={{ fontSize: 14, color: "#64748b" }}>Entre para acessar seus projetos</p>
          </div>

          {/* Google */}
          <button onClick={handleGoogle} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            background: "#1e293b", border: "1px solid #334155", borderRadius: 12,
            padding: "12px", color: "#e2e8f0", fontSize: 14, fontWeight: 600,
            cursor: "pointer", marginBottom: 20, transition: "all 0.2s", fontFamily: "inherit"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#293548"; e.currentTarget.style.borderColor = "#475569"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1e293b"; e.currentTarget.style.borderColor = "#334155"; }}>
            <GoogleIcon /> Entrar com Google
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "#1e293b" }} />
            <span style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>ou com email</span>
            <div style={{ flex: 1, height: 1, background: "#1e293b" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <InputField icon={Mail} label="Email" type="email" value={email} onChange={e => { setEmail(e.target.value); setErrors(v => ({ ...v, email: "" })); }} error={errors.email} placeholder="seu@email.com" />
            <InputField
              icon={Lock} label="Senha" type={showPass ? "text" : "password"}
              value={password} onChange={e => { setPassword(e.target.value); setErrors(v => ({ ...v, password: "" })); }}
              error={errors.password} placeholder="••••••••"
              rightElement={
                <button type="button" onClick={() => setShowPass(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: 0 }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            {/* Forgot */}
            <div style={{ textAlign: "right", marginBottom: 20, marginTop: -8 }}>
              <a href="/esqueci-senha" style={{ fontSize: 12, color: "#3b82f6", textDecoration: "none" }}>Esqueci minha senha</a>
            </div>

            {/* API Error */}
            <AnimatePresence>
              {apiError && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <AlertCircle size={14} style={{ color: "#f87171", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#fca5a5" }}>{apiError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button type="submit" disabled={loading} style={{
              width: "100%", padding: "14px", borderRadius: 12,
              background: loading ? "#1d4ed8" : "linear-gradient(135deg, #3b82f6, #2563eb)",
              border: "none", color: "#fff", fontSize: 15, fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              transition: "all 0.2s", fontFamily: "inherit"
            }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              {loading ? (
                <>
                  <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  Entrando...
                </>
              ) : (
                <>Entrar <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          {/* Footer */}
          <p style={{ textAlign: "center", fontSize: 13, color: "#64748b", marginTop: 24 }}>
            Não tem conta?{" "}
            <a href="/cadastro" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none" }}>Criar conta grátis</a>
          </p>
        </div>

        {/* Back to landing */}
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#334155" }}>
          <a href={LANDING_URL} style={{ color: "#475569", textDecoration: "none" }}>← Voltar para o site</a>
        </p>
      </motion.div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── PÁGINA DE CADASTRO ───────────────────────────────────────────
export function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const set = (k) => (e) => { setForm(v => ({ ...v, [k]: e.target.value })); setErrors(v => ({ ...v, [k]: "" })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nome é obrigatório";
    if (!form.email) e.email = "Email é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!form.password) e.password = "Senha é obrigatória";
    else if (form.password.length < 6) e.password = "Mínimo de 6 caracteres";
    if (form.password !== form.confirmPassword) e.confirmPassword = "As senhas não coincidem";
    return e;
  };

  const handleRegister = async (e) => {
    e?.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setApiError("");
    try {
      // ─── INTEGRE SEU BACKEND AQUI ───────────────────────
      // const res = await fetch("/api/auth/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name: form.name, email: form.email, password: form.password })
      // });
      // if (!res.ok) throw new Error("Erro ao criar conta");
      // const { token } = await res.json();
      // localStorage.setItem("token", token);
      // ─────────────────────────────────────────────────────
      await new Promise(r => setTimeout(r, 1400));
      window.location.href = APP_URL;
    } catch {
      setApiError("Erro ao criar conta. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    alert("Configure o Google OAuth no seu backend.");
  };

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return null;
    if (p.length < 6) return { label: "Fraca", color: "#f87171", width: "30%" };
    if (p.length < 10 || !/[0-9]/.test(p)) return { label: "Média", color: "#fbbf24", width: "60%" };
    return { label: "Forte", color: "#4ade80", width: "100%" };
  };
  const strength = passwordStrength();

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>{baseStyles}</style>
      <AuthBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", maxWidth: 460, position: "relative", zIndex: 1 }}
      >
        <div style={{ background: "rgba(15,23,42,0.95)", border: "1px solid #1e293b", borderRadius: 24, padding: "40px 36px", boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)" }}>

          <div style={{ marginBottom: 32 }}>
            <Logo />
          </div>

          {/* Header com badge */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 100, padding: "4px 12px", marginBottom: 14 }}>
              <Zap size={11} style={{ color: "#60a5fa", fill: "#60a5fa" }} />
              <span style={{ fontSize: 11, color: "#93c5fd", fontWeight: 600, letterSpacing: "0.08em" }}>COMECE GRATUITAMENTE</span>
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 6 }}>Criar sua conta</h1>
            <p style={{ fontSize: 14, color: "#64748b" }}>Gere seu primeiro masterplan hoje</p>
          </div>

          {/* Google */}
          <button onClick={handleGoogle} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            background: "#1e293b", border: "1px solid #334155", borderRadius: 12,
            padding: "12px", color: "#e2e8f0", fontSize: 14, fontWeight: 600,
            cursor: "pointer", marginBottom: 20, transition: "all 0.2s", fontFamily: "inherit"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#293548"; e.currentTarget.style.borderColor = "#475569"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1e293b"; e.currentTarget.style.borderColor = "#334155"; }}>
            <GoogleIcon /> Cadastrar com Google
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "#1e293b" }} />
            <span style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>ou com email</span>
            <div style={{ flex: 1, height: 1, background: "#1e293b" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleRegister}>
            <InputField icon={User} label="Nome completo" value={form.name} onChange={set("name")} error={errors.name} placeholder="Seu nome" />
            <InputField icon={Mail} label="Email" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="seu@email.com" />
            <InputField
              icon={Lock} label="Senha" type={showPass ? "text" : "password"}
              value={form.password} onChange={set("password")}
              error={errors.password} placeholder="Mínimo 6 caracteres"
              rightElement={
                <button type="button" onClick={() => setShowPass(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: 0 }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            {/* Password strength */}
            {strength && (
              <div style={{ marginTop: -8, marginBottom: 16 }}>
                <div style={{ height: 3, background: "#1e293b", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: strength.width, background: strength.color, borderRadius: 2, transition: "all 0.3s" }} />
                </div>
                <p style={{ fontSize: 11, color: strength.color, marginTop: 4 }}>Senha {strength.label}</p>
              </div>
            )}

            <InputField icon={Lock} label="Confirmar senha" type="password" value={form.confirmPassword} onChange={set("confirmPassword")} error={errors.confirmPassword} placeholder="Repita a senha" />

            {/* API Error */}
            <AnimatePresence>
              {apiError && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <AlertCircle size={14} style={{ color: "#f87171", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#fca5a5" }}>{apiError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Terms */}
            <p style={{ fontSize: 11, color: "#475569", marginBottom: 16, lineHeight: 1.6 }}>
              Ao criar uma conta, você concorda com os{" "}
              <a href="/termos" style={{ color: "#3b82f6", textDecoration: "none" }}>Termos de Uso</a>
              {" "}e a{" "}
              <a href="/privacidade" style={{ color: "#3b82f6", textDecoration: "none" }}>Política de Privacidade</a>.
            </p>

            {/* Submit */}
            <button type="submit" disabled={loading} style={{
              width: "100%", padding: "14px", borderRadius: 12,
              background: loading ? "#1d4ed8" : "linear-gradient(135deg, #3b82f6, #2563eb)",
              border: "none", color: "#fff", fontSize: 15, fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              transition: "all 0.2s", fontFamily: "inherit"
            }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              {loading ? (
                <>
                  <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  Criando conta...
                </>
              ) : (
                <>Criar conta grátis <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          {/* Benefits */}
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6 }}>
            {["Primeiro masterplan por R$ 29,90", "Sem assinatura obrigatória", "Cancele quando quiser"].map(b => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#64748b" }}>
                <CheckCircle size={12} style={{ color: "#4ade80", flexShrink: 0 }} /> {b}
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "#64748b", marginTop: 24 }}>
            Já tem conta?{" "}
            <a href="/login" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none" }}>Entrar</a>
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#334155" }}>
          <a href={LANDING_URL} style={{ color: "#475569", textDecoration: "none" }}>← Voltar para o site</a>
        </p>
      </motion.div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── EXPORTS PARA NEXT.JS ─────────────────────────────────────────
// Para usar no App Router do Next.js:
//
// app/login/page.jsx:
//   import { LoginPage } from "@/components/Auth";
//   export default LoginPage;
//
// app/cadastro/page.jsx:
//   import { RegisterPage } from "@/components/Auth";
//   export default RegisterPage;
