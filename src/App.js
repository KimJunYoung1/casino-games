import React from "react";
import { Main } from "./pages/Main";
import { View } from "./pages/View";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
        <header />
            Hello react router
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/view" component={View}/>
              </Switch>
            </BrowserRouter>            
        <footer />
    </div>
  );
}

export default App;
