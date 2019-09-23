import svgLogo from './svgLogo';

const navBarFragment = document.createDocumentFragment();

const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML = `<button class="brand-logo-btn button" data-id="home">
                  <div data-id="home" class="brand-logo">
                      ${svgLogo}
                      <span data-id="home">Food Palace</span>
                    </div>
                  </button>
                  <ul class="nav-list d-none-md">
                    <li class="nav-list-item">
                    <button class="button" data-id="home" type="button">home</button>
                    </li>
                    <li class="nav-list-item">
                      <button class="button" data-id="about" type="button">about</button>
                    </li>
                    <li class="nav-list-item">
                    <button class="button" data-id="team" type="button">chef</button>
                    </li>
                    <li class="nav-list-item">
                    <button class="button" data-id="menu" type="button">menu</button>
                    </li>
                    <li class="nav-list-item">
                    <button class="button" data-id="contact" type="button">contact</button>
                    </li>
                  </ul>
                  <ul class="nav-list small d-none">
                    <li class="nav-list-item">
                    <button class="button" data-id="home" type="button">home</button>
                    </li>
                    <li class="nav-list-item">
                      <button class="button" data-id="about" type="button">about</button>
                    </li>
                    <li class="nav-list-item">
                    <button class="button" data-id="team" type="button">chef</button>
                    </li>
                    <li class="nav-list-item">
                    <button class="button" data-id="menu" type="button">menu</button>
                    </li>
                    <li class="nav-list-item">
                    <button class="button" data-id="contact" type="button">contact</button>
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
