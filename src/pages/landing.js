import "./landing.scss";
import beautyLogo from "../assets/img/banner_beauty_white.png";
import sam from "../assets/img/sam.jpeg";

function landingPage() {
  return (
    <div className="landingPage">
      <div className="banner">
        <img src={sam} className="samImage" alt="sam" />
        <div className="samsIntro">
          <img src={beautyLogo} className="samsBeautyLogo" alt="sam's beauty logo" />
          <div className="bannerText">
            <p>Hi, ik ben Sam!</p>
            <p>Door mijn passie voor Make-up en omdat ik vind dat iedereen er stralend uit mag zien, heb ik mijzelf toegewijd aan het zetten
              van permanente Make-up. Zoals mijn naam al zegt kan je niet enkel terecht bij mij voor je wenkbrouwen maar ook voor eyeliner en
              zelfs je lippen. Daarnaast heb ik de fijnste zonnebrandcremes ter bescherming en haarverzorgingsproducten voor je in huis.</p>
            <p>"Life isn't perfect, but your make-up can be."</p>
            <p>Sam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingPage;
