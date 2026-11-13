function Sobre({ titulo, tituloId, subtitulo, foto, altFoto, paragrafos = [], fechamento, estatisticas = [], decoracaoTitulo, decoracaoLateral, fechamentoEmParagrafo = false, id = "sobre", classe = "", imagemAposConteudo = false, mostrarEstatisticas = true, acao }) {
  const imagem = <figure className="about-photo oto-about-photo">
    <img src={foto} alt={altFoto} loading="lazy" />
  </figure>;
  return (
    <section className={classe ? `about-section ${classe}` : "about-section"} id={id} aria-labelledby={tituloId}>
      <div className="content-wrap about-grid">
        {!imagemAposConteudo && imagem}

        <div className="about-content">
          <header className="section-head has-deco">
            <p className="eyebrow">{subtitulo}</p>
            <h2 id={tituloId}>{titulo}</h2>
            {decoracaoTitulo && (
              <img className="deco deco-right" src={decoracaoTitulo} alt="" loading="lazy" />
            )}
          </header>

          {paragrafos.map((paragrafo, i) => <p key={i}>{paragrafo}</p>)}

          {fechamento && (fechamentoEmParagrafo ? (
            <p className="closing-line">{fechamento}</p>
          ) : (
            <h3 className="closing-line">{fechamento}</h3>
          ))}

          {mostrarEstatisticas && <ul className="stats" aria-label="Números da empresa">
            {estatisticas.map((estatistica) => (
              <li key={estatistica.numero}>
                <strong>{estatistica.numero}</strong>
                <span>{estatistica.rotulo}</span>
              </li>
            ))}
          </ul>}
          {acao}
        </div>
        {imagemAposConteudo && imagem}
      </div>

      {decoracaoLateral && (
        <img
          className="side-decoration deco-wide deco-right deco-right-2"
          src={decoracaoLateral}
          alt=""
          loading="lazy"
        />
      )}
    </section>
  );
}

export default Sobre;
