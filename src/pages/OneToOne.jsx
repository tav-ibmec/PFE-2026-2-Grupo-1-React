import './one-to-one.css';
import LandingPage from '../components/LandingPage.jsx';

// A One to One usa a mesma estrutura de componentes da PKZ.

const imagem = '/imagens/imagens-padronizacao/assets/one-to-one/';
const iconeContato = '/imagens/icones/contact-icons/';

const linksOneToOne = [
  { texto: 'Início', href: '#home' },
  { texto: 'Sobre Nós', href: '#sobre' },
  { texto: 'Planos', href: '#planos' },
  { texto: 'Contato', href: '#contato' },
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

const avaliacoesOneToOne = [
  {
    nome: 'Danielle M.',
    inicial: 'D',
    texto: `"Recebi indicação de uma amiga e a proposta de ter um personal me acompanhando
      me dá segurança de que não vou me machucar e que vou fazer tudo direitinho.
      e o treino não cai na rotina!"`,
  },
  {
    nome: 'Mônica T.',
    inicial: 'M',
    texto: `"Professores excelentes, fisioterapia de primeira e treinos dinâmicos.
      A integração entre o personal e o fisioterapeuta me dá a segurança de treinar, 
      Além disso, ter horário marcado me força a ir e não faltar, o que é muito bom."`,
  },
  {
    nome: 'Paulo F.',
    inicial: 'P',
    texto: `"Qualidade dos profissionais e atendimento mais individualizado.
      Ter uma equipe que inclui nutricionista e fisioterapeuta é diferenciado."`,
  },
  {
    nome: 'Wellington E.',
    inicial: 'W',
    texto: `"Estrutura top e proposta personalizada. Os equipamentos são bons 
      e o ambiente tranquilo. Já consigo ver resultados com menos de 1 mês de acompanhamento."`,
  },
  {
    nome: 'Vanessa S.',
    inicial: 'V',
    texto: `"Equipe de ponta + proposta personalizada. Saber que estou sendo cuidada de forma global, 
      alinhando meus treinos à minha dieta com o nutricionista, faz com que o investimento no centro de treinamento valha cada centavo!"`,
  },
];

const perguntasOneToOne = [
  {
    pergunta: 'Como funciona o acompanhamento multidisciplinar?',
    resposta: `O Studio reúne personal trainer, fisioterapia e nutrição em um trabalho
      integrado. Cada plano descreve frequências e avaliações incluídas; confirme
      com a equipe como os profissionais participam do plano escolhido.`,
  },
  {
    pergunta: 'Nunca treinei antes. Esse espaço é para mim?',
    resposta: `Sim. Os treinos são ajustados aos seus objetivos, necessidades e momento
      atual. Informe sua experiência e qualquer limitação ao profissional para que
      a rotina e a intensidade sejam definidas de forma individual.`,
  },
  {
    pergunta: 'Como funciona a questão dos horários?',
    resposta: `Escolha uma data para consultar os horários e as vagas registradas neste
      navegador. A agenda é demonstrativa: os pedidos ficam salvos apenas neste
      navegador e não notificam a equipe. Confirme disponibilidade pelos contatos.`,
  },
  {
    pergunta: 'Sinto dores ou tenho uma lesão antiga. Posso treinar?',
    resposta: `A página inclui fisioterapia no atendimento integrado, mas não avalia
      lesões por este formulário. Relate a dor ou o histórico à equipe antes de
      começar e siga a orientação do profissional responsável.`,
  },
  {
    pergunta: 'O que acontece se eu tiver um imprevisto e precisar cancelar ou remarcar meu horário?',
    resposta: `A página não informa prazo nem política de cancelamento ou remarcação.
      Confirme essas condições com a equipe antes de agendar.`,
  },
];

const dadosOneToOne = {
  classe: 'oto',
  decoracaoFundo: {
    direita: `${imagem}SETAS_1.png`,
    esquerda: `${imagem}SETAS_2.png`,
  },
  decoracaoAvaliacoes: {
    direita: `${imagem}SETAS_2.png`,
    esquerda: `${imagem}SETAS_1.png`,
  },
  header: {
    identidade: (
      <a className="landing-logo oto-landing-logo" href="/" aria-label="Voltar ao HUB">
        <img src={`${imagem}OneToOne.svg`} alt="One to One Studio" />
      </a>
    ),
    links: linksOneToOne,
    linkAgendamento: '#agendar',
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
    botaoFinal: {
      texto: 'Agende sua aula',
      href: '#agendar',
    },
  },
  avaliacoes: {
    subtitulo: 'AVALIAÇÕES',
    tituloId: 'oto-reviews-title',
    titulo: <>
      Perguntamos aos nossos alunos.<br />
      ELES <span className="brand-highlight">AVALIARAM.</span>
    </>,
    introducao: [
      `O que torna o Studio One to One diferente não é apenas a estrutura completa
      ou os planos personalizados. É o cuidado real, a proximidade dos professores e a sensação de treinar em um espaço onde cada detalhe foi pensado para você.`,
      'Nossos alunos contam por que escolheram estar aqui.',
    ],
    itens: avaliacoesOneToOne,
  },
  contato: {
    subtitulo: 'ENTRE EM CONTATO',
    tituloId: 'oto-contact-title',
    titulo: <>Pronto para <span className="nowrap">se tornar</span><br />SUA <span>MELHOR VERSÃO?</span></>,
    decoracaoLateral: `${imagem}SETAS_1.png`,
    chaveReservas: 'reservas',
    paragrafos: [
      'Chegou o momento de investir em um acompanhamento que realmente entende o seu corpo e a sua rotina.',
      `Não deixe a sua saúde para a próxima segunda-feira. Mande uma mensagem para
      a nossa equipe agora mesmo e dê o primeiro passo para construir a sua melhor versão!`,
    ],
    mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4550638086203!2d-43.31411010000001!3d-23.0070579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0b94203cd57%3A0x2b7bfd9f2b62f545!2sAv.%20Armando%20Lombardi%2C%20949%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022640-020!5e0!3m2!1spt-BR!2sbr!4v1794102805512!5m2!1spt-BR!2sbr',
    detalhes: [
      {
        rotulo: 'Endereço',
        texto: 'Av. Armando Lombardi, 949 - Barra da Tijuca',
        icone: `${iconeContato}oto-address.png`,
        href: 'https://www.google.com/maps/search/?api=1&query=Av.%20Armando%20Lombardi%2C%20949%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ',
        novaAba: true,
      },
      {
        rotulo: 'Telefone / WhatsApp',
        texto: '+55 21 97106-7347',
        icone: `${iconeContato}oto-phone.png`,
        href: 'https://wa.me/5521971067347',
        novaAba: true,
      },
      {
        rotulo: 'E-mail',
        texto: 'one.to.one@gmail.com',
        icone: `${iconeContato}oto-email.png`,
        href: 'mailto:one.to.one@gmail.com?subject=Contato%20pelo%20site%20-%20One%20to%20One',
      },
    ],
  },
  faq: {
    subtitulo: 'FAQ',
    tituloId: 'oto-faq-title',
    titulo: <>Perguntas <span className="brand-highlight">Frequentes.</span></>,
    perguntas: perguntasOneToOne,
  },
  chamadaFinal: {
    tituloId: 'oto-closing-title',
    titulo: 'SUA MELHOR VERSÃO COMEÇA HOJE.',
    texto: 'Chega de deixar para depois. Mude seus hábitos.',
    classe: 'oto-closing oto-plans-pattern',
    botoes: [
      {
        texto: 'Agende sua aula',
        href: '#agendar',
        classe: 'plans-bottom-cta'
      }
    ],
  },
  footer: {
    classe: 'oto-footer',
    logo: `${imagem}OneToOne.svg`,
    altLogo: 'One to One Studio',
    descricao: [
      'Treino, Nutrição e Fisioterapia.',
      'O acompanhamento premium que o seu corpo merece, em um ambiente pensado exclusivamente para os seus objetivos.',
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
          { texto: 'Planos', href: '#planos' },
          { texto: 'Avaliações', href: '#avaliacoes' },
          { texto: 'Contato', href: '#contato' },
          { texto: 'FAQ', href: '#faq' },
        ],
      },
      {
        titulo: 'Planos',
        links: [
          { texto: 'Express', href: '#plano-express' },
          { texto: 'One Move', href: '#plano-one-move' },
          { texto: 'One Power', href: '#plano-one-power' },
          { texto: 'Be the One', href: '#plano-be-the-one' },
        ],
      },
      {
        titulo: 'Redes Sociais',
        links: [
          { texto: 'Instagram', href: 'https://www.instagram.com/studioonetoone?psln=MTIwejJtYmk3MGQ5cA==', novaAba: true },
          { texto: 'Facebook', href: 'https://www.facebook.com.br/', novaAba: true },
          { texto: 'TikTok', href: 'https://www.tiktok.com/pt-BR', novaAba: true },
        ],
      },
    ],
  },
};

function OneToOne() {
  return <LandingPage dados={dadosOneToOne} />;
}

export default OneToOne;
