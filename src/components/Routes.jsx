import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OrganizedActions from 'pages/organizedActions';
import UpcomingActions from 'pages/upcomingActions';
import PageNotFound from './error/PageNotFound';
import SocialWorkers from 'pages/socialWorkers';
import Testimonials from 'pages/testimonials';
import Description from 'pages/description';
import Volunteer from 'pages/volunteer';
import Partners from 'pages/partners';
import Home from 'pages/homepage';
import Donate from 'pages/donate';
import Donors from 'pages/donors';
import Links from 'pages/links';
import Sale from 'pages/sale';
import Goal from 'pages/goal';
import UpComingNews from 'pages/upComingNews';
import UpComingAkcia from 'pages/upComingAkcia';
import ReservedPoints from 'pages/reservedPoints';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sale">
        <Sale />
      </Route>
      <Route path="/donate">
        <Donate />
      </Route>
      <Route path="/donors">
        <Donors />
      </Route>
      <Route path="/organized-actions">
        <OrganizedActions />
      </Route>
      <Route path="/upcoming-actions">
        <UpcomingActions />
      </Route>
      <Route path="/goal">
        <Goal />
      </Route>
      <Route path="/description">
        <Description />
      </Route>
      <Route path="/social_workers">
        <SocialWorkers />
      </Route>
      <Route path="/links">
        <Links />
      </Route>
      <Route path="/partners">
        <Partners />
      </Route>
      <Route path="/testimonials">
        <Testimonials />
      </Route>
      <Route path="/volunteer">
        <Volunteer />
      </Route>
      <Route path="/upcoming-news">
        <UpComingNews />
      </Route>
      <Route path="/upcoming-akcia">
        <UpComingAkcia />
      </Route>
      <Route path="/reserved-points">
        <ReservedPoints />
      </Route>
      <Route path="/*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}
export default Routes;
