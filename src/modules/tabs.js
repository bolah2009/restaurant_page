import homeFragment from './home';
import aboutFragment from './about';
import teamFragment from './team';
import menuFragment from './menu';
import contactFragment from './contact';

const navHandler = (parent) => {
  const replaceElemet = (mainElement, createNewElement, oldElementID) => {
    const newElement = createNewElement();
    if (mainElement.firstChild) {
      if (mainElement.firstChild.id === oldElementID) {
        return;
      }
      mainElement.replaceChild(newElement, mainElement.firstChild);
    } else {
      mainElement.appendChild(newElement);
    }
  };

  return function navigator({ target: { id } }) {
    switch (id) {
      case 'home-tab':
        replaceElemet(parent, homeFragment, 'home');
        break;
      case 'about-tab':
        replaceElemet(parent, aboutFragment, 'about');
        break;
      case 'team-tab':
        replaceElemet(parent, teamFragment, 'team');
        break;
      case 'menu-tab':
        replaceElemet(parent, menuFragment, 'menu');
        break;
      case 'contact-tab':
        replaceElemet(parent, contactFragment, 'contact');
        break;
      default:
        break;
    }
  };
};

export default navHandler;
