export default function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <strong>UrbanAI</strong>
        <button>Nova análise</button>
      </header>

      <section style={{
        maxWidth: "900px",
        margin: "120px auto",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "56px" }}>
          Inteligência para incorporação imobiliária
        </h1>

        <p style={{ fontSize: "20px", color: "#aaa" }}>
          Analise terrenos, potencial construtivo, VGV e viabilidade antes de investir.
        </p>

        <button style={{
          marginTop: "32px",
          padding: "16px 32px",
          background: "#C6A15B",
          border: "none",
          fontWeight: "bold"
        }}>
          Começar análise
        </button>
      </section>
    </main>
  )
}
