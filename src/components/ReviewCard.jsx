function ReviewCard({ nome, inicial, texto, nota = 5 }) {
  return (
    <figure className="review-card">
      <span
        className="stars"
        role="img"
        aria-label={`${nota} de 5 estrelas`}
      >
        {'★'.repeat(nota)}
      </span>

      <blockquote>
        <p>{texto}</p>
      </blockquote>

      <figcaption>
        <span className="review-initial" aria-hidden="true">
          {inicial}
        </span>
        <span>— {nome}</span>
      </figcaption>
    </figure>
  );
}

export default ReviewCard;
