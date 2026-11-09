import './one-to-one.css';
import LandingPage from '../components/LandingPage.jsx';

// Dados e identidade visual da One to One.

const imagem = '/imagens/imagens-padronizacao/assets/one-to-one/';


const linksOneToOne = [
  { texto: 'Início', href: '#home' },
  { texto: 'Sobre Nós', href: '#sobre' },
  { texto: 'Planos', href: '#planos' },
  { texto: 'Portal', href: '/', classe: 'hub-return' },
];

const planosOneToOne = [
  {
    id: 'plano-express',
    numero: '01',
    nome: 'Express',
    descricao: 'Para quem quer treinar com liberdade e manter a consistência.',
    beneficios: [
      'Treinos de 30min até 5x na semana.',
      'Avaliação inicial com fisioterapeuta.',
      'Avaliação mensal com nutricionista.',
    ],
  },
  {
    id: 'plano-one-move',
    numero: '02',
    nome: 'One Move',
    descricao: 'Para quem busca equilíbrio entre rotina, acompanhamento e evolução.',
    beneficios: [
      'Treinos de 60min até 6x na semana.',
      'Avaliação inicial com fisioterapeuta.',
      'Avaliação mensal com nutricionista.',
    ],
  },
  {
    id: 'plano-one-power',
    numero: '03',
    nome: 'One Power',
    descricao: 'Para quem está pronto para elevar seu nível de performance.',
    beneficios: [
      'Treinos de 60min até 6x na semana.',
      'Avaliação inicial com fisioterapeuta.',
      'Avaliação mensal com nutricionista.',
      'Planejamento alimentar personalizado.',
    ],
    destaque: true,
  },
  {
    id: 'plano-be-the-one',
    numero: '04',
    nome: 'Be the One',
    descricao: 'Para quem busca equilíbrio entre rotina, acompanhamento e evolução.',
    beneficios: [
      'Treinos de 60min até 6x na semana, com até 2 agendamentos por dia.',
      'Avaliação inicial com fisioterapeuta.',
      'Avaliação mensal com nutricionista.',
      'Planejamento alimentar personalizado.',
    ],
  },
];





const dadosOneToOne = {
  classe: 'oto',
  decoracaoFundo: {
    direita: `${imagem}SETAS_1.png`,
    esquerda: `${imagem}SETAS_2.png`,
  },
  
  header: {
    identidade: (
      <a className="landing-logo oto-landing-logo" href="/" aria-label="Voltar ao HUB">
        <img src={`${imagem}OneToOne.svg`} alt="One to One Studio" />
      </a>
    ),
    links: linksOneToOne,
    
  },
  hero: {
    classe: 'oto-hero',
    tituloId: 'oto-title',
    titulo: (
      <>
        AMPLIE SEU
        <br />
        <span>POTENCIAL</span>
      </>
    ),
    descricao: 'Com dedicação, movimento e acompanhamento adequado, você desenvolve força, resistência e confiança para superar seus limites.',
    setaHref: '#sobre',
    setaLabel: 'Ir para Sobre a One to One',
  },
  sobre: {
    subtitulo: 'SOBRE A ONE TO ONE',
    tituloId: 'oto-about-title',
    titulo: <>Seu treino,<br />NOSSA <span className="brand-highlight">PRIORIDADE.</span></>,
    foto: `${imagem}IMG_0080.png`,
    altFoto: 'Espaço de treinamento da One to One',
    paragrafos: [
      `O Studio One to One é um espaço com um modelo exclusivo de atendimento integrado,
      que une treinamento personalizado, fisioterapia e nutrição. Somos um time integrado
      de profissionais que trabalha em conjunto para oferecer um cuidado completo e
      individualizado a cada pessoa.`,
      `Aqui, o aluno é acompanhado por personal trainers com suporte individual ou em
      grupos reduzidos de até 03 pessoas, garantindo um atendimento próximo, seguro e
      adaptado às suas necessidades.`,
    ],
    fechamento: 'Seu treino, nossa prioridade.',
    estatisticas: [
      { numero: '10+', rotulo: <>ANOS DE<br />EXPERIÊNCIA</> },
      { numero: '200+', rotulo: <>ALUNOS<br />MATRICULADOS</> },
      { numero: '15', rotulo: <>PROFESSORES<br />DISPONÍVEIS</> },
    ],
  },
  diferenciais: {
    subtitulo: 'NOSSO DIFERENCIAL',
    tituloId: 'oto-difference-title',
    titulo: <>Saúde, corpo e mente em equilíbrio.<br />ISSO É <span className="brand-highlight">ONE TO ONE.</span></>,
    imagemSoma: `${imagem}icone_mais_azul.svg`,
    servicos: [
      {
        nome: 'Treino',
        icone: `${imagem}OTO_ICON_1.png`,
        descricao: 'Treinos adaptados aos seus objetivos, necessidades e momento, com acompanhamento próximo.',
      },
      {
        nome: 'Nutrição',
        icone: `${imagem}OTO_ICON_2.png`,
        descricao: 'Estratégias alimentares personalizadas para complementar o treino e potencializar seus resultados.',
      },
      {
        nome: 'Fisioterapia',
        icone: `${imagem}OTO_ICON_3.png`,
        descricao: 'Avaliação e acompanhamento para treinar com segurança, prevenir lesões e potencializar sua evolução.',
      },
    ],
  },
  planos: {
    subtitulo: 'NOSSOS PLANOS',
    tituloId: 'oto-plans-title',
    titulo: <>Um plano para <span className="nowrap">cada fase</span><br />DA SUA <span className="brand-highlight">JORNADA.</span></>,
    classe: 'oto-plans-pattern',
    variante: 'oto',
    itens: planosOneToOne,
    
  },
  
  
  
  
  
};

function OneToOne() {
  return <LandingPage dados={dadosOneToOne} />;
}

export default OneToOne;
