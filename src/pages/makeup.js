import pageLogo from "../assets/img/logos/banner_brows_white.png";
import pageImage from "../assets/img/pages/001.png";

function makeupPage() {
  return (
    <div className="page">
      <div className="banner">
        <img src={pageImage} className="bannerImage" alt="blik earlgrey stache wax van Superfurry" />
        <div className="bannerTextContainer">
          <img src={pageLogo} className="bannerLogo" alt="sam's beauty logo" />
          <div className="bannerText">
            <p>Hier komen voorbeelden van Permanente Makeup te staan!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default makeupPage;