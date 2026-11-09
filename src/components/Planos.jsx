import PlanCard from './PlanCard.jsx';

function Planos({
  titulo,
  tituloId,
  subtitulo,
  itens = [],
  variante = 'oto',
  classe = '',
  introducao,
  descricao
}) {
  return (
    <section
      className={`plans-section ${classe}`}
      id="planos"
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
          className="plans-grid oto-plans-grid"
        >
          {itens.map((plano) => (
            <PlanCard
              key={plano.id}
              plano={plano}
              variante={variante}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Planos;
