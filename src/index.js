import navBarFragment from './modules/navbar';
import homeFragment from './modules/home';
import aboutFragment from './modules/about';
import teamFragment from './modules/team';
import menuFragment from './modules/menu';
import contactFragment from './modules/contact';
import footerFragment from './modules/footer';


const mainContent = document.querySelector('#content');

const mainFragment = document.createDocumentFragment();
mainFragment.appendChild(homeFragment);
mainFragment.appendChild(aboutFragment);
mainFragment.appendChild(teamFragment);
mainFragment.appendChild(menuFragment);
mainFragment.appendChild(contactFragment);

mainContent.appendChild(navBarFragment);
mainContent.appendChild(mainFragment);
mainContent.appendChild(footerFragment);


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

const navElement = document.querySelector('nav');
const styleNavBar = () => {
  if (window.scrollY < 40) {
    navElement.classList.remove('scroll');
  } else {
    navElement.classList.add('scroll');
  }
};

document.addEventListener('scroll', styleNavBar);
