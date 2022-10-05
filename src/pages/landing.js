import pageLogo from "../assets/img/logos/banner_beauty_white.png";
import pageImage from "../assets/img/pages/sam.png";

function landingPage() {
  return (
    <div className="page">
      <div className="banner">
        <img src={pageImage} className="bannerImage" alt="Sam" />
        <div className="bannerTextContainer">
          <img src={pageLogo} className="bannerLogo" alt="sam's beauty logo" />
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
