import styles from "./DiaryAddProductForm.module.css";
import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth.selectors";

// const DiaryAddProductForm = () => {
//   return (
//     <form className={styles.productForm}>
//       <label className={styles.productLabel}>
//         <input
//           placeholder="Введите название продукта"
//           type="name"
//           name="name"
//           className={styles.productInput}
//         />
//       </label>

//       <label className={styles.productLabel}>
//         <input
//           className={styles.weightInput}
//           placeholder="Граммы"
//           type="grams"
//           name="grams"
//         />
//       </label>
//       <button type="submit" className={styles.formButton}>
//         +
//       </button>
//     </form>
//   );
// };

// export default DiaryAddProductForm;

class DiaryAddProductForm extends Component {
  state = {
    searchWord: "",
    foundProducts: [],
  };

  handleChange = (event) => {
    this.setState({ searchWord: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = this.props;

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log(this.state.searchWord);
    const searchedProducts = await axios.get(
      `https://slimmom-backend.goit.global/product&search=${this.state.searchWord}`
    );

    this.setState({ foundProducts: searchedProducts.data.results });
  };

  render() {
    return (
      <div>
        <form className={styles.productForm} onSubmit={this.handleSubmit}>
          <input
            placeholder="Введите название продукта"
            type="name"
            name="name"
            className={styles.productInput}
            autoComplete="off"
            autoFocus
            value={this.state.searchWord}
            onChange={this.handleChange}
          />

          <label className={styles.productLabel}>
            <input
              className={styles.weightInput}
              placeholder="Граммы"
              type="grams"
              name="grams"
            />
          </label>
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
});

export default connect(mapStateToProps)(DiaryAddProductForm);
