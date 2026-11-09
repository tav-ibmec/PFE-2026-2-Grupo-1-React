import './hub.css';
import Header from '../components/Header.jsx';
import { useRef } from 'react';

const linksHub = [
  { texto: 'Quem somos', href: '#quem-somos' },
  { texto: 'Nossas empresas', href: '#empresas' },
];

function HUB() {
  const contatoRef = useRef(null);
  return (
    <div className="hub">
      <Header
        identidade={
          <div className="hub-header-brands">
            {/* Logo PKZ Lab */}
            <a
              className="hub-brand"
              href="#empresas"
              aria-label="Conheça a PKZ Lab"
            >
              <img
                src="/imagens/imagens-padronizacao/assets/hub/PKZ_Vertical_Branco.svg"
                alt="Playmakerz"
              />
            </a>

            {/* Divisor das logos */}
            <span className="brand-divider" aria-hidden="true"></span>

            {/* Logo One to One */}
            <a
              className="hub-brand oto-brand"
              href="/one-to-one"
              aria-label="Conheça a One to One"
            >
              <img
                src="/imagens/imagens-padronizacao/assets/hub/OneToOne_Branco.svg"
                alt="One to One Studio"
              />
            </a>
          </div>
        }
        links={linksHub}
        onContato={() => contatoRef.current?.showModal()}
      />
      <main id="main-content">

        {/* Seção principal do HUB */}
        <section
          className="hub-hero"
          id="quem-somos"
          aria-labelledby="hub-title"
        >
          <div className="hub-wrap hub-hero-content">

            <h1 id="hub-title">
              DIFERENTES FASES.<br />
              UM SÓ <span>PROPÓSITO.</span>
            </h1>

            <p>
              Da formação esportiva de jovens atletas ao cuidado
              integral e à performance de adultos, unimos ciência,
              treinamento e saúde para desenvolver o potencial
              de cada aluno.
            </p>

            {/* Diferenciais */}
            <ul
              className="hub-features"
              aria-label="Nossos diferenciais"
            >
              <li>
                <img
                  src="/imagens/imagens-padronizacao/assets/hub/HUB_ICON_1.png"
                  alt=""
                />
                <span>Profissionais especializados</span>
              </li>

              <li>
                <img
                  src="/imagens/imagens-padronizacao/assets/hub/HUB_ICON_2.png"
                  alt=""
                />
                <span>Treinamento individualizado</span>
              </li>

              <li>
                <img
                  src="/imagens/imagens-padronizacao/assets/hub/HUB_ICON_3.png"
                  alt=""
                />
                <span>Resultados de verdade</span>
              </li>
            </ul>
          </div>
          
            {/* Seta para a próxima seção */}
            <a
              className="scroll-cue"
              href="#empresas"
              aria-label="Ir para Nossas empresas"
            >
              <span aria-hidden="true"></span>
            </a>

        </section>

        {/* Seção Nossas Empresas */}
        <section
          className="hub-companies"
          id="empresas"
          aria-labelledby="companies-title"
        >
          <div className="hub-wrap">
            <p className="hub-kicker">NOSSAS EMPRESAS</p>

            <h2 id="companies-title">
              DO DESENVOLVIMENTO INFANTIL À PERFORMANCE ADULTA.
            </h2>

            {/* Contêiner dos cartões das empresas */}
            <div className="company-grid">

              {/* Cartão da Playmakerz */}
              <article
                className="company-card"
                aria-labelledby="pkz-card-title"
              >
                <div className="company-image pkz-card-image">
                  <img
                    src="/imagens/imagens-padronizacao/assets/pkz/Gemini_Generated_Image_lxjfrllxjfrllxjf.jpg"
                    alt="Jovem atleta com uma bola de futebol"
                    loading="lazy"
                  />

                  <h3 id="pkz-card-title">
                    ANTES DO ATLETA<br />
                    <strong>EXISTE A PESSOA</strong>
                  </h3>
                </div>

                <img
                  className="company-logo"
                  src="/imagens/imagens-padronizacao/assets/hub/LOGO_PKZ_navy.png"
                  alt="Playmakerz"
                  loading="lazy"
                />

                <div className="company-copy">
                  <p>
                    A Playmakerz é um centro de desenvolvimento e
                    performance que combina ciência, treinamento e
                    acompanhamento individualizado para potencializar
                    cada etapa da jornada esportiva.
                  </p>

                  <p>
                    Um ambiente pensado para desenvolver capacidades,
                    aprimorar o desempenho e construir bases sólidas
                    para a evolução de jovens atletas.
                  </p>
                </div>

                <a className="hub-button pkz-button" href="#empresas">
                  CONHEÇA A PKZ
                </a>
              </article>

              {/* Cartão da One to One */}
              <article
                className="company-card"
                aria-labelledby="oto-card-title"
              >
                <div className="company-image oto-card-image">
                  <img
                    src="/imagens/imagens-padronizacao/assets/one-to-one/Prancheta_4.jpg"
                    alt="Arte One to One com halter e a frase Amplie seu potencial"
                    loading="lazy"
                  />

                  <h3 className="visually-hidden" id="oto-card-title">
                    AMPLIE SEU POTENCIAL
                  </h3>
                </div>

                <img
                  className="company-logo oto-card-logo"
                  src="/imagens/imagens-padronizacao/assets/one-to-one/LOGO_OTO_1.png"
                  alt="One to One Studio"
                  loading="lazy"
                />

                <div className="company-copy">
                  <p>
                    One to One é uma experiência personalizada de saúde,
                    treinamento e performance, criada para quem busca
                    evoluir com acompanhamento próximo e estratégias
                    pensadas para suas necessidades e objetivos.
                  </p>

                  <p>
                    Um cuidado individualizado que integra movimento,
                    saúde e qualidade de vida em uma jornada contínua
                    de evolução.
                  </p>
                </div>

                <a className="hub-button oto-button" href="/one-to-one">
                  CONHEÇA A ONE TO ONE
                </a>
              </article>
            </div>

          </div>
        </section>
      </main>
      
      {/* Footer do HUB */}
      <footer className="hub-footer">
        <div className="hub-wrap hub-footer-inner">

          {/* Logos das empresas */}
          <div
            className="footer-brands"
            role="img"
            aria-label="Marcas Playmakerz e One to One"
          >
            <img
              src="/imagens/imagens-padronizacao/assets/hub/LOGO_PKZ_4.png"
              alt=""
              loading="lazy"
            />

            <span className="brand-divider" aria-hidden="true"></span>

            <img
              src="/imagens/imagens-padronizacao/assets/hub/LOGO_OTO_2.png"
              alt=""
              loading="lazy"
            />
          </div>

          {/* Navegação do rodapé */}
          <nav className="footer-nav" aria-label="Navegação do rodapé">
            <ul>
              <li>
                <a href="#quem-somos">Quem somos</a>
              </li>

              <li>
                <a href="#empresas">Nossas empresas</a>
              </li>

              <li>
                <button
                  className="hub-contact-trigger"
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="hub-contact-dialog"
                  onClick={() => contatoRef.current?.showModal()}
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>

          {/* Direitos autorais */}
          <small>© 2026, Todos os Direitos Reservados</small>

        </div>
      </footer>
      
      {/* Janela de contato do HUB */}
      <dialog
        ref={contatoRef}
        className="hub-contact-dialog"
        id="hub-contact-dialog"
        aria-labelledby="hub-contact-title"
        onClick={(evento) => {
          if (evento.target === evento.currentTarget) {
            contatoRef.current?.close();
          }
        }}
      >
        <div className="hub-contact-dialog-content">

          {/* Botão para fechar */}
          <form method="dialog">
            <button
              className="hub-contact-close"
              type="submit"
              aria-label="Fechar contatos"
            >
              ×
            </button>
          </form>

          <h2 id="hub-contact-title">
            Escolha uma equipe para chamar no WhatsApp
          </h2>

          {/* Opções de contato */}
          <div className="hub-contact-options">

            <a
              className="hub-contact-option pkz-contact-option"
              href="https://wa.me/5521972657266"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Playmakerz PKZ</span>
              <strong>+55 21 97265-7266</strong>
            </a>

            <a
              className="hub-contact-option oto-contact-option"
              href="https://wa.me/5521971067347"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Studio One to One</span>
              <strong>+55 21 97106-7347</strong>
            </a>

          </div>
        </div>
      </dialog>


    </div>
  );
}

export default HUB;