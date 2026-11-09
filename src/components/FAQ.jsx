function FAQ({ perguntas = [], tituloId, titulo, subtitulo = 'FAQ' }) {
  return (
    <section className="faq-section" id="faq" aria-labelledby={tituloId}>
      <div className="content-wrap">
        <p className="eyebrow">{subtitulo}</p>
        <h2 id={tituloId}>{titulo}</h2>
        <div className="faq-list">
          {perguntas.map((item) => (
            <details key={item.pergunta}>
              <summary><span className="faq-question-text">{item.pergunta}</span></summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
