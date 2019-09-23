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
                    <button id="home-tab" type="button">home</button>
                    </li>
                    <li class="nav-list-item">
                      <button id="about-tab" type="button">about</button>
                    </li>
                    <li class="nav-list-item">
                    <button id="team-tab" type="button">chef</button>
                    </li>
                    <li class="nav-list-item">
                    <button id="menu-tab" type="button">menu</button>
                    </li>
                    <li class="nav-list-item">
                    <button id="contact-tab" type="button">contact</button>
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
