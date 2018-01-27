import React, { Component } from 'react';
import './App.css';
import AddFood from "./components/AddFood/AddFood";
import TotalOrder from "./components/TotalOrder/TotalOrder";


class App extends Component {
    state = {
        foods: [
            {type: "Hamburger", amount: 0, id: 1},
            {type: "Cheeseburger", amount: 0, id: 2},
            {type: "Fries", amount: 0, id: 3},
            {type: "Coffee", amount: 0, id: 4},
            {type: "Tea", amount: 0, id: 5},
            {type: "Cola", amount: 0, id: 6}
            ],
    };

    prices = [80, 90, 35, 70, 35, 40];

    getFoods = () => {
      const foodCheck = {...this.state.foods[amount]};
      let count = [...this.state.foods];
      count ++;
      this.setState({foodCheck: count});
    };

    addPrice = () => {
      const digit = {...this.state.prices};
      let getPrice = [...this.foods.type];
      this.setState({digit})
    };

  render() {
    return (
      <div className="App">
        <TotalOrder />
        <AddFood/>
      </div>
    );
  }
}

export default App;
