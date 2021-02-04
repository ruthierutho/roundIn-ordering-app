import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDidMountEffect } from "../hooks/useDidMountEffect";
import { useInterval } from "../hooks/useInterval";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MenuContainer from "./MenuContainer";
import OrderingContainer from "./OrderingContainer";
import ErrorPage from "../components/ErrorPage";
import VenueBar from "../components/VenueBar";
import Request from "../helpers/Request";

function MainContainer() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState([]);
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

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
    fetch("http://localhost:8080/orders/venue/" + selectedVenue.id)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [selectedVenue]);

  useInterval(() => {
    fetch("http://localhost:8080/orders/venue/" + selectedVenue.id)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, 10000);

  useDidMountEffect(() => {
    fetch("http://localhost:8080/menus/venue/" + selectedVenue.id)
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        setSelectedMenu(menus[0]);
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

  const showOrderDetails = (orderKey) => {
    const order = orders[orderKey];
    setSelectedOrder(order);
  };

  const hideOrderDetails = () => {
    setSelectedOrder(orders[0]);
  };

  const onUpdateOrder = (order) => {
    const request = new Request();
    request.patch("http://localhost:8080/orders/" + order.id, order);
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
          <Route
            exact
            path="/"
            render={() => (
              <OrderingContainer
                selectedVenue={selectedVenue}
                orders={orders}
                selectedOrder={selectedOrder}
                showOrderDetails={showOrderDetails}
                hideOrderDetails={hideOrderDetails}
                onUpdateOrder={onUpdateOrder}
                selectedMenu={selectedMenu}
              />
            )}
          />
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
