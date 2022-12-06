import React from 'react';
import './App.css';

function App() {
  return (
    <div className="d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">my webpage</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href={""}>Home</a>
              <a className="nav-link fw-bold py-1 px-0" href={"https://www.linkedin.com/in/danielcorrea256/"}>Linkedin</a>
            </nav>
          </div>
        </header>
      
        <main className="px-3">
          <h1>Welcome to my webpage</h1>
          <p className="lead">My name is Daniel Fernando Correa and I currently work as DevSecOps Engineer at Tiresia Soluciones Tecnologicas SAS</p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark">Idk</a>
          </p>
        </main>
      
        <footer className="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
