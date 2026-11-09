import { useRef, useState } from 'react';
import './Agendamento.css';

// Dias e horários do agendamento original
const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const horas = [
  '07:00', '08:00', '09:00',
  '10:00', '11:00', '17:00',
  '18:00', '19:00', '20:00',
];

const totalSemanas = 4;

// Carrega reservas que já existem neste navegador
function carregarReservas(chave) {
  try {
    const salvas = JSON.parse(localStorage.getItem(chave));
    return Array.isArray(salvas) ? salvas : [];
  } catch {
    return [];
  }
}

// Formata uma data como DD/MM/AAAA
function formatar(data) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');

  return `${dia}/${mes}/${data.getFullYear()}`;
}

// Calcula as datas de segunda a sábado da semana desejada
function pegarData(hoje, semana, posicao) {
  const diasDesdeSegunda = (hoje.getDay() + 6) % 7;
  const data = new Date(hoje);

  data.setDate(
    hoje.getDate() - diasDesdeSegunda + semana * 7 + posicao
  );

  data.setHours(0, 0, 0, 0);
  return data;
}

function Agendamento({ chaveReservas = 'reservas' }) {
  const [semana, setSemana] = useState(0);
  const [reservas, setReservas] = useState(
    () => carregarReservas(chaveReservas)
  );
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);
  const [erro, setErro] = useState('');

  const modalRef = useRef(null);

  const hoje = new Date();

  const datas = dias.map((_, indice) =>
    pegarData(hoje, semana, indice)
  );

  const textoSemana =
    `Semana de ${formatar(datas[0]).slice(0, 5)}` +
    ` a ${formatar(datas[5]).slice(0, 5)}`;

  // Verifica se um horário pode ser selecionado
  function horarioIndisponivel(data, hora, id) {
    const inicio = new Date(data);
    inicio.setHours(Number(hora.slice(0, 2)), 0, 0, 0);

    const jaPassou = inicio < hoje;
    const reservado = reservas.some((reserva) => reserva.id === id);

    return jaPassou || reservado;
  }

  // Abre o formulário de confirmação
  function escolherHorario(id) {
    setHorarioEscolhido(id);
    setErro('');
    modalRef.current?.showModal();
  }

  // Salva uma reserva demonstrativa
  function confirmarReserva(evento) {
    evento.preventDefault();

    const formulario = evento.currentTarget;
    const dados = new FormData(formulario);

    const nome = String(dados.get('nome') || '').trim();
    const email = String(dados.get('email') || '').trim();
    const telefone = String(dados.get('telefone') || '').trim();

    if (!/^[0-9 ()+\-]{8,}$/.test(telefone)) {
      setErro('Use apenas números, espaços, parênteses ou hífen.');
      return;
    }

    if (reservas.some((reserva) => reserva.id === horarioEscolhido)) {
      setErro('Este horário já foi reservado.');
      return;
    }

    const novasReservas = [
      ...reservas,
      { id: horarioEscolhido, nome, email, telefone },
    ];

    try {
      localStorage.setItem(chaveReservas, JSON.stringify(novasReservas));
    } catch {
      setErro('Não foi possível salvar os dados neste navegador.');
      return;
    }

    setReservas(novasReservas);
    setMensagem(`Reserva demonstrativa registrada para ${horarioEscolhido}!`);

    formulario.reset();
    modalRef.current?.close();
    setHorarioEscolhido('');
  }

  // Apaga somente as reservas desta agenda de teste
  function limparReservas() {
    try {
      localStorage.removeItem(chaveReservas);
      setReservas([]);
      setMensagem('Reservas de teste apagadas deste navegador.');
    } catch {
      setMensagem('Não foi possível limpar as reservas.');
    }
  }

  return (
    <>
      <div className="agendamento agenda" id="agendar">
        <h2>Agende sua aula experimental</h2>

        <p className="sub">
          Grátis e sem cadastro! Escolha o melhor horário para você.
        </p>

        {/* Legenda */}
        <div className="legenda">
          <span>
            <i className="agenda-legenda-livre" aria-hidden="true"></i>
            Livre
          </span>

          <span>
            <i className="agenda-legenda-ocupado" aria-hidden="true"></i>
            Ocupado ou já passou
          </span>
        </div>

        {/* Navegação entre semanas */}
        <div className="nav">
          <button
            type="button"
            disabled={semana === 0}
            onClick={() => setSemana((atual) => atual - 1)}
          >
            ← Anterior
          </button>

          <span className="agenda-semana-texto">
            {textoSemana}
          </span>

          <button
            type="button"
            disabled={semana === totalSemanas - 1}
            onClick={() => setSemana((atual) => atual + 1)}
          >
            Próxima →
          </button>
        </div>

        {/* Grade de horários */}
        <div className="scroll">
          <table aria-label="Horários da semana">
            <thead>
              <tr>
                <th scope="col">Hora</th>

                {datas.map((data, indice) => (
                  <th scope="col" key={formatar(data)}>
                    {dias[indice]}
                    <small>{formatar(data).slice(0, 5)}</small>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {horas.map((hora) => (
                <tr key={hora}>
                  <th scope="row">{hora}</th>

                  {datas.map((data, indice) => {
                    const id = `${formatar(data)} ${hora}`;

                    const indisponivel = horarioIndisponivel(
                      data,
                      hora,
                      id
                    );

                    return (
                      <td key={id}>
                        <button
                          className="slot"
                          type="button"
                          disabled={indisponivel}
                          aria-label={
                            `${dias[indice]} ${id}: ` +
                            (indisponivel ? 'indisponível' : 'livre')
                          }
                          onClick={() => escolherHorario(id)}
                        >
                          {indisponivel ? '—' : 'Livre'}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mensagem de confirmação */}
        <div className="agenda-status" role="status" aria-live="polite">
          {mensagem}
        </div>

        {/* Ferramentas de teste */}
        <div className="agenda-testes">
          <button
            className="reset"
            type="button"
            onClick={limparReservas}
          >
            Limpar reservas (só para testes)
          </button>

          <button
            className="reset"
            type="button"
            aria-expanded={mostrarDados}
            onClick={() => setMostrarDados((atual) => !atual)}
          >
            {mostrarDados ? 'Esconder dados salvos' : 'Ver dados salvos'}
          </button>
        </div>

        {mostrarDados && (
          <pre className="agenda-dados">
            {JSON.stringify(reservas, null, 2)}
          </pre>
        )}
      </div>

      {/* Modal de confirmação */}
      <dialog
        ref={modalRef}
        className="agenda-modal"
        aria-labelledby="agenda-modal-titulo"
        onClose={() => {
          setHorarioEscolhido('');
          setErro('');
        }}
      >
        <form onSubmit={confirmarReserva}>
          <h2 id="agenda-modal-titulo">Confirmar horário</h2>

          <p className="agenda-resumo">{horarioEscolhido}</p>

          <label>
            Nome
            <input
              name="nome"
              required
              minLength={2}
              autoComplete="name"
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </label>

          <label>
            Telefone
            <input
              name="telefone"
              type="tel"
              required
              minLength={8}
              autoComplete="tel"
            />
          </label>

          <p className="agenda-erro" role="alert">{erro}</p>

          <div className="acoes">
            <button
              type="button"
              onClick={() => modalRef.current?.close()}
            >
              Cancelar
            </button>

            <button type="submit">Reservar</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Agendamento;
