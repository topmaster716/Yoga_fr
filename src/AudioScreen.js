import React from "react";
import MAudioPlayer from "./components/MAudioPlayer";
import MAudioItem from "./components/MAudioItem";
import "./AudioScreen.css";

const playList = [
  {
    id: "01",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    comment: "Meditation for the morning relaxation"
  },
  {
    id: "02",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    comment:
      "8 Hours of Powerful Theta Waves Healing for Deep Meditation, Improve Memory, Massage, Sleep"
  },
  {
    id: "03",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
    comment:
      "Lorem ipsum dolor sit amet, habeo prima admodum ne eam, cum dictas senserit ocurreret no. "
  },
  {
    id: "04",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
    comment:
      "Ad altera contentiones pri. Ut wisi delenit omittam nam, mel epicuri appareat et."
  },
  {
    id: "05",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
    comment: "Te qui modus feugait, in usu wisi aperiam."
  },
  {
    id: "06",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    comment:
      "Vis integre oblique signiferumque ne, equidem salutatus moderatius mel ex, sed tale reprehendunt comprehensam ex. "
  },
  {
    id: "07",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    comment:
      "Et putent aperiri maiestatis nec, an vix vidisse alienum, pri vide congue apeirian te."
  },
  {
    id: "08",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
    comment:
      "Ut elitr feugait moderatius sit, per an oportere intellegat appellantur."
  },
  {
    id: "09",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
    comment:
      "Id eligendi suavitate interesset vim, ei usu agam dolorem adipisci."
  },
  {
    id: "10",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    image: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
    comment:
      "Has iisque offendit repudiare ne, mei option disputationi ad, summo eleifend conceptam ne vel."
  }
];

class AudioScreen extends React.Component {
  render() {
    return (
      <div className="AudioScreenPage">
        <div className="AudioScreenContainer">
          <div className="AudioScreenTitle">
            <p className="TitleText">
              Multimedia <span className="StrongText">Audio</span>
            </p>
          </div>
          <div className="AudioScreenSection">
            <div className="PlayPane">
              <MAudioPlayer
                track="01"
                comment="Meditation for the morning relaxation"
                logo="https://homepages.cae.wisc.edu/~ece533/images/peppers.png"
              />
            </div>
            <div className="ListPane">
              <MAudioItem
                isPlaying={true}
                track="01"
                comment="Meditation for the morning relaxation"
                length="08:25"
              />
              {playList.map(value => {
                return (
                  <MAudioItem
                    isPlaying={false}
                    track={value["id"]}
                    comment={value["comment"]}
                    length="08:25"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioScreen;
