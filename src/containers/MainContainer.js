import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDidMountEffect } from "../hooks/useDidMountEffect";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MenuContainer from "./MenuContainer";
import OrderingContainer from "./OrderingContainer";
import ErrorPage from "../components/ErrorPage";
import VenueBar from "../components/VenueBar";

function MainContainer() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState([]);
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  useEffect(() => {
    fetch("http://localhost:8080/venues")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data);
        setSelectedVenue(data[0]);
      })
      .then();
  }, []);

  useDidMountEffect(() => {
    fetch("http://localhost:8080/menus/venue/" + selectedVenue.id)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setMenus(data);
      });
  }, [selectedVenue]);

  const onUpdateVenue = (venue) => {
    setSelectedVenue(venue);
  };

  const showMenuDetails = (menuKey) => {
    const menu = menus[menuKey];
    setSelectedMenu(menu);
  };

  const hideMenuDetails = () => {
    setSelectedMenu(menus[0]);
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
          <Route
            path="/menus"
            render={() => (
              <MenuContainer
                selectedVenue={selectedVenue}
                menus={menus}
                selectedMenu={selectedMenu}
                showMenuDetails={showMenuDetails}
                hideMenuDetails={hideMenuDetails}
              />
            )}
          />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default MainContainer;
