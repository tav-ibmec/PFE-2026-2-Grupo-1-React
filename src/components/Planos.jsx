import PlanCard from './PlanCard.jsx';

function Planos({
  titulo,
  tituloId,
  subtitulo,
  itens = [],
  variante = 'oto',
  classe = '',
  introducao,
  descricao,
  botaoFinal
}) {
  return (
    <section
      className={`plans-section ${classe}`}
      id={variante === 'pkz' ? 'pacotes' : 'planos'}
      aria-labelledby={tituloId}
    >
      <div className="content-wrap centered-section">
        <p className="eyebrow">{subtitulo}</p>

        <h2 id={tituloId}>{titulo}</h2>

        {introducao && (
          <h3 className="plans-lead">{introducao}</h3>
        )}

        {descricao && (
          <p className="plans-intro">{descricao}</p>
        )}

        <div
          className={`plans-grid ${
            variante === 'pkz'
              ? 'pkz-plans-grid'
              : 'oto-plans-grid'
          }`}
        >
          {itens.map((plano) => (
            <PlanCard
              key={plano.id}
              plano={plano}
              variante={variante}
            />
          ))}
        </div>

        {/* Botão único abaixo dos planos */}
        {botaoFinal && (
          <a
            className="plans-bottom-cta"
            href={botaoFinal.href}
          >
            {botaoFinal.texto}
          </a>
        )}
      </div>
    </section>
  );
}

export default Planos;
