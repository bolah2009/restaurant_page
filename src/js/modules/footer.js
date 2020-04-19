const footerFragment = document.createDocumentFragment();

const footer = document.createElement('footer');
footer.id = 'footer';
footer.innerHTML = `<div class="container">
                    <div class="footer-wrapper">
                    <div class="address">
                        <div class="footer-info">
                        <div class="section-title">
                            <h2 class="" data-wow-delay="0.2s">Find us</h2>
                        </div>
                        <address class="" data-wow-delay="0.4s">
                            <p>
                            123 nulla a cursus rhoncus,<br />
                            augue sem viverra 10870<br />id ultricies sapien
                            </p>
                        </address>
                        </div>
                    </div>

                    <div id="reservation" class="reservation">
                        <div class="footer-info">
                        <div class="section-title">
                            <h2 class="">
                            Reservation
                            </h2>
                        </div>
                        <address class="">
                            <p>090-080-0650 | 090-070-0430</p>
                            <p><a href="mailto:info@company.com">info@company.com</a></p>
                            <p>LINE: eatery247</p>
                        </address>
                        </div>
                    </div>

                    <div class="open-hour">
                        <div class="footer-info footer-open-hour">
                        <div class="section-title">
                            <h2 class="" data-wow-delay="0.2s">Open Hours</h2>
                        </div>
                        <div class="" data-wow-delay="0.4s">
                            <p>Monday: Closed</p>
                            <div>
                            <strong>Tuesday to Friday</strong>
                            <p>7:00 AM - 9:00 PM</p>
                            </div>
                            <div>
                            <strong>Saturday - Sunday</strong>
                            <p>11:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="social">
                        <ul class=" social-icon" data-wow-delay="0.4s">
                        <li>
                            <a href="#" class="fab fa-facebook-square"></a>
                        </li>
                        <li><a href="#" class="fab fa-twitter"></a></li>
                        <li><a href="#" class="fab fa-instagram"></a></li>
                        <li><a href="#" class="fab fa-google"></a></li>
                        </ul>

                        <div class=" copyright-text" data-wow-delay="0.8s">
                        <p>Copyright &copy; 2019</p>
                        <p>Bolaah</p>
                        <br />
                        <p>Design:</p>
                        </div>
                    </div>
                    </div>
                    </div>`;
footerFragment.appendChild(footer);

export default footerFragment;
