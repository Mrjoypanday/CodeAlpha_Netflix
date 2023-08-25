import "./App.css";
import logo from "./image/logo.png";
import Fet1 from "./image/feature-1.png";
import Fet2 from "./image/feature-2.png";
import Fet3 from "./image/feature-3.png";
import Fet4 from "./image/feature-4.png";
import Downicon from "./image/down-icon.png";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
function App() {
  return (
    <>
      <div className="Header">
        <nav>
          <img src={logo} alt={logo} className="logo" />
          <div className="lig-bott">
            <button className="language">
              <TfiWorld className="icons" />
              English
              <img src={Downicon} alt="down" />
            </button>
            <button className="sing">Sing In</button>
          </div>
        </nav>
        <div className="Header-content">
          <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
          <h3>Join today. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <from className="Email-sinup">
            <input type="Email" placeholder="Email Address" required />
            <button type="submit">
              Get Started <IoIosArrowForward />
            </button>
          </from>
        </div>
      </div>
      <hr />
      <div className="fiture">
        <div className="row">
          <div className="text-col">
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="omg-col">
            <img src={Fet1} alt="feture 1photo" />
          </div>
        </div>
      </div>
      <hr />
      <div className="fiture">
        <div className="row">
          <div className="omg-col">
            <img src={Fet2} alt="feture 1photo" />
          </div>
          <div className="text-col">
            <h1>Download your shows to watch offline</h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="fiture">
        <div className="row">
          <div className="text-col">
            <h1>Watch everywhere</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="omg-col">
            <img src={Fet3} alt="feture 1photo" />
          </div>
        </div>
      </div>
      <hr />
      <div className="fiture">
        <div className="row">
          <div className="omg-col">
            <img src={Fet4} alt="feture 1photo" />
          </div>
          <div className="text-col">
            <h1>Create profiles for kids</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">What is Netfilix?</label>
            <div className="content">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="Secound" />
            <label for="Secound">How much dose Netflix cost?</label>
            <div className="content">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Where can i watch?</label>
            <div className="content">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="Forth" />
            <label for="Forth">How do i cancel?</label>
            <div className="content">
              <p>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label for="fifth">What can i watch on Netflix?</label>
            <div className="content">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="six" />
            <label for="six">Is Netflix good for kids?</label>
            <div className="content">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </p>
            </div>
          </li>
        </ul>
        <div className="faq-footer">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <from className="Email-sinup">
            <input type="Email" placeholder="Email Address" required />
            <button type="submit">
              Get Started <IoIosArrowForward />
            </button>
          </from>
        </div>
      </div>
      <hr />
      <div className="footer">
        <h2>Questions? call 000-000-000-000</h2>
        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
            <a href="#">Speed Test</a>
          </div>
        </div>
        <button className="language footer-booton">
          <TfiWorld className="icons" />
          English
          <img src={Downicon} alt="down" />
        </button>
        <p>Netflix India</p>
      </div>
    </>
  );
}

export default App;
