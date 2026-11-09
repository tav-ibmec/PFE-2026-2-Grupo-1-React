import ReviewCard from './ReviewCard.jsx';

function Review({ titulo, tituloId, subtitulo = 'AVALIAÇÕES', introducao = [], itens = [], decoracaoTitulo, decoracaoLateral }) {
  return (
    <section className="reviews-section oto-reviews" id="avaliacoes" aria-labelledby={tituloId}>
      {decoracaoLateral && (
        <img className="side-decoration deco-wide deco-left" src={decoracaoLateral} alt="" loading="lazy" />
      )}
      <div className="content-wrap">
        <header className="section-head has-deco">
          <p className="eyebrow">{subtitulo}</p>
          <h2 id={tituloId}>{titulo}</h2>
          {decoracaoTitulo && (
            <img className="deco deco-right" src={decoracaoTitulo} alt="" loading="lazy" />
          )}
        </header>
        {introducao.map((texto, i) => <p className="section-intro" key={i}>{texto}</p>)}
        <div className="reviews-grid reviews-grid--3-2">
          {itens.map((avaliacao) => <ReviewCard key={avaliacao.nome} {...avaliacao} />)}
        </div>
      </div>
    </section>
  );
}

export default Review;
