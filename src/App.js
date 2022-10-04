import "./assets/css/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./pages/landing";
import ProductPage from "./pages/producten";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/producten" component={ProductPage} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
