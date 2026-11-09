# PFE-2026-2-Grupo-1-React

Documentação e código da AP2 do Projeto Front-End do IBMEC, desenvolvidos pelo Grupo 1, turma de sexta-feira.

O projeto consiste na reconstrução em React do hub institucional e das páginas das empresas PKZ Lab e Studio One to One, desenvolvidos na AC Vanilla, com a inclusão de uma nova página de Fisioterapia.

## Sobre o trabalho

O projeto mantém a proposta da AC Vanilla: uma solução institucional que conecta as empresas por meio de uma página inicial, permitindo que os usuários acessem as informações específicas de cada marca. Na AP2, o site foi convertido para React, com componentes reutilizáveis entre as páginas, e a interface foi aproximada do protótipo do grupo.

- **Proposta do site:** página inicial (Início) para escolha entre as páginas e uma landing page para a PKZ Lab, para o Studio One to One e para a Fisioterapia, com apresentação, diferenciais, planos, avaliações, FAQ, chamada final e contato.
- **Tecnologias:** React, JSX, CSS3 e JavaScript ES6, com componentes reutilizáveis e os dados de cada página separados em arquivos próprios.
- **Alterações em relação à AC Vanilla:** troca de "HUB" por "Início", cabeçalho fixo, retirada dos botões "Matricule-se" do cabeçalho e dos planos e ajuste do tamanho de imagens e fontes.
- **Identidade visual:** proposta profissional e minimalista, mantendo a padronização de cores, tipografia, componentes e estilos da AC Vanilla.
- **Público-alvo:** adultos, crianças, jovens atletas e seus responsáveis, conforme os serviços de cada empresa.
- **Entrega:** conversão das páginas para React, criação da página de Fisioterapia, integração, testes e publicação na Vercel, com prazo em 13/11/2026.

## As empresas

### PKZ Lab (Playmakerz)

Laboratório de performance e avaliação física voltado à formação de jovens atletas. A proposta integra ciência, tecnologia e performance esportiva, com foco no desenvolvimento esportivo desde as primeiras etapas da formação e na orientação de atletas e responsáveis.

### Studio One to One

Espaço de atendimento integrado que reúne treinamento personalizado, fisioterapia e nutrição. A proposta prioriza o acompanhamento individualizado, a saúde, a reabilitação e as necessidades específicas de cada aluno.

### Fisioterapia

Nova página incluída na AP2 e acessível pelo Início. Segue as mesmas seções e o mesmo padrão visual das outras landing pages, reaproveitando os componentes do projeto.

## Equipe

**Professor:** Thiago Marcondes.

| Integrante | Papel e entregas na AP2 |
|---|---|
| Rebeca | HUB: página inicial, estilos e funcionalidades do Início (`HUB.jsx` e `hub.css`). |
| Yasmin | Arquitetura e integração: estrutura compartilhada das landing pages, rotas e organização dos dados (`LandingPage.jsx`, `PKZLab.jsx`, `OneToOne.jsx`, `App.jsx` e `src/data/`). |
| João | Estrutura visual: cabeçalho fixo, Hero, Sobre Nós e Diferenciais (`Header.jsx`, `Hero.jsx`, `AboutSection.jsx` e `DifferenceSection.jsx`). |
| Manuela | Planos e Avaliações: componentes dos pacotes, planos e depoimentos (`PlanCard.jsx`, `PlansSection.jsx`, `ReviewCard.jsx` e `ReviewsSection.jsx`). |
| Pedro | FAQ, Chamada Final e Footer: perguntas frequentes, CTAs finais e rodapés das empresas (`FAQ.jsx`, `ClosingCTA.jsx` e `Footer.jsx`). |
| Lucas | Contato e Agendamento: painel de contato, agenda, reservas e modal de confirmação (`ContactSection.jsx`, `Agendamento.jsx` e `Agendamento.css`), página de Fisioterapia e atualização do Início. |

## Organização do trabalho (Scrum)

A equipe organizou o desenvolvimento em quatro sprints, entre 06/11/2026 e 09/11/2026, com acompanhamento das atividades por meio de registros de Scrum e versionamento no GitHub. Cada integrante ficou responsável pelos arquivos da própria função, e a ordem dos envios foi organizada para que dois integrantes não alterassem o mesmo arquivo ao mesmo tempo.

- **Sprint 1:** início do projeto em React, divisão das atribuições e registro do prazo, da página de Fisioterapia e das alterações solicitadas.
- **Sprint 2:** definição dos responsáveis por função, estrutura do projeto, rotas, padrão de componentes e componentes principais.
- **Sprint 3:** seções das landing pages, alterações solicitadas, migração dos estilos para os componentes e início da página de Fisioterapia.
- **Sprint 4:** integração das páginas, conclusão da página de Fisioterapia, testes, correções e publicação na Vercel.

Os registros e documentos de acompanhamento estão organizados na pasta `scrum 3/`.

## Estrutura do repositório

| Pasta ou arquivo | Descrição |
|---|---|
| `Documentos/` | Materiais de planejamento e documentação do projeto trazidos do repositório anterior, incluindo Documento de Visão, 5W2H, AHTs, protótipos e outros registros, conforme disponíveis no repositório. |
| `codigo-react/` | Código-fonte do site em React. |
| `codigo-react/src/App.jsx` | Configuração das rotas das páginas. |
| `codigo-react/src/components/` | Componentes reutilizados entre as páginas, como cabeçalho, seções, planos, avaliações, FAQ, rodapé e contato. |
| `codigo-react/src/data/` | Informações de cada página, separadas dos componentes. |
| `codigo-react/src/assets/` | Recursos visuais utilizados no site. |
| `scrum 3/scrum-3/` | Registros de acompanhamento, planejamento e documentação das sprints e dailies. |
| `README.md` | Apresentação do projeto e orientação sobre a organização do repositório. |

## Versionamento e publicação

O projeto utiliza Git e GitHub para o controle de versão, colaboração entre os integrantes e acompanhamento das alterações.

O site é publicado na Vercel, como parte da entrega da AP2. A disponibilidade do site publicado deve ser conferida no próprio repositório.

## Considerações finais

A AP2 React reúne as páginas institucionais da PKZ Lab, do Studio One to One e da Fisioterapia em uma estrutura integrada e baseada em componentes. O trabalho contempla a conversão do código para React, a aproximação da interface ao protótipo, as funcionalidades implementadas e a documentação das atividades, buscando manter a consistência entre as páginas e facilitar a manutenção do projeto.