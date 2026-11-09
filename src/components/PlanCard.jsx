function PlanCard({ plano }) {
  const tituloId = `${plano.id}-titulo`;

  return (
    <article
      className={`plan-card oto-plan-card ${plano.destaque ? 'featured-plan' : ''}`}
      id={plano.id}
      aria-labelledby={tituloId}
    >
      {/* Selo do plano em destaque */}
      {plano.destaque && (
        <span className="featured-label">MAIS ESCOLHIDO</span>
      )}

      {/* Identificação do plano ou pacote */}
              <span className="plan-number">{plano.numero}</span>

      {/* Nome */}
      <h3 id={tituloId}>{plano.nome}</h3>

      {/* Descrição */}
      <p>{plano.descricao}</p>

      {/* Benefícios */}
      <ul>
        {plano.beneficios.map((beneficio) => (
          <li key={beneficio}>{beneficio}</li>
        ))}
      </ul>

    </article>
  );
}

export default PlanCard;
