function Navigation() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="TBW Badger home">TBW <span>Badger</span></a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#documentation">Documentation</a>
        <a href="#plugin">Plugin</a>
      </nav>
      <div className="auth-actions">
        <a className="button button-secondary" href="#login">Log in</a>
        <a className="button button-primary" href="#register">Register</a>
      </div>
    </header>
  )
}

export default Navigation
