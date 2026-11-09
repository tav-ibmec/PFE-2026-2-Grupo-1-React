import './Hero.css';

function Hero({
  classe = '',
  titulo,
  tituloId,
  descricao,
  setaHref,
  setaLabel,
}) {
  return (
    <section
      className={`landing-hero ${classe}`}
      id="home"
      aria-labelledby={tituloId}
    >
      <div className="hero-inner">
        <h1 id={tituloId}>{titulo}</h1>
        {descricao && <p>{descricao}</p>}
      </div>

      {setaHref && (
        <a
          className="scroll-cue"
          href={setaHref}
          aria-label={setaLabel || 'Ir para a próxima seção'}
        >
          <span aria-hidden="true" />
        </a>
      )}
    </section>
  );
}

export default Hero;
