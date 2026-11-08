# Planejamento do projeto

## 1. Objetivo do projeto
Reconstruir em React a solução institucional desenvolvida na versão Vanilla, que conecta PKZ Lab e Studio One to One por meio de uma página inicial, agora chamada Início, e incluir uma nova página de Fisioterapia. As páginas apresentam a empresa, os diferenciais, os planos, as avaliações, o FAQ e o contato. O projeto também deve aproximar a interface do protótipo e aplicar as alterações solicitadas. O site será publicado na Vercel, com entrega prevista para 13/11/2026.

## 2. Divisão das atividades da equipe
| Integrante | Atividade realizada |
|---|---|
| Rebeca | 1 — HUB: página inicial, estilos e funcionalidades do HUB (`HUB.jsx` e `hub.css`), incluindo a troca de "HUB" por "Início". |
| Yasmin | 2 — Arquitetura e integração: estrutura compartilhada das landing pages, rotas e organização dos dados (`LandingPage.jsx`, `PKZLab.jsx`, `OneToOne.jsx`, `App.jsx` e `src/data/`). |
| João | 3 — Estrutura visual: Header fixo, Hero, Sobre Nós e Diferenciais (`Header.jsx`, `Hero.jsx`, `AboutSection.jsx` e `DifferenceSection.jsx`). |
| Manuela | 4 — Planos e Avaliações: componentes dos pacotes, planos e depoimentos (`PlanCard.jsx`, `PlansSection.jsx`, `ReviewCard.jsx` e `ReviewsSection.jsx`). |
| Pedro | 5 — FAQ, Chamada Final e Footer: perguntas frequentes, CTAs finais e rodapés das empresas (`FAQ.jsx`, `ClosingCTA.jsx` e `Footer.jsx`). |
| Lucas | 6 — Contato e Agendamento: painel de contato, agenda, reservas e modal de confirmação (`ContactSection.jsx`, `Agendamento.jsx` e `Agendamento.css`); nova página de Fisioterapia e atualização do HUB. |

As frentes de trabalho definidas em 06/11/2026 foram organizadas em seis funções, com os arquivos de cada uma, e o responsável por cada função foi definido em 07/11/2026. Os envios foram organizados para que dois integrantes não alterem o mesmo arquivo ao mesmo tempo. Cada integrante revisa a parte que desenvolveu.

## 3. Sprints e entregas

### Sprint 1 — Início do projeto React e definição das atribuições
**Objetivo:** iniciar o projeto em React, dividir as atribuições e alinhar o prazo e as mudanças solicitadas.  
**Entregas relacionadas:** documentos do repositório anterior no repositório React, divisão das atribuições em frentes de trabalho e início da estrutura do projeto (06/11).

### Sprint 2 — Responsáveis, estrutura e componentes principais
**Objetivo:** definir o responsável por cada função, organizar a ordem dos envios, criar a estrutura do projeto e desenvolver os componentes principais.  
**Entregas relacionadas:** responsáveis definidos e ordem dos envios organizada; `hub.css` e troca de "HUB" por "Início" (Rebeca); estrutura, rotas e padrão de nomes e props (Yasmin); Header fixo, menu do celular e Hero (João); cards de planos e avaliações (Manuela); Footer (Pedro); seção de contato (Lucas) (07/11).

### Sprint 3 — Seções, Fisioterapia e fidelidade ao protótipo
**Objetivo:** concluir as seções das landing pages, iniciar a página de Fisioterapia e aproximar a interface do protótipo.  
**Entregas relacionadas:** arquivos de dados (Yasmin), Sobre Nós, Diferenciais e Header sem "Matricule-se" (João), planos e avaliações sem "Matricule-se" (Manuela), FAQ e Chamada Final (Pedro), início da página de Fisioterapia (Lucas), estilos migrados e ajustes de imagens e fontes (08/11).

### Sprint 4 — Integração, testes, publicação e entrega
**Objetivo:** integrar as páginas, testar, publicar na Vercel e preparar a entrega.  
**Entregas relacionadas:** páginas integradas (Yasmin), página de Fisioterapia concluída e incluída no HUB (Lucas), testes, correções, publicação na Vercel e documentação final (09/11). O agendamento permanece em aberto até a decisão do professor.

## 4. Sprint Planning — Planejamento da Sprint
**Objetivo proposto (Sprint 4):** concluir o projeto React, integrando e testando o Início, a PKZ Lab, a One to One e a Fisioterapia, corrigindo os problemas encontrados e publicando o site na Vercel antes do prazo de 13/11/2026.

- Integrar as quatro páginas com os componentes desenvolvidos (Yasmin).
- Concluir a página de Fisioterapia e incluí-la no HUB, depois do envio final da Rebeca (Lucas).
- Testar links, rotas e responsividade, comparando com a versão Vanilla e com o protótipo.
- Corrigir as diferenças encontradas nos testes.
- Revisar a acessibilidade básica.
- Publicar o site na Vercel e testar o link.
- Manter o agendamento isolado, aguardando a decisão do professor (Lucas).
- Atualizar o Product Backlog e o registro de impedimentos e riscos.