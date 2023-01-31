import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { ButtomNavigation, Footer, Header } from "../../components";
import { About, Article, Main, Project } from "../../pages";
import ScrollToTop from "../../utils/scrollToTop";
import "./index.css";

const AppRoute = () => {
  return (
    <div className="mainApp-container">
      <Header />
      <div className="wrapper-main">
        <ScrollToTop />
        <Switch>
          <Route exact path="/my-portfolio" element={<Main />} />
          <Route path="/my-portfolio/about" element={<About />} />
          <Route path="/my-portfolio/project" element={<Project />} />
          <Route path="/my-portfolio/articles" element={<Article />} />
        </Switch>
      </div>
      <Footer />
      <ButtomNavigation />
    </div>
  );
};

export default AppRoute;
