import { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import webFonts from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";

const App = () => {
  useEffect(() => {
    webFonts.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
};

export default App;
