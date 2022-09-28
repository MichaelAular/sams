import '../assets/css/landingPage.scss'
import bannerLogo from "../assets/img/banner_beauty_white.png"
import darkwood from "../assets/img/darkwood.jpg"

function landingPage() {
  return (
    <div className="landingpage">
        <img src={darkwood} className="darkwoodBackground" alt="darkwood background"/>
        <img src={bannerLogo} className="beautyBanner" alt="sam's beautybanner"/>
    </div>
  );
}

export default landingPage;