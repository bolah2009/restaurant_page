import svgLogo from './svgLogo';


const navBarFragment = document.createDocumentFragment();

const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML = `<a href="#home">
                  <div class="brand-logo">
                      ${svgLogo}
                      <span>Food Palace</span>
                    </div>
                  </a>
                  <ul class="nav-list d-none-md">
                    <li class="nav-list-item">
                      <a href="#home">home</a>
                    </li>
                    <li class="nav-list-item">
                      <a href="#about">about</a>
                    </li>
                    <li class="nav-list-item">
                      <a href="#team">chef</a>
                    </li>
                    <li class="nav-list-item">
                      <a href="#menu">menu</a>
                    </li>
                    <li class="nav-list-item">
                      <a href="#contact">contact</a>
                    </li>
                  </ul>
                  <button class="navbar-toggle">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                  </button>
                  <a href="#reservation" class="button d-none-md">Reservation</a>`;
navBarFragment.appendChild(nav);

export default navBarFragment;
