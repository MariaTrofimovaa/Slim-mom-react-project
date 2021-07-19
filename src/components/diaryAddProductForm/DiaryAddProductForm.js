import styles from "./DiaryAddProductForm.module.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import { addProduct } from "../../redux/products/products.operations";
import { getSelectedDate } from "../../redux/products/products.selectors";
import { getCurrentUser } from "../../redux/auth/auth.operations";
import useMedia from "use-media";
// import debounce from "lodash.debounce";
import { useEffect } from "react";
import IconClose from '../shared/IconClose/IconClose'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// import closeModal from "../../pages/diaryPage/DiaryPage"

// const initialState = {
//   searchWord: "",
//   foundProducts: [],
//   product: "",

//   productId: "",
//   weight: "",
//   selected: true,
// };

const DiaryAddProductForm = ({ closeModal }) => {
  // console.log(closeModal);
  const token = useSelector(isAuthenticated);
  const selectedDate = useSelector(getSelectedDate);

  const isWide = useMedia({ minWidth: "768px" });

  // const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const [fields, setFields] = useState({ searchWord: "", weight: "" });
  const [selected, setSelected] = useState(null);
  const [foundProducts, setFoundProducts] = useState([]);
  // const [error, setError] = useState(null)

  const handleChange = (event) =>
    setFields((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  // useEffect(() => {
  //   if (fields.searchWord.length === 0) {
  //     setFoundProducts([]);
  //   }
  // }, [fields.searchWord.length]);

  const searchProducts = (event) => {
    handleChange(event);
    if (event.target.value.length > 0) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .get(
          `https://slimmom-backend.goit.global/product?search=${event.target.value}`
        )
        .then(({ data }) => {
          setFoundProducts(() => {
            return event.target.value.length > 0 ? data : [];
          });
        })
        .catch((error) => {
          // console.log(error);
          setFoundProducts([]);
          setSelected(null);
        });
    } else {
      setFoundProducts([]);
      setSelected(null);
    }
  };

  // useEffect(() => {
  //   if (fields.searchWord.length > 0) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //     axios
  //       .get(
  //         `https://slimmom-backend.goit.global/product?search=${fields.searchWord}`
  //       )
  //       .then(({ data }) => {
  //         setFoundProducts(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setFoundProducts([]);
  //         setSelected(null);
  //       });

  //     // setFoundProducts(searchedProducts.data);
  //   }
  //   // console.log(' :>> ', );
  // }, [token, fields.searchWord]);

  // const handleChange = async (e) => {
  //   // console.log("e :>> ", e.target.name);

  //   if (e.target.name === "search") {
  //     setState({
  //       ...state,
  //       searchWord: e.target.value,
  //     });
  //     // console.log("e.target.value :>> ", e.target.value);
  //     if (e.target.value) {
  //       // const { token } = this.props;
  //       axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //       // console.log(this.state.searchWord);

  //       const searchedProducts = await axios.get(
  //         `https://slimmom-backend.goit.global/product?search=${e.target.value}`
  //       );
  //       // console.log("object :>> ", searchedProducts);

  //       setState({ ...state, foundProducts: searchedProducts.data });
  //       // console.log(searchedProducts.data);
  //     }
  //   } else if (e.target.name === "weight") {
  //     setState({ ...state, weight: Number(e.target.value) });
  //     // console.log(e.target.value);
  //   }
  // };

  // const handleProduct = (e) => {
  //   // console.log(this.state.foundProducts);
  //   // console.log(e.target.id);

  //   const chosenItem = state.foundProducts.find(
  //     (item) => item._id === e.target.id
  //   );
  //   // console.log(chosenItem);

  //   setState((prevState) => ({
  //     ...prevState,
  //     foundProducts: [],
  //     searchWord: e.target.textContent,
  //     productId: e.target.id,
  //     weight: chosenItem.weight,
  //   }));

  //   // document.querySelector("input[name=search]").value = e.target.textContent;
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { token } = this.props;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    const date = selectedDate;
 
    dispatch(addProduct(...date, selected?._id, fields?.weight));

   
    dispatch(getCurrentUser());

    if (!isWide) {
      closeModal();
    }
    setFields({ searchWord: "", weight: "" });
    setFoundProducts([]);
    setSelected(null);
  };

  return (
    <div>
      <form className={styles.productForm} onSubmit={handleSubmit}>
        <input
          placeholder="Введите название продукта"
          type="text"
          name="searchWord"
          className={styles.productInput}
          autoComplete="off"
          autoFocus
          value={fields.searchWord}
          onChange={searchProducts}
        />

        <ul className={styles.productResultList} id="products">
          {!!foundProducts.length &&
            !selected &&
            foundProducts.map((item) => (
              <li
                className={styles.productResultListItem}
                id={item._id}
                key={item._id}
                onClick={() => {
                  setSelected(item);
                  setFields({
                    searchWord: item.title.ru,
                    weight: item.weight,
                  });
                }}
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
            value={fields.weight}
            onChange={handleChange}
          />
        </label>
        <br className={styles.break} />
        {isWide ? (
          <button type="submit" className={styles.formButton}>
            <IconClose/>
          </button>
        ) : (
          <button
            type="submit"
            className={styles.formAddButton}
            // onClick={()=> closeModal()}
            // onClick={closeModal}
          >
            Добавить
          </button>
        )}
      </form>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   token: isAuthenticated(state),
//   selectedDate: getSelectedDate(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   getCurrentUser: () => dispatch(getCurrentUser()),
//   addProductProp: (date, productId, weight) =>
//     dispatch(addProduct(date, productId, weight)),
// });

export default DiaryAddProductForm;
