import "./assets/css/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./pages/landing";
import ProductPage from "./pages/producten";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/producten" component={ProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
