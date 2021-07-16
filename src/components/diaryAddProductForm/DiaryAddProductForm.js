import styles from "./DiaryAddProductForm.module.css";
import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import { addProduct } from "../../redux/products/products.operations";

import { getSelectedDate } from "../../redux/products/products.selectors";

import { getCurrentUser } from "../../redux/auth/auth.operations";

class DiaryAddProductForm extends Component {
  state = {
    searchWord: "",
    foundProducts: [],
    product: "",

    productId: "",
    weight: "",
    selected: true,
  };

  handleChange = async (e) => {
    if (e.target.name === "search") {
      this.setState({
        searchWord: e.target.value,
      });
      if (e.target.value) {
        const { token } = this.props;
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        // console.log(this.state.searchWord);

        const searchedProducts = await axios.get(
          `https://slimmom-backend.goit.global/product?search=${e.target.value}`
        );

        this.setState({ foundProducts: searchedProducts.data });
        // console.log(searchedProducts.data);
      }
    } else if (e.target.name === "weight") {
      this.setState({ weight: Number(e.target.value) });
      // console.log(e.target.value);
    }
  };

  handleProduct = (e) => {
    // console.log(e.currentTarget.id);

    this.setState((prevState) => ({
      ...prevState,
      foundProducts: [],
      searchWord: e.target.textContent,
      productId: e.target.id,
    }));

    // document.querySelector("input[name=search]").value = e.target.textContent;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { token } = this.props;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    const date = this.props.selectedDate;

    this.props.addProductProp(...date, this.state.productId, this.state.weight);

    console.log(this.props.selectedDate);

    // this.props.addProductProp(
    //   this.state.date,
    //   this.state.productId,
    //   this.state.weight
    // );
    this.props.getCurrentUser();

    this.setState({ searchWord: "", productId: "", weight: "" });
  };

  render() {
    // console.log(this.state.foundProducts);
    return (
      <div>
        <form className={styles.productForm} onSubmit={this.handleSubmit}>
          <input
            placeholder="Введите название продукта"
            type="text"
            name="search"
            className={styles.productInput}
            autoComplete="off"
            autoFocus
            value={this.state.searchWord}
            onChange={this.handleChange}
          />

          <ul className={styles.productResultList} id="products">
            {this.state.foundProducts.map((item) => (
              <li
                className={styles.productResultListItem}
                id={item._id}
                key={item._id}
                onClick={this.handleProduct}
              >
                {item.title.ru}
              </li>
            ))}
          </ul>

          <label className={styles.productLabel}>
            <input
              className={styles.weightInput}
              placeholder="Граммы"
              type="number"
              name={"weight"}
              value={this.state.weight}
              onChange={this.handleChange}
            />
          </label>
          <br className={styles.break} />
          <button type="submit" className={styles.formButton}>
            +
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  token: isAuthenticated(state),
  selectedDate: getSelectedDate(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
  addProductProp: (date, productId, weight) =>
    dispatch(addProduct(date, productId, weight)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiaryAddProductForm);
