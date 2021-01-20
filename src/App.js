import React from 'react';
import { Main } from './pages/Main';
import { View } from './pages/View';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <header />
          Hello react router
          <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route path="/view" component={View}/>
          </BrowserRouter>
      <footer />
    </div>
  );
}

export default App;
