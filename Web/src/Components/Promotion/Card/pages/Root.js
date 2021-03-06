import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import PagesPromotionSearch from "Components/Promotion/Search/Search";
import PagesPromotionForm from "form";

  const Root = () => {
      return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm} />
                <Route path="/edit/:id" component={PagesPromotionForm} />
                <Route path="/" component={PagesPromotionSearch} />
            </Switch>
        </Router>
      );
  };

  export default Root;