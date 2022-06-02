import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import StatisticsPage from "./views/StatisticsPage/StatisticsPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div
        style={{
          minHeight: "calc(100vh - 80px)",
          padding: "207px 10% 0 10%",
        }}
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/statistics" component={StatisticsPage} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Suspense>
  );
}

export default App;
