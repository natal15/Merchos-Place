import React from 'react'
import ReactDOM from 'react-dom/client'
import { Redirect, Switch } from "wouter";
import Styled from "./styles";

import Route from "./components/Route";
import Provider from "./context/Provider";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Map from "./pages/Map";

const Main = () => {
  return (
    <Provider>
      <Styled.Wrapper>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" guarded={true} component={Home} />
          <Route path="/map/:dogname" guarded={true} component={Map} />
          <Redirect to="/login" />
        </Switch>
      </Styled.Wrapper>
    </Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
