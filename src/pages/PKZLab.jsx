import './pkz-lab.css';
import LandingPage from '../components/LandingPage.jsx';

const iconeContato = '/imagens/icones/contact-icons/';

const linksPKZ = [
  { texto: 'Início', href: '#home' },
  { texto: 'Sobre Nós', href: '#sobre' },
  { texto: 'Pacotes', href: '#planos' },
  { texto: 'Contato', href: '#contato' },
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

const avaliacoesPKZ = [
  {
    nome: 'Patricia K., mãe do Enzo (10 anos)',
    inicial: 'P',
    texto: `"A mudança na velocidade e na confiança do meu filho foi absurda. A equipe cuida de tudo com muito carinho e ciência."`,
  },
  {
    nome: 'Gabriel T., atleta da PKZ (12 anos)',
    inicial: 'G',
    texto: `"Os treinos no CT são muito diferentes da escolinha. A gente treina agilidade, força e ajusta o movimento exato do passe e do chute. Sinto que estou muito mais confiante quando entro em campo nas competições."`,
  },
  {
    nome: 'Roberto Q., pai da Aline (8 anos)',
    inicial: 'R',
    texto: `"Metodologia impecável. A gente vê a evolução física e técnica a cada semana, sem queima de etapas."`,
  },
  {
    nome: 'Juliana W., mãe do Caíque (9 anos)',
    inicial: 'J',
    texto: `"A videoanálise abriu os olhos do meu filho. Ele passou a entender o jogo de verdade, não apenas correr atrás da bola."`,
  },
  {
    nome: 'Brenda P., atleta da PKZ (14 anos)',
    inicial: 'B',
    texto: `"Os treinos são intensos e dinâmicos! Aprendi a dominar e orientar o corpo antes de receber a bola. É o meu dia favorito da semana."`,
  },
];

const perguntasPKZ = [
  {
    pergunta: 'Para qual faixa etária os treinamentos são indicados?',
    resposta: `O PKZ Lab atende atletas mirins e jovens. Como a preparação respeita a fase de desenvolvimento, a equipe precisa conhecer a idade, a modalidade e os objetivos antes de confirmar qual opção é adequada.`,
  },
  {
    pergunta: 'O treino no CT substitui os treinos do clube ou da escolinha do meu filho?',
    resposta: `O PKZ Lab oferece preparação física, avaliação e acompanhamento integrado. A proposta é complementar a rotina esportiva, não substituir automaticamente o clube ou a escolinha; frequência e objetivos devem ser alinhados com o calendário do atleta.`,
  },
  {
    pergunta: 'Meu filho não joga em nenhum clube, ele pode treinar no CT?',
    resposta: `Não é necessário ter vínculo com um clube para conversar com a equipe. Informe a modalidade, a experiência e os objetivos para que a PKZ avalie se há uma opção adequada para o jovem.`,
  },
  {
    pergunta: 'Como funciona a avaliação inicial do atleta?',
    resposta: `Nossa avaliação é completa e o acompanhamento ajustado à fase e aos objetivos do atleta. Antes de começar, a família pode confirmar com a equipe quais aspectos serão avaliados e como os resultados orientarão o plano.`,
  },
  {
    pergunta: 'Como os pais acompanham a evolução do atleta?',
    resposta: `O acompanhamento reúne preparação física, nutrição, psicologia e fisioterapia. A família pode conversar com a equipe sobre metas e evolução do jovem`,
  },
];

const dadosPKZ = {
  classe: 'pkz',
  decoracaoFundo: {
    direita: '/imagens/imagens-padronizacao/assets/pkz/foguete_azul.svg',
  },
  decoracaoAvaliacoes: {
    esquerda: '/imagens/imagens-padronizacao/assets/pkz/foguete_amarelo.svg',
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
    linkAgendamento: '#agendar',
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
        O DESENVOLVIMENTO À <span className="brand-highlight">SÉRIO.</span>
      </>
    ),
    classe: 'oto-plans-pattern',
    variante: 'oto',
    itens: planosPKZ,
    botaoFinal: {
      texto: 'Agende sua aula',
      href: '#agendar',
    },
  },
  avaliacoes: {
    subtitulo: 'AVALIAÇÕES',
    tituloId: 'pkz-reviews-title',
    titulo: <>
      A confiança de pais que buscam <br />
      O MELHOR <span className="brand-highlight">PARA SEUS FILHOS.</span>
    </>,
    introducao: [
      `Por trás de cada conquista em campo, existe uma família que acreditou e acompanhou o processo.
      Confira o que os pais e jovens atletas dizem sobre a transformação física, técnica e mental que vivenciam no nosso CT.`,
      'Mais do que palavras, o nosso método é comprovado na prática.',
    ],
    itens: avaliacoesPKZ,
  },
  contato: {
    subtitulo: 'ENTRE EM CONTATO',
    tituloId: 'pkz-contact-title',
    titulo: <>Incentive seu filho a <span className="nowrap">se tornar um </span><span>ATLETA!</span></>,
    chaveReservas: 'reservas-pkz',
    paragrafos: [
      'Chegou o momento de investir no futuro esportivo do seu filho. Aqui ele será tratado com atenção e cuidado.',
      `Escolha um horário ou entre em contato, e traga seu filho para uma aula experimental.`,
    ],
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4550638086203!2d-43.31411010000001!3d-23.0070579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0b94203cd57%3A0x2b7bfd9f2b62f545!2sAv.%20Armando%20Lombardi%2C%20949%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022640-020!5e0!3m2!1spt-BR!2sbr!4v1794102805512!5m2!1spt-BR!2sbr',
    detalhes: [
      {
        rotulo: 'Endereço',
        texto: 'Av. Armando Lombardi, 949 - Barra da Tijuca',
        icone: `${iconeContato}pkz-address.png`,
        href: 'https://www.google.com/maps/search/?api=1&query=Av.%20Armando%20Lombardi%2C%20949%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ',
        novaAba: true,
      },
      {
        rotulo: 'Telefone / WhatsApp',
        texto: '+55 21 97106-7347',
        icone: `${iconeContato}pkz-phone.png`,
        href: 'https://wa.me/5521971067347',
        novaAba: true,
      },
      {
        rotulo: 'E-mail',
        texto: 'pkz.lab@gmail.com',
        icone: `${iconeContato}pkz-email.png`,
        href: 'mailto:pkz.lab@gmail.com.com?subject=Contato%20pelo%20site%20-%20One%20to%20One',
      },
    ],
  },
  faq: {
    subtitulo: 'FAQ',
    tituloId: 'pkz-faq-title',
    titulo: <>Perguntas <span className="brand-highlight">Frequentes.</span></>,
    perguntas: perguntasPKZ,
  },
  chamadaFinal: {
    tituloId: 'pkz-closing-title',
    titulo: 'O FUTURO DO SEU FILHO COMEÇA HOJE!',
    texto: 'Transformamos o talento do seu filho em alta performance.',
    classe: 'oto-closing pkz-closing-pattern',
    botoes: [
      {
        texto: 'Agende sua aula',
        href: '#agendar',
        classe: 'plans-bottom-cta'
      }
    ],
  },
  footer: {
    classe: 'pkz-footer',
    logo: '/imagens/imagens-padronizacao/assets/hub/PKZ_Horizontal_Branco.svg',
    altLogo: 'Playmakerz',
    descricao: [
      <>Metodologia • Treino •<br />Acompanhamento • Avaliação</>,
      <>Formamos pessoas.<br />Desenvolvemos atletas.<br />Construímos futuros.</>,
    ],
    horario: <>Seg a Sex: 8h - 22h<br />Sab e Dom: 8h - 16h</>,
    copyright: '© 2026, Todos os Direitos Reservados',
    grupos: [
      {
        titulo: 'Explorar',
        links: [
          { texto: 'Home', href: '#home' },
          { texto: 'Sobre Nós', href: '#sobre' },
          { texto: 'Diferencial', href: '#diferencial' },
          { texto: 'Pacotes', href: '#planos' },
          { texto: 'Avaliações', href: '#avaliacoes' },
          { texto: 'Contato', href: '#contato' },
          { texto: 'FAQ', href: '#faq' },
        ],
      },
      {
        titulo: 'Pacotes',
        links: [
          { texto: 'Performance', href: '#plano-performance' },
          { texto: 'Desenvolvimento', href: '#plano-desenvolvimento' },
        ],
      },
      {
        titulo: 'Redes Sociais',
        links: [
          { texto: 'Instagram', href: 'https://www.instagram.com/', novaAba: true },
          { texto: 'Facebook', href: 'https://www.facebook.com/', novaAba: true },
          { texto: 'TikTok', href: 'https://www.tiktok.com/', novaAba: true },
        ],
      },
    ],
  },
};

function PKZLab() {
  return <LandingPage dados={dadosPKZ} />;
}

export default PKZLab;
