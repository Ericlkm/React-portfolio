export default function Portfolio() {
  return (
    <>
      <section className="profile">
        <div className="image-links">
          <h1>FunCast!🎢</h1>
          <img src="./src/img/themeimg.png" alt="Example Image" />
          <div className="howTo-list">
            <ul>
              <h3>When using app you can...</h3>
              <li>Search theme parks from many locations</li>
              <li>
                See forcast for current day according to whichever park is
                searched
              </li>
              <li>
                You will be able to see Temperature, Condition, Windspeed and
                humidity{" "}
              </li>
            </ul>
          </div>

          <a
            className="link"
            href="https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/"
            target="_blank"
          >
            Theme Park🎈
          </a>
          <br />
          <a
            className="link"
            href="https://github.com/Ericlkm/Theme-Parks-Waiting-Times-and-Weather-NEW"
            target="_blank"
          >
            View Code!👀
          </a>
        </div>

        <div className="image-links">
          <h1>Quiz Game!❓</h1>
          <img src="./src/img/quiz.png" alt="Example Image" />
          <div className="howTo-list">
            <ul>
              <h3>When application is started you can...</h3>
              <li>Play Quiz Game!</li>
              <li>
                Once started you will be presented with series of questions
              </li>
              <li>
                A timer will start, you have{" "}
                <b style={{ color: "black" }}>50 seconds</b> to beat the clock!
              </li>
              <li>
                If quiz is not completed by the timer is done you will be graded
                on questions that are answered
              </li>
              <li>
                Once you complete the quiz you will be presented with your score
                and a message
              </li>
            </ul>
          </div>
          <a
            className="link"
            href=" https://ericlkm.github.io/homework4/"
            target="_blank"
          >
            Quiz Game <i class="fa fa-question" aria-hidden="true"></i>
          </a>
          <br />
          <a
            className="link"
            href="https://github.com/Ericlkm/homework4"
            target="_blank"
          >
            View Code!👀
          </a>
        </div>

        <div className="image-links">
          <h1>Note Taker 📝</h1>
          <img src="../src/img/nt.png" alt="Example Image" />
          <div className="howTo-list">
            <h2>How use Application!?</h2>
            <ol>
              <li>Download nodeJS</li>
              <li>
                Head to my &nbsp;
                <a
                  id="github-link"
                  href="http://github.com/Ericlkm/Note-Taker"
                  target="_blank"
                >
                  Github
                </a>
                &nbsp; and download repo for application
              </li>
              <li>Go into terminal and clone the repo from github</li>
              <li>direct yourself into folder with with routes and data</li>
              <li>
                Open folder inside terminal and type &nbsp;
                <code>
                  <b
                    style={{
                      color: "blue",
                      fontSize: "18px",
                      backgroundColor: "whitesmoke",
                      borderRadius: "5px",
                    }}
                  >
                    node server.js
                  </b>
                </code>
              </li>
              <li>
                Open browser of choice, follow and paste localhost link in
                terminal to browser tab
              </li>
            </ol>
          </div>
        </div>

        <div className="image-links">
          <h1> ShelfLife📚</h1>
          <img src="./src/img/ShelfLife.png" alt="Example Image" />
          <div className="howTo-list">
            <ul>
              <h3>When using application you can...</h3>
              <li>Smoothly transition through website</li>
              <li>You can create account by signing up </li>
              <li>Once login created you can sign in</li>
              <li>
                Once sign in you will be greeted with your profile welcoming you
                with username
              </li>
              <li>Then you can create a post about anything you like</li>
              <li>Also you can delete anymore post you choose successfully</li>
            </ul>
          </div>
          <a
            className="link"
            href="https://shelflife-91f231d5543b.herokuapp.com/"
            target="_blank"
          >
            ShelfLife! <span className="fa fa-book"> </span>
          </a>
          <br />
          <a
            className="link"
            href="https://github.com/Ericlkm/shelfLife"
            target="_blank"
          >
            View Code!👀
          </a>
        </div>

        <div className="image-links">
          <h1> Password Generator 🔑</h1>
          <img src="./src/img/passwordGen.png" alt="Example Image" />
          <div className="howTo-list">
            <ul>
              <h3>When using application you can...</h3>
              <li>Generate Password</li>
              <li>
                You can choose if you want symbols,numbers,uppercase letters and
                lowercase letters
              </li>
              <li>
                You can also choose how many characters you want to include in
                your password
              </li>
            </ul>
          </div>
          <a
            className="link"
            href="https://ericlkm.github.io/homework3/"
            target="_blank"
          >
            Generate Password! <span className="fa fa-key"> </span>
          </a>
          <br />
          <a
            className="link"
            href="https://github.com/Ericlkm/homework3"
            target="_blank"
          >
            View Code!👀
          </a>
        </div>

        <div className="image-links">
          <h1> Weather App</h1>
          <img src="./src/img/weather.png" alt="Example Image" />
          <div className="howTo-list">
            <ul>
              <h3>When using application you can...</h3>
              <li>Search for 4-5 day forcast in any city you search for</li>
              <li>You wll also be able to see previous searches</li>
            </ul>
          </div>
          <a
            className="link"
            href="https://ericlkm.github.io/homework6/"
            target="_blank"
          >
            Weather App! <span className="fa fa-key"> </span>
          </a>
          <br />
          <a
            className="link"
            href="https://github.com/Ericlkm/homework6"
            target="_blank"
          >
            View Code!👀
          </a>
        </div>
      </section>

      {/* <section className="profile">
        <div class="container">
          <div className="row row-cols-3">
            <div className="col">
              <div className="image-links">
                <h1>FunCast!🎢</h1>
                <img src="../src/img/themeimg.png" alt="Example Image" />
                <div className="howTo-list">
                  <ul>
                    <h3>When using app you can...</h3>
                    <li>Search theme parks from many locations</li>
                    <li>
                      See forcast for current day according to whichever park is
                      searched
                    </li>
                    <li>
                      You will be able to see Temperature, Condition, Windspeed
                      and humidity{" "}
                    </li>
                  </ul>
                </div>

                <a
                  className="link"
                  href="https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/"
                  target="_blank"
                >
                  Theme Park🎈
                </a>
                <br />
                <a
                  className="link"
                  href="https://github.com/Ericlkm/Theme-Parks-Waiting-Times-and-Weather-NEW"
                  target="_blank"
                >
                  View Code!👀
                </a>
              </div>
            </div>
            <div class="col">
              <div className="image-links">
                <h1>Quiz Game!❓</h1>
                <img src="../src/img/quiz.png" alt="Example Image" />
                <div className="howTo-list">
                  <ul>
                    <h3>When application is started you can...</h3>
                    <li>Play Quiz Game!</li>
                    <li>
                      Once started you will be presented with series of
                      questions
                    </li>
                    <li>
                      A timer will start, you have{" "}
                      <b style={{ color: "black" }}>50 seconds</b> to beat the
                      clock!
                    </li>
                    <li>
                      If quiz is not completed by the timer is done you will be
                      graded on questions that are answered
                    </li>
                    <li>
                      Once you complete the quiz you will be presented with your
                      score and a message
                    </li>
                  </ul>
                </div>
                <a
                  className="link"
                  href=" https://ericlkm.github.io/homework4/"
                  target="_blank"
                >
                  Quiz Game <i class="fa fa-question" aria-hidden="true"></i>
                </a>
                <br />
                <a
                  className="link"
                  href="https://github.com/Ericlkm/homework4"
                  target="_blank"
                >
                  View Code!👀
                </a>
              </div>
            </div>
          </div>
          <div class="row row-cols-auto">
            <div class="col">
              <div className="image-links">
                <h1>Note Taker 📝</h1>
                <img src="../src/img/nt.png" alt="Example Image" />
                <div className="howTo-list">
                  <h2>How use Application!?</h2>
                  <ol>
                    <li>Download nodeJS</li>
                    <li>
                      Head to my &nbsp;
                      <a
                        id="github-link"
                        href="http://github.com/Ericlkm/Note-Taker"
                        target="_blank"
                      >
                        Github
                      </a>
                      &nbsp; and download repo for application
                    </li>
                    <li>Go into terminal and clone the repo from github</li>
                    <li>
                      direct yourself into folder with with routes and data
                    </li>
                    <li>
                      Open folder inside terminal and type &nbsp;
                      <code>
                        <b
                          style={{
                            color: "blue",
                            fontSize: "18px",
                            backgroundColor: "whitesmoke",
                            borderRadius: "5px",
                          }}
                        >
                          node server.js
                        </b>
                      </code>
                    </li>
                    <li>
                      Open browser of choice, follow and paste localhost link in
                      terminal to browser tab
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="image-links">
                <h1> ShelfLife📚</h1>
                <img src="../src/img/ShelfLife.png" alt="Example Image" />
                <div className="howTo-list">
                  <ul>
                    <h3>When using application you can...</h3>
                    <li>Smoothly transition through website</li>
                    <li>You can create account by signing up </li>
                    <li>Once login created you can sign in</li>
                    <li>
                      Once sign in you will be greeted with your profile
                      welcoming you with username
                    </li>
                    <li>Then you can create a post about anything you like</li>
                    <li>
                      Also you can delete anymore post you choose successfully
                    </li>
                  </ul>
                </div>
                <a
                  className="link"
                  href="https://shelflife-91f231d5543b.herokuapp.com/"
                  target="_blank"
                >
                  ShelfLife! <span className="fa fa-book"> </span>
                </a>
                <br />
                <a
                  className="link"
                  href="https://github.com/Ericlkm/shelfLife"
                  target="_blank"
                >
                  View Code!👀
                </a>
              </div>
            </div>
            <div class="col">
              {" "}
              <div className="image-links">
                <h1> ShelfLife📚</h1>
                <img src="../src/img/ShelfLife.png" alt="Example Image" />
                <div className="howTo-list">
                  <ul>
                    <h3>When using application you can...</h3>
                    <li>Smoothly transition through website</li>
                    <li>You can create account by signing up </li>
                    <li>Once login created you can sign in</li>
                    <li>
                      Once sign in you will be greeted with your profile
                      welcoming you with username
                    </li>
                    <li>Then you can create a post about anything you like</li>
                    <li>
                      Also you can delete anymore post you choose successfully
                    </li>
                  </ul>
                </div>
                <a
                  className="link"
                  href="https://shelflife-91f231d5543b.herokuapp.com/"
                  target="_blank"
                >
                  ShelfLife! <span className="fa fa-book"> </span>
                </a>
                <br />
                <a
                  className="link"
                  href="https://github.com/Ericlkm/shelfLife"
                  target="_blank"
                >
                  View Code!👀
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
