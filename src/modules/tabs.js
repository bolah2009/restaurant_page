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

  return function navigator({ target: { dataset: { id } } }) {
    if (!id) { return; }

    switch (id) {
      case 'home':
        replaceElemet(parent, homeFragment, 'home');
        break;
      case 'about':
        replaceElemet(parent, aboutFragment, 'about');
        break;
      case 'team':
        replaceElemet(parent, teamFragment, 'team');
        break;
      case 'menu':
        replaceElemet(parent, menuFragment, 'menu');
        break;
      case 'contact':
        replaceElemet(parent, contactFragment, 'contact');
        break;
      default:
        break;
    }
  };
};

export default navHandler;
