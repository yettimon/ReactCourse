import React, { Component } from "react";

import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import { Switch, Route, Redirect } from "react-router-dom";

const HomePage = ({ dishes, promotions, leaders }) => {
  return (
    <Home
      dish={dishes.filter((dish) => dish.featured)[0]}
      promotion={promotions.filter((promo) => promo.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]}
    />
  );
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }
  render() {
    const { leaders, promotions, dishes, comments } = this.state;

    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={() => (
              <Home
                dish={dishes.find(({ featured }) => featured)}
                promotion={promotions.find(({ featured }) => featured)}
                leader={leaders.find(({ featured }) => featured)}
              />
            )}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route
            path="/menu/:dishId"
            component={({
              match: {
                params: { dishId },
              },
            }) => (
              <DishDetail
                dish={dishes.find(({ id }) => id == dishId)}
                comments={comments.filter(
                  ({ dishId: commentDishId }) => commentDishId == dishId
                )}
              />
            )}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
