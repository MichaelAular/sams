import pageLogo from "../assets/img/logos/banner_contact_white.png";
import pageImage from "../assets/img/pages/001.png";

function productPage() {
  return (
    <div className="page">
      <div className="banner">
        <img src={pageImage} className="bannerImage" alt="blik earlgrey stache wax van Superfurry" />
        <div className="bannerTextContainer">
          <img src={pageLogo} className="bannerLogo" alt="sam's beauty logo" />
          <div className="bannerText">
            <p>Hier komen contact gegevens te staan!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productPage;