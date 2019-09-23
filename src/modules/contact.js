const contactFragment = document.createDocumentFragment();

const section = document.createElement('section');
section.classList.add('contact');
section.id = 'contact';
section.innerHTML = `<div class="container">
                    <div class="map-section">
                    <div id="google-map">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.603292480072!2d3.391954114770978!3d6.571648295247206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b929c190a203f%3A0xf511d0f19f8251d0!2sBuari%20St%2C%20Ogudu%20100242%2C%20Lagos!5e0!3m2!1sen!2sng!4v1568456147307!5m2!1sen!2sng"
                        width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                    </div>

                    <div class="form-section">
                    <div>
                        <div class="section-title">
                        <h2>Contact Us</h2>
                        </div>
                    </div>

                    <!-- CONTACT FORM -->
                    <form class="form">
                        <!-- IF FORM IS VALID -->
                        <h6 class="form-valid">
                        Your message has been sent successfully.
                        </h6>

                        <!-- IF FORM IS NOT VALID -->
                        <h6 class="form-invalid">
                        E-mail must be valid and message must be longer than 1
                        character.
                        </h6>

                        <div class="name">
                        <input type="text" class="form-control" id="form-name" name="name" placeholder="Full name" />
                        </div>

                        <div class="email">
                        <input type="email" class="form-control" id="form-email" name="email" placeholder="Email address" />
                        </div>

                        <div class="message">
                        <input type="text" class="form-control" id="form-subject" name="subject" placeholder="Subject" />

                        <textarea class="form-control" rows="6" id="form-message" name="message" placeholder="Tell about your project"></textarea>

                        <button class="form-control" id="form-submit" name="submit">
                            Send Message
                        </button>
                        </div>
                    </form>
                    </div>
                    </div>`;
contactFragment.appendChild(section);

export default contactFragment;
