import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MenuContainer from "./MenuContainer";
import OrderingContainer from "./OrderingContainer";
import ErrorPage from "../components/ErrorPage";
import VenueBar from "../components/VenueBar";

function MainContainer() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/venues")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data);
        setSelectedVenue(data[0]);
      });
  }, []);

  const onUpdateVenue = (venue) => {
    setSelectedVenue(venue);
  };

  return (
    <Router>
      <>
        <Header />
        <NavBar />
        <VenueBar
          venues={venues}
          onUpdateVenue={onUpdateVenue}
          selectedVenue={selectedVenue}
        />
        <Switch>
          <Route exact path="/" component={OrderingContainer} />
          <Route path="/menus" component={MenuContainer} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default MainContainer;
