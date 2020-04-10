import React from "react";
import Swiper from "swiper";
import BookItem from "./components/BookItem";
import LOGO from "./assests/images/Logo.png";
import BOOKLOGO1 from "./assests/images/book01.png";
import BOOKLOGO2 from "./assests/images/book02.png";
import BOOKLOGO3 from "./assests/images/book03.png";
import BOOKLOGO4 from "./assests/images/book04.png";
import BOOKLOGO5 from "./assests/images/book05.png";
import BOOKLOGO6 from "./assests/images/book06.png";
import BOOKLOGO7 from "./assests/images/book07.png";
import "./BookScreen.css";
import "swiper/css/swiper.css";

const bookList = [
  {
    title: "Unlimited Potential",
    logo: BOOKLOGO1,
    downurl:
      "https://drive.google.com/open?id=1fQ3zDx2CivQmk78gvooZgOixs6qnDmmv"
  },
  {
    title: "The Reality Mindset",
    logo: BOOKLOGO2,
    downurl:
      "https://drive.google.com/open?id=1OYSwMsVnFmcTIApZu83ucDR8yxwbsjV4"
  },

  {
    title: "Taking Command",
    logo: BOOKLOGO3,
    downurl:
      "https://drive.google.com/open?id=1Rj8MmIPyb8_5R6dSo0F1cv0nSGZo6W8k"
  },
  {
    title: "Finding Your True Calling",
    logo: BOOKLOGO4,
    downurl:
      "https://drive.google.com/open?id=1RH1dNWQQ8kOk2m9LQDZm5xZtov5yAjkK"
  },
  {
    title: "Dream Big",
    logo: BOOKLOGO5,
    downurl:
      "https://drive.google.com/open?id=1N1jPol6wb4dCsUYCr8Ntut3LBySka1i8"
  },
  {
    title: "Building A Fortress Of Success",
    logo: BOOKLOGO6,
    downurl:
      "https://drive.google.com/open?id=1SnWEGjvNz19477AeA4_bW_p2FLR-du4I"
  },
  {
    title: "Understanding The Bigger Picture",
    logo: BOOKLOGO7,
    downurl:
      "https://drive.google.com/open?id=1QhKkZ73LPZUFNRg2LMYzMOAUWmNqhYr4"
  }
];

class BookScreen extends React.Component {
  componentDidMount() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      mousewheel: true,
      keyboard: true
    });
  }

  render() {
    return (
      <div className="BookScreenPage">
        <div className="BookScreenContainer">
          <div className="BookScreenTitle">
            <p className="TitleText">
              Multimedia <span className="StrongText">eBooks</span>
            </p>
          </div>

          {/* <div */}
          {/* className="BookScreenSection" */}
          {/* style={{ display: "flex", justifyContent: "space-around" }} */}
          {/* > */}
          <div className="swiper-container">
            <div className="swiper-wrapper" style={{ paddingLeft: 40 }}>
              {bookList.map(item => (
                <div className="swiper-slide">
                  <BookItem
                    logo={item.logo}
                    title={item.title}
                    downurl={item.downurl}
                  />
                </div>
              ))}
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

        <div
          className="FooterContainer"
          style={{ display: "flex", flexDirection: "col" }}
        >
          <div className="FooterLogo" style={{ flexGrow: "4" }}>
            <img className="Img-Logo" src={LOGO} alt="logo"></img>
          </div>
          <div className="FooterSection" style={{ flexGrow: "2" }}>
            <a className="FooterItem">Introductions</a>
            <a className="FooterItem">Videos</a>
            <a className="FooterItem">Audio</a>
            <a className="FooterItem">Ebooks</a>
          </div>
          <div className="FooterCopyright" style={{ flexGrow: "4" }}>
            <p>
              <span className="CopyMark">© </span> All right reserved 2020
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookScreen;
