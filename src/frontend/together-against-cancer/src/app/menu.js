export default function Menu({cancers, setActive}) {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span class="navbar-brand">Together Against Cancer</span>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <button type="button" className="btn" onClick={() => setActive(null)}>Home</button>
              </li>
              <li className="nav-item dropdown">
                <script src="https://unpkg.com/@popperjs/core@2"></script>
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Cancer types
                </button>
                <ul className="dropdown-menu">{
                  cancers == null ?
                  <li><a className="dropdown-item" href="#">Loading...</a></li>
                  :
                  cancers.map((c) => (
                  <li><button key={c.id} type="button" className="dropdown-item" onClick={() => setActive(c)}>{c.type}</button></li>
                ))}
                </ul>
              </li>
            </ul>
          </div>
      </nav>
    );
  }