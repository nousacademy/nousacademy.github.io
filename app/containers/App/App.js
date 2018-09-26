/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
// pages
import HomePage from 'containers/HomePage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import AboutMePage from 'containers/AboutMePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// sections
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet defaultTitle="Portfolio App">
      <meta name="description" content="Portfolio App landing page" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/about" component={AboutMePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
