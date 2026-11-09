import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Sobre from './Sobre.jsx';
import Diferencial from './Diferencial.jsx';
import Planos from './Planos.jsx';
import Review from './Review.jsx';
import Contato from './Contato.jsx';
import FAQ from './FAQ.jsx';
import CTAFinal from './CTAFinal.jsx';
import Footer from './Footer.jsx';

// Compartilha as decorações sem acrescentar elementos quando não há imagens.
function AreaDecorada({ decoracao, classe, classeImagem, children }) {
  if (!decoracao) return children;

  return (
    <div className={classe}>
      {['direita', 'esquerda'].map((lado) => decoracao[lado] && (
        <img
          key={lado}
          className={`${classeImagem} ${classeImagem}--${lado === 'direita' ? 'right' : 'left'}`}
          src={decoracao[lado]}
          alt=""
          aria-hidden="true"
        />
      ))}
      {children}
    </div>
  );
}

// Estrutura compartilhada por as páginas; identidade e dados ficam nas páginas.
function LandingPage({ dados }) {
  return (
    <div className={dados.classe}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" />
      <Header {...dados.header} />
      <main id="main-content">
        <Hero {...dados.hero} />
        <AreaDecorada
          decoracao={dados.decoracaoFundo}
          classe="landing-decorated-area"
          classeImagem="site-bg-arrow"
        >
          <Sobre {...dados.sobre} />
          <Diferencial {...dados.diferenciais} />
        </AreaDecorada>
        <Planos {...dados.planos} />
        {dados.avaliacoes && <AreaDecorada
          decoracao={dados.decoracaoAvaliacoes}
          classe="landing-reviews-decorated"
          classeImagem="reviews-bg-arrow"
        >
          <Review {...dados.avaliacoes} />
          <Contato {...dados.contato} />
        </AreaDecorada>}
        {dados.faq && <FAQ {...dados.faq} />}
        {dados.chamadaFinal && <CTAFinal {...dados.chamadaFinal} />}
      </main>
      {dados.footer && <Footer {...dados.footer} />}
    </div>
  );
}

export default LandingPage;
