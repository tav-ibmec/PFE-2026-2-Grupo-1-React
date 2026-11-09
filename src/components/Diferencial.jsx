import { Fragment as ReactFragment } from 'react';

function Diferencial({ titulo, tituloId, subtitulo, servicos = [], imagemSoma, decoracaoTitulo, decoracaoLateral }) {
  return (
    <section className="difference-section oto-difference" id="diferencial" aria-labelledby={tituloId}>
      {decoracaoLateral && (
        <img className="side-decoration deco-wide deco-left" src={decoracaoLateral} alt="" loading="lazy" />
      )}
      <div className="content-wrap">
        <header
          className="section-head has-deco"
          style={{ marginBottom: '100px' }}
        >
          <p className="eyebrow">{subtitulo}</p>
          <h2 id={tituloId}>{titulo}</h2>
          {decoracaoTitulo && (
            <img className="deco deco-right" src={decoracaoTitulo} alt="" loading="lazy" />
          )}
        </header>
        <div
          className="service-grid oto-service-grid"
          style={{
            maxWidth: '1000px',
            marginInline: 'auto'
          }}
        >
          {servicos.map((servico, indice) => (
            <ReactFragment key={servico.nome}>
              {indice > 0 && (imagemSoma ? (
                <img
                  className="service-plus-image"
                  src={imagemSoma}
                  alt=""
                  width="44"
                  height="44"
                  loading="lazy"
                />
              ) : <span className="service-plus" aria-hidden="true">+</span>)}
              <article className="service-card" aria-labelledby={`servico-${indice}`}>
                <img src={servico.icone} alt="" loading="lazy" />
                <h3 id={`servico-${indice}`}>{servico.nome}</h3>
                <p>{servico.descricao}</p>
              </article>
            </ReactFragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferencial;
