

import { motion } from "framer-motion";
import { MapPin, Layers, TrendingUp, BarChart2, Zap, CheckCircle, ArrowRight, Star, Building2, TreePine, Users, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

// ─── CONFIGURAÇÃO ───────────────────────────────────────────────
const APP_URL = "https://urbanai-glr8-8zop0xt3x-joaohoraciogarcia-7675s-projects.vercel.app/";

// ─── DADOS ──────────────────────────────────────────────────────
const plans = [
  {
    name: "Starter",
    icon: "🌱",
    description: "Ideal para testar e criar seu primeiro masterplan",
    price: "29,90",
    unit: "/ masterplan",
    credits: "1 Masterplan",
    features: ["1 geração de masterplan com IA", "Viabilidade financeira", "Análise de mercado", "Relatório PDF"],
    color: "from-slate-700 to-slate-800",
    badge: null,
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Profissional",
    icon: "🚀",
    description: "Para corretores e construtores ativos",
    price: "59,90",
    unit: "/ 5 masterplans",
    credits: "5 Masterplans",
    features: ["5 gerações de masterplan com IA", "Viabilidade financeira completa", "Análise de mercado com IA", "Relatório PDF completo", "Templates personalizados"],
    color: "from-blue-600 to-blue-700",
    badge: "Mais popular",
    cta: "Escolher Profissional",
    highlight: true,
  },
  {
    name: "Avançado",
    icon: "🏆",
    description: "Escale sua produção de projetos",
    price: "199,90",
    unit: "/ 10 masterplans",
    credits: "10 Masterplans",
    features: ["10 gerações de masterplan com IA", "Todos os recursos anteriores", "Estudo de viabilidade avançado", "Comparação de cenários", "Biblioteca de projetos"],
    color: "from-violet-600 to-violet-700",
    badge: null,
    cta: "Escolher Avançado",
    highlight: false,
  },
  {
    name: "Ilimitado",
    icon: "♾️",
    description: "Para escritórios e incorporadoras",
    price: "299,90",
    unit: "/ mês",
    credits: "Ilimitado",
    features: ["Projetos ilimitados", "Todos os recursos", "Prioridade na geração", "Suporte dedicado", "Multi-usuário", "API de integração"],
    color: "from-amber-500 to-orange-600",
    badge: "Melhor custo-benefício",
    cta: "Assinar Ilimitado",
    highlight: false,
  },
];

const steps = [
  { icon: MapPin, label: "Informe o terreno", desc: "Localização, área e características físicas", color: "bg-blue-100 text-blue-600", num: "01" },
  { icon: Building2, label: "Defina o empreendimento", desc: "Tipo, padrão, público e conceito", color: "bg-violet-100 text-violet-600", num: "02" },
  { icon: Zap, label: "IA gera o masterplan", desc: "Proposta urbanística completa em segundos", color: "bg-amber-100 text-amber-600", num: "03" },
  { icon: TrendingUp, label: "Análise e viabilidade", desc: "VGV, margem, ROI e mercado real", color: "bg-green-100 text-green-600", num: "04" },
];

const testimonials = [
  { name: "Ricardo Almeida", role: "Incorporador", city: "SP", text: "Em 3 minutos tive um masterplan e uma viabilidade financeira que levaria dias para montar. Revolucionou meu processo.", stars: 5, avatar: "RA" },
  { name: "Fernanda Costa", role: "Arquiteta Urbanista", city: "MG", text: "A qualidade do masterplan gerado me surpreendeu. Uso como base para os projetos finais com meus clientes.", stars: 5, avatar: "FC" },
  { name: "Thiago Menezes", role: "Corretor", city: "GO", text: "Agora consigo mostrar viabilidade para o proprietário do terreno na primeira reunião. Fechei 3 parcerias em um mês.", stars: 5, avatar: "TM" },
];

const features = [
  { icon: Layers, label: "Masterplan com IA", desc: "Proposta urbanística completa e ilustrada gerada em segundos", color: "text-blue-600 bg-blue-50" },
  { icon: TrendingUp, label: "Viabilidade Financeira", desc: "VGV, ROI, margem líquida e payback calculados automaticamente", color: "text-green-600 bg-green-50" },
  { icon: BarChart2, label: "Análise de Mercado Real", desc: "Pesquisa em ZAP, VivaReal, OLX com dados reais da região", color: "text-violet-600 bg-violet-50" },
  { icon: TreePine, label: "Uso do Solo Otimizado", desc: "Distribuição automática de áreas: viária, APP, lazer e vendável", color: "text-amber-600 bg-amber-50" },
  { icon: Users, label: "Perfil do Comprador", desc: "Análise do público-alvo e posicionamento de mercado", color: "text-rose-600 bg-rose-50" },
  { icon: CheckCircle, label: "Relatório Profissional", desc: "PDF completo para apresentar a investidores e parceiros", color: "text-cyan-600 bg-cyan-50" },
];

const stats = [
  { value: "2.400+", label: "Masterplans gerados" },
  { value: "3 min", label: "Tempo médio de entrega" },
  { value: "R$ 2,1bi", label: "Em VGV analisado" },
  { value: "98%", label: "Taxa de satisfação" },
];

// ─── MOCKUP ──────────────────────────────────────────────────────
function ProductMockup() {
  return (
    <div style={{
      position: "relative", width: "100%", borderRadius: 16,
      overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
      border: "1px solid #334155", background: "#0f172a"
    }}>
      {/* Browser chrome */}
      <div style={{ background: "#1e293b", padding: "8px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #334155" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f87171" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbf24" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#4ade80" }} />
        </div>
        <div style={{ flex: 1, margin: "0 12px", height: 20, background: "#334155", borderRadius: 6, display: "flex", alignItems: "center", padding: "0 12px" }}>
          <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "monospace" }}>urbanai.intel.app/projeto/masterplan</span>
        </div>
      </div>
      {/* App header */}
      <div style={{ background: "#0f172a", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1e293b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 8, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 10 }}>U</span>
          </div>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>UrbanAI Intel</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(74,222,128,0.15)", borderRadius: 100, padding: "3px 10px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#4ade80", fontSize: 10, fontWeight: 600 }}>Gerando...</span>
        </div>
      </div>
      {/* Content */}
      <div style={{ background: "#020617", padding: 16, display: "flex", gap: 12, minHeight: 280 }}>
        {/* Sidebar */}
        <div style={{ width: 96, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4 }}>
          {["Dashboard", "Projetos", "Análise", "Relatórios"].map((item, i) => (
            <div key={i} style={{
              padding: "6px 8px", borderRadius: 8, fontSize: 10, fontWeight: 500,
              background: i === 1 ? "#2563eb" : "transparent",
              color: i === 1 ? "#fff" : "#64748b"
            }}>{item}</div>
          ))}
        </div>
        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>Residencial Vila Nova</p>
              <p style={{ color: "#64748b", fontSize: 10, marginTop: 2 }}>Campinas, SP · 45.000 m²</p>
            </div>
            <div style={{ background: "rgba(37,99,235,0.2)", color: "#60a5fa", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 100 }}>Concluído</div>
          </div>
          {/* Map */}
          <div style={{ borderRadius: 12, overflow: "hidden", background: "#1e293b", height: 140, position: "relative" }}>
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(135deg, #1e3a5f 0%, #1e293b 40%, #14532d 100%)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {/* Simplified masterplan SVG illustration */}
              <svg width="200" height="120" viewBox="0 0 200 120" style={{ opacity: 0.7 }}>
                <rect x="10" y="10" width="180" height="100" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,2" />
                <rect x="20" y="20" width="70" height="40" rx="3" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="0.8" />
                <rect x="100" y="20" width="80" height="40" rx="3" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="0.8" />
                <rect x="20" y="70" width="160" height="25" rx="3" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="0.8" />
                <line x1="95" y1="20" x2="95" y2="95" stroke="#475569" strokeWidth="1" />
                <line x1="10" y1="65" x2="190" y2="65" stroke="#475569" strokeWidth="1" />
                <circle cx="55" cy="40" r="8" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1" />
                <circle cx="140" cy="40" r="6" fill="rgba(34,197,94,0.3)" stroke="#22c55e" strokeWidth="1" />
              </svg>
            </div>
            <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.7)", color: "#fff", fontSize: 9, padding: "3px 8px", borderRadius: 6, fontWeight: 600 }}>
              🗺️ Masterplan Gerado
            </div>
          </div>
          {/* KPIs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[{ label: "VGV", value: "R$ 48M" }, { label: "ROI", value: "31,4%" }, { label: "Margem", value: "22,8%" }].map((kpi, i) => (
              <div key={i} style={{ background: "#1e293b", borderRadius: 8, padding: 8 }}>
                <p style={{ color: "#64748b", fontSize: 9 }}>{kpi.label}</p>
                <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, marginTop: 2 }}>{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BOTÃO REUTILIZÁVEL ──────────────────────────────────────────
function Btn({ children, variant = "primary", size = "md", onClick, style = {}, href }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, fontWeight: 700, cursor: "pointer", border: "none",
    transition: "all 0.2s", textDecoration: "none",
    borderRadius: 12, fontFamily: "inherit",
  };
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 24px", fontSize: 14 },
    lg: { padding: "16px 32px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "#fff", boxShadow: "0 8px 24px rgba(59,130,246,0.35)" },
    outline: { background: "transparent", color: "#64748b", border: "1px solid #e2e8f0" },
    ghost: { background: "transparent", color: "#94a3b8", border: "none" },
  };
  const props = { style: { ...base, ...sizes[size], ...variants[variant], ...style }, onClick };
  if (href) return <a href={href} {...props}>{children}</a>;
  return <button {...props}>{children}</button>;
}

// ─── LANDING PAGE ────────────────────────────────────────────────
export default function Landing() {
  const goToApp = () => { window.open(APP_URL, "_blank"); };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter', system-ui, sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #f1f5f9",
        padding: "0 24px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>U</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#0f172a", letterSpacing: "-0.02em" }}>UrbanAI <span style={{ color: "#2563eb" }}>Intel</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[["#como-funciona", "Como funciona"], ["#funcionalidades", "Funcionalidades"], ["#planos", "Planos"]].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13, color: "#64748b", textDecoration: "none", fontWeight: 500, transition: "color 0.15s" }}
              onMouseEnter={e => e.target.style.color = "#0f172a"}
              onMouseLeave={e => e.target.style.color = "#64748b"}
            >{label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Btn variant="ghost" size="sm" href={APP_URL}>Entrar</Btn>
          <Btn size="sm" onClick={goToApp} style={{ borderRadius: 8 }}>
            Começar grátis <ArrowRight size={14} />
          </Btn>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", paddingTop: 60, overflow: "hidden",
        background: "linear-gradient(160deg, #0f172a 0%, #0a1628 60%, #0f172a 100%)"
      }}>
        {/* Glows */}
        <div style={{ position: "absolute", top: 0, left: "25%", width: 600, height: 400, background: "rgba(37,99,235,0.15)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 80, right: 0, width: 320, height: 320, background: "rgba(124,58,237,0.1)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 400, height: 400, background: "rgba(8,145,178,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 0", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" }}>

            {/* Copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} style={{ flex: 1, minWidth: 300 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(96,165,250,0.25)", borderRadius: 100, marginBottom: 24 }}>
                <Zap size={12} style={{ color: "#60a5fa", fill: "#60a5fa" }} />
                <span style={{ fontSize: 11, color: "#93c5fd", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>IA para Arquitetura e Urbanismo</span>
              </div>

              <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Do terreno ao{" "}
                <span style={{ background: "linear-gradient(90deg, #60a5fa, #67e8f9, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto" }}>
                  Masterplan
                </span>
                <br />em minutos
              </h1>

              <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                Gere propostas urbanísticas completas com IA — viabilidade financeira, análise de mercado e VGV em uma única plataforma inteligente.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
                <Btn size="lg" onClick={goToApp}>
                  <Zap size={18} /> Gerar meu primeiro Masterplan
                </Btn>
                <a href="#planos" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  A partir de R$ 29,90 <ChevronRight size={14} />
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {["Sem CAD necessário", "Resultado em < 3 min", "100% online"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748b" }}>
                    <CheckCircle size={14} style={{ color: "#4ade80" }} /> {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mockup */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ flex: 1, minWidth: 300, maxWidth: 540 }}>
              <ProductMockup />
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ marginTop: 56, borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08 }} style={{ textAlign: "center" }}>
                <p style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{s.value}</p>
                <p style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: "#2563eb", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Como funciona</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: 12 }}>4 passos para um masterplan profissional</h2>
            <p style={{ color: "#64748b", fontSize: 16 }}>Do terreno ao relatório final em menos de 3 minutos.</p>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 40, left: "12%", right: "12%", height: 1, background: "linear-gradient(90deg, #bfdbfe, #ddd6fe, #bbf7d0)", display: "block" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{ position: "relative", background: "#fff", borderRadius: 20, padding: 24, border: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", textAlign: "center" }}>
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 100, padding: "2px 10px", fontSize: 10, color: "#94a3b8", fontWeight: 700, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    {s.num}
                  </div>
                  <div style={{ width: 56, height: 56, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "8px auto 16px", ...(s.color.split(" ").reduce((acc, c) => {
                    if (c.startsWith("bg-")) acc.background = { "bg-blue-100": "#dbeafe", "bg-violet-100": "#ede9fe", "bg-amber-100": "#fef3c7", "bg-green-100": "#dcfce7" }[c] || "#f1f5f9";
                    if (c.startsWith("text-")) acc.color = { "text-blue-600": "#2563eb", "text-violet-600": "#7c3aed", "text-amber-600": "#d97706", "text-green-600": "#16a34a" }[c] || "#64748b";
                    return acc;
                  }, {})) }}>
                    <s.icon size={26} />
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{s.label}</h3>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNCIONALIDADES ── */}
      <section id="funcionalidades" style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: "#2563eb", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Tudo que você precisa</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: 12 }}>Uma plataforma completa para urbanistas</h2>
            <p style={{ color: "#64748b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>Todas as ferramentas que incorporadores, arquitetos e corretores precisam — em um só lugar.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {features.map((f, i) => {
              const colorMap = { "text-blue-600 bg-blue-50": ["#2563eb", "#eff6ff"], "text-green-600 bg-green-50": ["#16a34a", "#f0fdf4"], "text-violet-600 bg-violet-50": ["#7c3aed", "#f5f3ff"], "text-amber-600 bg-amber-50": ["#d97706", "#fffbeb"], "text-rose-600 bg-rose-50": ["#e11d48", "#fff1f2"], "text-cyan-600 bg-cyan-50": ["#0891b2", "#ecfeff"] };
              const [iconColor, iconBg] = colorMap[f.color] || ["#2563eb", "#eff6ff"];
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ padding: 24, borderRadius: 20, background: "#fff", border: "1px solid #f1f5f9", boxShadow: "0 1px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = "#f1f5f9"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: iconColor }}>
                    <f.icon size={20} />
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{f.label}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(160deg, #0f172a, #1e3a5f, #0f172a)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#60a5fa", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Quem já usa</p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>Aprovado por profissionais do mercado</h2>
            <p style={{ color: "#94a3b8", fontSize: 15 }}>Mais de 2.400 masterplans gerados por incorporadores, arquitetos e corretores.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 24, backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={14} style={{ fill: "#fbbf24", color: "#fbbf24" }} />)}
                </div>
                <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #2563eb)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{t.avatar}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: "#64748b" }}>{t.role} · {t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section id="planos" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: "#2563eb", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Planos e Preços</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: 12 }}>Escolha o plano ideal para você</h2>
            <p style={{ color: "#64748b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>Sem assinatura forçada. Pague pelo que usar ou assine o ilimitado e escale sem limites.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {plans.map((plan, i) => {
              const gradients = { "from-slate-700 to-slate-800": "linear-gradient(135deg, #374151, #1f2937)", "from-blue-600 to-blue-700": "linear-gradient(135deg, #2563eb, #1d4ed8)", "from-violet-600 to-violet-700": "linear-gradient(135deg, #7c3aed, #6d28d9)", "from-amber-500 to-orange-600": "linear-gradient(135deg, #f59e0b, #ea580c)" };
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ position: "relative", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", border: plan.highlight ? "2px solid #2563eb" : "1px solid #f1f5f9", boxShadow: plan.highlight ? "0 20px 60px rgba(37,99,235,0.2)" : "0 2px 16px rgba(0,0,0,0.05)", transform: plan.highlight ? "scale(1.02)" : "scale(1)" }}>
                  {plan.badge && (
                    <div style={{ background: plan.highlight ? "#2563eb" : "#f59e0b", color: "#fff", fontSize: 10, fontWeight: 700, textAlign: "center", padding: "6px 0", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {plan.badge}
                    </div>
                  )}
                  <div style={{ background: gradients[plan.color], padding: "24px 20px" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{plan.icon}</div>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em" }}>{plan.name}</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{plan.description}</p>
                    <div style={{ marginTop: 16, display: "flex", alignItems: "flex-end", gap: 4 }}>
                      <span style={{ fontSize: 30, fontWeight: 800, color: "#fff", lineHeight: 1 }}>R$ {plan.price}</span>
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginBottom: 2 }}>{plan.unit}</span>
                    </div>
                    <div style={{ marginTop: 10, display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.05em" }}>{plan.credits}</div>
                  </div>
                  <div style={{ padding: "20px", background: "#fff", flex: 1, display: "flex", flexDirection: "column" }}>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 20 }}>
                      {plan.features.map((f, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#475569" }}>
                          <CheckCircle size={14} style={{ color: "#22c55e", flexShrink: 0, marginTop: 1 }} /> {f}
                        </li>
                      ))}
                    </ul>
                    <button onClick={goToApp} style={{
                      width: "100%", padding: "13px", borderRadius: 12, fontWeight: 700, fontSize: 13, cursor: "pointer", border: plan.highlight ? "none" : "1px solid #e2e8f0",
                      background: plan.highlight ? "linear-gradient(135deg, #2563eb, #1d4ed8)" : "#fff",
                      color: plan.highlight ? "#fff" : "#475569",
                      boxShadow: plan.highlight ? "0 4px 16px rgba(37,99,235,0.3)" : "none",
                      transition: "all 0.2s"
                    }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <p style={{ color: "#94a3b8", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <CheckCircle size={14} style={{ color: "#22c55e" }} />
              Pagamento seguro · Sem contrato de fidelidade · Cancele quando quiser
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: "80px 24px", background: "#0f172a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: "rgba(37,99,235,0.15)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 24 }}>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} style={{ fill: "#fbbf24", color: "#fbbf24" }} />)}
            <span style={{ color: "#64748b", fontSize: 14, marginLeft: 8 }}>+2.400 masterplans gerados</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Transforme terrenos em empreendimentos inteligentes
          </h2>
          <p style={{ color: "#64748b", fontSize: 17, marginBottom: 36 }}>
            Comece agora por <span style={{ color: "#fff", fontWeight: 700 }}>R$ 29,90</span> e gere seu primeiro masterplan hoje.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Btn size="lg" onClick={goToApp}>
              <Zap size={18} /> Gerar meu Masterplan agora
            </Btn>
            <a href="#planos" style={{ color: "#64748b", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              Ver todos os planos <ChevronRight size={14} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#020617", padding: "32px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, borderTop: "1px solid #1e293b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 12 }}>U</span>
          </div>
          <span style={{ fontWeight: 600, color: "#64748b", fontSize: 14 }}>UrbanAI Intel</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {[["#como-funciona", "Como funciona"], ["#planos", "Planos"], ["#", "Termos de uso"], ["#", "Privacidade"]].map(([href, label]) => (
            <a key={label} href={href} style={{ fontSize: 12, color: "#475569", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#1e293b" }}>© {new Date().getFullYear()} UrbanAI Intel · Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
