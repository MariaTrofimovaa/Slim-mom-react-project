import axios from "axios";
import {
  // getCurrentUserError,
  // getCurrentUserRequest,
  // getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./auth.actions";

axios.defaults.baseURL = "https://slimmom-backend.goit.global/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post("auth/register", credentials);
    console.log(response);
    token.set(response.data.accessToken);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("/auth/login", credentials);
    console.log(response.data);

    token.set(response.data.accessToken);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async (dispatch, getState) => {
  dispatch(logoutRequest());
  try {
    // сщхраняем токен
    token.set(getState().auth.token);
    const response = await axios.post("/auth/logout");

    dispatch(logoutSuccess(response.data));
    token.unset();
    window.location.reload();
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

// export const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);

//   dispatch(getCurrentUserRequest());
//   try {
//     const response = await axios.get("/users/current");
//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error.message));
//   }
// };
