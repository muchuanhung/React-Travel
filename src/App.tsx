import React from "react";
import styles from "./App.module.css";
// 導入路由切換
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./views";

//Restful style router
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={() => <h1>404 Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
