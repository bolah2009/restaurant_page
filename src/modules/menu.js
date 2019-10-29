const createMenuFragment = () => {
  const menuFragment = document.createDocumentFragment();

  const section = document.createElement('section');
  section.classList.add('menu');
  section.id = 'menu';
  section.innerHTML = `<div class="container">
                    <div class="header">
                    <div class="title">
                        <h2>Our Menus</h2>
                        <h4>Tea Time &amp; Dining</h4>
                    </div>
                    </div>

                    <div class="menu-thumb-wrapper">
                    <!-- MENU THUMB -->
                    <div class="menu-thumb">
                        <a href="images/menu-image1.jpg" class="image-popup" title="American Breakfast">
                        <img src="images/menu-image1.jpg" class="img-responsive" alt="" />

                        <div class="menu-info">
                            <div class="menu-item">
                            <h3>American Breakfast</h3>
                            <p>Tomato / Eggs / Sausage</p>
                            </div>
                            <div class="menu-price">
                            <span>$25</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div class="menu-thumb-wrapper">
                    <!-- MENU THUMB -->
                    <div class="menu-thumb">
                        <a href="images/menu-image2.jpg" class="image-popup" title="Self-made Salad">
                        <img src="images/menu-image2.jpg" class="img-responsive" alt="" />

                        <div class="menu-info">
                            <div class="menu-item">
                            <h3>Self-made Salad</h3>
                            <p>Green / Fruits / Healthy</p>
                            </div>
                            <div class="menu-price">
                            <span>$18</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div class="menu-thumb-wrapper">
                    <!-- MENU THUMB -->
                    <div class="menu-thumb">
                        <a href="images/menu-image3.jpg" class="image-popup" title="Chinese Noodle">
                        <img src="images/menu-image3.jpg" class="img-responsive" alt="" />

                        <div class="menu-info">
                            <div class="menu-item">
                            <h3>Chinese Noodle</h3>
                            <p>Pepper / Chicken / Vegetables</p>
                            </div>
                            <div class="menu-price">
                            <span>$34</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div class="menu-thumb-wrapper">
                    <!-- MENU THUMB -->
                    <div class="menu-thumb">
                        <a href="images/menu-image4.jpg" class="image-popup" title="Rice Soup">
                        <img src="images/menu-image4.jpg" class="img-responsive" alt="" />

                        <div class="menu-info">
                            <div class="menu-item">
                            <h3>Rice Soup</h3>
                            <p>Green / Chicken</p>
                            </div>
                            <div class="menu-price">
                            <span>$28</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div class="menu-thumb-wrapper">
                    <!-- MENU THUMB -->
                    <div class="menu-thumb">
                        <a href="images/menu-image5.jpg" class="image-popup" title="Project title">
                        <img src="images/menu-image5.jpg" class="img-responsive" alt="" />

                        <div class="menu-info">
                            <div class="menu-item">
                            <h3>Deli Burger</h3>
                            <p>Beef / Fried Potatoes</p>
                            </div>
                            <div class="menu-price">
                            <span>$46</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div class="menu-thumb-wrapper">
                    <!-- MENU THUMB -->
                    <div class="menu-thumb">
                        <a href="images/menu-image6.jpg" class="image-popup" title="Project title">
                        <img src="images/menu-image6.jpg" class="img-responsive" alt="" />

                        <div class="menu-info">
                            <div class="menu-item">
                            <h3>Big Flat Fried</h3>
                            <p>Pepper / Crispy</p>
                            </div>
                            <div class="menu-price">
                            <span>$30</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                    </div>`;
  menuFragment.appendChild(section);
  return menuFragment;
};
export default createMenuFragment;
