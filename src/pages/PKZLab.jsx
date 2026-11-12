import './pkz-lab.css';
import LandingPage from '../components/LandingPage.jsx';



const linksPKZ = [
  { texto: 'Início', href: '#home' },
  { texto: 'Sobre Nós', href: '#sobre' },
  { texto: 'Pacotes', href: '#planos' },
  { texto: 'Portal', href: '/', classe: 'hub-return' },
];

const planosPKZ = [
  {
    id: 'plano-performance',
    numero: 'pacote',
    nome: 'PERFORMANCE',
    descricao: 'Para quem busca uma evolução acelerada, com mais frequência de treinos e acompanhamento próximo para potencializar resultados!',
    beneficios: [
      '2 treinos por semana.',
      'Nutrição e psicologia com acompanhamento contínuo.',
      'Fisioterapia com foco em recovery e prevenção.',
      'Avaliação completa.',
    ],
  },
  {
    id: 'plano-desenvolvimento',
    numero: 'pacote',
    nome: 'DESENVOLVIMENTO',
    descricao: 'Para quem quer construir uma base sólida. Equilíbrio ideal entre treino, saúde e desenvolvimento progressivo.',
    beneficios: [
      '1 treino por semana.',
      'Nutrição e psicologia com acompanhamento contínuo.',
      'Fisioterapia com foco em recovery e prevenção.',
      'Avaliação completa.',
    ],
  },
];





const dadosPKZ = {
  classe: 'pkz',
  decoracaoFundo: {
    direita: '/imagens/imagens-padronizacao/assets/pkz/foguete_azul.svg',
  },
  
  header: {
    identidade: (
      <a
        className="landing-logo pkz-landing-logo"
        href="/"
        aria-label="Voltar ao HUB"
      >
        <img
          src="/imagens/imagens-padronizacao/assets/hub/PKZ_Horizontal_Branco.svg"
          alt="PKZ Lab"
        />
      </a>
    ),
    links: linksPKZ,
    
  },
  hero: {
    classe: 'oto-hero',
    tituloId: 'pkz-title',
    titulo: (
      <>
        ANTES DO ATLETA
        <br />
        <span>EXISTE A PESSOA</span>
      </>
    ),
    descricao: 'Cuidar da mente e da infância é o único caminho para construir um desempenho sustentável dentro de campo.',
    setaHref: '#sobre',
    setaLabel: 'Ir para Sobre a One to One',
  },
  sobre: {
    subtitulo: 'SOBRE A PLAYMAKERZ',
    tituloId: 'pkz-about-title',

    titulo: (
      <>
        Desenvolvemos atletas,
        <br />
        CONSTRUÍMOS <span className="brand-highlight">FUTURO.</span>
      </>
    ),

    foto: '/imagens/imagens-padronizacao/assets/pkz/Foto_Local.png',
    altFoto: 'Espaço esportivo da Playmakerz',

    paragrafos: [
      `O PKZ Lab é um laboratório de performance e avaliação física
    voltado para atletas mirins e jovens. Reunimos avaliação completa,
    treino de performance, nutrição, psicologia e fisioterapia em um
    só lugar, com profissionais que trabalham de forma integrada.`,

      `Aqui, cada criança e jovem passa por uma avaliação completa e
    recebe um acompanhamento de acordo com a sua fase e os seus
    objetivos. Para você, responsável, mais clareza sobre a evolução.
    Para o atleta, mais segurança para crescer e render.`,
    ],

    fechamento: 'Cada treino é um passo a mais na direção do seu sonho!',

    estatisticas: [
      { numero: '5+', rotulo: <>ANOS DE<br />EXPERIÊNCIA</> },
      { numero: '70+', rotulo: <>ALUNOS<br />MATRICULADOS</> },
      { numero: '10', rotulo: <>MODALIDADES<br />DIFERENTES</> },
    ],
  },
  diferenciais: {
    subtitulo: 'NOSSO DIFERENCIAL',
    tituloId: 'pkz-difference-title',
    titulo: <>Na PKZ evoluir não é treinar sozinho,<br />É CAMINHAR <span className="brand-highlight">JUNTO.</span></>,
    imagemSoma: '/imagens/imagens-padronizacao/assets/pkz/icone_mais_amarelo.svg',
    servicos: [
      {
        nome: 'Preparação',
        icone: '/imagens/imagens-padronizacao/assets/pkz/PKZ_ICON_1.png',
        descricao: 'Preparação física individualizada, respeitando as fases de desenvolvimento motora e psíquica de cada aluno.',
      },
      {
        nome: 'Cuidado',
        icone: '/imagens/imagens-padronizacao/assets/pkz/PKZ_ICON_2.png',
        descricao: 'Constrói desde cedo uma mentalidade profissional, com acompanhamento nutricional, psicológico e fisioterapêutico.',
      },
      {
        nome: 'Videoanálise',
        icone: '/imagens/imagens-padronizacao/assets/pkz/PKZ_ICON_3.png',
        descricao: 'Gravação dos treinos para analisar movimentos biomecânicos e mostrar para o atleta visualmente onde ele pode melhorar.',
      },
    ],
  },
  planos: {
    subtitulo: 'NOSSOS PACOTES',
    tituloId: 'pkz-plans-title',
    titulo: (
      <>
        Projetos para quem leva
        <br />
        O DESENVOLVIMENTO A <span className="brand-highlight">SÉRIO.</span>
      </>
    ),
    classe: 'oto-plans-pattern',
    variante: 'oto',
    itens: planosPKZ,
    
  },
  
  
  
  
  
};

function PKZLab() {
  return <LandingPage dados={dadosPKZ} />;
}

export default PKZLab;
