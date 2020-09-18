import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: [
        {
          product: "Drinks",
          productDescription: "Alvaro",
          amount: "5",
        },
      ],
    };
  }

  addNewUser = (newproduct) => {
    this.setState({
      expense: [...this.state.expense, newproduct],
    });
  };

  render() {
    const expense = this.state.expense.map((product, index) => {
      if (
        product.amount !== "" &&
        product.amount > 0 &&
        product.product !== ""
      ) {
        return (
          <div className="output" key={index}>
            <div className="expense-content">
              <div>
                <h4 className="product">Product: {product.product}</h4>
              </div>

              <div className="product-details">
                <small className="time">{product.time}</small>
                <small className="date">{product.date}</small>
              </div>
            </div>
            <h5>
              {" "}
              Price: <span>GH&#8373;</span> {product.amount}
            </h5>

            <p className="discription">
              Description: {product.productDescription}
            </p>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <h1 className="App-header">EXPENSES</h1>
        <div className="container">
          <Form addUser={this.addNewUser} />

          <div className="output-container">
            <div className="output-expense">{expense}</div>
          </div>
        </div>
      </div>
    );
  }
}
