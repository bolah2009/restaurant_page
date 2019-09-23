import navBarFragment from './modules/navbar';
import createHomeFragment from './modules/home';
import navHandler from './modules/tabs';
import footerFragment from './modules/footer';


const mainFragment = document.createDocumentFragment();
const mainElement = document.createElement('main');
mainElement.classList.add('main');

const homeFragment = createHomeFragment();
mainElement.appendChild(homeFragment);
mainFragment.appendChild(mainElement);

const mainContent = document.querySelector('#content');
mainContent.appendChild(navBarFragment);
mainContent.appendChild(mainFragment);
mainContent.appendChild(footerFragment);

const navElement = document.querySelector('nav');
const parentElement = document.querySelector('main');

navElement.addEventListener('click', navHandler(parentElement));
navElement.addEventListener('click', ({ target: { type, id } }) => {
  if (type === 'button' && id !== 'home-tab') {
    navElement.classList.add('scroll');
  }
});

const navbarToggle = document.querySelector('.navbar-toggle');
const navList = document.querySelector('.nav-list');
navbarToggle.addEventListener('click', () => {
  navList.classList.toggle('d-none-md');
});

const slideElements = document.querySelectorAll('.preview');
const slideShow = (elements, activePos = 0) => {
  let [activeIndex, nextIndex] = [activePos, activePos + 1];

  const checkRange = (a, n) => {
    if (a > elements.length - 1 || a < 0) {
      return [0, 1];
    }
    if (n > elements.length - 1) {
      return [a, 0];
    }
    return [a, n];
  };

  const changeSlide = (a, n) => {
    elements[a].classList.remove('active');
    elements[n].classList.add('active');
  };

  const isActive = (pos) => elements[pos].classList.contains('active');

  const findActive = () => {
    let foundActive = 0;
    elements.forEach(({ classList }, index) => {
      if (classList.contains('active')) {
        foundActive = index;
      }
    });
    const [newActive, newNextActive] = checkRange(foundActive, foundActive + 1);
    return [newActive, newNextActive];
  };

  [activeIndex, nextIndex] = checkRange(activeIndex, nextIndex);
  if (isActive(activeIndex)) {
    changeSlide(activeIndex, nextIndex);
  } else {
    [activeIndex, nextIndex] = findActive();
    changeSlide(activeIndex, nextIndex);
  }
  setTimeout(slideShow, 5000, elements, nextIndex + 1);
};

slideShow(slideElements);

const styleNavBar = () => {
  if (mainElement.firstChild.id !== 'home') {
    navElement.classList.add('scroll');
    return;
  }
  if (window.scrollY < 40) {
    navElement.classList.remove('scroll');
  } else {
    navElement.classList.add('scroll');
  }
};

document.addEventListener('scroll', styleNavBar);
