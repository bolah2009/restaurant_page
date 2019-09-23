const createTeamFragment = () => {
  const teamFragment = document.createDocumentFragment();

  const section = document.createElement('section');
  section.classList.add('team');
  section.id = 'team';
  section.innerHTML = `<div class="container">
                    <div class="header">
                    <div class="title">
                        <h2>Meet our chefs</h2>
                        <h4>They are nice &amp; friendly</h4>
                    </div>
                    </div>

                    <div class="team-member">
                    <div class="team-thumb">
                        <img src="images/team-image1.jpg" class="img-responsive" alt="" />
                        <div class="team-hover">
                        <div class="team-item">
                            <h4>Duis vel lacus id magna mattis vehicula</h4>
                            <ul class="social-icon">
                            <li><a href="#" class="fa fa-linkedin-square"></a></li>
                            <li><a href="#" class="fa fa-envelope-o"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3>New Catherine</h3>
                        <p>Kitchen Officer</p>
                    </div>
                    </div>

                    <div class="team-member">
                    <div class="team-thumb">
                        <img src="images/team-image2.jpg" class="img-responsive" alt="" />
                        <div class="team-hover">
                        <div class="team-item">
                            <h4>Cras suscipit neque quis odio feugiat</h4>
                            <ul class="social-icon">
                            <li><a href="#" class="fa fa-instagram"></a></li>
                            <li><a href="#" class="fa fa-flickr"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3>Lindsay Perlen</h3>
                        <p>Owner &amp; Manager</p>
                    </div>
                    </div>

                    <div class="team-member">
                    <div class="team-thumb">
                        <img src="images/team-image3.jpg" class="img-responsive" alt="" />
                        <div class="team-hover">
                        <div class="team-item">
                            <h4>Etiam auctor enim tristique faucibus</h4>
                            <ul class="social-icon">
                            <li><a href="#" class="fa fa-github"></a></li>
                            <li><a href="#" class="fa fa-google"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3>Isabella Grace</h3>
                        <p>Pizza Specialist</p>
                    </div>
                    </div>
                    </div>`;
  teamFragment.appendChild(section);
  return teamFragment;
};
export default createTeamFragment;
