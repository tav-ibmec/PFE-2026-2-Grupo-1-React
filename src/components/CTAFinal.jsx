function CTAFinal({ titulo, tituloId, texto, botoes = [], classe = '' }) {
  return (
    <section className={`closing-cta ${classe}`} aria-labelledby={tituloId}>
      <div className="content-wrap centered-section">
        <h2 id={tituloId}>{titulo}</h2>
        <p>{texto}</p>
        <div className="hero-actions">
          {botoes.map((botao) => (
            <a key={botao.texto} className={botao.classe} href={botao.href}>
              {botao.texto}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTAFinal;
