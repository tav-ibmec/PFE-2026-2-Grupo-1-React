import Agendamento from './Agendamento.jsx';

function Contato({
  titulo,
  tituloId,
  subtitulo = 'ENTRE EM CONTATO',
  paragrafos = [],
  detalhes = [],
  chaveReservas = 'reservas',
  decoracaoLateral,
  mapaEmbed
}) {
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby={tituloId}
    >
      {decoracaoLateral && (
        <img
          className="side-decoration deco-wide deco-left"
          src={decoracaoLateral}
          alt=""
          loading="lazy"
        />
      )}

      <div className="content-wrap contact-panel oto-contact-panel">
        <div className="contact-copy">

          <p className="eyebrow">{subtitulo}</p>

          {/* Título */}
          <h2
            id={tituloId}
            style={{
              fontSize: 'clamp(1.5rem, 8.2cqi, 2.6rem)'
            }}
          >
            {titulo}
          </h2>

          {/* Parágrafos */}
          {paragrafos.map((paragrafo, i) => (
            <p
              key={i}
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.5
              }}
            >
              {paragrafo}
            </p>
          ))}

          {/* Mapa interativo */}
          {mapaEmbed && (
            <iframe
              title="Localização da empresa no Google Maps"
              src={mapaEmbed}
              width="100%"
              height="300"
              style={{
                display: 'block',
                maxWidth: '480px',
                border: 0,
                borderRadius: '18px',
                margin: '40px 0 8px'
              }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}

          {/* Informações de contato */}
          <address>
            <ul
              className="contact-details"
              style={{
                marginTop: '40px'
              }}
            >
              {detalhes.map((item) => (
                <li
                  key={item.rotulo}
                  style={{
                    gridTemplateColumns: '38px 1fr'
                  }}
                >
                  <img
                    className="contact-icon-slot"
                    src={item.icone}
                    alt=""
                    loading="lazy"
                    style={{
                      width: '38px',
                      height: '38px'
                    }}
                  />

                  <span className="contact-content">
                    <span className="contact-label">
                      {item.rotulo}
                    </span>

                    <a
                      href={item.href}
                      {...(item.novaAba
                        ? {
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                        : {})}
                    >
                      {item.texto}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <Agendamento chaveReservas={chaveReservas} />
      </div>
    </section>
  );
}

export default Contato;
