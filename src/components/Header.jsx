import { useId, useState } from 'react';
import './Header.css';

function Header({
  identidade,
  links = [],
  linkAluno,
  linkMatricula,
  classeBotao = 'button-blue',
  onContato,
}) {
  const [menuAberto, setMenuAberto] = useState(false);
  const idNavegacao = useId();
  console.log('Contato recebido:', typeof onContato);

  return (
    <header className="landing-header">

      {/* Identidade visual da página */}
      {identidade}

      {/* Botão do menu para dispositivos móveis */}
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls={idNavegacao}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span aria-hidden="true">
          {menuAberto ? '×' : '☰'}
        </span>
      </button>

      {/* Navegação principal */}
      <nav
        className={`landing-nav ${menuAberto ? 'is-open' : ''}`}
        id={idNavegacao}
        aria-label="Navegação principal"
      >
        <ul>
          {links.map((link) => (
            <li key={`${link.href}-${link.texto}`}>
              <a
                href={link.href}
                className={link.classe || undefined}
                onClick={() => setMenuAberto(false)}
              >
                {link.texto}
              </a>
            </li>
          ))}
          
          {/* Botão de contato opcional */}
          {onContato && (
            <li>
              <button
                className="hub-contact-trigger"
                type="button"
                aria-haspopup="dialog"
                aria-controls="hub-contact-dialog"
                onClick={() => {
                  setMenuAberto(false);
                  onContato();
                }}
              >
                Contato
              </button>
            </li>
          )}

        </ul>
      </nav>

      {/* Ações do cabeçalho */}
      {linkAluno && (
        <a className="student-link" href={linkAluno}>
          Já sou aluno
        </a>
      )}

      {linkMatricula && (
        <a
          className={`button header-cta ${classeBotao}`}
          href={linkMatricula}
        >
          Matricule-se!
        </a>
      )}

    </header>
  );
}

export default Header;