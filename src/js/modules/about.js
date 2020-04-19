const createAboutFragment = () => {
  const aboutFragment = document.createDocumentFragment();

  const section = document.createElement('section');
  section.classList.add('about', 'container');
  section.id = 'about';
  section.innerHTML = `<div class="about-wrapper">
                        <div class="text">
                        <div class="title">
                            <h4>Read our story</h4>
                            <h2>We've been Making The Delicious Foods Since 1999</h2>
                        </div>

                        <div class="body">
                            <p>
                            Fusce hendrerit malesuada lacinia. Donec semper semper sem
                            vitae malesuada. Proin scelerisque risus et ipsum semper
                            molestie sed in nisi. Ut rhoncus congue lectus, rhoncus
                            venenatis leo malesuada id.
                            </p>
                            <p>
                            Sed elementum vel felis sed scelerisque. In arcu diam,
                            sollicitudin eu nibh ac, posuere tristique magna. Sed
                            elementum vel felis sed scelerisque. In arcu diam,
                            sollicitudin eu nibh ac, posuere tristique magna.
                            </p>
                        </div>
                        </div>
                        <div class="image">
                        <img src="assets/images/about-image.jpg" alt="" />
                        </div>
                        </div>`;
  aboutFragment.appendChild(section);
  return aboutFragment;
};
export default createAboutFragment;
