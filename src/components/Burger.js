import React, { Component } from "react";
import "./burger.css";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  resetBurger,
} from "../redux/reducer/BurgerReducer";

class Burger extends Component {
  renderIngredients = () => {
    let item = [];
    this.props.burger.map((object, index) => {
      for (let i = 0; i < object.quantity; i++) {
        item.push(object.type);
      }
      return true;
    });
    return item.map((object, index) => {
      return <div className={object} key={index}></div>;
    });
  };
  handleAddIngredient = (ingredient) => {
    this.props.addIngredient({ ingredient });
  };
  handleRemoveIngredient = (ingredient) => {
    this.props.removeIngredient({ ingredient });
  };
  render() {
    const { burger, total, menu } = this.props;
    return (
      <div className="container">
        <h1
          style={{
            color: "green",
            fontWeight: 300,
            fontSize: "4rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          Bài tập burger
        </h1>
        <div className="row">
          <div className="col-6">
            <div className="breadTop"></div>
            {this.renderIngredients()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-6">
            <h4 style={{ textAlign: "center", color: "green" }}>
              Chọn Thức Ăn
            </h4>
            <table style={{ minHeight: "200px" }} className="w-100">
              <thead>
                <tr style={{ borderBottom: "1px solid black" }}>
                  <th>Thức Ăn</th>
                  <th></th>
                  <th>Đơn Giá</th>
                  <th>Thành Tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid black" }}>
                  <td>Salad</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleAddIngredient("salad");
                      }}
                      style={{ padding: "0 5px" }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                    <span style={{ marginTop: "15px", minHeight: "10px" }}>
                      {burger.find((item) => item.type === "salad")?.quantity}
                    </span>
                    <button
                      onClick={() => {
                        this.handleRemoveIngredient("salad");
                      }}
                      style={{ padding: "0 5px" }}
                      className="btn btn-danger"
                    >
                      -
                    </button>
                  </td>
                  <td>{menu.salad}</td>
                  <td>
                    {burger.find((item) => item.type === "salad")?.totalPrice}
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid black" }}>
                  <td>Chesse</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleAddIngredient("cheese");
                      }}
                      style={{ padding: "0 5px" }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                    <span style={{ marginTop: "15px", minHeight: "10px" }}>
                      {burger.find((item) => item.type === "cheese")?.quantity}
                    </span>
                    <button
                      onClick={() => {
                        this.handleRemoveIngredient("cheese");
                      }}
                      style={{ padding: "0 5px" }}
                      className="btn btn-danger"
                    >
                      -
                    </button>
                  </td>
                  <td>{menu.cheese}</td>
                  <td>
                    {burger.find((item) => item.type === "cheese")?.totalPrice}
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid black" }}>
                  <td>Beef</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleAddIngredient("beef");
                      }}
                      style={{ padding: "0 5px" }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                    <span style={{ marginTop: "15px", minHeight: "10px" }}>
                      {burger.find((item) => item.type === "beef")?.quantity}
                    </span>
                    <button
                      onClick={() => {
                        this.handleRemoveIngredient("beef");
                      }}
                      style={{ padding: "0 5px" }}
                      className="btn btn-danger"
                    >
                      -
                    </button>
                  </td>
                  <td>{menu.beef}</td>
                  <td>
                    {burger.find((item) => item.type === "beef")?.totalPrice}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Tổng cộng</td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.burger.burger,
    total: state.burger.total,
    menu: state.burger.menu,
  };
};
const mapDispatchToProps = {
  addIngredient,
  removeIngredient,
  resetBurger,
};
export default connect(mapStateToProps, mapDispatchToProps)(Burger);
