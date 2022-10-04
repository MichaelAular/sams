import "./producten.scss";
import "../pages/landing.scss"
import beautyLogo from "../assets/img/banner_beauty_white.png";
import sam from "../assets/img/sam.jpeg";

function productPage() {
  return (
    <div className="productenPage">

      <div className="banner">
        <img src={sam} className="samImage" alt="sam" />
        <div className="samsProducts">
          <img src={beautyLogo} className="samsBeautyLogo" alt="sam's beauty logo" />
          <div className="bannerText">
            <p>Hier Komen producten te staan!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productPage;