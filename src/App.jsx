export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.kicker}>Análise de Terrenos</p>

        <h1 style={styles.title}>
          Inteligência para transformar terrenos em empreendimentos de alto valor
        </h1>

        <p style={styles.subtitle}>
          Escolha o tipo de projeto e acesse a ferramenta certa para analisar potencial,
          viabilidade, VGV e estratégia de incorporação.
        </p>
      </section>

      <section style={styles.cards}>
        <div style={{ ...styles.card, ...styles.cardUrban }}>
          <div style={styles.icon}>🌿</div>
          <p style={styles.category}>Condomínios e Loteamentos Horizontais</p>
          <h2 style={styles.product}>UrbanAI</h2>
          <p style={styles.text}>
            Masterplan urbanístico, distribuição de áreas, sistema viário, áreas vendáveis,
            lazer, APPs, VGV e análise de mercado para projetos horizontais.
          </p>
          <button style={styles.button}>Analisar loteamento</button>
        </div>

        <div style={{ ...styles.card, ...styles.cardIncorp }}>
          <div style={styles.icon}>🏙️</div>
          <p style={styles.category}>Prédios e Incorporações Verticais</p>
          <h2 style={styles.product}>IncorpAI</h2>
          <p style={styles.text}>
            Estudo de viabilidade para torres, potencial construtivo, tipologia,
            área privativa, VGV, permuta, custos e retorno estimado.
          </p>
          <button style={styles.button}>Analisar incorporação</button>
        </div>
      </section>

      <section style={styles.footerCta}>
        <h2 style={styles.footerTitle}>
          Uma inteligência para cada tipo de terreno
        </h2>
        <p style={styles.footerText}>
          Do loteamento à torre, transforme dados em decisões imobiliárias mais seguras.
        </p>
      </section>
    </main>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "48px 24px",
  },
  hero: {
    maxWidth: 980,
    margin: "0 auto",
    textAlign: "center",
    padding: "80px 0 56px",
  },
  kicker: {
    color: "#C6A15B",
    letterSpacing: 3,
    textTransform: "uppercase",
    fontSize: 13,
    marginBottom: 20,
  },
  title: {
    fontSize: "clamp(38px, 6vw, 72px)",
    lineHeight: 1.05,
    fontWeight: 500,
    margin: "0 0 28px",
  },
  subtitle: {
    maxWidth: 720,
    margin: "0 auto",
    color: "#b8b8b8",
    fontSize: 20,
    lineHeight: 1.6,
  },
  cards: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 28,
  },
  card: {
    minHeight: 430,
    borderRadius: 28,
    padding: 36,
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardUrban: {
    background:
      "linear-gradient(145deg, rgba(20,55,38,0.95), rgba(7,18,13,0.95))",
  },
  cardIncorp: {
    background:
      "linear-gradient(145deg, rgba(28,32,48,0.95), rgba(8,10,18,0.95))",
  },
  icon: {
    fontSize: 44,
    marginBottom: 24,
  },
  category: {
    color: "#C6A15B",
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  product: {
    fontSize: 42,
    margin: "0 0 22px",
    fontWeight: 500,
  },
  text: {
    color: "#d4d4d4",
    fontSize: 17,
    lineHeight: 1.65,
    marginBottom: 36,
  },
  button: {
    background: "#C6A15B",
    color: "#050505",
    border: "none",
    borderRadius: 10,
    padding: "16px 24px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 15,
    letterSpacing: 0.8,
  },
  footerCta: {
    maxWidth: 800,
    margin: "90px auto 30px",
    textAlign: "center",
  },
  footerTitle: {
    fontSize: 34,
    fontWeight: 500,
    marginBottom: 16,
  },
  footerText: {
    color: "#aaa",
    fontSize: 18,
  },
}
