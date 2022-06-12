import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./MenuHook";
import Item from "./ItemHook";
import Comp from "./CompanyHook";
import AddItemForm from "./AddItemForm";
import { v4 as uuid } from "uuid";
import My404 from "./my404";

function App() {
  const [isLoading, setIsLoading] = useState(true);
 // const [snacks, setSnacks] = useState([]);
 // const [drinks, setDrinks] = useState([]);
  const [permits, setPermits] = useState([]);
  const [contractors, setContractors] = useState([]);

  /** we use the getSnacks /getDrinks functions to draw from api in api.js */
  useEffect(() => {
    async function getContractors() {
      let contractors = await SnackOrBoozeApi.getContractors();
      setContractors(contractors);
      setIsLoading(false);
    }
    getContractors();
  }, []);

  useEffect(() => {
    async function getPermits() {
      let permits = await SnackOrBoozeApi.getPermits();
      setPermits(permits);
      setIsLoading(false);
    }
    getPermits();
  }, []);

  /** It is the function pass down to thr form, give it unique id from uuid() */
  const add = (formData, type) => {
    if (type === "snacks") {
    //  setSnacks((snacks) => [...snacks, { ...formData, id: uuid() }]);
    } else {
    //  setDrinks((drinks) => [...drinks, { ...formData, id: uuid() }]);
    }
  };

  /** if the data not receiving it will loading */
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home items={permits} />
            </Route>

            <Route exact path="/:type/new">
              <AddItemForm add={add} />
            </Route>

            <Route exact path="/permits">
              <Menu items={permits} title="Permits" />
            </Route>

            <Route exact path="/permits/:id">
              <Item items={permits} cantFind="/permits" />
            </Route>

            <Route exact path="/contractors">
              <Comp items={contractors} title="Contractors" />
            </Route>

            <Route exact path="/contractors/:id">
              <Item items={contractors} cantFind="/contractors" />
            </Route>

            <Route>
              <My404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

*/