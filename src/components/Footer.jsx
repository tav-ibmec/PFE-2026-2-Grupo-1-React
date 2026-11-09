function Footer({ classe = '', logo, altLogo, descricao = [], horario, grupos = [], copyright }) {
  return (
    <footer className={`landing-footer ${classe}`}>
      <div className="content-wrap footer-grid">
        <div className="footer-brand-block">
          <a className="footer-logo oto-footer-logo" href="/" aria-label="Voltar ao HUB">
            <img src={logo} alt={altLogo} loading="lazy" />
          </a>
          {descricao.map((texto, i) => <p key={i}>{texto}</p>)}
          <p>{horario}</p>
          <small>{copyright}</small>
        </div>
        {grupos.map((grupo) => (
          <nav key={grupo.titulo} aria-label={grupo.titulo}>
            <strong>{grupo.titulo}</strong>
            <ul>
              {grupo.links.map((link) => (
                <li key={`${link.href}-${link.texto}`}>
                  <a
                    href={link.href}
                    {...(link.novaAba ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
