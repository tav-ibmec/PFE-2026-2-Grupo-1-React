import { useEffect, useRef } from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Sobre from '../components/Sobre.jsx';
import './fisioterapia.css';
import './hub.css';

const assets = '/imagens/imagens-padronizacao/assets/';

const linksHub = [
  { texto: 'Início', href: '#home' },
  { texto: 'Nossas Empresas', href: '#empresas' },
  { texto: 'Fisioterapia', href: '/fisioterapia' },
];

const empresas = [
  {
    id: 'pkz',
    nome: 'Playmakerz',
    imagem: assets + 'hub/FUNDO_PKZ_HUB.png',
    altImagem: 'Jovem atleta com uma bola de futebol',
    logo: assets + 'hub/PKZ_Horizontal_Branco.svg',
    paragrafos: [
      'A Playmakerz é um centro de desenvolvimento e performance que combina ciência, treinamento e acompanhamento individualizado para potencializar cada etapa da jornada esportiva.',
      'Um ambiente pensado para desenvolver capacidades, aprimorar o desempenho e construir bases sólidas para a evolução de jovens atletas.',
    ],
    botao: 'Conheça a PKZ',
    href: '/pkz-lab',
  },
  {
    id: 'oto',
    nome: 'One to One Studio',
    imagem: assets + 'hub/FUNDO_OTO_HUB.png',
    altImagem: 'Halteres sobre o fundo azul da One to One',
    logo: assets + 'hub/OneToOne_Branco.svg',
    paragrafos: [
      'One to One é uma experiência personalizada de saúde, treinamento e performance, criada para quem busca evoluir com acompanhamento próximo e estratégias pensadas para suas necessidades e objetivos.',
      'Um cuidado individualizado que integra movimento, saúde e qualidade de vida em uma jornada contínua de evolução.',
    ],
    botao: 'Conheça a One to One',
    href: '/one-to-one',
  },
];

// Os cartões institucionais têm estrutura distinta dos cartões de planos.
function EmpresaCard({ empresa }) {
  return (
    <article className="company-card" aria-labelledby={empresa.id + '-card-title'}>
      <div className={'company-image ' + empresa.id + '-card-image'}>
        <img className="company-photo" src={empresa.imagem} alt={empresa.altImagem} loading="lazy" />
        <h3 id={empresa.id + '-card-title'}>
          <img className="company-logo" src={empresa.logo} alt={empresa.nome} loading="lazy" />
        </h3>
      </div>
      <div className="company-copy">
        {empresa.paragrafos.map((texto) => <p key={texto}>{texto}</p>)}
      </div>
      <a className={'hub-button ' + empresa.id + '-button'} href={empresa.href}>
        {empresa.botao}
      </a>
    </article>
  );
}

export function HubLayout({ children, fisioterapia = false }) {
  const contatoRef = useRef(null);
  useEffect(() => {
    const destino = window.location.hash.slice(1);
    if (!destino) return;
    const quadro = requestAnimationFrame(() => {
      document.getElementById(destino)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(quadro);
  }, []);
  return (
    <div className={fisioterapia ? "hub fisioterapia-page" : "hub"}>
      <Header
        identidade={
          <div className="hub-header-brands">
            {/* Logo PKZ Lab */}
            <a
              className="hub-brand"
              href="/pkz-lab"
              aria-label="Conheça a PKZ Lab"
            >
              <img
                src="/imagens/imagens-padronizacao/assets/hub/PKZ_Horizontal_Branco.svg"
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
        links={fisioterapia ? [
          { texto: 'Início', href: '/' },
          { texto: 'Nossas Empresas', href: '/#empresas' },
          { texto: 'Fisioterapia', atual: true },
        ] : linksHub}
        onContato={() => contatoRef.current?.showModal()}
        contatoDestacado
        textoContato="Contatos"
      />
      {children}
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
              <li><a href={fisioterapia ? "/" : "#home"}>Início</a></li>
              <li>
                <a href={fisioterapia ? "/#quem-somos" : "#quem-somos"}>Quem somos</a>
              </li>

              <li>
                <a href={fisioterapia ? "/#empresas" : "#empresas"}>Nossas empresas</a>
              </li>

              <li>
                <a href="/fisioterapia">Fisioterapia</a>
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

export function ApresentacaoFisioterapia({ centralizada = false }) {
  return <Sobre
    id="fisioterapia"
    classe={centralizada ? 'fisio-about fisio-about-centered' : 'fisio-about'}
    imagemAposConteudo={centralizada}
    mostrarEstatisticas={false}
    subtitulo="FISIOTERAPIA"
    tituloId="fisio-about-title"
    titulo={<>Treine com segurança<br /><span>EVOLUA SEM LESÕES</span></>}
    foto={assets + 'hub/fisioterapia.png'}
    altFoto="Fisioterapeuta auxiliando um paciente em um alongamento da perna"
    paragrafos={[
      'A fisioterapia desempenha um papel fundamental na promoção da saúde, prevenção de lesões e recuperação dos movimentos. Por meio de uma abordagem individualizada, buscamos proporcionar mais mobilidade, autonomia e bem-estar, respeitando as necessidades e os objetivos de cada pessoa.',
      'Nosso compromisso é ajudar você a se movimentar melhor, superar limitações e conquistar mais qualidade de vida no dia a dia.',
    ]}
    acao={!centralizada && <a className="hub-button fisio-button" href="/fisioterapia">Saiba Mais</a>}
  />;
}

function HUB() {
  return <HubLayout>
      <main id="main-content">
        {/* Preserva a âncora antiga usada no rodapé e em links existentes. */}
        <div id="quem-somos">
          <Hero
            classe="oto-hero hub-hero"
            tituloId="hub-title"
            titulo={<>DIFERENTES FASES<br /><span>UM SÓ PROPÓSITO</span></>}
            descricao="Da formação esportiva de jovens atletas ao cuidado integral e à performance de adultos, unimos ciência, treinamento e saúde para desenvolver o potencial de cada aluno."
            setaHref="#empresas"
            setaLabel="Ir para Nossas empresas"
          />
        </div>
        <section className="hub-companies" id="empresas" aria-labelledby="companies-title">
          <div className="hub-company-decoration" aria-hidden="true">
            <img className="hub-rocket" src={assets + 'pkz/foguete_amarelo.svg'} alt="" />
            <img className="hub-arrows-outline" src={assets + 'one-to-one/SETAS_1.png'} alt="" />
            <img className="hub-arrows-solid" src={assets + 'one-to-one/SETAS_2.png'} alt="" />
          </div>
          <div className="hub-wrap">
            <header className="hub-companies-heading">
              <p className="hub-kicker">NOSSAS EMPRESAS</p>
              <h2 id="companies-title">
                Do desenvolvimento infantil à <span>PERFORMANCE ADULTA.</span>
              </h2>
              <p className="hub-companies-intro">
                Duas empresas, uma mesma proposta: integrar desenvolvimento, saúde e movimento.
                Com treinamento e cuidado individualizado, acompanhamos cada fase da vida,
                promovendo evolução e bem-estar.
              </p>
            </header>
            <div className="company-grid">
              {empresas.map((empresa) => <EmpresaCard key={empresa.id} empresa={empresa} />)}
            </div>
          </div>
        </section>
        <ApresentacaoFisioterapia />
      </main>
  </HubLayout>;
}

export default HUB;


