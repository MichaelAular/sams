import "./assets/css/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./pages/landing";
import ProductPage from "./pages/producten";
import MakeUpPage from "./pages/makeup";
import RulesPage from "./pages/rules";
import ContactPage from "./pages/contact";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/producten" component={ProductPage} />
          <Route exact path="/permanente_makeup" component={MakeUpPage} />
          <Route exact path="/huisregels" component={RulesPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
